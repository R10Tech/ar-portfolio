import useScrollFill from '../hooks/useScrollFill';

const FEATHER = 0.24;

function Copy({ paragraphs, hidden }) {
  return (
    <div className="intent-fill__copy" aria-hidden={hidden || undefined}>
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className="intent-fill__paragraph">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

function wipeMask(progress) {
  const solid = progress * (1 + FEATHER) - FEATHER;
  const fadeEnd = solid + FEATHER;

  return `linear-gradient(
    to bottom,
    #000 0%,
    #000 ${solid * 100}%,
    transparent ${fadeEnd * 100}%
  )`;
}

export default function ScrollFillText({ paragraphs, attribution }) {
  const { trackRef, progress } = useScrollFill();
  const mask = wipeMask(progress);

  return (
    <div className="intent-fill" ref={trackRef}>
      <div className="intent-fill__sticky">
        <div className="intent-fill__stack">
          <div className="intent-fill__layer intent-fill__layer--muted">
            <Copy paragraphs={paragraphs} />
          </div>
          <div
            className="intent-fill__layer intent-fill__layer--fill"
            style={{
              WebkitMaskImage: mask,
              maskImage: mask,
            }}
          >
            <Copy paragraphs={paragraphs} hidden />
          </div>
        </div>

        {attribution && (
          <p
            className="intent-fill__byline"
            style={{ opacity: progress > 0.86 ? (progress - 0.86) / 0.14 : 0 }}
          >
            <span className="intent-fill__byline-name">{attribution.name}</span>
            <span className="intent-fill__byline-role">{attribution.role}</span>
          </p>
        )}
      </div>
    </div>
  );
}
