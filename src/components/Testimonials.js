import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const testimonialsData = [
	{
		text: "The Floral Lee made my dream bouquet for my wedding! The flowers were beautifully put together and made on time so I never had to worry about anything. I loved them, I still look at the pics at least once a week they just were so gorgeous. They were the perfect final touch!",
		name: "Kensie W.",
	},
	{
		text: "The Floral Lee is an absolute dream to work with!! They were able to understand and execute my wedding floral vision perfectly. They are SO knowledgeable and made the planning so much fun, instead of stressful. I strongly recommend them to everyone I know.",
		name: "Grace G.",
	},
	{
		text: "The Floral Lee was incredible! I feel like the vision I had was kind of scattered, but they executed it perfectly and exceeded any expectations I had. I still get so many compliments on the florals from my wedding!",
		name: "Lacee J.",
	},
	{
		text: "10/10. Booked The Floral Lee after seeing their work on Instagram and they did not disappoint. My arch was the most beautiful thing I have ever seen in my life and I am not exaggerating.",
		name: "Tatum R.",
	},
	{
		text: "Getting married is stressful. The Floral Lee was one of the few parts of the process that was genuinely fun. They were excited about our vision, communicated clearly, and showed up and made it all real.",
		name: "Peyton A.",
	},
	{
		text: "I told them I wanted simple and romantic and they nailed it completely. My bouquet was exactly what I had been picturing and I couldn't stop staring at it all night!!",
		name: "Jess T.",
	},
	{
		text: "I could not recommend them more!! Everything was so beautiful and they were so easy to work with the whole time. Fast responses, gorgeous results, just an amazing experience overall.",
		name: "Lauren S.",
	},
];

function Testimonials() {
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrent((c) => (c + 1) % testimonialsData.length);
		}, 7000);
		return () => clearInterval(timer);
	}, [current]);

	const prev = () =>
		setCurrent((c) => (c - 1 + testimonialsData.length) % testimonialsData.length);
	const next = () => setCurrent((c) => (c + 1) % testimonialsData.length);

	return (
		<div className="testimonials-container">
			<div className="testimonials-header reveal">
				<span className="section-eyebrow testimonials-eyebrow">Kind Words</span>
				<h2 className="section-heading testimonials-heading">
					What our <em>clients say</em>
				</h2>
			</div>
			<div className="testimonials-carousel">
				<button className="carousel-btn" onClick={prev} aria-label="Previous testimonial">
					&#8249;
				</button>
				<div className="carousel-track">
					{testimonialsData.map((t, i) => (
						<div
							key={i}
							className={`carousel-slide${i === current ? " carousel-slide--active" : ""}`}
						>
							<blockquote>&#8220;{t.text}&#8221;</blockquote>
							<p className="client-name">{t.name}</p>
						</div>
					))}
				</div>
				<button className="carousel-btn" onClick={next} aria-label="Next testimonial">
					&#8250;
				</button>
			</div>
			<div className="carousel-dots">
				{testimonialsData.map((_, i) => (
					<button
						key={i}
						className={`carousel-dot${i === current ? " carousel-dot--active" : ""}`}
						onClick={() => setCurrent(i)}
						aria-label={`Go to testimonial ${i + 1}`}
					/>
				))}
			</div>
			<Link to="/full-testimonials" className="testimonials-button">
				See All Testimonials
			</Link>
		</div>
	);
}

export default Testimonials;
