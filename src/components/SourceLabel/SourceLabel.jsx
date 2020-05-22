import React from 'react';

import { Avatar } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

import { getRandomInt } from './../../utils/getRandomInt';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        color: disabled => disabled ? theme.palette.text.disabled : theme.palette.text.primary
    },
    avatar: {
        width: theme.spacing(1.7),
        height: theme.spacing(1.7),
        marginRight: theme.spacing(1),
        opacity: disabled => disabled ? 0.4 : 1,
        filter: disabled => disabled && 'grayscale(1)'
    }
}));

export const SourceLabel = ({ title, imgUrl, disabled }) => {
    const classes = useStyles(!!disabled);

    return (
        <div className={classes.root}>
            <Avatar
                className={classes.avatar}
                alt={`Avatar ${title}`}
                src={imgUrl}
            />
            { title }
        </div>
    )
}

export const SourceLabelSkeleton = () => {
    const classes = useStyles();

    return (
        <>
            <Skeleton animation="wave" variant="circle" className={classes.avatar} />
            <Skeleton animation="wave" height={20} width={getRandomInt(50, 70) + '%'} />
        </>
    )
}