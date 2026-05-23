import React, { useState, useEffect } from "react";
import {
	Routes,
	Route,
	Link,
	useNavigate,
	useLocation,
} from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import PortfolioFull from "./components/PortfolioFull";
import TestimonialsFull from "./components/TestimonialsFull";
import MeetYourFlorist from "./components/MeetYourFlorist";
import BookingPopup from "./components/BookingPopup";

function App() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();

	// Transparent nav: track scroll position
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 60);
		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	// Scroll reveal: observe .reveal elements on each route
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((e) => {
					if (e.isIntersecting) {
						e.target.classList.add("is-visible");
						observer.unobserve(e.target);
					}
				});
			},
			{ threshold: 0.12 }
		);
		const els = document.querySelectorAll(".reveal");
		els.forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	}, [location.pathname]);

	const scrollToSection = (sectionId) => {
		const section = document.getElementById(sectionId);
		if (!section) return;
		const headerHeight = document.querySelector("header")?.offsetHeight ?? 80;
		const top =
			section.getBoundingClientRect().top + window.pageYOffset - headerHeight;
		window.scrollTo({ top, behavior: "smooth" });
	};

	// Scroll to section based on URL path when location changes
	useEffect(() => {
		const path = location.pathname.replace(/^\//, "");
		if (
			["", "home", "pricing", "portfolio", "meet", "testimonials", "contact", "faq"].includes(
				path
			)
		) {
			const sectionId = path === "" ? "home" : path;
			setTimeout(() => scrollToSection(sectionId), 100);
		}
	}, [location.pathname]);

	const handleNavigation = (path) => {
		setIsMenuOpen(false);
		navigate(path === "home" ? "/" : `/${path}`);
	};

	const isHome = location.pathname === "/";
	const navTransparent = isHome && !scrolled && !isMenuOpen;

	return (
		<div className="app-container">
			<BookingPopup />
			<header className={navTransparent ? "nav-transparent" : "nav-scrolled"}>
				<Link to="/" className="webTitle" onClick={() => setIsMenuOpen(false)}>
					<img
						src={navTransparent ? "/images/logos/logo-rect-cream.png" : "/images/logos/logo-rect-dark.png"}
						alt="The Floral Lee"
						className="nav-logo"
					/>
				</Link>
				<button
					className={`hamburger ${isMenuOpen ? "active" : ""}`}
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					<span className="hamburger-line"></span>
					<span className="hamburger-line"></span>
					<span className="hamburger-line"></span>
				</button>
				<nav className={isMenuOpen ? "nav-active" : ""}>
					<ul>
						<li>
							<Link to="/" onClick={() => handleNavigation("home")}>
								Home
							</Link>
						</li>
						<li>
							<Link
								to="/meet"
								onClick={() => handleNavigation("meet")}
							>
								Meet Your Florist
							</Link>
						</li>
						<li>
							<Link
								to="/testimonials"
								onClick={() => handleNavigation("testimonials")}
							>
								Testimonials
							</Link>
						</li>
						<li>
							<Link
								to="/portfolio"
								onClick={() => handleNavigation("portfolio")}
							>
								Gallery
							</Link>
						</li>
						<li>
							<Link to="/contact" onClick={() => handleNavigation("contact")}>
								Contact
							</Link>
						</li>
						<li>
							<Link to="/faq" onClick={() => handleNavigation("faq")}>
								FAQ
							</Link>
						</li>
					</ul>
				</nav>
			</header>
			<main>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/about" element={<About />} />
					<Route path="/portfolio" element={<LandingPage />} />
					<Route path="/meet" element={<LandingPage />} />
					<Route path="/testimonials" element={<LandingPage />} />
					<Route path="/contact" element={<LandingPage />} />
					<Route path="/full-portfolio" element={<PortfolioFull />} />
					<Route path="/full-testimonials" element={<TestimonialsFull />} />
					<Route path="/meet-your-florist" element={<MeetYourFlorist />} />
					<Route path="/faq" element={<LandingPage />} />
				</Routes>
			</main>
			<footer className="site-footer">
				<div className="footer-instagram">
					<a
						href="https://www.instagram.com/thefloral.lee/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="instagram-logo">
							<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
							<circle cx="12" cy="12" r="4"/>
							<circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
						</svg>
						<span>Instagram</span>
					</a>
				</div>
				<div className="footer-logo">
					<img src="/images/logos/logo-round-mauve.png" alt="The Floral Lee" className="footer-logo-img" />
				</div>
				<div className="footer-email">
					<a
						href="mailto:thefloral.lee@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="email-icon">
							<rect x="2" y="4" width="20" height="16" rx="2"/>
							<polyline points="2,4 12,13 22,4"/>
						</svg>
						<span>thefloral.lee@gmail.com</span>
					</a>
				</div>
			</footer>
		</div>
	);
}

export default App;
