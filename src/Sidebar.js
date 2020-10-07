import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import AboutModal from './AboutModal.js';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import DescriptionIcon from '@material-ui/icons/Description';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#787976',
  },
  appBarGrid: {
    paddingRight: '1rem',
    paddingLeft: '1rem',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        visibility: 'hidden',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('sm')]: {
        paddingTop: '1rem',
    },
  },
  familyName: {
      
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  title: {
    color: '#14bf98',
    textTransform: 'uppercase',
    font: '700 1.75rem/2.125rem "Montserrat", sans-serif'
  },
  subtitle: {
    color: '#787976',
    textTransform: 'uppercase',
    font: '100 0.6rem/2.125rem "Optima", sans-serif'
  },

}));

export default function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const history = useHistory()
  const drawer = (
    <div>
        <div className={classes.toolbar} />
        <Typography variant='h6' align='center'>
            Famílias
        </Typography>
        <Typography className={classes.subtitle} align='center'>
            (Ordem Alfabética)
        </Typography>
        <Divider />
        <List>
            {(props.list).map((text, index) => (
            <ListItem button key={text} onClick={() => { history.push('/' + text) }}>
                <ListItemText primary={text} className={classes.familyName}/>
                <AccountTreeIcon color='disabled'/>
                <DescriptionIcon color='disabled'/>
            </ListItem>
            ))}
        </List>
        <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} color='white'>
        <Grid container direction="row" justify="space-between" alignItems="center" className={classes.appBarGrid}>
            <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
            >
            <MenuIcon />
            </IconButton>
            <Grid item>
                <Typography className={classes.title} align='center'>
                    ZIŅA
                </Typography>
                <Typography className={classes.subtitle} align='center'>
                    Biblioteca Virtual dos Letos do Brasil
                </Typography>
            </Grid>
            <AboutModal />
        </Grid>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor='left'
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
            >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}