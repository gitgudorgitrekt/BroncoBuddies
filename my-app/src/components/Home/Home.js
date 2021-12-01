import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Grow, Grid, Paper } from '@material-ui/core';

import Pagination from '../Pagination';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import useStyles from './styles';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Home = () => {
    const classes = useStyles();
    const [currentId, setCurrentId] = useState(0);

    const caller = '/posts';

    const query = useQuery();
    const page = query.get('page') || 1;

    return (
        <Grow in>
            <Container maxWidth="xl">
                <Grid container justifyContent="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
                    <Grid item xs={12} sm={6} md={9}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                        <Paper elevation={6} className={classes.pagination} >
                            <Pagination caller={caller} page={page}/>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
};

export default Home
