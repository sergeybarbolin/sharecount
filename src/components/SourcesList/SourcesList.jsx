import React from 'react';
import { 
    List, 
    ListItem, 
    ListSubheader, 
    Paper, 
    IconButton, 
    ListItemSecondaryAction 
} from '@material-ui/core';
import { CheckBox, CheckBoxOutlineBlank } from '@material-ui/icons';
import { SourceLabel } from '../SourceLabel';

export const SourcesList = (props) => {
    const { 
        sources, 
        modeDisableAll, 
        isLoading, 
        labelClickHandler, 
        selectAllHandler 
    } = props;

    return (
        <Paper variant="outlined">
            <List 
                component="nav" 
                aria-label="sourses"
                subheader={
                    <ListSubheader component="div" id="sourses-list-subheader">
                        Источники
                        
                        { !isLoading && 
                            <ListItemSecondaryAction>
                                <IconButton 
                                    size="small" 
                                    aria-label="Выбрать все все"
                                    onClick={ selectAllHandler }
                                >
                                    { modeDisableAll 
                                        ? <CheckBox color="primary" /> 
                                        : <CheckBoxOutlineBlank />
                                    }
                                </IconButton>
                            </ListItemSecondaryAction>
                        }
                    </ListSubheader>
                }
            >
                {
                    [...sources]
                    .map((item, index) => (
                        <ListItem 
                            key={isLoading ? index : item._id}
                            onClick={() => { !isLoading && labelClickHandler(item._id) }}
                            button
                        >
                            <SourceLabel isLoading={isLoading} {...item} />
                        </ListItem>
                    ))
                }
            </List>
        </Paper>
    )
}