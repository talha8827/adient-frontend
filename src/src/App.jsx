import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Yükleniyor...");

  useEffect(() => {
    setMessage("Adient Sevkiyat Sistemi Frontend Aktif ✔");
  }, []);

  return (
    <div style={{ 
      padding: "40px",
      fontFamily: "Arial",
      fontSize: "24px",
      color: "white",
      background: "#003b46",
      height: "100vh"
    }}>
      <h1>ADİENT SEVKİYAT</h1>
      <p>{message}</p>

      <h2>Backend Bağlantı Testi:</h2>
      <button 
        style={{ padding: "12px 20px", fontSize: "18px" }}
        onClick={async () => {
          try {
            const res = await fetch("https://adient-backend.vercel.app/api");
            const data = await res.json();
            alert("Backend çalışıyor: " + JSON.stringify(data));
          } catch (err) {
            alert("Backend'e bağlanılamadı!");
          }
        }}
      >
        Test Et
      </button>
    </div>
  );
}

export default App;
