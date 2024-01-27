import { useEffect, useState } from "react";
import KitapCard from "../components/KitapCard";
import Kategoriler from "../components/Kategoriler";
import Toolbar from "../components/Toolbar";
import { PropagateLoader } from "react-spinners";

const Home = () => {
  const [kitaplar, setKitaplar] = useState(null);
  const [loading, setLoading] = useState(true);
  const kategoriler = ["Kategori 1", "Kategori 2", "Kategori 3"];

  useEffect(() => {
    const fetchKitaplar = async () => {
      try {
        const response = await fetch("/api/kitaplar");
        if (response.ok) {
          const json = await response.json();
          setKitaplar(json);
        } else {
          console.error("API'den kitaplar alınamadı.");
        }
      } catch (error) {
        console.error("Hata oluştu:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchKitaplar();
  }, []);

  return (
    <>
      <div className="container mt-4" style={{ backgroundColor: "#ECECEC" }}>
        <div className="row">
          <Kategoriler kategoriler={kategoriler} />
          <div className="col-9 row row-cols-1 row-cols-md-4 g-4">
            {loading ? (
              <div className="col text-center">
                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "200px" }}>
                  <PropagateLoader color="#36d7b7" />
                </div>
              </div>
            ) : (
              kitaplar &&
              kitaplar.map((kitap) => (
                <div key={kitap._id} className="col">
                  <KitapCard kitap={kitap} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
