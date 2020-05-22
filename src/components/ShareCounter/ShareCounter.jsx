import React from 'react';
import { Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'inline-block',
        padding: theme.spacing(0.5),
        color: '#fff',
        borderRadius: '3px',
        fontSize: theme.spacing(1.5),
        backgroundColor: ({ type }) => {
            switch (type) {
                case 'vk': return '#4a76a8';
                case 'fb': return '#1877f2';
                case 'ok': return '#f7931e';
                default: return '#fff';
            }
        },
        marginRight: theme.spacing(0.5),
        '&:last-child': {
            marginRight: 0
        }
    },
}));

export const ShareCounter = (props) => {
    const classes = useStyles(props);
    const { count, type } = props;
    let message;

    switch (type) {
        case 'vk': message = 'Вконтакте'; 
        break;

        case 'fb': message = 'Facebook'; 
        break;

        case 'ok': message = 'Одноклассники'; 
        break;

        default: message = '';
    }

    return (
        <Tooltip title={message}>
            <div className={classes.root}>{count}</div>
        </Tooltip>
    )
}