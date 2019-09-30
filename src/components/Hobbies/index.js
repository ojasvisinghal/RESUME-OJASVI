import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import Poetry from './../../static/images/hobbies/poetry.png';
import Photography from './../../static/images/hobbies/photo.png';
import Sketch from './../../static/images/hobbies/sketch.png';
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
    marginTop: 2,
    fontSize: 15
  },
  divLayout: {
    margin: 10,
  },
  heading: {
    backgroundImage: `url(${Image})`
  },
  photography: {
    height: 0,
    paddingTop: '90.25%', // 16:9
    backgroundImage: `url(${Photography})`,
    backgroundSize: 'cover'
  },
  poetry: {
    height: 0,
    paddingTop: '90.25%', // 16:9
    backgroundImage: `url(${Poetry})`,
    backgroundSize: 'cover'
  },
  sketch: {
    height: 0,
    paddingTop: '90.25%', // 16:9
    backgroundImage: `url(${Sketch})`,
    backgroundSize: 'cover'
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent >
        <Typography variant="h5" component="h2">
          Hobbies
        </Typography>
        <Typography variant="body2" component="p" color="textSecondary">
          <Grid container >
            <Grid item xs className={classes.divLayout}> 
            <Card >
              <CardContent  className={classes.poetry}> 
              </CardContent>
              
              <CardActions>
              <Button size="small">Poetry</Button>
            </CardActions>
            </Card> 
            </Grid>
            <Grid item xs className={classes.divLayout}><Card>
              <CardContent className={classes.photography}>
              </CardContent>
              <CardActions>
              <Button size="small">Photography</Button>
            </CardActions>
            </Card> </Grid>
            <Grid item xs className={classes.divLayout}><Card>
              <CardContent className={classes.sketch}>
              </CardContent>
              <CardActions>
              <Button size="small">Sketching</Button>
            </CardActions>
            </Card> </Grid>
          </Grid>
        </Typography>
      </CardContent>
    </Card>
  );
}
