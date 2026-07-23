import { contact } from '../data/portfolio';
import useReveal, { useSectionReveal } from '../hooks/useReveal';

export default function Contact() {
  const sectionRef = useSectionReveal();
  const ref = useReveal('up');

  return (
    <section className="contact section" id="contact" ref={sectionRef}>
      <div className="container contact__grid" ref={ref}>
        <h2 className="contact__heading">
          Let&apos;s
          <br />
          build
          <br />
          <span>something.</span>
        </h2>

        <div className="contact__links">
          <a href={`mailto:${contact.email}`} className="contact__link">
            <span className="contact__dot" />
            {contact.email}
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__link"
          >
            <span className="contact__dot" />
            linkedin.com/in/andrei-roman-138822188
          </a>
          <a
            href={contact.altus}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__link"
          >
            <span className="contact__dot" />
            altus.fit
          </a>
        </div>
      </div>
    </section>
  );
}
