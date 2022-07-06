import React from 'react'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import json from '../data/index.json';

const Recipes = () => {
    return (
        <Box>
            <Typography sx={{padding: 5}} variant="h3" onClick={() => console.log(json)}>List of Available Recipes</Typography>
            <Box display="flex" flexWrap="wrap" justifyContent="space-around">
                {json.recipes.map((data) => (
                    <Box component={Card} key={data?.uuid} sx={{ maxWidth: 345, width: 320 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={require(`../assets/img/${data.images.medium}`)}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {data.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {data.description}
                            </Typography>

                        </CardContent>
                        <CardActions>
                            <Button>View</Button>
                        </CardActions>
                    </Box>
                ))}
            </Box>

        </Box>
    )
}

Recipes.propTypes = {}

export default Recipes