function Contact() {
	return (
		<div className="contact-container">
			<div className="contact-header reveal">
				<span className="section-eyebrow">Let's Connect</span>
				<h2 className="section-heading">
					Start your <em>floral story</em>
				</h2>
				<p>Fill out the form below and we'll be in touch within 24 hours</p>
			</div>
			<form
				className="contact-form"
				action="https://formspree.io/f/REPLACE_WITH_LEE_FORM_ID"
				method="POST"
			>
				<div className="form-row">
					<div className="form-group">
						<label className="form-label" htmlFor="fullName">Names</label>
						<input type="text" id="fullName" name="fullName" placeholder="Your name & partner's name" />
					</div>
					<div className="form-group">
						<label className="form-label" htmlFor="phone">Phone</label>
						<input type="tel" id="phone" name="phone" placeholder="Your phone number" />
					</div>
				</div>

				<div className="form-row">
					<div className="form-group">
						<label className="form-label" htmlFor="email">Email</label>
						<input type="email" id="email" name="email" placeholder="Your email address" />
					</div>
					<div className="form-group">
						<label className="form-label" htmlFor="date">Event Date</label>
						<input type="date" id="date" name="date" />
					</div>
				</div>

				<div className="form-row">
					<div className="form-group">
						<label className="form-label" htmlFor="location">Event Location</label>
						<input type="text" id="location" name="location" placeholder="City, venue" />
					</div>
					<div className="form-group">
						<label className="form-label" htmlFor="eventType">Event Type</label>
						<input type="text" id="eventType" name="eventType" placeholder="Wedding, shower, etc." />
					</div>
				</div>

				<div className="form-row">
					<div className="form-group">
						<label className="form-label" htmlFor="budget">Floral Budget</label>
						<input type="text" id="budget" name="budget" placeholder="Approximate budget" />
					</div>
					<div className="form-group">
						<label className="form-label" htmlFor="colors">Color Palette</label>
						<input type="text" id="colors" name="colors" placeholder="Your colors" />
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
						placeholder="Share your vision, quantities, and any other details..."
					></textarea>
				</div>

				<div className="form-row">
					<div className="form-group">
						<label className="form-label" htmlFor="instagramHandle">Instagram Handle</label>
						<input type="text" id="instagramHandle" name="instagramHandle" placeholder="@handle" />
					</div>
					<div className="form-group">
						<label className="form-label" htmlFor="pinterestLink">Pinterest Board</label>
						<input type="url" id="pinterestLink" name="pinterestLink" placeholder="Link to your inspo board" />
					</div>
				</div>

				<div className="submit-button-container">
					<button type="submit" className="submit-button">
						Send Inquiry
					</button>
				</div>
			</form>
		</div>
	);
}

export default Contact;
