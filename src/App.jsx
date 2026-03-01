import { useState } from 'react'
import CalendarGrid from './components/CalendarGrid'

function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [answer, setAnswer] = useState('');
  const [errorShake, setErrorShake] = useState(false);

  // Ejemplo de pregunta (puedes cambiarla después)
  const QUESTION = "¿Cuál fue el lugar de nuestra primera cita?";
  const CORRECT_ANSWER = "cine"; // respuesta en minúsculas para fácil validación

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

  if (unlocked) {
    return (
      <div style={{ width: '100%', minHeight: '100vh', paddingBottom: '2rem' }}>
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
