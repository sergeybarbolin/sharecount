import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Logo } from '../Logo';

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(0, 0, 3)
    }
}));

export const Navbar = () => {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar variant="dense">
                <Logo />
            </Toolbar>
        </AppBar>
    )
}