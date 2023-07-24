import { Box, Card, CardContent, Divider } from "@mui/material";
import RenderImg from "../Icons/RenderImg";

//
const CropView = ({ crop }) => (
	<>
		<h4>Grow</h4>
		<p>
			Seeds:
			<RenderImg label={crop.seeds} styles={{ padding: "0 10px 0 0" }} />
			{crop.seeds}
		</p>
		<p>Seasons: {crop.season.join(", ")}</p>
		<p>
			Grow Time: {crop.growTime} Days
			{crop.regrow ? "(Regrow: " + crop.regrowTime + " Days)" : ""}
		</p>
	</>
);
// exports.CropView = CropView;

//
const ForageView = ({ forage }) => (
	<>
		<h4>Forage</h4>
	</>
);
// exports.ForageView = ForageView;

//
const AnimalProductView = ({ animalProduct }) => (
	<>
		<h4>Animals</h4>
		<p>
			{animalProduct.animals.map((animal, i) => (
				<span key={i}>
					<RenderImg
						label={animal}
						styles={{ padding: "0 10px 0 0" }}
					/>
					{animal.name}
				</span>
			))}
		</p>
	</>
);
// exports.AnimalProductView = AnimalProductView;

//
const ArtisanProductsView = ({ artisanProduct }) => (
	<>
		<h4>Equipment</h4>
		{/* <p>Machine: {artisanProduct.machine}</p> */}
		{/* <p>
			Processing Time:{" "}
			{artisanProduct.time.days > 1.0
				? artisanProduct.time.days + " Days"
				: artisanProduct.time.hours > 1.0
				? artisanProduct.time.hours + " Hours"
				: artisanProduct.time.minutes + " Minutes"}
		</p> */}
		{/* <p>Ingredients: {artisanProduct.machine}</p> */}
	</>
);
// exports.ArtisanProductsView = ArtisanProductsView;

//
export default function GenericItem({ item, type }) {
	return (
		<>
			<Box sx={{ display: "flex", flexDirection: "row" }}>
				<Card variant="outlined">
					<CardContent>
						<div>
							<h4>Information</h4>
							<p>
								<i>{item["sub-type"]}</i>
							</p>
							<p>{item.description}</p>
							<Divider />
							<p>Sources: </p>
						</div>
					</CardContent>
				</Card>

				<Card variant="outlined">
					<CardContent>
						<>
							<h4>Sell Prices</h4>
							<div>
								{typeof item.sell === "object" ? (
									item.sell.type === "Unsellable" ? (
										<div>Unsellable</div>
									) : item.sell.type === "Flat" ? (
										<div>{item.sell.price}</div>
									) : item.sell.type === "Quality" ? (
										<div
											style={{
												display: "flex",
												flexDirection: "row",
											}}
										>
											{[
												"Regular",
												"Silver",
												"Gold",
												"Iridium",
											].map((quality, i) => (
												<div key={i}>
													<RenderImg
														label={`${quality} Quality`}
													/>
													{item.sell[quality]}
												</div>
											))}
										</div>
									) : (
										<>{item.sell.type}</>
									)
								) : (
									<>"no sell"</>
								)}
							</div>
						</>
					</CardContent>
				</Card>

				<Card variant="outlined">
					<CardContent>
						<div>
							{type === "Crop" ? (
								<CropView crop={item} />
							) : type === "Forage" ? (
								<ForageView forage={item} />
							) : type === "Animal Product" ? (
								<AnimalProductView animalProduct={item} />
							) : type === "Artisan Product" ? (
								<ArtisanProductsView artisanProduct={item} />
							) : (
								<></>
							)}
						</div>
					</CardContent>
				</Card>
			</Box>
		</>
	);
}
