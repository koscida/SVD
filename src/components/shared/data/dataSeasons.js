// ////
// seasons
const seasons = {
	Spring: {
		id: 1,
		name: "Spring",
		image: "Spring.png",
		weather: ["Sun", "Rain", "Wind"],
	},
	Summer: {
		id: 2,
		name: "Summer",
		image: "Summer.png",
		weather: ["Sun", "Rain"],
	},
	Fall: {
		id: 3,
		name: "Fall",
		image: "Fall.png",
		weather: ["Sun", "Rain", "Wind"],
	},
	Winter: {
		id: 4,
		name: "Winter",
		image: "Winter.png",
		weather: ["Sun", "Snow", "Rain"],
	},
};
exports.seasons = seasons;
exports.seasonsNames = Object.keys(seasons);
