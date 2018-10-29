import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = (props) => (
    <div className="movie-card">
        <div className="movie-card card">
            <img className="card-img-top" src={props.movie.imageUrl} alt=""/>
            <div className="card-body">
                <h4 className="card-title">{props.movie.title}</h4>
                <p className="text-justify" style={{fontSize: '14px'}}>{props.movie.synopsis}</p>

            </div>
            <div className="card-footer">
                <div className="clearfix">
                    <div className="float-left">
                        {props.movie.releaseDate}
                    </div>
                    <div className="card-footer-badge float-right badge badge-primary badge-pill">Ranking
                        : {props.movie.rank}</div>
                </div>
            </div>
        </div>
    </div>
);

MovieCard.defaultProps = {
    movie: {}
};

MovieCard.propTypes = {
    movie: PropTypes.object
};

export default MovieCard;