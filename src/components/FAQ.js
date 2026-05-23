import { useState } from "react";

const faqData = [
	{
		question: "How much does it cost to book with you?",
		answer: [
			"Wedding florals vary greatly depending on seasonality, color palette, floral selection, and the overall scope of arrangements. The Floral Lee has a minimum investment of $4,000, and from there I thoughtfully curate a custom proposal tailored to your vision and priorities.",
		],
	},
	{
		question: "Do you have business liability insurance?",
		answer: [
			"Yes, The Floral Lee is fully insured. You can feel confident knowing that I provide a certificate of insurance to each venue prior to your event to ensure everything is properly covered and approved.",
		],
	},
	{
		question: "Do you handle delivery, setup, and breakdown?",
		answer: [
			"Yes. The Floral Lee handles delivery, full setup and optional breakdown and repurposing. Pickup may also be offered as an alternative option depending on the event.",
		],
	},
	{
		question: "Do you provide any décor outside of florals?",
		answer: [
			"The Floral Lee does not offer any décor or rentals at this time, as we remain entirely dedicated to the artistry and execution of floral design.",
		],
	},
	{
		question: "What is the booking process like?",
		answer: [
			"The booking process begins with an inquiry through my contact page. From there, I will reach out to schedule a consultation call to discuss your vision and floral needs in detail. After our call, I will create and send a custom proposal with pricing and design direction.",
			"To secure your date, a signed contract and $1,000 retainer are required. The retainer is applied toward your total investment and officially reserves your date with The Floral Lee.",
		],
	},
];

function FAQ() {
	const [openIndex, setOpenIndex] = useState(null);

	const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

	return (
		<div className="faq-page">
			<div className="faq-header">
				<span className="section-eyebrow">Got Questions?</span>
				<h1 className="section-heading">Frequently Asked <em>Questions</em></h1>
			</div>
			<div className="faq-list">
				{faqData.map((item, i) => (
					<div key={i} className={`faq-item${openIndex === i ? " faq-item--open" : ""}`}>
						<button className="faq-question" onClick={() => toggle(i)}>
							<span>{item.question}</span>
							<span className="faq-icon">{openIndex === i ? "−" : "+"}</span>
						</button>
						<div className="faq-answer-wrapper">
							<div className="faq-answer">
								{item.answer.map((p, j) => (
									<p key={j}>{p}</p>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default FAQ;
