import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Skeleton } from '@material-ui/lab';

import { SourceLabel, ShareCounter } from '../';
import { getRandomInt } from './../../utils/getRandomInt';

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(2)
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: theme.spacing(1)
    },
    footer: {
        marginTop: theme.spacing(2)
    }
}));

export const FeedCard = ({ _id, owner, publishedDate, title, share }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <div className={classes.header}>
                    <SourceLabel {...owner} />
                    <Typography color="textSecondary" gutterBottom>
                        { publishedDate }
                    </Typography>
                </div>
                <Typography variant="h5" component="h2">
                    { title }
                </Typography>
                <div className={classes.footer}>
                    <ShareCounter count={share.vk} type="vk"/>
                    <ShareCounter count={share.fb} type="fb"/>
                    <ShareCounter count={share.ok} type="ok"/>
                </div>
            </CardContent>
        </Card>
    )
}

export const FeedCardSkeleton = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Skeleton animation="wave" height={25} width={getRandomInt(50, 70) + '%'} />
                <Skeleton animation="wave" height={25} width={getRandomInt(50, 70) + '%'} />
                <Skeleton animation="wave" height={25} width={getRandomInt(50, 70) + '%'} />
            </CardContent>
        </Card>
    )
}