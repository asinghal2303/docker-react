import React from 'react';
import Card from './Card';
// import { robots } from './robots';

const CardList = ({ robots }) => {
    // if(true) throw new Error('NOOOOOO');
    return (
       robots.map((robot, index) => {
        return (
            <Card key={index} id={robot.id} name={robot.name} email={robot.email} />
        )
       } )
    )
}

export default CardList;