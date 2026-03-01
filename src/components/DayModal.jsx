import React from 'react';

const dayContents = {
    1: { type: 'text', title: "Día 1", text: "Es tu alma, mi princesa Ari, lo que verdaderamente me cautiva. Lo que los demás no pueden ver: tu empatía inmensa, tus ganas de ser mejor cada día, la forma tan pura en la que amas. Eres hermosa por fuera, pero es tu luz interna la que me hace elegirte todos los días. 🤍" },
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

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000,
            padding: '1rem'
        }} onClick={onClose}>

            <div className="glass-panel" style={{
                padding: '2rem', maxWidth: '500px', width: '100%', maxHeight: '80vh', overflowY: 'auto',
                textAlign: 'center', position: 'relative'
            }} onClick={(e) => e.stopPropagation()}>

                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute', top: '10px', right: '10px',
                        background: 'rgba(255,255,255,0.1)', border: 'none', padding: '8px 12px',
                        fontSize: '1rem'
                    }}
                >
                    ✕
                </button>

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

            </div>
        </div>
    );
};

export default DayModal;
