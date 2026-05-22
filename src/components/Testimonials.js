import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const testimonialsData = [
	{
		text: "It's hard to put into words how perfect my wedding florals from Shanna were! She gave me beautiful options that fit within my budget and made the entire process so easy. I truly can't get over how beautiful my bouquet was. She made my wedding floral dreams come true! Every person I show my wedding photos to comments on how beautiful they were! I will NEVER get over them. I'll be 80 years old and still thinking about them.",
		name: "Katy W.",
	},
	{
		text: "Where do I even start? Everything was BEYOND perfect. Not only were my florals better than anything my wife and I could have ever dreamed of, Shanna and her husband were an absolute delight to work with. If you're wanting high quality, stunning florals from someone just as wonderful as their work, don't look any further because Shanna is absolutely your girl.",
		name: "Chelsea R.",
	},
	{
		text: "Wow! Words can't describe how happy I am that I chose The Floral Lee to bring our wedding flowers to life. Let me just tell you: INVEST in your florals! Shanna's floral design really elevated the entire reception. We felt like we were in heaven with all the blues and whites she chose. If you are in the Austin area, I'd highly recommend Shanna to bring your wedding florals to life!",
		name: "Elizabeth S.",
	},
	{
		text: "Shanna did an AMAZING job bringing my vision for my wedding day to life! From our first call, she was so kind and accommodating throughout the entire process. On the wedding day, she made all of the florals look so magical and exactly how I had envisioned them! I couldn't have imagined anyone more perfect for my special day!",
		name: "Lizzy M.",
	},
	{
		text: "WOW! From day one, Shanna was incredibly helpful, accommodating, hardworking, and kind. I'm so grateful we trusted her with our florals — she became such a special part of our wedding day. She brought our vision to life more beautifully than we could have imagined. Her talent, creativity, and genuine care shine through in everything she does, and we will forever be grateful for her kindness and amazing work.",
		name: "Aubree A.",
	},
	{
		text: "Our wedding day was made even more special thanks to our amazing florist, Shanna. She truly exceeded our expectations in bringing our vision to life. I was absolutely in love with my bouquet — it was a stunning masterpiece that I couldn't take my eyes off of. Her dedication and talent made our wedding day an unforgettable experience, and we are so grateful for her incredible work.",
		name: "Renée K.",
	},
	{
		text: "The most important thing on my wedding day was having beautiful florals at a reasonable price, and The Floral Lee exceeded all of my expectations. Out of everything at my wedding, I received the most compliments on my florals. The Floral Lee was easy to work with, reasonable, accommodating, creative, and overall just amazing. The florals pulled everything together so seamlessly. 10/10 recommend!",
		name: "Jillian M.",
	},
	{
		text: "I cannot thank you enough for bringing my floral and greenery vision to life on my wedding day. Everything was absolutely stunning — from the bouquet to the ceremony arrangements and every little detail in between. You truly captured the look and feeling I had dreamed of, and I'm so incredibly thankful. Your talent and artistry made such a meaningful impact on one of the most important days of my life!",
		name: "Meredith G.",
	},
	{
		text: "The Floral Lee was absolutely fantastic!! I am so lucky I found her. She was quick to respond to any questions I had during the process. I sent her some photos for inspiration and let her creativity do the rest. I was in complete awe when I saw my bouquet. It turned out even better than I could have imagined!! I highly recommend The Floral Lee!",
		name: "Haley S.",
	},
	{
		text: "Shanna was amazing at making our florals come to life! They were so much more than I could've imagined. I sent her pictures of the colors we were using and she created beautiful arrangements — not only for our wedding, but for my bridal portraits too! We received so many compliments as well. She is so sweet and personable and wants to make sure you absolutely love everything for your big day! I can't recommend her enough!",
		name: "Taylor K.",
	},
	{
		text: "My wedding flowers from The Floral Lee were absolutely STUNNING! Shanna was such a fun wedding vendor to work with. Her enthusiasm for weddings made the entire process so enjoyable. The floral arrangements she made matched the inspiration pictures I sent her perfectly. She really went above and beyond and I received many compliments about the flowers on my wedding day!",
		name: "Hannah K.",
	},
	{
		text: "10/10 for absolutely everything!! Our wedding florals were even better than the Pinterest board I provided Shanna with!! Everything was beautiful, elegant, and you could clearly see the love put into each floral arrangement, bouquet, and boutonniere! Our vision came to life because of The Floral Lee!! We definitely look forward to working with Shanna and her team again in the future!!",
		name: "Emylsse H.",
	},
	{
		text: "I was in awe of my florals! Everything was even more beautiful than I could have imagined, and seeing it all come together was such a special moment for me. Every detail was perfect, and Shanna truly brought my vision to life in the most incredible way.",
		name: "Maddy K.",
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
