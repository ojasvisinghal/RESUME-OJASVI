import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Image from './../../static/images/background/background.jpg';
import SvgIcon from '@material-ui/core/SvgIcon';
import { blue } from '@material-ui/core/colors';




const useStyles = makeStyles({
  card: {
    minWidth: 275,
    minHeight: 600,
    paddingTop: 100,
    // backgroundImage: `url(${Image})`
  },
  iconHover: {
    '&:hover': {
      color: blue[800],
    },
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
});

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}


export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent >
        <Typography variant="h5" component="h2">
        About Me
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Full Stack Developer - First, solve the problem. Then, write the code.
        </Typography>
        <Typography variant="body2" component="p" color="textSecondary">
        <Typography className={classes.heading}>  B.tech in Computer Science & Engineering </Typography>
          <Grid container className={classes.divLayout}>
            <Grid item xs={12}>Jaipur Engineering College & Research Center</Grid>
            <Grid item xs={12}>Aug 2013 - May 2017</Grid>
            <Grid item xs={12}>Aggregate: 80.33% (HONORS Degree)</Grid>
          </Grid>
          <Typography className={classes.heading}> Schooling </Typography>
          <Grid container className={classes.divLayout}>
            <Grid item xs={12}>Apr 2006 - Mar 2013</Grid>
            <Grid item xs={12}>Xth : 8.8 CGPA, XII th : 89%</Grid>
          </Grid>
        </Typography>
        {/* <LinkedInIcon className={classes.iconHover} style={{ fontSize: 30 }} />
        <HomeIcon className={classes.iconHover} color="error" style={{ fontSize: 30 }} />
        <HomeIcon className={classes.iconHover} color="error" style={{ fontSize: 30 }} /> */}
      </CardContent>
    </Card>
  );
}
