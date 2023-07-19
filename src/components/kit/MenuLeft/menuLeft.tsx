import { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import CalculateIcon from '@mui/icons-material/Calculate';
import MailIcon from '@material-ui/icons/Mail';
import MoveUpIcon from '@mui/icons-material/MoveUp';
import { Grid, Typography } from '@mui/material';
import './MenuLeft.scss';

interface Props {
	children?: ReactNode;
}

const useStyles = makeStyles((theme) => ({
	menuButton: {
		marginRight: theme.spacing(2),
	},
	drawer: {
		width: 240,
		flexShrink: 0,
	},
	drawerPaper: {
		width: 240,
	},
}));

export default function Sidebar(props: Props) {
	const classes = useStyles();
	const [isOpen, setIsOpen] = useState(false);
	const { children } = props;
	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<Grid container>
			<Grid item xs={2}>
				<Grid className='icon-menu'>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
						onClick={toggleSidebar}
					>
						<MenuIcon fontSize="large" />
					</IconButton>
				</Grid>
				<Drawer
					className={classes.drawer}
					classes={{
						paper: classes.drawerPaper,
					}}
					anchor="left"
					open={isOpen}
					onClose={toggleSidebar}
				>
					<List>
						<Grid className="menu-title" container>
							<Grid className="img-dolar" item xs={5}>
								<img width="50px" src="./images/dolar.png" alt="" />
							</Grid>
							<Grid item xs={7}>
								<Typography variant="h5">Arbitraje</Typography>
							</Grid>
						</Grid>
						<Grid className="menu-button">
							<ListItem button component={Link} to="http://localhost:3000/">
								<ListItemIcon>
									<HomeIcon fontSize="large" />
								</ListItemIcon>
								<ListItemText primary="Inicio" />
							</ListItem>
						</Grid>
						<Grid className="menu-button">
							<ListItem button component={Link} to="http://localhost:3000/movement">
								<ListItemIcon>
									<MoveUpIcon fontSize="large" />
								</ListItemIcon>
								<ListItemText primary="Movimientos" />
							</ListItem>
						</Grid>
						<Grid className="menu-button">
							<ListItem button>
								<ListItemIcon>
									<CalculateIcon fontSize="large" />
								</ListItemIcon>
								<ListItemText primary="Calculadora" />
							</ListItem>
						</Grid>
						<Grid className="menu-button">
							<ListItem button>
								<ListItemIcon>
									<MailIcon fontSize="large" />
								</ListItemIcon>
								<ListItemText primary="Contacto" />
							</ListItem>
						</Grid>
					</List>
				</Drawer>
			</Grid>
			<Grid item xs={10}>
				{children}
			</Grid>
		</Grid>
	);
}
