import React, { useState } from 'react';
import { Card, CardHeader, IconButton, Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { PhoneCardProps } from './PhoneCard.types';
import useStyles from './PhoneCard.styles';

const PhoneCard: React.FunctionComponent<PhoneCardProps> = ({ name, image, price, details }) => {
    const [mouseOver, setMouseOver] = useState(false);
    const classes = useStyles();
    return (
        <Card
            className={classes.card}
            onMouseOver={() => setMouseOver(true)}
            onMouseOut={() => setMouseOver(false)}
        >
            <CardHeader
                className={classes.cardHeader}
                title={name}
                action={
                    <IconButton aria-label='Favorite' className={classes.cardIconButton}>
                        <FavoriteIcon />
                    </IconButton>
                }
            />
            <div className={classes.cardContent}>
                <img className={classes.cardMedia} src={image} alt={name} />
                {mouseOver && price && (
                    <Typography className={classes.cardMediaOverlay}>{details}</Typography>
                )}
            </div>
            {price && <div className={classes.priceContainer}>{price}</div>}
        </Card>
    );
};

export default PhoneCard;
