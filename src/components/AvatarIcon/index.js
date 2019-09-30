import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Image from './../../static/images/avatar/ojasvi.png';

const useStyles = makeStyles({
  avatar: {
    margin: 10,
    backgroundImage: `url(${Image})`
  },
  bigAvatar: {
    margin: 10,
    width: 80,
    height: 80,
    backgroundImage: `url(${Image})`
  },
});

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center">
      <Avatar className={classes.bigAvatar} />
    </Grid>
  );
}
