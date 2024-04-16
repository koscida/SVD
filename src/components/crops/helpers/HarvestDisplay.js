import React from "react";
import RenderImageSmall from "../../shared/Icons/RenderImageSmall";

export default function HarvestDisplay(newCrop, days, seasonDays) {
	const harvestCalendarStyles = {
		display: "grid",
		gridTemplateColumns: "repeat(7, 1fr)",
	};
	const harvestCalendarDivStyles = {
		border: "1px solid black",
		boxSizing: "border-box",
		display: "flex",
		flexDirection: "row",
		textAlign: "center",
		padding: "2px",
	};

	return (
		<div
			style={{
				...harvestCalendarStyles,
				gridTemplateRows: (
					"calc(0.55rem + 4px) repeat(" +
					(seasonDays / 7).toString() +
					", 1fr)"
				).toString(),
			}}
		>
			{["M", "T", "W", "Th", "F", "Sa", "Su"].map((day) => (
				<div
					style={{
						...harvestCalendarDivStyles,
						background: "#ddd",
						fontSize: "0.5rem",
						lineHeight: "0.55rem",
					}}
					key={day}
				>
					{day}
				</div>
			))}
			{[...Array(seasonDays + 1).keys()].slice(1).map((day) => (
				<div
					key={day}
					style={{
						...harvestCalendarDivStyles,
						background:
							!days.includes(day) && day > days[days.length - 1]
								? "#e3e3e3"
								: "default",
					}}
				>
					{/* day */}
					<p style={{ fontSize: "0.5rem", lineHeight: "0.55rem" }}>
						{((day - 1) % 28) + 1}
					</p>

					{/* grow crop */}
					{day === 1 ||
					(!newCrop.regrow &&
						days.includes(day) &&
						day !== days[days.length - 1]) ? (
						<RenderImageSmall
							label={newCrop.seeds}
							styles={{ height: "0.5rem", padding: 0 }}
						/>
					) : (
						<></>
					)}

					{/* harvest crop */}
					{days.includes(day) ? (
						<RenderImageSmall
							label={newCrop.name}
							styles={{ height: "0.5rem", padding: 0 }}
						/>
					) : (
						<></>
					)}
				</div>
			))}
		</div>
	);
}
