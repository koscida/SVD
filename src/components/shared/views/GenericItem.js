import { Box, Card, CardContent, Divider, Paper } from "@mui/material";
import styled from "styled-components";

import RenderImg from "../Icons/RenderImg";
import RenderImageSmall from "../Icons/RenderImageSmall";

//
const CropView = ({
	item: {
		Grow: { ingredients, time, amount },
	},
}) => {
	const seeds = ingredients[0].ingredient;
	return (
		<>
			<h4>Grow</h4>
			<div style={{ display: "flex", flexDirection: "row" }}>
				<div>
					<p>
						<RenderImageSmall label={seeds} />
						{seeds}
					</p>
					<Divider />
					<p>
						{time.time} Days
						{time.regrow
							? " (Regrow: " + time.regrowTime + " Days)"
							: ""}
					</p>
					{amount.Chance ? (
						<>
							<Divider />
							<p>
								{amount.Min}
								{amount.Chance
									? ` (Chance of a Multiplier: ${amount.Chance}% chance of X${amount.Multiplier})`
									: ""}
							</p>
						</>
					) : (
						<></>
					)}
				</div>
			</div>
		</>
	);
};

const FishView = ({ item }) => (
	<>
		<h4>Fish</h4>
		{item.Legend ? <p>Legend</p> : <></>}
		{item.Legend ? <p>Legend</p> : <></>}
	</>
);

const ForageView = ({ item }) => (
	<>
		<h4>Forage</h4>
		<p>TOOO</p>
	</>
);

const MonsterView = ({ item }) => (
	<>
		<h4>Monster</h4>
		<p>TOOO</p>
	</>
);

const CookingView = ({ item }) => (
	<>
		<h4>Cooking</h4>
		<div style={{ display: "flex", flexDirection: "row", gap: "1em" }}>
			<div>
				<p>Ingredients</p>
				{item.Cooking.ingredients.map((ingredient) => (
					<p key={ingredient.ingredient}>
						<RenderImageSmall label={ingredient.ingredient} />
						{ingredient.ingredient} ({ingredient.amount})
					</p>
				))}
			</div>
			<div>
				<p>Recipe Source</p>
				{Object.entries(item.recipeSources).map(
					([source, sourceInfo]) => (
						<p key={source}>
							{source === "Friendship" ? (
								<>
									<RenderImageSmall
										label={sourceInfo.friend}
									/>
									{sourceInfo.friend}, {sourceInfo.hearts}{" "}
									hearts
								</>
							) : source === "Shop" ? (
								<>
									<RenderImageSmall
										label={sourceInfo.shopName}
									/>
									{sourceInfo.shopName},{" "}
									{sourceInfo.price ? (
										<>{sourceInfo.price} gold</>
									) : sourceInfo.artifact ? (
										<>
											<RenderImageSmall
												label={sourceInfo.artifact}
											/>
											{sourceInfo.artifact} (
											{sourceInfo.amount})
										</>
									) : (
										<></>
									)}
								</>
							) : source === "Skill" ? (
								<>
									<RenderImageSmall
										label={sourceInfo.skill}
									/>{" "}
									{sourceInfo.skill}, Level {sourceInfo.level}
								</>
							) : source === "The Queen of Sauce" ? (
								<>
									<RenderImageSmall label={source} />{" "}
									{sourceInfo.year}, {sourceInfo.date}
								</>
							) : source === "Starter" ? (
								<>Starter</>
							) : (
								<>{source}</>
							)}
						</p>
					)
				)}
			</div>
		</div>
	</>
);

//
const AnimalProductView = ({ item }) => (
	<>
		<h4>Animals</h4>
		<p>TOOO</p>
		{/* <p>
			{animalProduct.animals.map((animal, i) => (
				<span key={i}>
					<RenderImg
						label={animal}
						styles={{ padding: "0 10px 0 0" }}
					/>
					{animal.name}
				</span>
			))}
		</p> */}
	</>
);

//
const ArtisanProductsView = ({ item }) => (
	<>
		<h4>Equipment</h4>
		<p>TOOO</p>
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

const StyledItem = styled.div`
	> .MuiPaper-root {
		padding: 1em;
		margin: 0 1em 1em;

		display: flex;
		flex-direction: row;

		.MuiCard-root {
			padding: 0;
			margin: 0 0.5em 0.5em 0;

			.MuiCardContent-root {
				padding: 1em;

				h4 {
					margin: 0 0 0.75em 0;
				}
				p {
					margin: 0 0 0.5em 0;
				}

				hr {
					margin: 0.5em 0;
				}
			}
		}
	}
`;

//
export default function GenericItem({ item }) {
	console.log("--GenericItem-- item: ", item);
	return (
		<StyledItem>
			<Paper>
				<Card variant="outlined">
					<CardContent>
						<div>
							<h4>{item.name}</h4>
							<p>
								<i>
									{item["type"]}{" "}
									{item["sub-type"]
										? `: ${item["sub-type"]}`
										: ""}
								</i>
							</p>
							{item.description ? (
								<>
									<p>{item.description}</p>
								</>
							) : (
								<></>
							)}
							{item.seasons ? (
								<>
									<p>Seasons: {item.seasons.join(", ")}</p>
								</>
							) : (
								<></>
							)}
						</div>
					</CardContent>
				</Card>

				{item.sell ? (
					<Card variant="outlined">
						<CardContent>
							<>
								<h4>Sell Price</h4>
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
				) : (
					<></>
				)}

				{item.edible ? (
					<Card variant="outlined">
						<CardContent>
							<>
								<h4>Edible</h4>
								<div>
									{item.edible ? (
										<>edible</>
									) : (
										<>Not edible</>
									)}
								</div>
							</>
						</CardContent>
					</Card>
				) : (
					<></>
				)}

				<Card variant="outlined">
					<CardContent>
						<div>
							{item.type === "Forage" ? (
								<ForageView item={item} />
							) : item.type === "Animal Product" ? (
								<AnimalProductView item={item} />
							) : item.type === "Artisan Product" ? (
								<ArtisanProductsView item={item} />
							) : item.type === "Fish" ? (
								<FishView item={item} />
							) : item.type === "Monster" ? (
								<MonsterView item={item} />
							) : (
								<></>
							)}
							{item.Grow ? <CropView item={item} /> : <></>}

							{item.Cooking ? <CookingView item={item} /> : <></>}
						</div>
					</CardContent>
				</Card>
			</Paper>
		</StyledItem>
	);
}
