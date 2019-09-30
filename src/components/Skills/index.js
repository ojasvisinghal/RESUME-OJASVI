import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    minHeight: 600,
    paddingTop: 100,
  },
  bullet: {
    display: 'inline-blockminWidth',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 50,
    marginTop:2, 
    fontSize: 15 
  },
  divLayout: {
    marginBottom: 20,
    marginTop: 20, 
  },
  heading: {
    fontSize: 20,
    color: '#3f51b5'
  },chip: {
    margin: 10,
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent >
        <Typography variant="h5" component="h2">
        Skills
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
         Code - Make it work, make it right, make it fast.
        </Typography>
        <Typography variant="body2" component="p" color="textSecondary">
          <Grid container className={classes.divLayout}>
          <Chip color="primary" label="Core Java" className={classes.chip}/>
          <Chip color="primary" label="Spring Boot" className={classes.chip}/>
          <Chip color="primary" label="Angular 5+" className={classes.chip}/>
          <Chip color="primary" label="NodeJS" className={classes.chip}/>
          <Chip color="primary" label="RESTful Web Services" className={classes.chip}/>
          <Chip color="primary" label="Maven" className={classes.chip}/>
          <Chip color="primary" label="Microservices" className={classes.chip}/>
          <Chip color="primary" label="Cloud Computing" className={classes.chip}/>
          <Chip color="primary" label="Git" className={classes.chip}/>
          <Chip color="primary" label="Hibernate" className={classes.chip}/>
          <Chip color="primary" label="Spring Tool Suite" className={classes.chip}/>
          </Grid>
        </Typography>
      </CardContent>
    </Card>
  );
}
