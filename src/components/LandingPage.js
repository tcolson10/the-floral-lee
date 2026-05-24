import { Link } from "react-router-dom";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import FAQ from "./FAQ";

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
				<video
					className="hero-bg"
					src="/images/portfolio/video.mp4"
					autoPlay
					muted
					loop
					playsInline
				/>
				<div className="hero-overlay" />
				<div className="hero-content">
					<span className="hero-eyebrow hero-fade-in" style={{ animationDelay: "200ms" }}>Central Texas Florist</span>
					<h1 className="hero-headline">
						<em>
							{"The Floral Lee".split("").map((char, i) => (
								<span key={i} className="hero-letter" style={{ animationDelay: `${400 + i * 80}ms` }}>
									{char === " " ? " " : char}
								</span>
							))}
						</em>
					</h1>
					<p className="hero-tagline hero-fade-in" style={{ animationDelay: "1800ms" }}>Where every bloom tells your story</p>
					<div className="hero-actions hero-fade-in" style={{ animationDelay: "2000ms" }}>
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
			</div>


			{/* Meet Your Florist Preview */}
			<div className="about-section reveal" id="meet">
				<div className="about-collage">
					<img src="/images/portfolio/SL208448.jpg" alt="" loading="lazy" />
					<img src="/images/portfolio/SL208530.jpg" alt="" loading="lazy" />
					<img src="/images/portfolio/SL208618.jpg" alt="" loading="lazy" />
					<img src="/images/portfolio/SL208247.jpg" alt="" loading="lazy" />
				</div>
				<div className="about-text">
					<span className="section-eyebrow">Meet Your Florist</span>
					<h2 className="section-heading">
						The person behind <em>every bloom</em>
					</h2>
					<p>
						Hi, I'm Shanna! My goal is to create floral designs that feel beautiful, captivating, and deeply personal to you. I want to hear all about your story — your life together, your love, and every detail you've been dreaming up for your wedding day. Every couple is uniquely different, and I believe your flowers should reflect that in a way that feels intentional and unforgettable.
					</p>
					<Link to="/meet-your-florist" className="about-cta">
						Read More
					</Link>
				</div>
			</div>

			{/* Testimonials */}
			<div id="testimonials">
				<Testimonials />
			</div>

			{/* Gallery */}
			<div id="portfolio">
				<Portfolio />
			</div>

			{/* Contact */}
			<div id="contact">
				<Contact />
			</div>

			{/* FAQ */}
			<div id="faq">
				<FAQ />
			</div>
		</div>
	);
};

export default LandingPage;
