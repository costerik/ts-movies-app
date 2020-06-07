import React from 'react';
import MovieBanner from '../index';
import {ReactElement} from 'react';
import {withKnobs, text} from '@storybook/addon-knobs';

//mock-data
import mockData from '../movie-banner.mock-data.json';

export default {
  title: 'MovieBanner',
  component: MovieBanner,
  decorators: [withKnobs],
};

export const Basic = (): ReactElement => (
  <MovieBanner
    imageSrc={text('imageSrc', mockData.imageSrc)}
    title={text('title', mockData.title)}
    year={text('year', mockData.year)}
    description={text('description', mockData.description)}
    imageAlt={text('imageAlt', mockData.imageAlt)}
    subtitle={text('subtitle', mockData.subtitle)}
    score={text('score', mockData.score)}
    scoreText={text('scoreText', mockData.scoreText)}
    crewTitle={text('crewTitle', mockData.crewTitle)}
    crewI={text('crewI', mockData.crewI)}
    crewII={text('crewII', mockData.crewII)}
  />
);
