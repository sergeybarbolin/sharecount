import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Logo } from '../';

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(0, 0, 3)
    },
    offset: theme.mixins.toolbar
}));

export const Navbar = () => {
    const classes = useStyles();

    return (
        <>
            <AppBar position="fixed" className={classes.root}>
                <Toolbar variant="dense">
                    <Logo />
                </Toolbar>
            </AppBar>
            <div className={classes.offset} />
        </>
    )
}