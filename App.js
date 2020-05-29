import React from 'react';
import './App.css';
import MenuAppBar from './templates/TopBar';
import Container from '@material-ui/core/Container'; 
import RealTimeArea from './templates/real-time-area';
import RealTimeLine from './templates/real-time-line';
import RealTimeColumn from './templates/real-time-column';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <div className="App">
      <MenuAppBar/>
      <br/>
      <Grid container spacing={1}>
        <Grid item xs={4}>
        <RealTimeArea/>
        </Grid>
        <Grid item xs={4}>
        <RealTimeColumn/>
        </Grid>
        <Grid item xs={4}>
        <RealTimeLine/>
        </Grid>
      </Grid>

    </div>
  );
}

export default App;


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));