import React from 'react'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {
  Link
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const NavBar = (props) => {
  return (
    // <AppBar position="static">
      <Toolbar>
        <Link to="/">
          <Typography variant="h2">
            Martin Ho
          </Typography>
        </Link>
        <Link to='/about'>
          <Button>
            About
          </Button>
        </Link>
        <Link to="/projects">
          <Button>
            Projects
          </Button>
        </Link>
        <Link to="/resume">
          <Button>
            Resume
          </Button>
        </Link>
      </Toolbar>
    // </AppBar>
  )
}

export default NavBar;
