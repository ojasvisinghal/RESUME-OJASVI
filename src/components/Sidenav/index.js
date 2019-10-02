import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AvatarIcon from './../AvatarIcon';
import About from './../About';
import Projects from './../Projects';
import Experience from './../Experience';
import Skills from './../Skills';
import Hobbies from './../Hobbies';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const drawerWidth = 240;

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // toolbar: theme.mixins.toolbar,
  toolbar: {
    paddingTop: 47,
    paddingBottom: 18,
    backgroundColor: '#3f51b5',
  },
  sectionLayout: {
    marginTop: 15,
    marginBottom: 15,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: '#e8e4e4',
  },
  alignment: {
    width: 400
  }
}));

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  function handleDownload(){
    window.open("https://drive.google.com/file/d/1BziMAPmVAsi4bAK-fo0qpJrN_LGWHFud/view?usp=sharing");
  }

  function openLinkedIn(){
    window.open("https://www.linkedin.com/in/ojasvisinghal/");
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List>
        <Grid container >
          <Grid item xs={12}>
            <Paper className={classes.paper}><AvatarIcon /></Paper>
            <Paper className={classes.paper}>Ojasvi Singhal</Paper>
            <Paper className={classes.paper}>osinghal00@gmail.com</Paper>
            <Paper className={classes.paper}>+918619722074 <br /> +918952094206</Paper>
          </Grid>
        </Grid>
        <Divider />
        <ListItemLink href="#about"><ListItemText primary="About" /></ListItemLink>
        <Divider />
        <ListItemLink href="#projects"><ListItemText primary="Projects" /></ListItemLink>
        <Divider />
        <ListItemLink href="#experience"><ListItemText primary="Experience" /></ListItemLink>
        <Divider />
        <ListItemLink href="#skills"><ListItemText primary="Skills" /></ListItemLink>
        <Divider />
        <ListItemLink href="#hobbies"><ListItemText primary="Hobbies" /></ListItemLink>
        <Divider />
      </List>
    </div>
  );


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.alignment} variant="h6" noWrap>Ojasvi Singhal</Typography>
          <Grid container alignItems="flex-start" justify="flex-end" direction="row">

          <Tooltip title="Download Resume" placement="bottom">
            <IconButton
              aria-label="DownLoad Resume"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick= {handleDownload}
              color="inherit"
            >
            
            <ArrowDownwardIcon />
            </IconButton>
            </Tooltip>
            <Tooltip title="LinkedIn" placement="bottom">
            <IconButton
              aria-label="DownLoad Resume"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick= {openLinkedIn}
              color="inherit"
            >
            
            <LinkedInIcon />
            </IconButton>
            </Tooltip>
          </Grid>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        {/* <div className={classes.toolbar} /> */}
        <Typography paragraph>
          <section className={classes.sectionLayout} id="about"><About></About></section>
          <section className={classes.sectionLayout} id="projects"><Projects></Projects></section>
          <section className={classes.sectionLayout} id="experience"><Experience></Experience></section>
          <section className={classes.sectionLayout} id="skills"><Skills></Skills></section>
          <section className={classes.sectionLayout} id="hobbies"><Hobbies></Hobbies></section>
        </Typography>
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default ResponsiveDrawer;
