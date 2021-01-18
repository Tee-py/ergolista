import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    //textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function ProjectView() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 style={{textAlign: "center", padding: "1rem"}}>E-COMMERCE WEBSITE</h1>
      <Grid container spacing={1} style={{padding: "1rem"}}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Set Up Project</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Create Authentication Endpoint</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
