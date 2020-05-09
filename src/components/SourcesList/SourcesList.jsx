import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { List, ListItem, ListSubheader, Paper } from '@material-ui/core';

import { getSourcesRequest } from './../../redux/sources/actions';
import { SourceLabel } from '../SourceLabel';

export const SourcesList = (props) => {
    console.log(props);
    useEffect(() => {
        props.getSourcesRequest();
    }, [])
    return (
        <Paper variant="outlined">
            <List 
                component="nav" 
                aria-label="sourses"
                subheader={
                    <ListSubheader component="div" id="sourses-list-subheader">Источники</ListSubheader>
                }
            >
                {
                    [...props.sources]
                    .sort((a, b) => {
                        if (a.title > b.title) {
                            return 1;
                        }
                        if (a.title < b.title) {
                            return -1;
                        }
                        return 0;
                    })
                    .map(({ title, _id, imgUrl }) => (
                        <ListItem key={_id} selected={_id === '5eb57bdcfe8f8e7b9da9a7e2'} button={_id !== '5eb57bdcfe8f8e7b9da9a7e2'}>
                            <SourceLabel title={title} imgUrl={imgUrl} />
                        </ListItem>
                    ))
                }
            </List>
        </Paper>
    )
}

export const SourcesListContainer = connect(state => state.sources, { getSourcesRequest })(SourcesList)