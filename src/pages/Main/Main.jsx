import React from "react";
import { Grid, Container } from '@material-ui/core';

import { ArticllesTable } from '../../components/ArticlesTable';
import { SourcesList } from '../../components/SourcesList';

export const Main = () => (
    <Container>
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <SourcesList />
            </Grid>
            <Grid item xs={9}>
                <ArticllesTable />
            </Grid>
        </Grid>
    </Container>
);
