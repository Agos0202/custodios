import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import foto1 from "../img/foto1.jpg";
import Foto2 from "../img/foto2.jpg";
import Foto3 from "../img/foto3.jpg";
import Foto4 from "../img/foto4.jpg";
import Foto6 from "../img/foto6.jpg";
import Foto7 from "../img/foto7.jpg";
import Foto8 from "../img/foto8.jpg";
import Foto9 from "../img/foto9.jpg";
import Foto10 from "../img/foto10.jpg";
import Play_Pausa from "../img/pausa.png";
import Onda_Sonido from "../img/onda-de-sonido.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ScreenTwo() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    direccion: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const enviarWhatsApp = () => {
    const phoneNumber = "5493815975166"; // CAMBIAR NÚMERO

    const mensaje = `Hola! Quiero inscribirme como Custodio:%0A
Nombre: ${formData.nombre}%0A
Apellido: ${formData.apellido}%0A
Edad: ${formData.edad}%0A
Dirección: ${formData.direccion}`;

    const url = `https://wa.me/${phoneNumber}?text=${mensaje}`;
    window.open(url, "_blank");
  };

  useEffect(() => {
    const eventDate = new Date("December 08, 2025 00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
  };

return (
    <div>
    {/* Imagen principal */}
            <div className="w-100%">
                <img
                    src={foto1}
                    alt="foto1"
                    className="img-fluid w-100"
                    style={{
                    maxHeight: "100%",
                    height: "100%",
                    objectFit: "contain",
                    borderBottom: "5px solid #d4af37",
                    backgroundColor: "#ffffff",
                    }}
                />
            </div>

            {/* Controles de audio y animación de ondas */} 
                    <div style={{ marginTop: "10px", display: "flex", justifyContent: "center" }}>
                        <style>{`
                            .audio-controls { display:flex; justify-content:center; align-items:center; gap:12px; padding:6px; }
                            .play-btn { width:50px; height:50px; cursor:pointer; border:0; background:transparent; padding:0; }
                            .play-btn.playing { transform: scale(1.06); filter: drop-shadow(0 6px 10px rgba(0,0,0,0.12)); }
                            .wave { width:200px; height:50px; transition: transform .2s ease; }
                            .wave.playing { animation: waveAnim 600ms infinite ease-in-out; }
                            @keyframes waveAnim {
                            0%   { transform: scaleY(0.92) translateY(0px); }
                            50%  { transform: scaleY(1.12) translateY(-6px); }
                            100% { transform: scaleY(0.92) translateY(0px); }
                            }
                        `}</style>

                        <div className="audio-controls">
                            <button
                            type="button"
                            aria-label="Play / Pause música"
                            className="play-btn"
                            id="playButton"
                            onClick={() => {
                        const audio = document.getElementById("musica");
                        const onda = document.getElementById("ondaSound");
                        const btn = document.getElementById("playButton");
                        if (!audio) return;
                        if (audio.paused) {
                            audio.play().then(() => {
                            if (onda) onda.classList.add("playing");
                            if (btn) btn.classList.add("playing");
                            }).catch(() => {
                            // Autoplay puede bloquearse; en ese caso la reproducción requerirá interacción del usuario (este click ya es interacción)
                            });
                        } else {
                            audio.pause();
                            if (onda) onda.classList.remove("playing");
                            if (btn) btn.classList.remove("playing");
                        }
                    }}
                    >
                    <img
                        id="playIcon"
                        src={Play_Pausa}
                        alt="Play/Pausa"
                        style={{ width: "50px", height: "50px", display: "block" }}
                    />
                    </button>


                    <img
                    id="ondaSound"
                    src={Onda_Sonido}
                    alt="Onda de Sonido"
                    className="wave"
                    style={{ width: "200px", height: "50px" }}
                    />

                   
                </div> 
               

                {/* audio en public/musica.mp3 - se reproduce en bucle */}
                <audio id="musica" src="/musica.mp3" loop preload="none" />
            </div>
             <div className="">Haz clic para escuchar una linda canción</div>

            <div className="container py-5">
                {/* Cuenta regresiva */}
            <div className="text-center mb-5">
                  <h4 className="fw-semibold mb-4" style={{ color: "#d4af37" }}>
                    8 de Diciembre
                </h4>
                <h3 className="fw-semibold mb-0" style={{ color: "#d4af37" }}>
                    Día de la Virgen del Valle
                </h3>
              
                <h4 className="fw-semibold mb-4" style={{ color: "#d4af37" }}>
                    Faltan tan solo...
                </h4>

                <div
                    className="d-flex justify-content-center gap-3 flex-nowrap"
                    style={{
                        overflowX: "auto",
                        WebkitOverflowScrolling: "touch",
                        paddingBottom: "8px",
                    }}
                >
                    <div
                        className="p-3 rounded shadow-sm text-center"
                        style={{
                            background: "#e9f7ff",
                            border: "2px solid #d4af37",
                            width: "120px",
                        }}
                    >
                        <h2 className="fw-bold" style={{ color: "#d4af37" }}>
                            {timeLeft.days}
                        </h2>
                        <small className="text-secondary">Días</small>
                    </div>

                    <div
                        className="p-3 rounded shadow-sm text-center"
                        style={{
                            background: "#e9f7ff",
                            border: "2px solid #d4af37",
                            width: "120px",
                        }}
                    >
                        <h2 className="fw-bold" style={{ color: "#d4af37" }}>
                            {timeLeft.hours}
                        </h2>
                        <small className="text-secondary">Horas</small>
                    </div>

                    <div
                        className="p-3 rounded shadow-sm text-center"
                        style={{
                            background: "#e9f7ff",
                            border: "2px solid #d4af37",
                            width: "120px",
                        }}
                    >
                        <h2 className="fw-bold" style={{ color: "#d4af37" }}>
                            {timeLeft.minutes}
                        </h2>
                        <small className="text-secondary">Minutos</small>
                    </div>

                    <div
                        className="p-3 rounded shadow-sm text-center"
                        style={{
                            background: "#e9f7ff",
                            border: "2px solid #d4af37",
                            width: "120px",
                        }}
                    >
                        <h2 className="fw-bold" style={{ color: "#d4af37" }}>
                            {timeLeft.seconds}
                        </h2>
                        <small className="text-secondary">Segundos</small>
                    </div>
                </div>
            </div>

            {/* Carrusel */}
            <div
                    className="card shadow p-3 mb-5 border-2"
                    style={{ borderColor: "#d4af37" }}
            >
                    <Slider
                            {...settings}
                            autoplay={true}
                            autoplaySpeed={2500}
                            pauseOnHover={false}
                            pauseOnFocus={false}
                            draggable={true}
                            swipe={true}
                    >
                            <div>
                                    <img
                                            src={Foto2}
                                            className="img-fluid rounded border"
                                            alt="foto2"
                                            style={{ borderColor: "#a7d8ff", borderWidth: "3px" }}
                                    />
                            </div>

                            <div>
                                    <img
                                            src={Foto3}
                                            className="img-fluid rounded border"
                                            alt="foto3"
                                            style={{ borderColor: "#a7d8ff", borderWidth: "3px" }}
                                    />
                            </div>

                            <div>
                                    <img
                                            src={Foto4}
                                            className="img-fluid rounded border"
                                            alt="foto4"
                                            style={{ borderColor: "#a7d8ff", borderWidth: "3px" }}
                                    />
                            </div>
                        
                            <div>
                                    <img
                                            src={Foto6}
                                            className="img-fluid rounded border"
                                            alt="foto6"
                                            style={{ borderColor: "#a7d8ff", borderWidth: "3px" }}
                                    />
                            </div>
                            <div>
                                    <img
                                            src={Foto7}
                                            className="img-fluid rounded border"
                                            alt="foto7"
                                            style={{ borderColor: "#a7d8ff", borderWidth: "3px" }}
                                    />
                            </div>
                            <div>
                                    <img
                                            src={Foto8}
                                            className="img-fluid rounded border"
                                            alt="foto8"
                                            style={{ borderColor: "#a7d8ff", borderWidth: "3px" }}
                                    />
                            </div>
                            <div>
                                    <img
                                            src={Foto9}
                                            className="img-fluid rounded border"
                                            alt="foto9"
                                            style={{ borderColor: "#a7d8ff", borderWidth: "3px" }}
                                    />
                            </div>
                            <div>
                                    <img
                                            src={Foto10}
                                            className="img-fluid rounded border"
                                            alt="foto10"
                                            style={{ borderColor: "#a7d8ff", borderWidth: "3px" }}
                                    />
                            </div>
                            
                    </Slider>
            </div>
            <p className="text-center fs-5 mb-4" style={{ color: "#333" }}>
               Te invitamos a tener el honor de ser Custodio de las Sagradas Imágenes de San José, el Sagrado Corazón de Jesús y de Nuestra Madre del Valle, en las Solemnes Fiestas Patronales 2025 en honor a la Pura y limpia Concepción del Valle, Patrona de la Comunidad de La Florida.
            </p>
             <p className="text-center fs-5 mb-4" style={{ color: "#333" }}>
               Al inscribirte, pasarás a formar parte de una tradición centenaria de fe y devoción.
               Inscríbete ahora y comparte la noble misión de custodiar a quienes veneramos.
            </p>
              <p className="text-center fs-5 mb-4" style={{ color: "#333" }}>
               Pura y limpia concepción del Valle, Ruega por nosotros.
            </p>

            {/* Formulario */}
            <div
                className="card shadow p-4 mb-5 border-2"
                style={{ borderColor: "#d4af37" }}
            >
                <h3
                    className="text-center mb-4 fw-semibold"
                    style={{ color: "#d4af37" }}
                >
                    Inscripción para ser Custodio
                </h3>

                <form>
                    <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input
                            type="text"
                            name="nombre"
                            onChange={handleChange}
                            className="form-control border"
                            style={{ borderColor: "#a7d8ff" }}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Apellido</label>
                        <input
                            type="text"
                            name="apellido"
                            onChange={handleChange}
                            className="form-control border"
                            style={{ borderColor: "#a7d8ff" }}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Edad</label>
                        <input
                            type="number"
                            name="edad"
                            onChange={handleChange}
                            className="form-control border"
                            style={{ borderColor: "#a7d8ff" }}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Dirección</label>
                        <input
                            type="text"
                            name="direccion"
                            onChange={handleChange}
                            className="form-control border"
                            style={{ borderColor: "#a7d8ff" }}
                        />
                    </div>

                    <button
                        type="button"
                        className="btn w-100 mt-3 fw-semibold text-white"
                        style={{ background: "#d4af37" }}
                        onClick={enviarWhatsApp}
                    >
                        Enviar inscripción
                    </button>
                </form>
            </div>
        </div>
    <footer className="text-center py-4" style={{ backgroundColor: "#d4af37", color: "#fff" }}>
        <div className="container">
            <h5 className="mb-3">Parroquia Nuestra Señora del Valle</h5>
            <p className="mb-3">Te esperamos en las fiestas patronales.</p>
            <div className="d-flex justify-content-center">
                <iframe
                    title="Parroquia Nuestra Señora del Valle - Ubicación"
                    src="https://www.google.com/maps/embed?pb=!3m2!1ses!2sar!4v1763513268431!5m2!1ses!2sar!6m8!1m7!1sLWGuawNiCqIiLcP9i-8eVw!2m2!1d-26.8169525798436!2d-65.08895053079691!3f187.82917082876594!4f-1.5617278357377842!5f0.7820865974627469"
                    style={{ border: 0, width: "100%", maxWidth: 900, height: 450 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
    </footer>
    </div>
);
}

export default ScreenTwo;
