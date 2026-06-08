import { useEffect, useState } from 'react';

const bootLines = [
  'INITIALIZING PORTFOLIO_CORE...',
  'LOADING AI_STACK: TensorFlow / PyTorch / LLMs',
  'SYNCING PROJECT ASSETS...',
  'CONNECTING DEV PROFILE...',
  'ACCESS GRANTED: SHRICHACKRAN_K_M'
];

export default function BootScreen({ onComplete }) {
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    const lineTimer = setInterval(() => {
      setLineIndex((current) => Math.min(current + 1, bootLines.length - 1));
    }, 420);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2600);

    return () => {
      clearInterval(lineTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="boot-screen" role="status" aria-label="Loading portfolio">
      <div className="boot-noise" />
      <div className="boot-panel">
        <div className="boot-kicker">Shrichackran.dev</div>
        <h1>Booting Portfolio</h1>
        <div className="boot-terminal">
          {bootLines.slice(0, lineIndex + 1).map((line) => (
            <p key={line}><span>&gt;</span> {line}</p>
          ))}
          <i />
        </div>
        <div className="boot-progress"><span /></div>
        <p className="boot-note">Opening cyberpunk developer workspace...</p>
      </div>
    </div>
  );
}
