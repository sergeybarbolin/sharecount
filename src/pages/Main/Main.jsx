import React from "react";
import { Grid, Container } from '@material-ui/core';

import { PagesTable } from '../../components/PagesTable';
import { SourcesListContainer } from '../../containers';

export const Main = () => (
    <Container>
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <SourcesListContainer />
            </Grid>
            <Grid item xs={9}>
                <PagesTable />
            </Grid>
        </Grid>
    </Container>
);
