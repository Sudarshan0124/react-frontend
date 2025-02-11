import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Narachi',
    description: 'A gold Mining place',
    imageUrl:
      'https://i.ytimg.com/vi/YvrT7N_1Mqw/maxresdefault.jpg',
    address: 'KGF Karnataka India',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Parliment',
    description: 'Loksabha ',
    imageUrl:
      'https://tse4.mm.bing.net/th?id=OIP.wm7ucyNm1iGfrc5QjHW_mwHaDy&pid=Api&P=0&h=180',
    address: 'Delhi India',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u2'
  },
  {
    id: 'p3',
    title: 'Red fort ',
    description: 'Where flag hosting is done on Aug 15',
    imageUrl:
      'https://tse4.mm.bing.net/th?id=OIP.R-fLd0VGH3lssGcQbDPi_wHaE8&pid=Api&P=0&h=180',
    address: 'Delhi ,India',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u2'
  }
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);

  return <PlaceList items={loadedPlaces} />; 
};

export default UserPlaces;
