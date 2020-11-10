import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

import AboutModal from './AboutModal.js';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBarGrid: {
    paddingRight: '1rem',
    paddingLeft: '1rem',
  },
  toolbar: theme.mixins.toolbar,
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
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="sticky" className={classes.appBar} color='white'>
        <Grid container direction="row" justify="space-between" alignItems="center" className={classes.appBarGrid}>
            <Grid item>
                <Button className={classes.invisible}>Famílias</Button>
                <Button className={classes.invisible}>Mapas</Button>
                <Button className={classes.invisible}>Documentos</Button>
                <IconButton className={classes.invisible}>
                    <AboutModal />
                </IconButton>
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
                <Button component={Link} to={'/Tree/Purim'}>Famílias</Button>
                <Button component={Link} to={'/Map'}>Mapas</Button>
                <Button component={Link} to={'/'}>Documentos</Button>
                <IconButton>
                    <AboutModal />
                </IconButton>
            </Grid>
        </Grid>
      </AppBar>
    </div>
  );
}