import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import Select from "@mui/material/Select";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

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
import { skills, professions } from "../../../data/professions";

import { useGameContext } from "../../../app/GameContext";
import RenderImageSmall from "../Icons/RenderImageSmall";
import RenderImageMedium from "../Icons/RenderImageMedium";

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
	const [profileAnchorEl, setProfileAnchorEl] = React.useState(null);

	const [openState, setOpenState] = React.useState(stateInit);

	const {
		gameData: { settings, professionInfo, month },
		setSettings,
	} = useGameContext();

	// const [drawerState, setDrawerState] = React.useState({
	// 	navigation: false,
	// 	settings: false,
	// });
	// const [listOpen, setListOpen] = React.useState(listOpenInit);

	// ////
	// handlers

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

	const handleProfileOpen = (event) => {
		setProfileAnchorEl(event.currentTarget);
	};

	const handleProfileClose = (event) => {
		setProfileAnchorEl(null);
	};

	// handle data change

	const handleSettingsChange = (settingName, value) => (event) => {
		setOpenState({ ...openState, settings: true });
		if (value === null) value = event.target.value;
		setSettings({ ...settings, [settingName]: value });
	};

	const handleMonthChange = (e) => {
		setSettings({ ...settings, [month]: e.target.value });
	};

	// ////
	// reusable display elements

	// element itself
	const NavigationElements = ({ navigationLinks }) =>
		navigationLinks.map(({ to, label }) => (
			<ListItem key={label} sx={{ padding: "0 8px 0 16px" }}>
				<ListItemButton
					component="a"
					href={to}
					sx={{ padding: "4px 8px", lineHeight: "1rem" }}
				>
					<ListItemText primary={label} />
				</ListItemButton>
			</ListItem>
		));

	// list of elements
	const NavigationList = ({ listName }) => (
		// <Box
		// 	role="presentation"
		// 	onClick={toggleDrawer(listName, false)}
		// 	onKeyDown={toggleDrawer(listName, false)}
		// >
		<Box role="presentation" onKeyDown={toggleDrawer(listName, false)}>
			<List>
				{listName === "navigation" ? (
					Object.entries(navigationLinks).map(
						([sectionLabel, navigationLinks]) =>
							navigationLinks.length > 1 ? (
								<React.Fragment key={sectionLabel}>
									<ListItemButton
										onClick={toggleNavGroup(sectionLabel)}
										sx={{ padding: "8px" }}
									>
										<ListItemText primary={sectionLabel} />
										{openState[sectionLabel] ? (
											<ExpandLess />
										) : (
											<ExpandMore />
										)}
									</ListItemButton>

									<Collapse
										in={openState[sectionLabel]}
										timeout="auto"
										unmountOnExit
									>
										<List component="div" disablePadding>
											<NavigationElements
												navigationLinks={
													navigationLinks
												}
											/>
										</List>
									</Collapse>
								</React.Fragment>
							) : (
								<NavigationElements
									navigationLinks={navigationLinks}
									key={sectionLabel}
									sx={{ padding: "8px" }}
								/>
							)
					)
				) : listName === "settings" && settings ? (
					<>
						<ListItem>
							<FormControl
								variant="standard"
								fullwidth="true"
								sx={{ minWidth: 120 }}
							>
								<InputLabel id="demo-simple-select-filled-label">
									Version
								</InputLabel>

								<Select
									labelId="select-version-label"
									id="select-version"
									value={settings.version}
									label="Version"
									autowidth="true"
									onChange={handleSettingsChange(
										"version",
										null
									)}
								>
									{[1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6].map(
										(ver) => (
											<MenuItem
												value={ver}
												key={ver}
												default={
													ver === settings["version"]
												}
											>
												{ver}
											</MenuItem>
										)
									)}
								</Select>
							</FormControl>
						</ListItem>

						<Divider />

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

						<Divider />

						{skills.map((skill) => (
							<React.Fragment key={skill}>
								<ListItem sx={{ background: "#f3f3f3" }}>
									<ListItemIcon>
										<RenderImageMedium label={skill} />
									</ListItemIcon>
									<ListItemText
										id={`switch-list-label-${skill}`}
										primary={skill}
										sx={{ fontWeight: "bold" }}
									/>
								</ListItem>
								{professionInfo
									.filter(
										([name]) =>
											professions[name].skill === skill
									)
									.map(([name, data]) => {
										// disable if: !mods &&
										//		this is not selected and another current level is selected
										// 		this is a 10 that requires a preq that is not selected
										// if mode enabled, never disable
										const disabled =
											!settings["isModsAllowed"] &&
											((!settings[name] &&
												settings[
													data["alternative"]
												]) ||
												(data.level === "Level 10" &&
													!settings[data["Level 5"]]))
												? true
												: false;
										return (
											<ListItem
												key={name}
												sx={{
													paddingLeft:
														data.level ===
														"Level 10"
															? "2rem"
															: "1rem",
												}}
											>
												<ListItemIcon>
													<RenderImageSmall
														label={name}
													/>
												</ListItemIcon>
												<ListItemText
													id={`switch-list-label-${name}`}
													primary={name}
													disabled={disabled}
												/>
												<Switch
													edge="end"
													onChange={handleSettingsChange(
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
					</>
				) : (
					<></>
				)}
			</List>
		</Box>
	);

	// ////
	// render
	return (
		<Box sx={{ marginTop: "64px" }}>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="fixed">
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
							<NavigationList listName={"navigation"} />
						</Drawer>

						<Typography
							variant="h6"
							component="div"
							sx={{ flexGrow: 1 }}
						>
							SVD
						</Typography>

						<div>
							{/* Date - dropdown */}
							<FormControl
								sx={{ m: 1, minWidth: 120 }}
								size="small"
							>
								<InputLabel id="month-select-small-label">
									Month
								</InputLabel>
								<Select
									labelId="demo-select-small-label"
									id="demo-select-small"
									value={month}
									label="Age"
									onChange={handleMonthChange}
								>
									{["Spring", "Summer", "Fall", "Winter"].map(
										(season) => (
											<MenuItem
												value={season}
												key={season}
											>
												{season}
											</MenuItem>
										)
									)}
								</Select>
							</FormControl>

							{/* Settings - Right Drawer */}
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
								<NavigationList listName={"settings"} />
							</Drawer>

							{/* Profile - account drop down */}
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
								<MenuItem onClick={handleProfileClose}>
									Profile
								</MenuItem>
								<MenuItem onClick={handleProfileClose}>
									My account
								</MenuItem>
							</Menu>
						</div>
					</Toolbar>
				</AppBar>
			</Box>
		</Box>
	);
}
