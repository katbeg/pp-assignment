import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Building from '../../common/Images/prop1.jpg';

export default function EstateCard(props){
    return(
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={Building}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {props.address}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Number of rooms: {props.rooms} 
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Parking: {props.parking}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Price: {props.price}
                </Typography>
            </CardContent>
        </Card>
    )
}