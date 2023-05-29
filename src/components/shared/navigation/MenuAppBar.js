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

import navigationLinks from "./navigationLinks";
import { skills, professions } from "../data/professions";

const professionNames = Object.keys(professions);
const settingsInit = professionNames.reduce((init, name) => {
	init[name] = false;
	return init;
}, {});
settingsInit["isModsAllowed"] = false;

const navLabels = Object.keys(navigationLinks);
const listOpenInit = navLabels.reduce((init, name) => {
	init[name] = true;
	return init;
}, {});

export default function MenuAppBar() {
	const [profileAnchorEl, setProfileAnchorEl] = React.useState(null);
	const [drawerState, setDrawerState] = React.useState({
		navigation: false,
		settings: false,
	});
	const [listOpen, setListOpen] = React.useState(listOpenInit);
	const [settings, setSettings] = React.useState(settingsInit);

	const handleSettingsChange = (settingName, value) => (event) => {
		setDrawerState({ ...drawerState, settings: true });
		setSettings({ ...settings, [settingName]: value });
	};

	const handleProfileOpen = (event) => {
		setProfileAnchorEl(event.currentTarget);
	};

	const handleProfileClose = () => {
		setProfileAnchorEl(null);
	};

	const toggleDrawer = (listName, open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		handleProfileClose();

		setDrawerState({ ...drawerState, [listName]: open });
	};

	const handleNavClick = (navSection) => (event) => {
		setDrawerState({ ...drawerState, navigation: true });
		setListOpen({ ...listOpen, [navSection]: !listOpen[navSection] });
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
									<ListItemButton onClick={handleNavClick(sectionLabel)}>
										<ListItemText primary={sectionLabel} />
										{listOpen[sectionLabel] ? <ExpandLess /> : <ExpandMore />}
									</ListItemButton>

									<Collapse
										in={listOpen[sectionLabel]}
										timeout="auto"
										unmountOnExit
									>
										<List component="div" disablePadding>
											{navigationLinks.map(({ to, label }) => (
												<ListItemButton component="a" href={to} key={label}>
													<ListItemIcon>
														<InboxIcon />
													</ListItemIcon>
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
											onChange={handleSettingsChange(
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
						<ListItem>
							<ListItemIcon>
								<WifiIcon />
							</ListItemIcon>
							<ListItemText id="switch-list-label-wifi" primary="Wi-Fi" />
							<Switch
								edge="end"
								onChange={handleSettingsChange("wifi", !settings["wifi"])}
								checked={settings["wifi"]}
								inputProps={{
									"aria-labelledby": "switch-list-label-wifi",
								}}
							/>
						</ListItem>
						<Divider />
						{skills.map((skill) => (
							<React.Fragment key={skill}>
								<ListItem>
									<ListItemText
										id={`switch-list-label-${skill}`}
										primary={skill}
									/>
								</ListItem>
								{professionNames
									.filter((name) => professions[name].skill === skill)
									.map((name) => (
										<ListItem key={name}>
											<ListItemText
												id={`switch-list-label-${name}`}
												primary={name}
											/>
											<Switch
												edge="end"
												onChange={handleSettingsChange(name, !settings[name])}
												checked={settings[name]}
												inputProps={{
													"aria-labelledby": `switch-list-label-${name}`,
												}}
											/>
										</ListItem>
									))}
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
						open={drawerState["navigation"]}
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
								open={drawerState["settings"]}
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
