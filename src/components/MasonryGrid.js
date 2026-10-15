import { useEffect, useState } from "react";

// Matches the breakpoints in index.css: 2 columns at 900px and below, 3 above.
const NARROW_QUERY = "(max-width: 900px)";

function useColumnCount() {
	const [count, setCount] = useState(() =>
		window.matchMedia(NARROW_QUERY).matches ? 2 : 3
	);

	useEffect(() => {
		const mql = window.matchMedia(NARROW_QUERY);
		const onChange = () => setCount(mql.matches ? 2 : 3);
		mql.addEventListener("change", onChange);
		return () => mql.removeEventListener("change", onChange);
	}, []);

	return count;
}

// Places each image in the currently shortest column using its known aspect
// ratio. Explicit columns avoid CSS multi-column balancing, which iOS Safari
// gets wrong with lazy-loaded images (one column ends up far longer).
function distribute(images, columnCount) {
	const columns = Array.from({ length: columnCount }, () => []);
	const heights = new Array(columnCount).fill(0);
	images.forEach((image, index) => {
		const shortest = heights.indexOf(Math.min(...heights));
		columns[shortest].push({ ...image, index });
		heights[shortest] += image.h / image.w;
	});
	return columns;
}

function MasonryGrid({ images, onSelect, eagerCount = 0 }) {
	const columns = distribute(images, useColumnCount());

	return (
		<div className="masonry-grid">
			{columns.map((column, c) => (
				<div className="masonry-column" key={c}>
					{column.map(({ src, w, h, index }) => (
						<button
							type="button"
							className="masonry-item"
							key={index}
							onClick={() => onSelect(index)}
							aria-label="View full image"
						>
							<img
								src={src}
								alt=""
								width={w}
								height={h}
								loading={index < eagerCount ? "eager" : "lazy"}
								fetchpriority={index < eagerCount ? "high" : "auto"}
								decoding="async"
								onLoad={(e) => e.target.classList.add("loaded")}
							/>
						</button>
					))}
				</div>
			))}
		</div>
	);
}

export default MasonryGrid;
