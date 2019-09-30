import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

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
    fontSize: 17,
    fontWeight:600,
    color: '#3f51b5'
  },
  exp:{
    margin: 20
  }
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent >
        <Typography variant="h5" component="h2" className={classes.divLayout}>
        Experience
        </Typography>
        <Grid container className={classes.divLayout}>
        <Grid item xs={12}>
        <Card className={classes.exp}>
          <CardContent>
          <Typography variant="body2" component="p" color="textSecondary">
        <Typography className={classes.heading}>HSBC Software Development India, Pune— Software Engineer </Typography>
          <Grid container className={classes.divLayout}>
            <Grid item xs={12}>Aug 2017- PRESENT</Grid>
            <Grid item xs={12}>Responsibilities: To develop new applications, connect with
business(regional) for the requirements, provide application
support,handle owned project end to end flow.</Grid>
          </Grid>
          </Typography>
          </CardContent>
        </Card>
        
        </Grid>
        <Grid item xs={12}>
        <Card className={classes.exp}>
          <CardContent>
          <Typography variant="body2" component="p" color="textSecondary">
          <Typography className={classes.heading}> Linux World Informatics, ​ Jaipur— Intern</Typography>
          <Grid container className={classes.divLayout}>
            <Grid item xs={12}>May 2016 - Jul 2016</Grid>
            <Grid item xs={12}>Responsibilities: To develop cloud computing services like Infrastructure,
Software, Platform, Container, Storage. Worked on AWS cloud (EC2, S3).</Grid>
          </Grid>
        </Typography>
          </CardContent>
        </Card>

        </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
