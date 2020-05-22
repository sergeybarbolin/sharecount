import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InboxIcon from '@material-ui/icons/Inbox';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: theme.spacing(2),
        borderRadius: '5px',
    },
    caption: {
        marginTop: theme.spacing(2),
        color: theme.palette.text.secondary
    }
}));

export const Empty = ({ caption }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <InboxIcon fontSize="large" color="disabled"  />
            { caption && <p className={classes.caption}>{ caption }</p> }
        </div>
    )
}