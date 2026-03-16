import { useState, useEffect } from 'react';
import DayModal from './DayModal';

const CalendarGrid = () => {
    const [currentDay, setCurrentDay] = useState(0);
    const [selectedDay, setSelectedDay] = useState(null);
    const [shakeDay, setShakeDay] = useState(null);

    useEffect(() => {
        // Calculamos el día actual de marzo (1-31)
        const today = new Date();
        // Para pruebas, asumimos marzo. En producción, hoy = today.getDate() si es marzo.
        // Usaremos getDate() y nos aseguramos de que estamos en el mes correcto (0-indexado, marzo es 2).
        const isMarch = today.getMonth() === 2;
        const marchDay = isMarch ? today.getDate() : 0; // 0 significa antes de marzo.

        // TEMPORAL: para poder ver el efecto hoy, puedes forzar un día: ej setCurrentDay(5);
        setCurrentDay(marchDay)
    }, []);

    const handleDayClick = (day) => {
        // Para el 26 (su cumple), no nos importa qué día de marzo sea, permitiremos verlo? No, la misma regla.
        if (day <= currentDay) {
            setSelectedDay(day);
        } else {
            setShakeDay(day);
            setTimeout(() => setShakeDay(null), 500);
        }
    };

    const days = Array.from({ length: 31 }, (_, i) => i + 1);

    return (
        <div style={{ padding: '2rem 1rem', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--accent-color)' }}>
                Marzo ✨
            </h2>
            <p style={{ opacity: 0.8, marginBottom: '2rem' }}>El mes de Ari 🤍</p>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
                gap: '1rem',
                justifyItems: 'center'
            }}>
                {days.map((day) => {
                    const isUnlocked = day <= currentDay; // <-- Bloqueo real activado
                    const isBirthday = day === 26;

                    return (
                        <div
                            key={day}
                            className={`glass-panel ${shakeDay === day ? 'shake' : ''}`}
                            onClick={() => handleDayClick(day)}
                            style={{
                                width: '100%',
                                aspectRatio: '1/1.2',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                cursor: isUnlocked ? 'pointer' : 'not-allowed',
                                background: isBirthday ? 'rgba(209, 179, 255, 0.2)' : 'var(--glass-bg)',
                                border: isBirthday ? '1px solid var(--accent-color)' : '1px solid var(--glass-border)',
                                animation: shakeDay === day ? 'shake 0.5s' : 'none',
                                opacity: isUnlocked ? 1 : 0.6,
                                transition: 'all 0.3s var(--transition-spring)'
                            }}
                            onMouseEnter={(e) => {
                                if (isUnlocked) e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                            onMouseLeave={(e) => {
                                if (isUnlocked) e.currentTarget.style.transform = 'scale(1)';
                            }}
                        >
                            {isUnlocked ? (isBirthday ? '👑' : day) : '🔒'}
                        </div>
                    );
                })}
            </div>

            {selectedDay && (
                <DayModal day={selectedDay} onClose={() => setSelectedDay(null)} />
            )}
        </div>
    );
};

export default CalendarGrid;
