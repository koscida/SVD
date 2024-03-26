import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import useLocalStorage from "../components/shared/useLocalStorage";

import { fish, fishTypes } from "../data/fish";
import { professions } from "../data/professions";

const GameContext = createContext();

const err = (e) => console.log(`Message: ${e.data.message}\nError: ${e}`);

// settings init holds the profession settings init
const professionInfo = Object.entries(professions);
const professionSettings = professionInfo.reduce((init, [name]) => {
	init[name] = false;
	return init;
}, {});

const getInitSVDData = (version) => ({
	fish: fish
		.map((f) => ({ ...f, id: parseInt(f.id) }))
		.filter((f) => f.version <= version)
		.sort((a, b) => b.id < a.id),
	fishTypes,
	seasons: ["Spring", "Summer", "Fall", "Winter"],
});

const getInitUserData = () => ({
	fishCaught: fish.map((f) => ({ name: f.name, id: f.id, caught: 0 })),
});

const getInitGameData = (version, professionInfo) => ({
	svdData: getInitSVDData(version),
	settings: {
		version,
		isModsAllowed: false,
		month: "Spring",
		...professionSettings,
	},
	professionInfo,
	userData: getInitUserData(),
});

// Provider

const GameProvider = ({ children }) => {
	const [gameData, setGameData] = useLocalStorage(
		"svd-game-data",
		getInitGameData(1.4, professionInfo)
	);

	// on load

	useEffect(() => {
		// console.log("--GameProvider--useEffect--");
		loadGameData();
	}, []);

	const loadGameData = () => {
		//setGameData(getInitGameData(gameData.settings.version, professionInfo));
	};

	// handlers

	const setSettings = (settings) => {
		setGameData({ ...gameData, settings });
	};

	const setUserData = (userData) => {
		setGameData({ ...gameData, userData });
	};

	// render

	return (
		<GameContext.Provider
			value={{
				gameData,
				setSettings,
				setUserData,
			}}
		>
			{children}
		</GameContext.Provider>
	);
};

const useGameContext = () => useContext(GameContext);

export { GameProvider, useGameContext };
