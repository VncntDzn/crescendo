import React, { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import json from '../data/index.json';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Container } from '@mui/system';

const SearchRecipe = props => {
    const { uuid } = useParams();
    const [food, setFood] = useState([])
    useEffect(() => {

        if (uuid) {
            setFood(json.recipes.filter((data) => data.uuid === uuid))
        }
    }, [uuid])
    return (
        <Container component={Card} elevation={5}>

            {food[0]?.images?.full && <CardMedia
                component="img"
                image={require(`../assets/img/${food[0].images?.full}`)}
            />}

            <CardContent>
                <Typography gutterBottom variant="h2" component="div" onClick={() => console.log(food)}>
                    {food[0]?.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {food[0]?.description}
                </Typography>

                <Typography gutterBottom variant="h5" component="div">
                    <Typography variant="h4">Directions</Typography>
                    {food[0]?.directions.map((direction, i) => (
                        <Typography key={i} component="li">
                            {direction.instructions}
                        </Typography>
                    ))}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    <Typography variant="h4">Ingredients</Typography>
                    {food[0]?.ingredients.map((direction) => (
                        <Fragment key={direction.uuid}>
                            <Typography component="li">
                                Amount - {direction.amount}
                            </Typography>
                            <Typography component="li">
                                Measurement {direction.measurement}
                            </Typography>
                            <Typography component="li">
                                Name -   {direction.name}
                            </Typography>
                        </Fragment>
                    ))}
                </Typography>
            </CardContent>

        </Container>
    )
}

SearchRecipe.propTypes = {}

export default SearchRecipe