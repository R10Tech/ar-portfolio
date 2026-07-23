export default function SystemDiagram() {
  const accent = 'var(--color-primary)';
  const muted = 'var(--color-text-muted)';
  const dim = 'var(--color-text-dim)';
  const bg = 'var(--color-bg-elevated)';

  return (
    <div className="system-diagram">
      <svg viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="N-ICE Kart embedded system diagram">
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(128,128,128,0.08)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="320" height="280" fill="url(#grid)" />

        <rect x="110" y="112" width="100" height="76" rx="6" fill={bg} stroke={accent} strokeWidth="1.5" />
        <text x="160" y="140" fontFamily="monospace" fontSize="7" fill={accent} textAnchor="middle" letterSpacing="1">RASPBERRY PI</text>
        <text x="160" y="153" fontFamily="monospace" fontSize="6" fill={muted} textAnchor="middle">Python / I2C</text>
        <text x="160" y="166" fontFamily="monospace" fontSize="6" fill={muted} textAnchor="middle">Sensor acquisition</text>

        <rect x="116" y="18" width="88" height="48" rx="5" fill={bg} stroke={dim} strokeWidth="1" />
        <rect x="122" y="24" width="76" height="34" rx="3" fill="var(--color-bg-subtle)" />
        <text x="160" y="37" fontFamily="monospace" fontSize="6.5" fill={accent} textAnchor="middle">Live data</text>
        <text x="160" y="49" fontFamily="monospace" fontSize="5.5" fill={muted} textAnchor="middle">Speed · Temp</text>
        <text x="160" y="76" fontFamily="monospace" fontSize="5.5" fill={dim} textAnchor="middle" letterSpacing="1">LCD DISPLAY</text>
        <line x1="160" y1="66" x2="160" y2="112" stroke={accent} strokeWidth="0.75" strokeDasharray="4 3" opacity="0.5" />
        <circle cx="160" cy="66" r="2" fill={accent} opacity="0.6" />

        <rect x="26" y="222" width="76" height="36" rx="5" fill={bg} stroke={dim} strokeWidth="1" />
        <text x="64" y="237" fontFamily="monospace" fontSize="6" fill="var(--color-text)" textAnchor="middle">SPEED</text>
        <text x="64" y="248" fontFamily="monospace" fontSize="5.5" fill={muted} textAnchor="middle">I2C sensor</text>
        <line x1="80" y1="222" x2="130" y2="188" stroke={dim} strokeWidth="0.75" strokeDasharray="4 3" />

        <rect x="122" y="222" width="76" height="36" rx="5" fill={bg} stroke={dim} strokeWidth="1" />
        <text x="160" y="237" fontFamily="monospace" fontSize="6" fill="var(--color-text)" textAnchor="middle">TEMP</text>
        <text x="160" y="248" fontFamily="monospace" fontSize="5.5" fill={muted} textAnchor="middle">I2C sensor</text>
        <line x1="160" y1="222" x2="160" y2="188" stroke={dim} strokeWidth="0.75" strokeDasharray="4 3" />

        <rect x="218" y="222" width="76" height="36" rx="5" fill={bg} stroke={dim} strokeWidth="1" />
        <text x="256" y="237" fontFamily="monospace" fontSize="6" fill="var(--color-text)" textAnchor="middle">VOLTAGE</text>
        <text x="256" y="248" fontFamily="monospace" fontSize="5.5" fill={muted} textAnchor="middle">I2C sensor</text>
        <line x1="238" y1="222" x2="190" y2="188" stroke={dim} strokeWidth="0.75" strokeDasharray="4 3" />

        <text x="160" y="272" fontFamily="monospace" fontSize="5.5" fill={dim} textAnchor="middle" letterSpacing="1">I2C SENSOR BUS — VALIDATED WITH OSCILLOSCOPE &amp; DMM</text>
      </svg>
    </div>
  );
}
