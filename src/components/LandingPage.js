import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import FAQ from "./FAQ";

const LandingPage = () => {
	const videoRef = useRef(null);

	// Only run the hero video while it's actually on screen — decoding a
	// full-viewport video off-screen is a big source of scroll jank.
	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					video.play().catch(() => {});
				} else {
					video.pause();
				}
			},
			{ threshold: 0.05 }
		);
		observer.observe(video);
		return () => observer.disconnect();
	}, []);

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
					ref={videoRef}
					className="hero-bg"
					src="/images/portfolio/video.mp4"
					autoPlay
					muted
					loop
					playsInline
					preload="metadata"
				/>
				<div className="hero-overlay" />
				<div className="hero-content">
					<span className="hero-eyebrow hero-fade-in" style={{ animationDelay: "100ms" }}>Central Texas Florist</span>
					<h1 className="hero-headline">
						<em>
							{"The Floral Lee".split("").map((char, i) => (
								<span key={i} className="hero-letter" style={{ animationDelay: `${250 + i * 35}ms` }}>
									{char === " " ? " " : char}
								</span>
							))}
						</em>
					</h1>
					<p className="hero-tagline hero-fade-in" style={{ animationDelay: "800ms" }}>Where every bloom tells your story</p>
					<div className="hero-actions hero-fade-in" style={{ animationDelay: "950ms" }}>
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
					<img src="/images/portfolio/SL208448.jpg" alt="" loading="lazy" decoding="async" width="1067" height="1600" />
					<img src="/images/portfolio/SL208530.jpg" alt="" loading="lazy" decoding="async" width="1067" height="1600" />
					<img src="/images/portfolio/SL208618.jpg" alt="" loading="lazy" decoding="async" width="1067" height="1600" />
					<img src="/images/portfolio/SL208247.jpg" alt="" loading="lazy" decoding="async" width="1067" height="1600" />
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
