import { useState } from "react";
import {useKitapContext} from "../hooks/useKitapContext"

const KitapForm = () => {
  const [baslik, setBaslik] = useState("");
  const [yazar, setYazar] = useState("");
  const [aciklama, setAciklama] = useState("");
  const [fotoUrl, setfotoUrl] = useState("");
  const [hata, setHata] = useState(null);

  const {dispatch}=useKitapContext()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const kitap = { baslik, yazar, aciklama, fotoUrl };

    const response = await fetch("/api/kitaplar", {
      method: "POST",
      body: JSON.stringify(kitap),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setHata(json.hata);
    }

    if (response.ok) {
      setHata(null);
      setBaslik("");
      setAciklama("");
      setYazar("");
      setfotoUrl("");
      dispatch({type:"KITAP_OLUSTUR",payload:json})

    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 text-center">
      <h3 className="mb-5">
        <strong>Yeni Kitap Ekle</strong>
      </h3>
      <div className="mb-3">
        <div className="mb-3">
          <label className="form-label">
            <strong>Kitap Adı</strong>
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setBaslik(e.target.value)}
            value={baslik}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            <strong>Kitap Yazarı</strong>
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setYazar(e.target.value)}
            value={yazar}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            <strong>Kitap Açıklaması</strong>
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setAciklama(e.target.value)}
            value={aciklama}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            <strong>Kitap Resmi URL</strong>
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setfotoUrl(e.target.value)}
            value={fotoUrl}
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Ekle
      </button>
      {hata && <div className="alert alert-dismissible alert-danger mt-5">
        <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
        <strong>{hata}</strong>
      </div>}
    </form>
  );
};

export default KitapForm;
