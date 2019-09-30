import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles( theme =>({
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
    marginBottom: 12,
  },
  divLayout: {
    marginBottom: 20,
    marginTop: 20, 
  },
  heading: {
    fontSize: 13,
    fontWeight:600,
    color: '#3f51b5'
  },
  head: {
    margin: 35
  },
  project:{
    margin:10
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
      <Typography variant="h5" component="h2" className={classes.head}>Projects</Typography>
        <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}><Typography variant="body2" component="p" color="textSecondary" >
          <Typography className={classes.heading}>  COLLECTIONS OFFER MANAGEMENT BRIDGE </Typography>
            <br/><Grid item xs={12}>An application to give some offers to customers to get bank’s promise to
pay without losing customers</Grid>
        </Typography></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}><Typography variant="body2" component="p" color="textSecondary" >
          <Typography className={classes.heading}> ACCESS ADMIN​ </Typography><br/>
            <Grid item xs={12}>An application to manage (Allow, Add, Disable) functionalities based on
roles assigned to login Ids for above mentioned projects.</Grid>
        </Typography></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}> <Typography variant="body2" component="p" color="textSecondary">
          <Typography className={classes.heading}>  TIC TAC TOE </Typography><br/>
            <Grid item xs={12}>A game created using Reactjs. Just for Fun.  <br/>
            <a href= "https://ojasvisinghal.github.io/TicTacToe/">
https://ojasvisinghal.github.io/TicTacToe/ </a></Grid>
        </Typography></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}><Typography variant="body2" component="p" color="textSecondary" >
          <Typography className={classes.heading}>  OPEN CLOUD </Typography><br/>
            <Grid item xs={12}>An application work as a cloud service provider to give services like
Infrastructure, Software, Platform, Container, Storage.</Grid>
        </Typography></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}><Typography variant="body2" component="p" color="textSecondary">
          <Typography className={classes.heading}> LIBRARY MANAGEMENT SYSTEM </Typography><br/>
            <Grid item xs={12}>An application to manage books available in library as well as customers
who rent out books, handle fine on the basis number of days
exceeded.</Grid>
        </Typography></Paper>
        </Grid>
      </Grid>
        
      </CardContent>
    </Card>
  );
}
