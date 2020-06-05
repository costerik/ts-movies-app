import React from 'react';
import {ReactElement} from 'react';
import {Link} from 'react-router-dom';
import style from './movie-card.module.scss';

/* assets */
import StartIcon from '../../assets/images/star-solid.svg';

/* types */
import {MovieCardType} from './movie-card.types';

/* utils */
import utils from '../../utils';
const {isNullOrUndefined, isEmpty} = utils;

function MovieCard(props: MovieCardType): ReactElement {
  const {id, imageSrc, title, genres, year, description, moreInfo, rating} = props;
  return (
    <div className={style.container}>
      <div className={style.left}>
        {!isNullOrUndefined(imageSrc) && !isEmpty(imageSrc) ? (
          !isNullOrUndefined(id) && !isEmpty(id) ? (
            <Link data-testid="link-image" to={`movie/${id}`}>
              <img src={imageSrc} className={style.image} />
            </Link>
          ) : (
            <img data-testid="image" src={imageSrc} className={style.image} />
          )
        ) : null}
      </div>
      <div className={style.right}>
        <div className={style.titleContainer}>
          <div className={style.title}>
            {!isNullOrUndefined(title) && !isEmpty(title) ? (
              !isNullOrUndefined(id) && !isEmpty(id) ? (
                <Link data-testid="link-title" to={`movie/${id}`}>
                  <span>{title}</span>
                </Link>
              ) : (
                <span data-testid="title">{title}</span>
              )
            ) : null}
          </div>
          <div className={style.average}>
            {!isNullOrUndefined(rating) && !isEmpty(rating) ? (
              <div data-testid="rating">
                <span>{rating}</span>
                <img className={style.star} src={StartIcon} />
              </div>
            ) : null}
          </div>
        </div>
        <div className={style.yearContainer}>
          {!isNullOrUndefined(year) && !isEmpty(year) ? (
            <p data-testid="year" className={style.year}>
              {year}
            </p>
          ) : null}
          {Array.isArray(genres) ? (
            <p data-testid="genres" className={style.genre}>
              {genres.join(', ')}
            </p>
          ) : null}
        </div>
        <div className={style.descriptionContainer}>
          {!isNullOrUndefined(description) && !isEmpty(description) ? (
            <p data-testid="description" className={style.description}>
              {description}
            </p>
          ) : null}
        </div>
        <div className={style.moreInfoContainer}>
          {!isNullOrUndefined(moreInfo) && !isEmpty(moreInfo) ? (
            <Link data-testid="moreInfo" to={`movie/${id}`}>
              {moreInfo}
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
