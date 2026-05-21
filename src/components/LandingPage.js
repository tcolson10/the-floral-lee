import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

const LandingPage = () => {
	const scrollTo = (id) => {
		const el = document.getElementById(id);
		if (!el) return;
		const h = document.querySelector("header")?.offsetHeight ?? 60;
		window.scrollTo({
			top: el.getBoundingClientRect().top + window.pageYOffset - h,
			behavior: "smooth",
		});
	};

	return (
		<div>
			{/* Hero */}
			<div className="hero" id="home">
				<img src="/images/portfolio/ryan_rex.jpeg" className="hero-bg" alt="" />
				<div className="hero-overlay" />
				<div className="hero-content">
					<span className="hero-eyebrow hero-fade-in" style={{ animationDelay: "200ms" }}>Wedding Floral Design</span>
					<h1 className="hero-headline">
						<em>
							{"The Floral".split("").map((char, i) => (
								<span key={i} className="hero-letter" style={{ animationDelay: `${400 + i * 80}ms` }}>
									{char === " " ? "\u00A0" : char}
								</span>
							))}
						</em>
						<span className="hero-headline-sub">
							{"Lee".split("").map((char, i) => (
								<span key={i} className="hero-letter hero-letter--sub" style={{ animationDelay: `${400 + 10 * 80 + 200 + i * 80}ms` }}>
									{char}
								</span>
							))}
						</span>
					</h1>
					<p className="hero-tagline hero-fade-in" style={{ animationDelay: "2400ms" }}>Where every bloom tells your story</p>
					<div className="hero-actions hero-fade-in" style={{ animationDelay: "2600ms" }}>
						<button
							className="hero-btn-primary"
							onClick={() => scrollTo("portfolio")}
						>
							View Our Work
						</button>
						<button
							className="hero-btn-outline"
							onClick={() => scrollTo("contact")}
						>
							Get In Touch
						</button>
					</div>
				</div>
				<div className="hero-scroll-hint">
					<div className="hero-scroll-line" />
				</div>
			</div>

			{/* Stats Bar */}
			<div className="stats-bar">
				<div className="stat-item">
					<span className="stat-number">Utah</span>
					<span className="stat-label">Florist</span>
				</div>
				<div className="stat-item">
					<span className="stat-number">100+</span>
					<span className="stat-label">Events Designed</span>
				</div>
				<div className="stat-item">
					<span className="stat-number">&#8734;</span>
					<span className="stat-label">Love for Flowers</span>
				</div>
			</div>

			{/* Portfolio */}
			<div id="portfolio">
				<Portfolio />
			</div>

			{/* About */}
			<div className="about-section reveal">
				<div className="about-image">
					<img
						src="/images/portfolio/ryan_rex.jpeg"
						alt="The Floral Lee"
						loading="lazy"
					/>
				</div>
				<div className="about-text">
					<span className="section-eyebrow">Our Story</span>
					<h2 className="section-heading">
						Florals that feel like <em>you</em>
					</h2>
					<p>
						Every arrangement we create starts with you, your story, your vision, your day.
					</p>
					<p>
						The Floral Lee creates custom, thoughtfully designed
						arrangements that bring your vision to life and exceed every
						expectation.
					</p>
					<button className="about-cta" onClick={() => scrollTo("contact")}>
						Work With Us
					</button>
				</div>
			</div>

			{/* Testimonials */}
			<div id="testimonials">
				<Testimonials />
			</div>

			{/* Contact */}
			<div id="contact">
				<Contact />
			</div>
		</div>
	);
};

export default LandingPage;
