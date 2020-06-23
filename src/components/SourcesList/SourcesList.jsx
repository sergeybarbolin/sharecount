import React from 'react';
import { 
    List, 
    ListItem, 
    ListSubheader, 
    ListItemText,
    Paper, 
    IconButton, 
    ListItemSecondaryAction,
    Divider
} from '@material-ui/core';
import { CheckBox, CheckBoxOutlineBlank } from '@material-ui/icons';
import { SourceLabel, SourceLabelSkeleton } from '../';

export const SourcesList = (props) => {
    const { 
        sources, 
        modeDisableAll, 
        labelClickHandler, 
        selectAllHandler,
        isLoading,
        multipleSelectHandler,
        multipleSelectMode
    } = props;

    return (
        // <Paper variant="outlined">
            // {
                isLoading ? (
                    <List component="div" aria-label="loading"> 
                        {
                            [...Array(10)].map((item, index) => (
                                <ListItem key={index}>
                                    <SourceLabelSkeleton />
                                </ListItem>
                            )) 
                        }
                    </List>
                ) : (
                    <>
                        <List 
                            component="nav" 
                            aria-label="sourses"
                            subheader={
                                <ListSubheader component="div" id="sourses-list-subheader">
                                    Источники
                                </ListSubheader>
                            }
                        >
                        {
                            [...sources].map((item) => (
                                <ListItem 
                                    key={item._id}
                                    onClick={() => { labelClickHandler(item._id) }}
                                    button
                                >
                                    <SourceLabel {...item} />
                                </ListItem>
                            ))
                        }
                        </List>
                        <Divider />
                        <List component="div" aria-label="sourses-settings">
                            <ListItem>
                                <ListItemText id="switch-list-label-wifi" secondary="Множественный выбор" />
                                <ListItemSecondaryAction>
                                    <IconButton 
                                        size="small" 
                                        aria-label="Множественный выбор"
                                        onClick={ multipleSelectHandler }
                                    >
                                        { multipleSelectMode
                                            ? <CheckBox color="primary" /> 
                                            : <CheckBoxOutlineBlank />
                                        }
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                            { multipleSelectMode && <ListItem>
                                <ListItemText secondary="Выделить все" />
                                <ListItemSecondaryAction>
                                    <IconButton 
                                        size="small" 
                                        aria-label="Выделить всё"
                                        onClick={ selectAllHandler }
                                    >
                                        { modeDisableAll 
                                            ? <CheckBox color="primary" /> 
                                            : <CheckBoxOutlineBlank />
                                        }
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem> }
                        </List>
                    </>
                )
            // }
        // </Paper>
    )
}