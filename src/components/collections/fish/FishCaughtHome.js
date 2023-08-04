import React from "react";
import { useState } from "react";
import CollectionView from "../CollectionView";
import {
	Typography,
	Box,
	Paper,
	TextField,
	Divider,
	Card,
	CardContent,
	FormGroup,
	FormControlLabel,
	Switch,
} from "@mui/material";

import {
	shipped,
	shippedTypes,
	seasons,
} from "../../shared/data/collectionShipped";
import { crops } from "../../shared/data/dataCrops";
import { foraging } from "../../shared/data/foraging";
import { animalProducts } from "../../shared/data/dataAnimals";
import { artisanProducts } from "../../shared/data/artisanProducts";

import useLocalStorage from "../../shared/useLocalStorage";
import RenderImg from "../../shared/Icons/RenderImg";
import CancelImg from "../../shared/Icons/CancelImg";
import CollectionTabs from "../CollectionTabs";
import MultipleSelectChip from "../../shared/inputs/MultipleSelectChip";
import GenericItem from "../../shared/views/GenericItem";
import CollectionPageGeneric from "../CollectionPageGeneric";

// ////
// FishCaughtHome()

function FishCaughtHome() {
	return (
		<>
			<CollectionPageGeneric
				collectionName={"Fish"}
				collectionItemName={"Fish"}
				collectionGoal={"Caught"}
			/>
		</>
	);
}

export default FishCaughtHome;
