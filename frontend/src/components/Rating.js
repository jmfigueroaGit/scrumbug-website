import React from 'react';

const Rating = (props) => {
    const { rating, total } = props;
    return (
        <div className='rating-text'>
            <div className='rating'>
                <span>
                    <i
                        className={
                            rating >= 2
                                ? 'fa fa-star'
                                : rating >= 1
                                ? 'fas fa-star-half-alt'
                                : 'far fa-star'
                        }
                    ></i>
                </span>
                <span>
                    <i
                        className={
                            rating >= 4
                                ? 'fa fa-star'
                                : rating >= 3
                                ? 'fas fa-star-half-alt'
                                : 'far fa-star'
                        }
                    ></i>
                </span>
                <span>
                    <i
                        className={
                            rating >= 6
                                ? 'fa fa-star'
                                : rating >= 5
                                ? 'fas fa-star-half-alt'
                                : 'far fa-star'
                        }
                    ></i>
                </span>
                <span>
                    <i
                        className={
                            rating >= 8
                                ? 'fa fa-star'
                                : rating >= 7
                                ? 'fas fa-star-half-alt'
                                : 'far fa-star'
                        }
                    ></i>
                </span>
                <span>
                    <i
                        className={
                            rating >= 10
                                ? 'fa fa-star'
                                : rating >= 9
                                ? 'fas fa-star-half-alt'
                                : 'far fa-star'
                        }
                    ></i>
                </span>
                <span className='ml-3'>{total + ' / 10'}</span>
            </div>
        </div>
    );
};

export default Rating;
