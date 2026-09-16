import { SectionLabel } from "./SectionLabel";

const courses = ["Data Structures & Algorithms", "Database Management Systems", "Operating Systems", "Computer Networks", "Object-Oriented Programming"];

export function About() {
  return (
    <section className="about section" id="about" aria-labelledby="about-title">
      <SectionLabel number="02" label="About" detail="A work in progress" />
      <div className="about-intro"><p className="eyebrow">Since 2023</p><h2 id="about-title">I like the moment<br />when a <i>problem</i> starts<br />making sense.</h2></div>
      <div className="about-layout">
        <div className="about-radar" aria-hidden="true"><div className="radar-ring r1" /><div className="radar-ring r2" /><div className="radar-ring r3" /><div className="radar-cross" /><b>BS</b><span className="radar-tag t1">CODE</span><span className="radar-tag t2">SYSTEMS</span><span className="radar-tag t3">LEARN</span></div>
        <div className="about-copy"><p>Bhaskar Singh is a B.Tech Computer Science &amp; Engineering student at IILM University. He enjoys solving programming problems, building useful software, learning new technologies, and steadily improving his problem-solving ability.</p><p>There&apos;s always another layer to understand — that&apos;s the good part.</p><div className="education"><p className="education-label">Education</p><h3>Bachelor of Technology <em>(B.Tech)</em></h3><p>Computer Science &amp; Engineering<br />IILM University · 2023 — 2027</p><strong>CGPA <span>7.68 / 10</span></strong><ul>{courses.map((course) => <li key={course}>{course}</li>)}</ul></div></div>
      </div>
    </section>
  );
}
