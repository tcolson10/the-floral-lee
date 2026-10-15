import { useState } from "react";

const FORM_ENDPOINT = "https://formspree.io/f/xaqkozdy";

// "2027-06-12" -> "June 12, 2027". Built from the parts so the time zone can't shift the day.
const formatDate = (value) => {
	const [y, m, d] = value.split("-").map(Number);
	if (!y || !m || !d) return value;
	return new Date(y, m - 1, d).toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric",
	});
};

function Contact() {
	const [status, setStatus] = useState("idle");
	const [budget, setBudget] = useState("");

	// Adds $ only when the value starts with a number, so "Not sure yet" is left alone.
	const handleBudget = (e) => {
		const rest = e.target.value.replace(/^[\s$]+/, "");
		setBudget(/^\d/.test(rest) ? `$${rest}` : rest);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus("sending");
		const data = new FormData(e.target);
		// Formspree uses _subject as the email's subject line.
		const names = data.get("fullName").trim();
		const date = formatDate(data.get("date"));
		data.append("_subject", `New Inquiry: ${names}, ${date}`);
		try {
			const res = await fetch(FORM_ENDPOINT, {
				method: "POST",
				body: data,
				headers: { Accept: "application/json" },
			});
			if (!res.ok) throw new Error(`Formspree responded ${res.status}`);
			setStatus("sent");
		} catch {
			setStatus("error");
		}
	};

	return (
		<div className="contact-container">
			<div className="contact-header reveal">
				<span className="section-eyebrow">So happy you are here</span>
				<h2 className="section-heading">
					Let's Dream Up Something <em>Beautiful</em> Together
				</h2>
				<p>Fill out the form below and we'll be in touch within 24 hours</p>
			</div>
			{status === "sent" ? (
				<div className="form-status form-status-sent" role="status">
					<h3>Thank you!</h3>
					<p>Your inquiry is on its way. We'll be in touch within 24 hours.</p>
				</div>
			) : (
				<form className="contact-form" onSubmit={handleSubmit}>
					<input
						type="text"
						name="_gotcha"
						className="form-honeypot"
						tabIndex={-1}
						autoComplete="off"
						aria-hidden="true"
					/>
					<div className="form-row">
						<div className="form-group">
							<label className="form-label" htmlFor="fullName">Names</label>
							<input type="text" id="fullName" name="fullName" placeholder="Your name & partner's name" required />
						</div>
						<div className="form-group">
							<label className="form-label" htmlFor="phone">Phone</label>
							<input type="tel" id="phone" name="phone" placeholder="Your phone number" />
						</div>
					</div>

					<div className="form-row">
						<div className="form-group">
							<label className="form-label" htmlFor="email">Email</label>
							<input type="email" id="email" name="email" placeholder="Your email address" required />
						</div>
						<div className="form-group">
							<label className="form-label" htmlFor="date">Event Date</label>
							<input type="date" id="date" name="date" required />
						</div>
					</div>

					<div className="form-row">
						<div className="form-group">
							<label className="form-label" htmlFor="location">Event Location</label>
							<input type="text" id="location" name="location" placeholder="City, venue" />
						</div>
						<div className="form-group">
							<label className="form-label" htmlFor="eventType">Event Type</label>
							<input type="text" id="eventType" name="eventType" placeholder="Wedding, shower, etc." required />
						</div>
					</div>

					<div className="form-row">
						<div className="form-group">
							<label className="form-label" htmlFor="budget">Floral Budget</label>
							<input type="text" id="budget" name="budget" placeholder="What's your floral budget?" value={budget} onChange={handleBudget} />
						</div>
						<div className="form-group">
							<label className="form-label" htmlFor="colors">Color Palette</label>
							<input type="text" id="colors" name="colors" placeholder="What colors are you thinking of for your florals?" />
						</div>
					</div>

					<div className="form-group">
						<label className="form-label" htmlFor="flowers">Specific Flowers (if any)</label>
						<input type="text" id="flowers" name="flowers" placeholder="Any must-have blooms" />
					</div>

					<div className="form-group">
						<label className="form-label" htmlFor="description">Tell Us More</label>
						<textarea
							id="description"
							name="description"
							rows="4"
							placeholder="Share all your fun details with me!"
						></textarea>
					</div>

					<div className="form-group">
						<label className="form-label" htmlFor="hearAboutUs">How did you hear about us?</label>
						<input type="text" id="hearAboutUs" name="hearAboutUs" placeholder="Social media, referral, vendor list, etc." />
					</div>

					<div className="form-group">
						<label className="form-label" htmlFor="pinterestLink">Pinterest Board</label>
						<input type="url" id="pinterestLink" name="pinterestLink" placeholder="Link to your Pinterest board or any inspiration" />
					</div>

					{status === "error" && (
						<p className="form-status form-status-error" role="alert">
							Something went wrong sending your inquiry. Please try again.
						</p>
					)}

					<div className="submit-button-container">
						<button type="submit" className="submit-button" disabled={status === "sending"}>
							{status === "sending" ? "Sending..." : "Send Inquiry"}
						</button>
					</div>
				</form>
			)}
		</div>
	);
}

export default Contact;
