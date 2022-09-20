import React from 'react'

import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Button, Card, CardContent, CardMedia, createTheme, Grid, ThemeProvider, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';

import Item from './Item/Item';
import Paginator from './Paginator/Paginator';
import { Countertops } from '@mui/icons-material';

export default function Main() {
    const [articles, setArticles] = useState([]);
    const [allArticles, setAllArticles] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const axios = require("axios");

        const options = {
            method: 'GET',
            url: 'https://newscatcher.p.rapidapi.com/v1/latest_headlines',
            params: { lang: 'en', media: 'True' },
            headers: {
                'X-RapidAPI-Key': 'ff2cdbd7b5msh8ce4e43184ff15ap1b9f0djsne4e318b2e942',
                'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            setArticles(response.data.articles);
            setAllArticles(response.data.articles.length)
            console.log(response);
        }).catch(function (error) {
            console.error(error);
        });
    }, [])


    if (articles.length === 0) {
        return <>Loading</>
    } else {
        let items = [];
        for (let i = 0; i < articles.length; i++) {
            if (i >= ((currentPage * 6) - 1) && i < ((currentPage * 6) - 1 + 6)) {
                    items.push(<Item currentPage={currentPage} key={articles[i]._id} item={articles[i]} />)
            }
        }
        return (
            <Container >

                <Typography variant="h2" component="div" sx={{ mb: '24px' }}>
                    Latest News
                </Typography>

                <Grid container spacing={2}>
                    {items}
                </Grid>
                <Paginator allArticles={allArticles} setCurrentPage={setCurrentPage} />
            </Container>
        );
    }
}
