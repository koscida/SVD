// ////
// seasons
const seasons = {
	Spring: {
		name: "Spring",
		id: 1,
		weather: ["Sun", "Rain", "Wind"],
	},
	Summer: {
		name: "Summer",
		id: 2,
		weather: ["Sun", "Rain"],
	},
	Fall: {
		name: "Fall",
		id: 3,
		weather: ["Sun", "Rain", "Wind"],
	},
	Winter: {
		name: "Winter",
		id: 4,
		weather: ["Sun", "Rain", "Snow"],
	},
};
exports.seasons = seasons;
exports.seasonsNames = Object.keys(seasons);
