import { useState } from 'react'
import CalendarGrid from './components/CalendarGrid'

function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [answer, setAnswer] = useState('');
  const [errorShake, setErrorShake] = useState(false);

  // Ejemplo de pregunta (puedes cambiarla después)
  const QUESTION = "¿Qué es lo que siempre te digo que veo cuando veo tus ojos?";
  const CORRECT_ANSWER = "galaxias"; // respuesta en minúsculas para fácil validación

  const handleUnlock = (e) => {
    e.preventDefault();
    if (answer.toLowerCase().trim() === CORRECT_ANSWER) {
      setUnlocked(true);
    } else {
      setErrorShake(true);
      setTimeout(() => setErrorShake(false), 500);
      setAnswer('');
    }
  };

  const [showWelcomePopup, setShowWelcomePopup] = useState(true);

  if (unlocked) {
    return (
      <div style={{ width: '100%', minHeight: '100vh', paddingBottom: '2rem', position: 'relative' }}>

        {/* Welcome Popup Overlay */}
        {showWelcomePopup && (
          <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(10px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000,
            padding: '1rem', flexDirection: 'column'
          }} onClick={() => setShowWelcomePopup(false)}>

            <div className="glass-panel" style={{
              padding: '1rem', maxWidth: '400px', width: '100%',
              textAlign: 'center', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center'
            }} onClick={(e) => e.stopPropagation()}>

              <img
                src={`${import.meta.env.BASE_URL}Carta_Melo.png`}
                alt="Carta para mi Princesa"
                style={{ width: '100%', borderRadius: '12px', marginBottom: '1rem' }}
              />

              <div style={{ display: 'flex', gap: '1rem', width: '100%' }}>
                <a
                  href={`${import.meta.env.BASE_URL}Carta_Melo.png`}
                  download="Carta_Princesa_Ariana.jpg"
                  style={{
                    flex: 1, padding: '10px', background: 'rgba(255,255,255,0.1)',
                    color: 'white', textDecoration: 'none', borderRadius: '8px', border: '1px solid var(--glass-border)',
                    fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center'
                  }}
                >
                  📥 Descargar
                </a>
                <button
                  onClick={() => setShowWelcomePopup(false)}
                  style={{ flex: 1, padding: '10px', background: 'var(--accent-color)', color: '#000' }}
                >
                  Continuar
                </button>
              </div>

            </div>
          </div>
        )}

        {/* Small floating button to reopen popup */}
        {!showWelcomePopup && (
          <button
            onClick={() => setShowWelcomePopup(true)}
            style={{
              position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000,
              width: '50px', height: '50px', borderRadius: '50%', padding: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.5rem', boxShadow: '0 4px 15px rgba(209, 179, 255, 0.4)',
              background: 'var(--accent-color)'
            }}
            title="Ver Carta de Bienvenida"
          >
            💌
          </button>
        )}

        <CalendarGrid />
      </div>
    );
  }

  return (
    <div className="welcome-container" style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', minHeight: '100vh', padding: '1rem', textAlign: 'center'
    }}>
      <div className={`glass-panel login-box ${errorShake ? 'shake' : ''}`} style={{
        padding: '2.5rem 2rem', maxWidth: '400px', width: '100%',
        animation: errorShake ? 'shake 0.5s' : 'none'
      }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔒</div>
        <h1 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--accent-color)' }}>
          Face ID / Passcode
        </h1>
        <p style={{ marginBottom: '2rem', fontSize: '1.1rem', opacity: 0.9 }}>
          {QUESTION}
        </p>

        <form onSubmit={handleUnlock} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Escribe tu respuesta..."
            style={{
              padding: '12px 16px', borderRadius: '12px', border: '1px solid var(--glass-border)',
              background: 'rgba(0,0,0,0.2)', color: 'white', fontSize: '1rem',
              outline: 'none', textAlign: 'center'
            }}
          />
          <button type="submit" style={{ marginTop: '0.5rem', width: '100%' }}>
            Desbloquear
          </button>
        </form>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          50% { transform: translateX(10px); }
          75% { transform: translateX(-10px); }
        }
      `}</style>
    </div>
  )
}

export default App
