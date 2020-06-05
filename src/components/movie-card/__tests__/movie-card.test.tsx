import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import MovieCard from '..';

// mock-data
import mockData from '../movie-card.mock-data.json';

describe('MovieCard', () => {
  const component = (
    <BrowserRouter>
      <MovieCard
        id={mockData.id}
        imageSrc={mockData.imageSrc}
        title={mockData.title}
        genres={mockData.genres}
        year={mockData.year}
        description={mockData.description}
        moreInfo={mockData.moreInfo}
        rating={mockData.rating}
      />
    </BrowserRouter>
  );

  const componentWithoutData = (
    <BrowserRouter>
      <MovieCard />
    </BrowserRouter>
  );

  const componentWithoutLinks = (
    <BrowserRouter>
      <MovieCard
        imageSrc={mockData.imageSrc}
        title={mockData.title}
        genres={mockData.genres}
        year={mockData.year}
        description={mockData.description}
        moreInfo={mockData.moreInfo}
        rating={mockData.rating}
      />
    </BrowserRouter>
  );

  it('renders MovieCard with all props', () => {
    render(component);
    expect(screen.queryByTestId('link-image')).not.toBeNull();
    expect(screen.queryByTestId('image')).toBeNull();
    expect(screen.queryByTestId('link-title')).not.toBeNull();
    expect(screen.queryByTestId('title')).toBeNull();
    expect(screen.queryByTestId('rating')).not.toBeNull();
    expect(screen.queryByTestId('year')).not.toBeNull();
    expect(screen.queryByTestId('genres')).not.toBeNull();
    expect(screen.queryByTestId('description')).not.toBeNull();
    expect(screen.queryByTestId('moreInfo')).not.toBeNull();
  });

  it('renders the MovieCard component without the links', () => {
    render(componentWithoutLinks);
    expect(screen.queryByTestId('link-image')).toBeNull();
    expect(screen.queryByTestId('image')).not.toBeNull();
    expect(screen.queryByTestId('link-title')).toBeNull();
    expect(screen.queryByTestId('title')).not.toBeNull();
    expect(screen.queryByTestId('rating')).not.toBeNull();
    expect(screen.queryByTestId('year')).not.toBeNull();
    expect(screen.queryByTestId('genres')).not.toBeNull();
    expect(screen.queryByTestId('description')).not.toBeNull();
    expect(screen.queryByTestId('moreInfo')).not.toBeNull();
  });

  it('renders MovieCard withOut props', () => {
    render(componentWithoutData);
    expect(screen.queryByTestId('link-image')).toBeNull();
    expect(screen.queryByTestId('image')).toBeNull();
    expect(screen.queryByTestId('link-title')).toBeNull();
    expect(screen.queryByTestId('title')).toBeNull();
    expect(screen.queryByTestId('rating')).toBeNull();
    expect(screen.queryByTestId('year')).toBeNull();
    expect(screen.queryByTestId('genres')).toBeNull();
    expect(screen.queryByTestId('description')).toBeNull();
    expect(screen.queryByTestId('moreInfo')).toBeNull();
  });
});
