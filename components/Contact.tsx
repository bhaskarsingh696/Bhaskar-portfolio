import { SectionLabel } from "./SectionLabel";

export function Contact() {
  return (
    <section className="contact section" id="contact" aria-labelledby="contact-title">
      <SectionLabel number="05" label="Contact" detail="Say hello" />
      <div className="contact-main"><p>Have an idea,<br />a question, or a good<br />problem to work through?</p><h2 id="contact-title">Let&apos;s make<br /><i>contact.</i></h2><a className="contact-email" href="mailto:bhaskar.singh.0024@gmail.com">bhaskar.singh.0024@gmail.com <span>↗</span></a></div>
      <div className="contact-footer"><p>Greater Noida, India<br />Software Engineer / Backend Engineer</p><div><a href="https://github.com/bhaskarsingh696" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/bhaskarsingh0024" target="_blank" rel="noreferrer">LinkedIn ↗</a></div><p>© {new Date().getFullYear()} Bhaskar Singh</p></div>
    </section>
  );
}
