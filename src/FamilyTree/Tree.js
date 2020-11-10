import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import DescriptionIcon from '@material-ui/icons/Description';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { Link } from 'react-router-dom'

import FamilyTree from './FamilyTree.js';
import AboutModal from './AboutModal.js';

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
  },
  menuButton: {
    padding: theme.spacing(2),
    paddingLeft: '1.55rem',
    [theme.breakpoints.up('sm')]: {
        visibility: 'hidden',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
  },
  right: {
    marginLeft: 'auto',
  },
  buttonLeft: {
    width: '100%',
  },
  familyName: {
    fontSize: '1rem',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: '400',
    lineHeight: '1.5',
    letterSpacing: '0.00938em',
    textTransform: 'capitalize',
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
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
  invisible: {
    visibility: 'hidden',
  }
}));

export default function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
        <div className={classes.toolbar} />
        <Typography variant='h6' align='center' style={{paddingTop:'0.5rem'}}>
            Famílias
        </Typography>
        <Typography className={classes.subtitle} align='center'>
            (Ordem Alfabética)
        </Typography>
        <Divider />
        <List>
        {(props.list).map((text, index) => (
        <ListItem button key={text}>
                <Button component={Link} to={'/Tree/' + text} className={classes.buttonLeft}>
                    <ListItemText primary={text} className={classes.familyName}/>
                    <AccountTreeIcon color='disabled'/>
                </Button>
                <Button component={Link} to={'/Tree/' + text} className={classes.right}>
                    <DescriptionIcon color='disabled'/>
                </Button>
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
        <AppBar className={classes.appBar} position='fixed' color='white'>
            <Grid container direction="row" justify="space-between" alignItems="center" className={classes.appBarGrid}>
                <Grid item>
                    <IconButton onClick={handleDrawerToggle} className={classes.menuButton}>
                        <MenuIcon fontSize='large'/>
                    </IconButton>
                    <Button className={classes.invisible}>Famílias</Button>
                    <Button className={classes.invisible}>Mapas</Button>
                    <Button className={classes.invisible}>Documentos</Button>
                </Grid>
                <Grid item>
                    <Typography className={classes.title} align='center'>
                        ZIŅA
                    </Typography>
                    <Typography className={classes.subtitle} align='center'>
                        Biblioteca Virtual dos Letos do Brasil
                    </Typography>
                </Grid>
                <Grid item>
                    <Button component={Link} to={'/Tree/Purim'}><strong>Famílias</strong></Button>
                    <Button component={Link} to={'/Map'}>Mapas</Button>
                    <Button component={Link} to={'/'}>Documentos</Button>
                    <IconButton>
                        <AboutModal />
                    </IconButton>
                </Grid>
            </Grid>
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
            <Hidden smUp implementation="css">
            <Drawer
                container={container}
                variant="temporary"
                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                open={mobileOpen}
                onClose={handleDrawerToggle}
                classes={{
                paper: classes.drawerPaper,
                }}
                ModalProps={{
                keepMounted: true, // Better open performance on mobile.
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
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <FamilyTree family={props.family} className={classes.content}/>
        </main>
        </div>
  );
}