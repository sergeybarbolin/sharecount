import React from "react";
import { Grid, Container } from '@material-ui/core';

import { SourcesListContainer, FeedContainer } from '../../containers';

export const Main = () => (
    <Container>
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <SourcesListContainer />
            </Grid>
            <Grid item xs={9}>
                <FeedContainer />
            </Grid>
        </Grid>
    </Container>
);
