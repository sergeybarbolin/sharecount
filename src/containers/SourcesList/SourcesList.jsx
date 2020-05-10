import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Alert } from '@material-ui/lab';
import { SourcesList } from './../../components/SourcesList';

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

export let SourcesListContainer = (props) => {
    const { 
        getSourcesRequest, 
        addDisableSources,
        removeDisabledSources,
        sources,
        isLoading,
        error,
        activeSources,
        disabledSources,
    } = props;
    const modeDisableAll = disabledSources.length === 0;

    useEffect(() => {
        getSourcesRequest();
    }, [getSourcesRequest])

    const labelCLickHandler = sourceId => {
        if (disabledSources.includes(sourceId)) {
            removeDisabledSources([sourceId]);
        } else {
            addDisableSources([sourceId]);
        }
    }
    const selectAllHandler = () => {
        if (modeDisableAll) {
            addDisableSources(activeSources);
        } else {
            removeDisabledSources(disabledSources);
        }
    }

    return error 
        ? <Alert severity="error">{error}</Alert>
        : <SourcesList 
            labelClickHandler={labelCLickHandler} 
            selectAllHandler={selectAllHandler}
            modeDisableAll={modeDisableAll} 
            isLoading={isLoading}
            sources={sources}
        />
}

const mapStateToProps = state => ({ 
    sources: getSources(state),
    isLoading: getLoadingStatus(state),
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