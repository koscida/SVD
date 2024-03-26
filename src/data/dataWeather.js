// ////
// weather
const weather = {
	Sun: {
		name: "Sun",
		shortName: "Su",
		type: 1,
		images: {
			Spring: "StatusSun.png",
			Summer: "StatusSun.png",
			Fall: "StatusSun.png",
			Winter: "StatusSun.png",
		},
	},
	Rain: {
		name: "Rain",
		shortName: "Rn",
		type: 2,
		images: {
			Spring: "StatusRain.png",
			Summer: "StatusRain.png",
			Fall: "StatusRain.png",
			Winter: "StatusRain.png",
		},
	},
	Snow: {
		name: "Snow",
		shortName: "Sw",
		type: 2,
		images: {
			Winter: "StatusSnow.png",
		},
	},
	Wind: {
		name: "Wind",
		shortName: "Wd",
		type: 4,
		images: {
			Spring: "StatusWindSpring.png",
			Fall: "StatusWindFall.png",
		},
	},
};
exports.weather = weather;
exports.weatherNames = Object.keys(weather);
