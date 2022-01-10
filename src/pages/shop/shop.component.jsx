import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => (
    <div className='collections-overview'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        {/*<Route
            path={`${match.path}/:collectionId`}
        render={({ match }) => <CollectionPage match={match} />} />*/}
    </div>
);

export default ShopPage;