import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';

const dayContents = {
    1: { type: 'text', title: "Día 1", text: "Más allá de lo hermosa que eres por fuera,\nme cautiva tu alma, mi princesa verdadera.\nTu empatía inmensa y esa forma pura de amar,\nson el tesoro que nadie más puede mirar.\nEs tu luz interna la que me guía,\ny por la que te elijo, mi amor, día tras día. 🤍" },
    2: { type: 'music', title: "Día 2", text: "Una playlist para ti. La energía caótica de Kanye y el ritmo de Ariana Grande, justo como te gusta.", link: "ENLACE_A_TU_PLAYLIST_AQUI" },
    3: { type: 'coupon', title: "Día 3", text: "🎟️ VALE VIRTUAL: Noche de Maratón de Doramas a distancia. Tú eliges cuál vemos, yo pido el delivery a tu casa." },
    4: { type: 'image', title: "Día 4", text: "Siempre recuerdo el día de nuestra salida cuando la misión era buscar botas, y terminamos comprando la carterita y los aretes de mariposas y corazones en Todo Moda." },
    5: { type: 'text', title: "Día 5", text: "Trivia: ¿Sabes qué fue lo primero que pensé cuando me llamaste 'Mel' por primera vez? Que quería ser tu lugar seguro siempre." },
    6: { type: 'movie', title: "Día 6", text: "Recomendación de finde: Toca ver una peli de acción de esas que te encantan para desconectar un rato." },
    7: { type: 'text', title: "Día 7", text: "¡Feliz primera semana de tu mes! Solo pasaba por aquí para recordarte lo mucho que me encantas y lo fuerte que eres." },
    8: { type: 'text', title: "Día 8: Día de la Mujer", text: "Feliz día a la mujer más fuerte, inteligente y hermosa que conozco. Admiro profundamente tu capacidad para superar cualquier tormenta." },
    9: { type: 'coupon', title: "Día 9", text: "🎟️ VALE VIRTUAL: Un concierto privado exclusivo. Tú eliges la canción, yo la toco en mi guitarra." },
    10: { type: 'text', title: "Día 10", text: "Y yo que pensaba que la mente de Kanye era el único caos brillante, hasta que me enamoré de la tuya." },
    11: { type: 'list', title: "Día 11", text: "11 razones por las que me encantas:", list: ["Las galaxias en tus ojos", "Tu pasión por los doramas", "Tu fuerza inquebrantable", "Tu vibra poderosa", "Que Nayeli sea mi 'cuñada' favorita", "Tu inteligencia", "Tu sentido del humor", "Cómo te esfuerzas por lo que quieres", "Tu sensibilidad", "Que me llames el mejor novio", "Que existes"] },
    12: { type: 'text', title: "Día 12", text: "Espero que este mes te esté gustando tanto como tú me gustas a mí." },
    13: { type: 'text', title: "Día 13", text: "Adivina la canción: 'God is a woman, pero tú eres mi princesa Ari'." },
    14: { type: 'coupon', title: "Día 14", text: "🎟️ VALE VIRTUAL: Tu postre favorito pago por mí hoy (válido para envío directo a donde estés)." },
    15: { type: 'text', title: "Día 15", text: "Estaba mirando el código de este proyecto y me di cuenta de lo suertudo que soy de tener una musa como tú." },
    16: { type: 'text', title: "Día 16", text: "Un pequeño poema: Eres más hermosa y resistente que un lirio, y pase lo que pase en el mundo de afuera, sigo eligiéndote." },
    17: { type: 'coupon', title: "Día 17", text: "🎟️ VALE VIRTUAL: Hoy tienes la razón en absolutamente todo por 24 horas. (Úsalo con sabiduría)." },
    18: { type: 'list', title: "Día 18", text: "Mis momentos favoritos contigo:", list: ["El día que te regalé el collar de los 4 corazones", "Nuestra aventura en Todo Moda", "Las madrugadas donde somos refugio el uno del otro", "Cuando me escribiste esa carta hermosa", "Hoy (porque siempre es buen día)"] },
    19: { type: 'game', title: "Día 19", text: "¡Faltan 7 días! Prepárate mentalmente para el día central." },
    20: { type: 'movie', title: "Día 20", text: "Recomendación: ¿Has visto 'Vagabond'? Acción pura con drama. Perfecto para nosotros." },
    21: { type: 'coupon', title: "Día 21", text: "🎟️ VALE VIRTUAL: Apoyo técnico incondicional VIP 24/7. Válido para laptops, celulares o simplemente para escucharte." },
    22: { type: 'text', title: "Día 22", text: "Ya casi llega la fecha. Estoy contando las horas." },
    23: { type: 'text', title: "Día 23", text: "Si nuestra vida fuera un dorama, definitivamente sería el que tendría el mejor final." },
    24: { type: 'music', title: "Día 24", text: "Playlist: Para escuchar cuando necesites ánimos o modo 'Badass' activado.", link: "ENLACE_A_TU_PLAYLIST_AQUI" },
    25: { type: 'text', title: "Día 25", text: "La víspera. Esta noche no duermo de la emoción." },
    26: { type: 'birthday', title: "¡FELIZ CUMPLEAÑOS 19, MI AMOR!", text: "Hoy es el día más especial de marzo. Eres mi lugar tranquilo. Revisa tus mensajes para la siguiente sorpresa. Te amo. 🎂👑✨" },
    27: { type: 'coupon', title: "Día 27", text: "🎟️ VALE VIRTUAL: Cura de resaca cumpleañera (Desayuno poderoso invitado)." },
    28: { type: 'text', title: "Día 28", text: "Aún estamos celebrando tu vida." },
    29: { type: 'text', title: "Día 29", text: "Aún no supero la suerte que tengo de celebrar este 19 contigo." },
    30: { type: 'list', title: "Día 30", text: "Promesa: Cosas que quiero cumplir contigo este año.", list: ["Ver más doramas a la distancia", "Regalarte más lirios", "Ser tu mayor apoyo siempre", "Hacerte sonreír mínimo una vez al día", "Seguir construyendo nuestra base firme"] },
    31: { type: 'text', title: "Día 31", text: "Marzo se acaba, pero mis ganas de celebrar tu vida duran todo el año. Fin del calendario... ¡O inicio de algo mejor! 🤍" },
};

const DayModal = ({ day, onClose }) => {
    const content = dayContents[day] || { title: `Día ${day}`, text: "Sorpresa preparándose..." };
    const modalRef = useRef(null);
    const [isSharing, setIsSharing] = useState(false);

    const handleShare = async () => {
        if (!modalRef.current) return;
        setIsSharing(true);
        try {
            // Log that she opened/shared it
            console.log(`Compartiendo el regalo del Día ${day}`);

            const canvas = await html2canvas(modalRef.current, {
                backgroundColor: '#1c1c1e', // Dark background for the capture
                scale: 2,
                useCORS: true
            });
            const dataUrl = canvas.toDataURL('image/png');
            const blob = await (await fetch(dataUrl)).blob();
            const file = new File([blob], `Regalo_Dia_${day}.png`, { type: 'image/png' });

            if (navigator.share && navigator.canShare({ files: [file] })) {
                await navigator.share({
                    title: `Mi regalo del Día ${day}`,
                    text: 'Mira lo que me regalaron hoy ❤️✨',
                    files: [file]
                });
            } else {
                // Fallback for laptops/unsupported browsers
                const link = document.createElement('a');
                link.download = `Regalo_Dia_${day}.png`;
                link.href = dataUrl;
                link.click();
            }
        } catch (err) {
            console.error('Error sharing:', err);
            alert("Hubo un problema al intentar compartir la imagen. Intenta tomar una captura de pantalla manualmente.");
        } finally {
            setIsSharing(false);
        }
    };

    // Tracking logic just by opening it
    React.useEffect(() => {
        const sendLog = async () => {
            try {
                const date = new Date();
                // Opciones de formato de hora para Perú (o ajusta según su país)
                const timeString = date.toLocaleString('es-PE', { timeZone: 'America/Lima' });

                let locationData = 'Ubicación desconocida/oculta';
                try {
                    // Obtiene información de la IP (Ciudad, Región, IP) gratuitamente y sin llaves
                    const res = await fetch('https://ipapi.co/json/');
                    const data = await res.json();
                    if (!data.error) {
                        locationData = `${data.city}, ${data.region} (IP: ${data.ip})`;
                    }
                } catch (e) {
                    console.log("No se pudo obtener la IP por bloqueo de navegador");
                }

                const payload = {
                    content: `🎉 **¡Notificación del Calendario HB_Amor!**\n🎁 **Acción:** Ariana acaba de abrir el **Día ${day}**\n🕒 **Fecha y Hora:** ${timeString}\n📍 **Desde:** ${locationData}`
                };

                await fetch('https://discord.com/api/webhooks/1477583904255905863/Uydkp2JQAakVvCP-Kliv_UulVNuXmJGvy6YKNqXkwD2LHQ1lEkos0kcU3Tz6fRtwXb2u', {
                    method: 'POST',
                    body: JSON.stringify(payload),
                    headers: { 'Content-Type': 'application/json' }
                });
            } catch (err) {
                console.error(err);
            }
        };
        sendLog();
        console.log(`[TRACKING] El Modal del Día ${day} fue abierto y registrado.`);
    }, [day]);

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000,
            padding: '1rem'
        }} onClick={onClose}>

            <div ref={modalRef} className="glass-panel" style={{
                padding: '2rem', maxWidth: '500px', width: '100%', maxHeight: '80vh', overflowY: 'auto',
                textAlign: 'center', position: 'relative'
            }} onClick={(e) => e.stopPropagation()}>

                {!isSharing && (
                    <button
                        onClick={onClose}
                        style={{
                            position: 'absolute', top: '10px', right: '10px',
                            background: 'rgba(255,255,255,0.1)', border: 'none', padding: '8px 12px',
                            fontSize: '1rem', zIndex: 10
                        }}
                    >
                        ✕
                    </button>
                )}

                <h2 style={{ color: 'var(--accent-color)', marginBottom: '1.5rem', fontSize: '2rem' }}>
                    {day === 26 ? '👑 ' : ''}{content.title}
                </h2>

                <p style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                    {content.text}
                </p>

                {content.type === 'list' && content.list && (
                    <ul style={{ textAlign: 'left', display: 'inline-block', maxWidth: '300px', margin: '0 auto', fontSize: '1.1rem' }}>
                        {content.list.map((item, idx) => (
                            <li key={idx} style={{ marginBottom: '0.8rem' }}>{item}</li>
                        ))}
                    </ul>
                )}

                {content.type === 'music' && content.link && (
                    <a href={content.link} target="_blank" rel="noopener noreferrer" style={{
                        display: 'inline-block', padding: '10px 20px', background: '#1DB954', color: 'white',
                        borderRadius: '99px', textDecoration: 'none', fontWeight: 'bold', marginTop: '1rem'
                    }}>
                        🎵 Escuchar en Spotify
                    </a>
                )}

                {content.type === 'coupon' && (
                    <div style={{
                        marginTop: '1.5rem', padding: '15px', border: '2px dashed var(--accent-color)',
                        borderRadius: '12px', display: 'inline-block', background: 'rgba(209, 179, 255, 0.1)'
                    }}>
                        🌟 <b>Cupón Válido</b>
                    </div>
                )}

                <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
                    {!isSharing ? (
                        <button
                            onClick={handleShare}
                            style={{
                                display: 'flex', alignItems: 'center', gap: '8px',
                                background: 'transparent', border: '1px solid var(--accent-color)',
                                padding: '8px 16px', borderRadius: '20px', color: 'var(--accent-color)',
                                cursor: 'pointer', transition: 'all 0.3s'
                            }}
                        >
                            <span style={{ fontSize: '1.2rem' }}>📸</span> Compartir Recuerdo
                        </button>
                    ) : (
                        <div style={{ color: 'var(--accent-color)', fontSize: '0.9rem' }}>
                            Generando imagen... ✨
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default DayModal;
