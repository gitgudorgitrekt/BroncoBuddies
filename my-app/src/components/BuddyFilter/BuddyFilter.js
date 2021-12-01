import { useNavigate } from 'react-router';
import React, { useState } from 'react';
// import ChipInput from 'material-ui-chip-input';
import { Container, Grow, Grid, AppBar, TextField, Button, Paper } from '@material-ui/core';
import Posts from '../Posts/Posts';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { getPostsBySearch } from '../../actions/posts';
import Pagination from '../Pagination';
import { useLocation } from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const BuddyFilter = () => {
    const [currentId, setCurrentId] = useState(null);
    
    const dispatch = useDispatch();

    const query = useQuery();
    const page = query.get('page') || 1;

    const navigate = useNavigate();
    const classes = useStyles();
    const [searchTerm, setSearch] = useState('');
    const [tags, setTags] = useState('');

    const caller = '/buddyfilter';

    const searchPost = () => {
        if(searchTerm.trim() || tags.trim()) {
            // dispatch -> fetch search post
            dispatch(getPostsBySearch({ searchTerm, tags }));
            navigate(`/buddyfilter/search?searchQuery=${searchTerm || 'none'}&tags=${tags || 'none'}`);
        } else {
            navigate('/buddyfilter');
        }
    };

    const handleKeyPress = (e => {
        if (e.keyCode === 13) {
            searchPost();
        }
    });

    return (
        <Grow in>
            <Container maxWidth="xl">
                <Grid container alignItems="stretch" spacing={2} justifyContent="space-between" className={classes.gridContainer}>
                    <Grid item xs={12} sm={6} md={3}>
                        <AppBar className={classes.appBarSearch} position="static" color="inherit">
                            <TextField
                                name="search"
                                variant="outlined"
                                label="Search Hangouts"
                                fullWidth
                                onKeyPress={handleKeyPress}
                                value={searchTerm}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <TextField
                                style={{ margin: '10px 0'}}
                                variant="outlined"
                                label="Search Tags"
                                fullWidth
                                onKeyPress={handleKeyPress}
                                value={tags}
                                onChange={(e) => setTags(e.target.value)}
                            />
                            <Button onClick={searchPost} className={classes.searchButton} color="primary" variant="contained" >
                                Search
                            </Button>
                        </AppBar>
                        {(!searchTerm && !tags) && (
                            <Paper elevation={6} className={classes.pagination} >
                                <Pagination caller={caller} page={page} />
                            </Paper>
                        )}
                    </Grid>
                    <Grid item xs={12} sm={6} md={9}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
};

export default BuddyFilter