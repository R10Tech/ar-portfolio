import useReveal, { useSectionReveal } from '../hooks/useReveal';

export default function Racing() {
  const sectionRef = useSectionReveal();
  const ref = useReveal('scale');

  return (
    <section className="racing section" id="racing" ref={sectionRef}>
      <div className="container">
        <div className="racing__inner" ref={ref}>
          <div className="racing__photo">
            <img
              src="/assets/racing-portrait.png"
              alt="Andrei Roman — professional racing driver at the kart track"
              loading="lazy"
            />
          </div>
          <p className="racing__label">Professional Racing Driver</p>
        </div>
      </div>
    </section>
  );
}
