import './FactCard.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import { getRandomInt } from '../../utils/math';

const ActionAreaCard = ({id, text}) => {
  return (
    <Link to={`/cats/${getRandomInt(4)}`}>
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                ID#{id}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {text}
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
    </Link>
  );
}

const FactCard = ({id, text}) => {
    return (
        <ActionAreaCard id={id} text={text} />
    )
};

export default FactCard;