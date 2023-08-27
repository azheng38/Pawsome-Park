import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='../images/zoo.jpg'
              text='Come Visit!'
              label='VISIT US'
              path='/visit'
            />
            <CardItem
              src='../images/Red_Panda.jpg'
              text='Meet Our Red Pandas!'
              label='NEWS'
              path='/news'
            />
            <CardItem
              src='../images/Train.jpg'
              text='Choo-Choo All Aboard!'
              label='TOUR'
              path='/tour'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='../images/Volunteer.jpg'
              text='Volunteer With Us!'
              label='VOLUNTEER'
              path='/volunteer'
            />
            <CardItem
              src='../images/PawSome.png'
              text='Follow Our Journey'
              label='OUR STORY'
              path='/aboutus'
            />
            <CardItem
              src='../images/garden.jpg'
              text='Visit Our Garden'
              label='GARDEN'
              path='/garden'
            />
          </ul>
          <ul className='cards__items'>
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;