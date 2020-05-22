import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Alert } from '@material-ui/lab';

import { SourcesList } from './../../components';
import { 
    getSourcesRequest, 
    addDisableSources, 
    removeDisabledSources 
} from './../../redux/sources/actions';
import { 
    getSources, 
    getLoadingStatus, 
    getError, 
    getDisabledItems,
    getActiveItems
} from './../../redux/sources/selectors';
import { getPagesStatusLoading } from './../../redux/pages/selectors';

export let SourcesListContainer = (props) => {
    const { 
        getSourcesRequest, 
        addDisableSources,
        removeDisabledSources,
        sources,
        isLoadingSources,
        isLoadingPages,
        error,
        activeSources,
        disabledSources,
    } = props;
    const modeDisableAll = disabledSources.length === 0;
    const [multipleSelectMode, setMultipleSelectMode] = useState(true);

    useEffect(() => {
        getSourcesRequest();
    }, [getSourcesRequest])

    if (error) {
        return <Alert severity="error">{error}</Alert>
    }

    const labelCLickHandler = sourceId => {
        if (isLoadingPages || (activeSources.length === 1 && activeSources[0] === sourceId)) {
            return null
        } else if (modeDisableAll) {
            const allButCurrent = activeSources.filter(id => id !== sourceId);

            addDisableSources(allButCurrent)
        } else if (!multipleSelectMode) {
            addDisableSources(activeSources)
            removeDisabledSources([sourceId]);
        } else if (disabledSources.includes(sourceId)) {
            removeDisabledSources([sourceId]);
        } else {
            addDisableSources([sourceId])
        }
    }
    const selectAllHandler = () => {
        if (isLoadingPages) {
            return null
        } else if (modeDisableAll) {
            addDisableSources(activeSources);
        } else {
            removeDisabledSources(disabledSources);
        }
    }
    const multipleSelectHandler = () => {
        setMultipleSelectMode(!multipleSelectMode);

        if (multipleSelectMode && activeSources.length !== 1) {
            addDisableSources(activeSources.slice(1))
        }
    }
    
    return <SourcesList 
        labelClickHandler={labelCLickHandler} 
        selectAllHandler={selectAllHandler}
        multipleSelectHandler={multipleSelectHandler}
        multipleSelectMode={multipleSelectMode}
        modeDisableAll={modeDisableAll} 
        sources={sources}
        isLoading={isLoadingSources}
    />
}

const mapStateToProps = state => ({ 
    sources: getSources(state),
    isLoadingSources: getLoadingStatus(state),
    isLoadingPages: getPagesStatusLoading(state),
    error: getError(state),
    disabledSources: getDisabledItems(state),
    activeSources: getActiveItems(state)
})
const mapDispatchToProps = { 
    getSourcesRequest, 
    addDisableSources,
    removeDisabledSources
}

SourcesListContainer = connect(mapStateToProps, mapDispatchToProps)(SourcesListContainer)