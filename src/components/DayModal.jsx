import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';

const dayContents = {
    1: { type: 'text', title: "Día 1", text: "Más allá de lo hermosa que eres por fuera,\nme cautiva tu alma, mi princesa verdadera.\nTu empatía inmensa y esa forma pura de amar,\nson el tesoro que nadie más puede mirar.\nEs tu luz interna la que me guía,\ny por la que te elijo, mi amor, día tras día. 🤍" },
    2: {
        type: 'image',
        title: "Día 2",
        text: "A veces no logras ver lo increíblemente hermosa que eres, pero yo sí lo veo todo el tiempo. Como dice la canción: 'You don't know you're beautiful, that's what makes you beautiful'. Grábatelo en la cabeza, mi amor: eres preciosa por dentro y por fuera, y no te voy a dejar por nada ni por nadie. 🤍",
        src: '/jutnosxsiempre.png'
    },
    3: { type: 'coupon', title: "Día 3", text: "🎟️ VALE VIRTUAL: Un favor sin preguntas. Tú pides lo que necesites que haga por ti hoy (una tarea, un mandado, o ayudarte con algo) y yo lo cumplo sin chistar." },
    4: { type: 'text', title: "Día 4", text: "Eres como un lirio en medio de la ciudad: delicada a la vista, pero fuerte y resistente ante cualquier tormenta. Eres mi flor favorita." },
    5: { type: 'coupon', title: "Día 5", text: "🎟️ VALE VIRTUAL: Patrocinio oficial para ese set de uñas que tanto te gusta. Tu novio invita, tú solo elige el diseño más lindo para esas manitos." },
    6: { type: 'image', title: "Día 6", text: "Siempre que miro el cielo de noche, me acuerdo de las galaxias que veo en tus ojos." },
    7: { type: 'list', title: "Día 7", text: "Cosas que hacen que mi mundo gire mejor:", list: ["Escucharte cantar tus canciones en inglés", "Cuando te emocionas con un buen Dorama", "Esa sonrisa tuya que ilumina todo", "Nuestras bromas con mi 'cuñada' Nayeli", "Saber que eres mi novia"] },
    8: { type: 'text', title: "Día 8: Día de la Mujer", text: "Feliz día a la mujer más fuerte y valiente. Admiro cómo te levantas de cada caída. Eres mi mayor inspiración, princesa." },
    9: { type: 'coupon', title: "Día 9", text: "🎟️ VALE VIRTUAL: Noche de cine a distancia. Tú eliges la película o el Dorama, yo me encargo de que te llegue el delivery de tus snacks favoritos a la puerta." },
    10: { type: 'text', title: "Día 10", text: "Un pequeño poema: \nNo necesito buscar estrellas fugaces,\nni pedir deseos al viento que pasa,\nsi el universo entero me dio la paz,\ncuando encontré en tu alma mi casa." },
    11: { type: 'coupon', title: "Día 11", text: "🎟️ VALE VIRTUAL: 24 horas de la razón absoluta. Hoy tú mandas, tú decides y yo digo 'Sí, mi amor, tienes toda la razón'." },
    12: { type: 'text', title: "Día 12", text: "Espero que cada día de este mes te esté recordando lo inmensamente valiosa que eres para mí." },
    13: { type: 'music', title: "Día 13", text: "Canción del día: Hoy toca subir el volumen y poner tu canción favorita de Bad Bunny. ¡A recargar energías que ya falta menos para tu cumple!", link: "ENLACE_A_CANCION_AQUI" },
    14: { type: 'coupon', title: "Día 14", text: "🎟️ VALE VIRTUAL: Soporte emocional VIP. Un comodín para cuando te sientas estresada. Lo canjeas y yo dejo todo para escucharte, sin juzgar, solo para ser tu refugio." },
    15: { type: 'text', title: "Día 15", text: "Estaba revisando el código de mi vida y me di cuenta de que tú eres la actualización que solucionó todos mis errores." },
    16: { type: 'text', title: "Día 16", text: "Eres más fina que un lirio, más intensa que un buen rap, y siempre serás mi melodía favorita." },
    17: { type: 'coupon', title: "Día 17", text: "🎟️ VALE VIRTUAL: Masaje virtual (o real cuando nos veamos) para quitarte todo el estrés de la semana." },
    18: { type: 'list', title: "Día 18", text: "Mis pequeños lujos de la vida:", list: ["Tus 'buenos días'", "Saber que cuento contigo", "Verte superar tus miedos", "Llamarte 'My Girlfriend'", "Que me llames Mel"] },
    19: { type: 'game', title: "Día 19", text: "¡Faltan exactamente 7 días para el día central! Prepárate mentalmente." },
    20: { type: 'coupon', title: "Día 20", text: "🎟️ VALE VIRTUAL: Capricho libre. Este vale es un cheque en blanco. Tú decides qué quieres que haga, cómo y cuándo." },
    21: { type: 'text', title: "Día 21", text: "A veces pienso en la primera vez que hablamos y me sonrío solo. Qué buena suerte tuve." },
    22: { type: 'text', title: "Día 22", text: "Ya casi llega la fecha. Estoy contando las horas con más ansias que tú, creo." },
    23: { type: 'coupon', title: "Día 23", text: "🎟️ VALE VIRTUAL: Tu postre favorito. Lo canjeas y mágicamente aparecerá para endulzarte la tarde." },
    24: { type: 'music', title: "Día 24", text: "Playlist pre-cumpleaños: Una mezcla pensada solo en ti. Un poco de Bad Bunny para la energía, y esa vibra indie de 'She & Him' que tanto te gusta. ¡Tu mezcla perfecta para la semana de tu cumple!", link: "ENLACE_A_TU_PLAYLIST_AQUI" },
    25: { type: 'text', title: "Día 25", text: "La víspera. Esta noche no duermo de la emoción de celebrar tu vida." },
    26: { type: 'birthday', title: "¡FELIZ CUMPLEAÑOS 19, MI PRINCESA ARI!", text: "Hoy celebramos la luz de tu alma. Eres mi lugar tranquilo, mi inspiración y mi amor. Revisa tus mensajes para la siguiente sorpresa. Te amo infinitamente. 🎂👑✨" },
    27: { type: 'coupon', title: "Día 27", text: "🎟️ VALE VIRTUAL: Cura post-cumpleaños. Día de descanso total para ti, yo me encargo de animarte y engreírte para que te recuperes." },
    28: { type: 'text', title: "Día 28", text: "Seguimos celebrando. Un solo día no alcanza para festejar lo increíble que eres." },
    29: { type: 'text', title: "Día 29", text: "Aún no supero la suerte que tengo de poder acompañarte en este nuevo capítulo de tu vida." },
    30: { type: 'list', title: "Día 30", text: "Mis promesas para tus 19 años:", list: ["Cuidar nuestra base firme", "Llenarte de lirios virtuales y reales", "Ser tu mayor apoyo siempre", "Hacerte sonreír mínimo una vez al día", "Seguir eligiéndote cada mañana"] },
    31: { type: 'text', title: "Día 31", text: "Marzo se acaba, pero mis ganas de celebrar tu vida duran todo el año. Fin del calendario... ¡O inicio de algo mejor! Siempre tuyo, Mel. 🤍" },
};

const DayModal = ({ day, onClose }) => {
    const content = dayContents[day] || { title: `Día ${day}`, text: "Sorpresa preparándose..." };
    const modalRef = useRef(null);
    const [isSharing, setIsSharing] = useState(false);

    const handleShare = async () => {
        if (!modalRef.current) return;
        setIsSharing(true);
        try {
            // Esperar un instante para que React actualice la UI (oculte el botón y expanda el modal)
            await new Promise(resolve => setTimeout(resolve, 300));

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
                padding: '2rem', maxWidth: '500px', width: '100%',
                maxHeight: isSharing ? 'none' : '80vh',
                overflowY: isSharing ? 'visible' : 'auto',
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

                {content.type === 'image' && content.src && (
                    <img
                        src={`${import.meta.env.BASE_URL}${content.src.startsWith('/') ? content.src.slice(1) : content.src}`}
                        alt={content.title}
                        style={{ maxWidth: '100%', borderRadius: '12px', marginBottom: '1.5rem', boxShadow: '0 4px 15px rgba(255,255,255,0.1)' }}
                    />
                )}

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
