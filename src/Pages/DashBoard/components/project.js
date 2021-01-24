import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Result, Button } from 'antd';

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

export default function ProjectView(props) {
  const classes = useStyles();

  console.log(props.currentList.tasks)

  return (
    <div className={classes.root}>
      <h1 style={{textAlign: "center", padding: "1rem"}}>{props.currentList.name}</h1>
      {props.currentList.tasks?.length==0 ? <Result
            status="404"
            title=""
            subTitle="You Have not Added Any Task for This Project."
            extra={<Button type="primary" onClick={props.showModal}>Add Task</Button>}
          /> : <></>
      }
      <Grid container spacing={1} style={{padding: "1rem"}}>
        {props.currentList.tasks?.map(task=>
          <Grid item xs={12}>
           <Paper className={classes.paper}>{task.name}</Paper>
          </Grid>
        )}
      </Grid>
    </div>
  );
}
