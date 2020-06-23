import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Alert } from '@material-ui/lab';

import { getPagesRequest } from './../../redux/pages/actions';
import { getDisabledItems, getError } from '../../redux/sources/selectors';
import { 
    getPages,
    getPagesStatusLoading 
} from './../../redux/pages/selectors';
import { Feed } from '../../components'

export let FeedContainer = props => {
    const { getPagesRequest, isLoading, items, disabledOwners, error } = props;

    useEffect(() => {
        getPagesRequest({ exclude: disabledOwners })
    }, [getPagesRequest, disabledOwners])

    if (error) {
        return <Alert severity="error">{error}</Alert>
    }

    return <Feed items={items} isLoading={isLoading} />
}

const mapStateToProps = state => ({
    items: getPages(state),
    isLoading: getPagesStatusLoading(state),
    disabledOwners: getDisabledItems(state),
    error: getError(state)
})
const mapDispatchToProps = { getPagesRequest }

FeedContainer = connect(mapStateToProps, mapDispatchToProps)(FeedContainer)