import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function BookingPopup() {
	const [visible, setVisible] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		const timer = setTimeout(() => setVisible(true), 15000);
		return () => clearTimeout(timer);
	}, []);

	const handleInquire = () => {
		setVisible(false);
		navigate("/contact");
	};

	if (!visible) return null;

	return (
		<div className="popup-overlay" onClick={() => setVisible(false)}>
			<div className="popup-card" onClick={(e) => e.stopPropagation()}>
				<button className="popup-close" onClick={() => setVisible(false)} aria-label="Close">✕</button>
				<div className="popup-petals">✿ ❀ ✿ ❀ ✿</div>
				<p className="popup-eyebrow">Now Booking</p>
				<h2 className="popup-years">2026 + 2027</h2>
				<p className="popup-sub">Let's make your day unforgettable</p>
				<button className="popup-btn" onClick={handleInquire}>
					Inquire Now
				</button>
				<div className="popup-petals popup-petals--bottom">✿ ❀ ✿ ❀ ✿</div>
			</div>
		</div>
	);
}

export default BookingPopup;
