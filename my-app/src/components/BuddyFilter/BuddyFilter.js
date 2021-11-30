import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const BuddyFilter = () => {
    const state = null;
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
    return (
        <Grid container spacing={0.5}>
            <Grid item xs={3} >
                <Item>Filter</Item>
            </Grid>
            <Grid item xs={9}>
                <Item>Results</Item>
            </Grid>
        </Grid>
    )
}

export default BuddyFilter