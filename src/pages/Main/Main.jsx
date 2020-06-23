import React from "react";
import { Grid, Container } from '@material-ui/core';

import { SourcesListContainer, FeedContainer } from '../../containers';

export const Main = () => (
    <Container maxWidth="xl">
        <Grid container spacing={2}>
            <Grid item xs={2}>
                <SourcesListContainer />
            </Grid>
            <Grid item xs={6}>
                <FeedContainer />
            </Grid>
            <Grid item xs>
                {/* <SourcesListContainer /> */}
            </Grid>
        </Grid>
    </Container>
);
