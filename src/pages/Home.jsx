import React, { useEffect, useState } from 'react'
import BackgroundImage from '../assets/bg.png'
import { Box, Card, CardActionArea, CardContent, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import Fuse from 'fuse.js';
import json from '../data/index.json';
import { useNavigate } from 'react-router-dom';

const options = {
    isCaseSensitive: false,
    keys: [

        "title",
    ]
};
const Home = props => {
    const navigate = useNavigate()
    const [search, setSearch] = useState('');
    const [filteredSearch, setFilteredSearch] = useState([])
    const fuse = new Fuse(json.recipes, options);


    const handleOnChange = (e) => {
        setSearch(e.target.value)
    }

    const handleNavigate = (data) => {
        navigate(`/${data.uuid}`)

    }
    useEffect(() => {
        if (search) {
            let filteredSearch = [];
            /* Assigned the result to filteredSearch */
            fuse.search(search).map(data => {
                filteredSearch.push(data.item);
            });
            setFilteredSearch(filteredSearch);
        } else {
            setFilteredSearch('');
        }
    }, [search,]);
    return (
        <Box sx={{
            backgroundImage: `url(${BackgroundImage})`, backgroundRepeat: "no",
            backgroundSize: 'cover', height: '90vh', width: '100%',
        }}>
            <Typography variant="h3" color="white" padding={5}>Crescendo</Typography>
            <Box display="flex" outline="none" position="relative" alignItems='center' justifyContent="center" height="60%">

                <TextField
                    onChange={handleOnChange}
                    placeholder='Search Here' size='large' fullWidth sx={{
                        backgroundColor: 'white', width: '50%', borderRadius: 5
                    }} InputProps={{
                        endAdornment:
                            <InputAdornment position='end'>
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                    }} />


            </Box>
            <Box position="absolute" top={'44%'} right={'25%'} width="50%">
                {filteredSearch &&
                    <Card style={{ borderRadius: 20, }}>
                        {filteredSearch.map((data) => (
                            <CardActionArea onClick={() => handleNavigate(data)} key={data?.uuid}>
                                <CardContent>
                                    {data?.title}
                                </CardContent>
                            </CardActionArea>
                        ))}
                    </Card>
                }

            </Box>
        </Box>
    )
}

export default Home