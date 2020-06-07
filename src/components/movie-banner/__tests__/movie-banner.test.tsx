import React from 'react';
import {render, screen} from '@testing-library/react';
import MovieBanner from '..';

// mock-data
import mockData from '../movie-banner.mock-data.json';

describe('MovieBanner', () => {
  const component = (
    <MovieBanner
      imageSrc={mockData.imageSrc}
      title={mockData.title}
      year={mockData.year}
      description={mockData.description}
      imageAlt={mockData.imageAlt}
      subtitle={mockData.subtitle}
      score={mockData.score}
      scoreText={mockData.scoreText}
      crewTitle={mockData.crewTitle}
      crewI={mockData.crewI}
      crewII={mockData.crewII}
    />
  );

  const componenentWithYear = <MovieBanner year={mockData.year} />;
  const componenentWithScore = <MovieBanner score={mockData.score} />;
  const componenentWithScoreText = <MovieBanner scoreText={mockData.scoreText} />;
  const componenentWithSubtitle = <MovieBanner subtitle={mockData.subtitle} />;
  const componenentWithDescription = <MovieBanner description={mockData.description} />;
  const componenentWithCrewtitle = <MovieBanner crewTitle={mockData.crewTitle} />;
  const componenentWithCrewI = <MovieBanner crewI={mockData.crewI} />;
  const componenentWithCrewII = <MovieBanner crewII={mockData.crewII} />;

  const componentWithoutData = <MovieBanner />;

  it('renders MovieBanner with all props', () => {
    render(component);
    expect(screen.queryByTestId('image')).not.toBeNull();
    expect(screen.queryByTestId('title')).not.toBeNull();
    expect(screen.queryByTestId('year')).not.toBeNull();
    expect(screen.queryByTestId('score')).not.toBeNull();
    expect(screen.queryByTestId('score-text')).not.toBeNull();
    expect(screen.queryByTestId('subtitle')).not.toBeNull();
    expect(screen.queryByTestId('description')).not.toBeNull();
    expect(screen.queryByTestId('crew-title')).not.toBeNull();
    expect(screen.queryByTestId('crew-i')).not.toBeNull();
    expect(screen.queryByTestId('crew-ii')).not.toBeNull();
  });

  it('renders MovieBanner without props', () => {
    render(componentWithoutData);
    expect(screen.queryByTestId('image')).toBeNull();
    expect(screen.queryByTestId('title')).toBeNull();
    expect(screen.queryByTestId('year')).toBeNull();
    expect(screen.queryByTestId('score')).toBeNull();
    expect(screen.queryByTestId('score-text')).toBeNull();
    expect(screen.queryByTestId('subtitle')).toBeNull();
    expect(screen.queryByTestId('description')).toBeNull();
    expect(screen.queryByTestId('crew-title')).toBeNull();
    expect(screen.queryByTestId('crew-i')).toBeNull();
    expect(screen.queryByTestId('crew-ii')).toBeNull();
  });

  it('renders MovieBanner with only year', () => {
    render(componenentWithYear);
    expect(screen.queryByTestId('image')).toBeNull();
    expect(screen.queryByTestId('title')).toBeNull();
    expect(screen.queryByTestId('year')).not.toBeNull();
    expect(screen.queryByTestId('score')).toBeNull();
    expect(screen.queryByTestId('score-text')).toBeNull();
    expect(screen.queryByTestId('subtitle')).toBeNull();
    expect(screen.queryByTestId('description')).toBeNull();
    expect(screen.queryByTestId('crew-title')).toBeNull();
    expect(screen.queryByTestId('crew-i')).toBeNull();
    expect(screen.queryByTestId('crew-ii')).toBeNull();
  });

  it('renders MovieBanner with only score', () => {
    render(componenentWithScore);
    expect(screen.queryByTestId('image')).toBeNull();
    expect(screen.queryByTestId('title')).toBeNull();
    expect(screen.queryByTestId('year')).toBeNull();
    expect(screen.queryByTestId('score')).not.toBeNull();
    expect(screen.queryByTestId('score-text')).toBeNull();
    expect(screen.queryByTestId('subtitle')).toBeNull();
    expect(screen.queryByTestId('description')).toBeNull();
    expect(screen.queryByTestId('crew-title')).toBeNull();
    expect(screen.queryByTestId('crew-i')).toBeNull();
    expect(screen.queryByTestId('crew-ii')).toBeNull();
  });

  it('renders MovieBanner with only score text', () => {
    render(componenentWithScoreText);
    expect(screen.queryByTestId('image')).toBeNull();
    expect(screen.queryByTestId('title')).toBeNull();
    expect(screen.queryByTestId('year')).toBeNull();
    expect(screen.queryByTestId('score')).toBeNull();
    expect(screen.queryByTestId('score-text')).not.toBeNull();
    expect(screen.queryByTestId('subtitle')).toBeNull();
    expect(screen.queryByTestId('description')).toBeNull();
    expect(screen.queryByTestId('crew-title')).toBeNull();
    expect(screen.queryByTestId('crew-i')).toBeNull();
    expect(screen.queryByTestId('crew-ii')).toBeNull();
  });

  it('renders MovieBanner with only subtitle', () => {
    render(componenentWithSubtitle);
    expect(screen.queryByTestId('image')).toBeNull();
    expect(screen.queryByTestId('title')).toBeNull();
    expect(screen.queryByTestId('year')).toBeNull();
    expect(screen.queryByTestId('score')).toBeNull();
    expect(screen.queryByTestId('score-text')).toBeNull();
    expect(screen.queryByTestId('subtitle')).not.toBeNull();
    expect(screen.queryByTestId('description')).toBeNull();
    expect(screen.queryByTestId('crew-title')).toBeNull();
    expect(screen.queryByTestId('crew-i')).toBeNull();
    expect(screen.queryByTestId('crew-ii')).toBeNull();
  });

  it('renders MovieBanner with only description', () => {
    render(componenentWithDescription);
    expect(screen.queryByTestId('image')).toBeNull();
    expect(screen.queryByTestId('title')).toBeNull();
    expect(screen.queryByTestId('year')).toBeNull();
    expect(screen.queryByTestId('score')).toBeNull();
    expect(screen.queryByTestId('score-text')).toBeNull();
    expect(screen.queryByTestId('subtitle')).toBeNull();
    expect(screen.queryByTestId('description')).not.toBeNull();
    expect(screen.queryByTestId('crew-title')).toBeNull();
    expect(screen.queryByTestId('crew-i')).toBeNull();
    expect(screen.queryByTestId('crew-ii')).toBeNull();
  });

  it('renders MovieBanner with only crew title', () => {
    render(componenentWithCrewtitle);
    expect(screen.queryByTestId('image')).toBeNull();
    expect(screen.queryByTestId('title')).toBeNull();
    expect(screen.queryByTestId('year')).toBeNull();
    expect(screen.queryByTestId('score')).toBeNull();
    expect(screen.queryByTestId('score-text')).toBeNull();
    expect(screen.queryByTestId('subtitle')).toBeNull();
    expect(screen.queryByTestId('description')).toBeNull();
    expect(screen.queryByTestId('crew-title')).not.toBeNull();
    expect(screen.queryByTestId('crew-i')).toBeNull();
    expect(screen.queryByTestId('crew-ii')).toBeNull();
  });

  it('renders MovieBanner with only crew I', () => {
    render(componenentWithCrewI);
    expect(screen.queryByTestId('image')).toBeNull();
    expect(screen.queryByTestId('title')).toBeNull();
    expect(screen.queryByTestId('year')).toBeNull();
    expect(screen.queryByTestId('score')).toBeNull();
    expect(screen.queryByTestId('score-text')).toBeNull();
    expect(screen.queryByTestId('subtitle')).toBeNull();
    expect(screen.queryByTestId('description')).toBeNull();
    expect(screen.queryByTestId('crew-title')).toBeNull();
    expect(screen.queryByTestId('crew-i')).not.toBeNull();
    expect(screen.queryByTestId('crew-ii')).toBeNull();
  });

  it('renders MovieBanner with only crew II', () => {
    render(componenentWithCrewII);
    expect(screen.queryByTestId('image')).toBeNull();
    expect(screen.queryByTestId('title')).toBeNull();
    expect(screen.queryByTestId('year')).toBeNull();
    expect(screen.queryByTestId('score')).toBeNull();
    expect(screen.queryByTestId('score-text')).toBeNull();
    expect(screen.queryByTestId('subtitle')).toBeNull();
    expect(screen.queryByTestId('description')).toBeNull();
    expect(screen.queryByTestId('crew-title')).toBeNull();
    expect(screen.queryByTestId('crew-i')).toBeNull();
    expect(screen.queryByTestId('crew-ii')).not.toBeNull();
  });
});
