import React, { useEffect } from 'react';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getPosts } from '../actions/posts';

import useStyles from './styles';

const Paginate = ({ caller, page }) => {
    const classes = useStyles();

    const { numberOfPages } = useSelector((state) => state.posts);

    const dispatch = useDispatch();

    useEffect(() => {
        if(page) dispatch(getPosts(caller, page));
    }, [page, dispatch]);

    return (
        <Pagination
            classes={{ ul: classes.ul }}
            count={numberOfPages}
            page={Number(page) || 1}
            variant="outlined"
            color="primary"
            renderItem={(item) => (
                <PaginationItem { ...item } component={Link} to={`${caller}?page=${item.page}`} />
            )}
        />
    );
};

export default Paginate