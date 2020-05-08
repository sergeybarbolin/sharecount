import React from 'react';
import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(2),
        height: theme.spacing(2),
        marginRight: theme.spacing(1.5)
    }
}));

export const SourceLabel = ({ title, imgUrl }) => {
    const classes = useStyles();

    return (
        <>
            <Avatar
                className={classes.avatar}
                alt={`Avatar ${title}`}
                src={imgUrl}
            />
            { title }
        </>
    )
}