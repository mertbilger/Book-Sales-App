import { useEffect } from "react";
import AdminKitapCard from "../components/AdminKitapCard";
import Kategoriler from "../components/Kategoriler";
import { useKitapContext } from "../hooks/useKitapContext"
import KitapForm from "../components/KitapForm"

const Admin = () => {
  const kategoriler = ["Kategori 1", "Kategori 2", "Kategori 3"];

  const { kitaplar, dispatch } = useKitapContext()

  useEffect(() => {
    const fetchNotlar = async () => {
      const response = await fetch("api/kitaplar")

      const json = await response.json()

      if (response.ok) {
        dispatch({ type: "KITAP_DOLDUR", payload: json })
      }
    }
    fetchNotlar()
  }, [])


  return (
    <>
      <div className="container mt-4">
        <KitapForm />
        <div className="row mt-4">
          <Kategoriler kategoriler={kategoriler} />
          <div className="col-9 row row-cols-1 row-cols-md-4 g-4 mt-5">
            {kitaplar &&
              kitaplar.map((kitap) => (
                <div key={kitap._id} className="col">
                  <AdminKitapCard kitap={kitap} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>

  );
};

export default Admin;
