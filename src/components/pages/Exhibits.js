import React from 'react';
import ImageWordCard from '../ImageWordCard';
import './Exhibits.css';

function Exhibits () {
    return (
        <div className='exhibits-container'>
            <ImageWordCard
                image='./images/exhibit_monkey.jpg' 
                title='Primate Enclosure' 
                description='Housing a range of primates, including monkeys, gorillas, and lemurs, 
                    to showcase their behavior and social structures.'>
            </ImageWordCard>
            <ImageWordCard 
                image='./images/exhibit_arctic.jpeg' 
                title='Artic Zone' 
                description='A chilly exhibit showcasing animals adapted to cold climates, such as 
                    polar bears, seals, and arctic foxes'>
            </ImageWordCard>
            <ImageWordCard 
                image='./images/exhibit_savanna.jpg' 
                title='Savanna Field' 
                description='Featuring large African mammals like giraffes, zebras, and elephants in
                     a spacious habitat that mimics the African savanna.'>
            </ImageWordCard>
        </div>
    )
}

export default Exhibits;