import React from 'react'
import Slider from 'react-slick/lib/slider'
import NextArrow from '../carousal/nextArrow';
import PrevArrow from '../carousal/prevArrow';
import './collection.css'

const Collection = ({ list }) => {

    const settings = {
        // dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className='collection-wrapper'>
            <div className="collection max-width">
                <div className="collection-title">Collections</div>
                <div className="collection-subtitle-row">
                    <div className="collection-subtitle-text">
                        Explore curated lists of top restaurants, cafes, pubs, and bars in NCR, based on trends
                    </div>
                    <div className="collection-location">
                        <div>
                            All Collections in NCR
                        </div>
                        <i className='fi fi-rr-caret-right absolute-center'></i>
                    </div>
                </div>
                <Slider {...settings}>
                    {list.map((item) => {
                        return <div>
                            <div className='collection-cover'>
                                <img src={item.cover} alt={item.title} className='collection-image' />
                                <div className="gradient-bg"></div>
                                <div className='collection-card-title'>{item.title}</div>
                                <div className="collection-card-subtitle">
                                    <div>{item.places}</div>
                                    <i className='fi fi-rr-caret-right absolute-center'></i>
                                </div>
                            </div>
                        </div>

                    })}
                </Slider>
            </div>
        </div>
    )
}

export default Collection