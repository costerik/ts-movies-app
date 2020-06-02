import React from 'react';
import {ReactElement} from 'react';
import {Link} from 'react-router-dom';
import style from './movie-card.module.scss';

/* assets */
import StartIcon from '../../assets/images/star-solid.svg';

/* types */
import {MovieCardType} from './movie-card.types';

function MovieCard(props: MovieCardType): ReactElement {
  const {id, imageSrc, title, genres, year, description, moreInfo, rating} = props;
  return (
    <div className={style.container}>
      <div className={style.left}>
        <Link to={`movie/${id}`}>
          <img src={imageSrc} className={style.image} />
        </Link>
      </div>
      <div className={style.right}>
        <div className={style.titleContainer}>
          <div className={style.title}>
            <Link to={`movie/${id}`}>{title}</Link>
          </div>
          <div className={style.average}>
            <span>{rating}</span>
            <img className={style.star} src={StartIcon} />
          </div>
        </div>
        <div className={style.yearContainer}>
          <p className={style.year}>{year}</p>
          {Array.isArray(genres) ? <p className={style.genre}>{genres.join(', ')}</p> : null}
        </div>
        <div className={style.descriptionContainer}>
          <p className={style.description}>{description}</p>
        </div>
        <div className={style.moreInfoContainer}>
          <Link to={`movie/${id}`}>{moreInfo}</Link>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
