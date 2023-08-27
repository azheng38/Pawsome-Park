import React from 'react';
import ImageWordCard from '../ImageWordCard';
import './Garden.css';

function Garden () {
    return (
        <div className='garden-container'>
            <ImageWordCard 
                image='./images/garden_zen.jpg' 
                title='Zen Garden' 
                description='A zen garden is a serene arrangement of rocks, sand, 
                    and minimal elements, fostering peace and meditation.'>
            </ImageWordCard>
            <ImageWordCard 
                image='./images/garden_rose.jpg' 
                title='Roses' 
                description='Roses are exquisite flowers known for their beauty 
                    and diverse range of colors, symbolizing love, admiration, and timeless elegance.'>
            </ImageWordCard>
            <ImageWordCard 
                image='./images/garden_waterlily.jpg' 
                title='Lily Pads' 
                description='Water lilies are enchanting aquatic plants with captivating floating 
                    blossoms that grace serene ponds and lakes, symbolizing purity and tranquility 
                    in their aquatic habitat.'>
            </ImageWordCard>
        </div>
    )
}

export default Garden;