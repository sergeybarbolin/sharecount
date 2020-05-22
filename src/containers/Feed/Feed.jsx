import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPagesRequest } from './../../redux/pages/actions';
import { getDisabledItems } from '../../redux/sources/selectors';
import { Feed } from '../../components'
import { 
    getPages,
    getPagesStatusLoading 
} from './../../redux/pages/selectors';

export let FeedContainer = props => {
    const { getPagesRequest, isLoading, items, disabledOwners } = props;

    useEffect(() => {
        getPagesRequest({ exclude: {key: 'owner', value: disabledOwners} })
    }, [getPagesRequest, disabledOwners])

    return <Feed items={items} isLoading={isLoading} />
}

const mapStateToProps = state => ({
    items: getPages(state),
    isLoading: getPagesStatusLoading(state),
    disabledOwners: getDisabledItems(state)
})
const mapDispatchToProps = { getPagesRequest }

FeedContainer = connect(mapStateToProps, mapDispatchToProps)(FeedContainer)