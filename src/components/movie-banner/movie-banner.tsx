import React from 'react';
import {ReactElement} from 'react';
import style from './movie-banner.module.scss';

/* types */
import {MovieBannerType} from './movie-banner.types';

/* utils */
import utils from '../../utils';
const {isNullOrUndefined, isEmpty} = utils;

function MovieBanner(props: MovieBannerType): ReactElement {
  const {
    imageSrc,
    imageAlt,
    title,
    subtitle,
    year,
    score,
    scoreText,
    description,
    crewTitle,
    crewI,
    crewII,
  } = props;
  return (
    <div className={style.container}>
      {!isNullOrUndefined(imageSrc) && !isEmpty(imageSrc) && (
        <div data-testid="image" className={style.imageContainer}>
          <img className={style.image} src={imageSrc} alt={imageAlt} />
        </div>
      )}
      {((!isNullOrUndefined(title) && !isEmpty(title)) ||
        (!isNullOrUndefined(year) && !isEmpty(year)) ||
        (!isNullOrUndefined(score) && !isEmpty(score)) ||
        (!isNullOrUndefined(scoreText) && !isEmpty(scoreText)) ||
        (!isNullOrUndefined(subtitle) && !isEmpty(subtitle)) ||
        (!isNullOrUndefined(description) && !isEmpty(description)) ||
        (!isNullOrUndefined(crewTitle) && !isEmpty(crewTitle)) ||
        (!isNullOrUndefined(crewI) && !isEmpty(crewI)) ||
        (!isNullOrUndefined(crewII) && !isEmpty(crewII))) && (
        <div className={`${style.dataContainer} ${style.whiteColor}`}>
          {((!isNullOrUndefined(title) && !isEmpty(title)) ||
            (!isNullOrUndefined(year) && !isEmpty(year)) ||
            (!isNullOrUndefined(score) && !isEmpty(score)) ||
            (!isNullOrUndefined(scoreText) && !isEmpty(scoreText)) ||
            (!isNullOrUndefined(subtitle) && !isEmpty(subtitle)) ||
            (!isNullOrUndefined(description) && !isEmpty(description))) && (
            <div className={style.dataContainerTop}>
              {((!isNullOrUndefined(title) && !isEmpty(title)) ||
                (!isNullOrUndefined(year) && !isEmpty(year))) && (
                <p className={style.titleContainer}>
                  {!isNullOrUndefined(title) && !isEmpty(title) && <span data-testid="title">{title}</span>}
                  {!isNullOrUndefined(year) && !isEmpty(year) && <span data-testid="year">({year})</span>}
                </p>
              )}
              {((!isNullOrUndefined(score) && !isEmpty(score)) ||
                (!isNullOrUndefined(scoreText) && !isEmpty(scoreText))) && (
                <div className={style.scoreContainer}>
                  {!isNullOrUndefined(score) && !isEmpty(score) && (
                    <span data-testid="score" className={style.score}>
                      {score}%
                    </span>
                  )}
                  {!isNullOrUndefined(scoreText) && !isEmpty(scoreText) && (
                    <span data-testid="score-text" className={style.scoreText}>
                      {scoreText}
                    </span>
                  )}
                </div>
              )}
              {!isNullOrUndefined(subtitle) && !isEmpty(subtitle) && (
                <p data-testid="subtitle" className={style.subtitle}>
                  {subtitle}
                </p>
              )}
              {!isNullOrUndefined(description) && !isEmpty(description) && (
                <p data-testid="description" className={style.description}>
                  {description}
                </p>
              )}
            </div>
          )}
          {((!isNullOrUndefined(crewTitle) && !isEmpty(crewTitle)) ||
            (!isNullOrUndefined(crewI) && !isEmpty(crewI)) ||
            (!isNullOrUndefined(crewII) && !isEmpty(crewII))) && (
            <div className={style.dataContainerBottom}>
              {!isNullOrUndefined(crewTitle) && !isEmpty(crewTitle) && (
                <p data-testid="crew-title" className={style.crewTitle}>
                  {crewTitle}
                </p>
              )}
              {!isNullOrUndefined(crewI) && !isEmpty(crewI) && (
                <p data-testid="crew-i" className={style.crew}>
                  {crewI}
                </p>
              )}
              {!isNullOrUndefined(crewII) && !isEmpty(crewII) && (
                <p data-testid="crew-ii" className={style.crew}>
                  {crewII}
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default MovieBanner;
