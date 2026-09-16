export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-topline"><span>Software Engineer</span><span>Backend Engineer</span><span>India · 28.4676° N</span></div>
      <div className="hero-orbit" aria-hidden="true"><span>systems · code · ideas · systems · code · ideas · </span><b>↘</b></div>
      <h1 id="hero-title"><span>Bhaskar</span><span>Singh<em>®</em></span></h1>
      <div className="hero-bottom">
        <p>Turning curiosity into<br />useful software.</p>
        <p className="hero-bio">A B.Tech CSE student working through problems, systems, and the rewarding mess in between.</p>
        <a className="round-link" href="#projects"><span>See the work</span><b>↓</b></a>
      </div>
      <div className="hero-signal" aria-hidden="true"><span /><span /><span /><span /><span /></div>
    </section>
  );
}
