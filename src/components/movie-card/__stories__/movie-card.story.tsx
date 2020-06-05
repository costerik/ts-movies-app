import React from 'react';
import MovieCard from '../index';
import {ReactElement} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {withKnobs, text, object} from '@storybook/addon-knobs';

//mock-data
import mockData from '../movie-card.mock-data.json';

export default {
  title: 'MovieCard',
  component: MovieCard,
  decorators: [withKnobs],
};

export const Basic = (): ReactElement => (
  <BrowserRouter>
    <MovieCard
      id={text('id', mockData.id)}
      imageSrc={text('imageSrc', mockData.imageSrc)}
      title={text('title', mockData.title)}
      genres={object('genres', mockData.genres)}
      year={text('year', mockData.year)}
      description={text('description', mockData.description)}
      moreInfo={text('moreInfo', mockData.moreInfo)}
      rating={text('rating', mockData.rating)}
    />
  </BrowserRouter>
);
