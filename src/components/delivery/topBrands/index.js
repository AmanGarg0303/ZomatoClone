import React from 'react'
import NextArrow from '../../common/carousal/nextArrow';
import PrevArrow from '../../common/carousal/prevArrow';
import './topBrands.css'
import Slider from "react-slick";


const TopBrands = () => {

    const brandList = [
        {
            id: 1,
            time: '27 min',
            name: "McDonald's",
            cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/bb30587d1148b6ab628a61945f64bf88_1625164768.png?output-format=webp'
        },
        {
            id: 2,
            time: '30 min',
            name: "Domino's Pizza",
            cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252699.png?output-format=webp'
        },
        {
            id: 3,
            time: '30 min',
            name: "Subway",
            cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/396a89cdb1f7a999717b01aa98da7017_1631990846.png?output-format=webp'
        },
        {
            id: 4,
            time: '29 min',
            name: "Bikanervala",
            cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/1356425eff0c9acd8ab6b0ad351759e4_1611253489.png?output-format=webp'
        },
        {
            id: 5,
            time: '34 min',
            name: "Burger King",
            cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187857.png?output-format=webp'
        },
        {
            id: 6,
            time: '37 min',
            name: "Haldiram's",
            cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/22529ff52d41a4aa3b36ac1e7e0c0db3_1605099406.png?output-format=webp'
        },
        {
            id: 7,
            time: '25 min',
            name: "KFC",
            cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433692.png?output-format=webp'
        },
        {
            id: 8,
            time: '29 min',
            name: "Pizza Hut",
            cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/d46560ce3d7b84605cab233c5abc65f3_1625165852.png?output-format=webp'
        },
        {
            id: 9,
            time: '21 min',
            name: "Kwality Wall's",
            cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/e12f7587d0a5f589af54c88352ff8bf3_1628324690.png?output-format=webp'
        },
        {
            id: 10,
            time: '29 min',
            name: "La Pino'z Pizza",
            cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/05142cf68ce04384bb185659e1bfe450_1625160307.png?output-format=webp'
        },
    ]

    const settings = {
        // dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className='top-brands max-width'>
            <div className="collection-title">
                Top brands for you
            </div>
            <Slider {...settings}>
                {brandList.map((brand) => {
                    return <div>
                        <div className="top-brands-cover">
                            <img src={brand.cover} alt={brand.name} className='top-brands-image' />
                            <div className='brand-name-title absolute-center'>{brand.name}</div>
                            <div className="brand-time absolute-center">{brand.time}</div>
                        </div>
                    </div>

                })}
            </Slider>
        </div>
    )
}

export default TopBrands
