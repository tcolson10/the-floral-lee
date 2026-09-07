import { useCallback, useEffect, useState } from "react";

function Lightbox({ images, startIndex = 0, onClose }) {
	const [index, setIndex] = useState(startIndex);

	const go = useCallback(
		(dir) => {
			setIndex((i) => (i + dir + images.length) % images.length);
		},
		[images.length]
	);

	// Keyboard controls
	useEffect(() => {
		const onKey = (e) => {
			if (e.key === "Escape") onClose();
			else if (e.key === "ArrowRight") go(1);
			else if (e.key === "ArrowLeft") go(-1);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [go, onClose]);

	// Lock body scroll while open
	useEffect(() => {
		const prev = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = prev;
		};
	}, []);

	// Basic swipe support
	const [touchX, setTouchX] = useState(null);
	const onTouchStart = (e) => setTouchX(e.touches[0].clientX);
	const onTouchEnd = (e) => {
		if (touchX === null) return;
		const dx = e.changedTouches[0].clientX - touchX;
		if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
		setTouchX(null);
	};

	const current = images[index];

	return (
		<div className="lightbox" onClick={onClose} role="dialog" aria-modal="true">
			<button className="lightbox-close" onClick={onClose} aria-label="Close">
				✕
			</button>
			<button
				className="lightbox-nav lightbox-nav--prev"
				onClick={(e) => {
					e.stopPropagation();
					go(-1);
				}}
				aria-label="Previous image"
			>
				&#8249;
			</button>
			<div
				className="lightbox-stage"
				onClick={(e) => e.stopPropagation()}
				onTouchStart={onTouchStart}
				onTouchEnd={onTouchEnd}
			>
				<img
					key={current.src}
					src={current.src}
					alt=""
					width={current.w}
					height={current.h}
				/>
			</div>
			<button
				className="lightbox-nav lightbox-nav--next"
				onClick={(e) => {
					e.stopPropagation();
					go(1);
				}}
				aria-label="Next image"
			>
				&#8250;
			</button>
			<div className="lightbox-count">
				{index + 1} / {images.length}
			</div>
		</div>
	);
}

export default Lightbox;
