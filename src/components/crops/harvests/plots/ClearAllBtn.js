import React, { useState } from "react";

export default function ClearAllBtn({ handleClear }) {
	const [showClearConfirm, setShowClearConfirm] = useState(false);

	return (
		<>
			<div>
				{!showClearConfirm ? (
					<button
						className="btn ms-auto"
						onClick={() => {
							setShowClearConfirm(true);
						}}
					>
						Clear All
					</button>
				) : (
					<div>
						<p>
							Confirm - Do you want to clear/delete all plots
							(this cannot be undone!)
						</p>
						<button className="btn ms-auto" onClick={handleClear}>
							Confirm
						</button>
						<button
							className="btn ms-auto"
							onClick={() => {
								setShowClearConfirm(false);
							}}
						>
							Cancel
						</button>
					</div>
				)}
			</div>
		</>
	);
}
