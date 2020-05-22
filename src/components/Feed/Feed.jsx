import React from 'react';
import { FeedCard, FeedCardSkeleton } from '../';
import { Empty } from '../Empty/Empty';

export const Feed = ({ items, isLoading }) => {
    let tamplate;

    if (isLoading) {
        tamplate = [...Array(10)].map((item, i) => <FeedCardSkeleton key={i} />)
    } else if (!items.length) {
        tamplate = <Empty caption="По вашему запросу ничего не найдено"/>
    } else {
        tamplate = items.map(item => <FeedCard key={item._id} {...item} />)
    }

    return tamplate;
}