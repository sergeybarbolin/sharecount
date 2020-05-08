import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
    logo: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 5px'
    },
});

export const Logo = () => {
    const classes = useStyles();

    return (
        <div className={classes.logo}>
            <Typography variant="h6">share</Typography>
            count
        </div>
    )
}