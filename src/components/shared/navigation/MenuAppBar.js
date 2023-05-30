import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";

import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Drawer from "@mui/material/Drawer";
import Collapse from "@mui/material/Collapse";

import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import WifiIcon from "@mui/icons-material/Wifi";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import RenderImg from "../Icons/RenderImg";
import navigationLinks from "./navigationLinks";
import { skills, professions } from "../data/professions";

// settings init holds the profession settings init
const professionInfo = Object.entries(professions);
const settingsInit = professionInfo.reduce((init, [name]) => {
	init[name] = false;
	return init;
}, {});
settingsInit["isModsAllowed"] = false;

// state init holds the initial menu states
let stateInit = {};

const navSectionLabels = Object.keys(navigationLinks);
stateInit = navSectionLabels.reduce((init, name) => {
	init[name] = true;
	return init;
}, stateInit);

stateInit["navigation"] = false;
stateInit["settings"] = false;

export default function MenuAppBar() {
	const [settings, setSettings] = React.useState(settingsInit);
	const [profileAnchorEl, setProfileAnchorEl] = React.useState(null);

	const [openState, setOpenState] = React.useState(stateInit);

	// const [drawerState, setDrawerState] = React.useState({
	// 	navigation: false,
	// 	settings: false,
	// });
	// const [listOpen, setListOpen] = React.useState(listOpenInit);

	const toggleDrawer = (listName, open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		handleProfileClose();

		setOpenState({ ...openState, [listName]: open });
	};

	const toggleNavGroup = (navSection) => (event) => {
		setOpenState({
			...openState,
			[navSection]: !openState[navSection],
			navigation: true,
		});
	};

	const handleProfessionChange = (settingName, value) => (event) => {
		setOpenState({ ...openState, settings: true });
		setSettings({ ...settings, [settingName]: value });
	};

	const handleProfileOpen = (event) => {
		setProfileAnchorEl(event.currentTarget);
	};

	const handleProfileClose = (event) => {
		setProfileAnchorEl(null);
	};

	const list = (listName) => (
		// <Box
		// 	role="presentation"
		// 	onClick={toggleDrawer(listName, false)}
		// 	onKeyDown={toggleDrawer(listName, false)}
		// >
		<Box role="presentation" onKeyDown={toggleDrawer(listName, false)}>
			{listName === "navigation" ? (
				<>
					<List>
						{Object.entries(navigationLinks).map(
							([sectionLabel, navigationLinks]) => (
								<React.Fragment key={sectionLabel}>
									<ListItemButton onClick={toggleNavGroup(sectionLabel)}>
										<ListItemText primary={sectionLabel} />
										{openState[sectionLabel] ? <ExpandLess /> : <ExpandMore />}
									</ListItemButton>

									<Collapse
										in={openState[sectionLabel]}
										timeout="auto"
										unmountOnExit
									>
										<List component="div" disablePadding>
											{navigationLinks.map(({ to, label }) => (
												<ListItemButton component="a" href={to} key={label}>
													<ListItemText primary={label} />
												</ListItemButton>
											))}
										</List>
									</Collapse>
								</React.Fragment>
							)
						)}
					</List>
				</>
			) : listName === "settings" ? (
				<>
					<List>
						<ListItem>
							<FormGroup>
								<FormControlLabel
									control={
										<Switch
											checked={settings["isModsAllowed"]}
											onChange={handleProfessionChange(
												"isModsAllowed",
												!settings["isModsAllowed"]
											)}
											aria-label="are mods allowed"
										/>
									}
									label="Are mods allowed?"
								/>
							</FormGroup>
						</ListItem>

						<Divider />
						{skills.map((skill) => (
							<React.Fragment key={skill}>
								<ListItem>
									<ListItemIcon>
										<RenderImg label={skill} />
									</ListItemIcon>
									<ListItemText
										id={`switch-list-label-${skill}`}
										primary={skill}
									/>
								</ListItem>
								{professionInfo
									.filter(([name]) => professions[name].skill === skill)
									.map(([name, data]) => {
										// disable if: !mods &&
										//		this is not selected and another current level is selected
										// 		this is a 10 that requires a preq that is not selected
										// if mode enabled, never disable
										const disabled =
											!settings["isModsAllowed"] &&
											((!settings[name] && settings[data["alternative"]]) ||
												(data.level === "Level 10" &&
													!settings[data["Level 5"]]))
												? true
												: false;
										return (
											<ListItem key={name}>
												<ListItemIcon>
													<RenderImg label={name} />
												</ListItemIcon>
												<ListItemText
													id={`switch-list-label-${name}`}
													primary={name}
													disabled={disabled}
												/>
												<Switch
													edge="end"
													onChange={handleProfessionChange(
														name,
														!settings[name]
													)}
													checked={settings[name]}
													inputProps={{
														"aria-labelledby": `switch-list-label-${name}`,
													}}
													disabled={disabled}
												/>
											</ListItem>
										);
									})}
								<Divider />
							</React.Fragment>
						))}
					</List>
				</>
			) : (
				<></>
			)}
		</Box>
	);

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
						onClick={toggleDrawer("navigation", true)}
					>
						<MenuIcon />
					</IconButton>

					<Drawer
						anchor={"left"}
						open={openState["navigation"]}
						onClose={toggleDrawer("navigation", false)}
					>
						{list("navigation")}
					</Drawer>

					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						SVD
					</Typography>
					{
						<div>
							{/* Right Drawer */}
							<IconButton
								size="large"
								aria-label="settings"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								color="inherit"
								onClick={toggleDrawer("settings", true)}
							>
								<SettingsIcon />
							</IconButton>

							<Drawer
								anchor={"right"}
								open={openState["settings"]}
								onClose={toggleDrawer("settings", false)}
							>
								{list("settings")}
							</Drawer>

							{/* account drop down */}
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleProfileOpen}
								color="inherit"
							>
								<AccountCircle />
							</IconButton>

							<Menu
								id="menu-appbar"
								anchorEl={profileAnchorEl}
								anchorOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								open={Boolean(profileAnchorEl)}
								onClose={handleProfileClose}
							>
								<MenuItem onClick={handleProfileClose}>Profile</MenuItem>
								<MenuItem onClick={handleProfileClose}>My account</MenuItem>
							</Menu>
						</div>
					}
				</Toolbar>
			</AppBar>
		</Box>
	);
}
