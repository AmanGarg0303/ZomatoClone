import React from 'react'
import NextArrow from '../../common/carousal/nextArrow';
import PrevArrow from '../../common/carousal/prevArrow';
import './deliveryCollections.css'
import Slider from "react-slick";
import DeliveryItem from './deliveryItem';

const DeliveryCollections = () => {

    const deliveryItems = [
        {
            id: 1,
            title: "Pizza",
            cover: "https://b.zmtcdn.com/data/pictures/chains/3/143/3c133139838c2777cdcc0514147373b4_o2_featured_v2.jpg"
        },
        {
            id: 2,
            title: "Burger",
            cover: "https://b.zmtcdn.com/data/pictures/chains/8/310078/9f2f843523d0e8b9ecd9ee9ee32c1c46_o2_featured_v2.jpg"
        },
        {
            id: 3,
            title: "Rolls",
            cover: "https://b.zmtcdn.com/data/pictures/4/19984354/0699a0d3387a789fe1b391f7f03b4f87_o2_featured_v2.jpg"
        },
        {
            id: 4,
            title: "Thali",
            cover: "https://b.zmtcdn.com/data/pictures/chains/0/3090/19ec554b15cbde93628e9b3c5facedf3_o2_featured_v2.jpg"
        },
        {
            id: 5,
            title: "Biryani",
            cover: "https://b.zmtcdn.com/data/pictures/chains/2/18363082/4aa2853159bd98bad02a7cd5f2f40be6_o2_featured_v2.jpg?output-format=webp"
        },
        {
            id: 6,
            title: "Chaat",
            cover: "https://b.zmtcdn.com/data/dish_photos/c87/4e310d9dd8336e14941debb973fb5c87.jpg?output-format=webp"
        },
        {
            id: 7,
            title: "Momos",
            cover: "https://b.zmtcdn.com/data/pictures/chains/2/19586402/8e94b5328c868c9fafe51b8ff72f7576_o2_featured_v2.jpg"
        },
        {
            id: 8,
            title: "Chicken",
            cover: "https://b.zmtcdn.com/data/dish_photos/f25/74ad2cad09c4b53230e1dacc1eb91f25.jpg?output-format=webp"
        },
        {
            id: 9,
            title: "Samosa",
            cover: "https://b.zmtcdn.com/data/pictures/8/19540068/f71695f60c6f5d13b10b9627b28732a4_o2_featured_v2.jpg"
        },
        {
            id: 10,
            title: "Parantha",
            cover: "https://b.zmtcdn.com/data/dish_photos/9e7/de6814213143e418ed9bd6dda317c9e7.jpg?output-format=webp"
        },
        {
            id: 11,
            title: "Sandwich",
            cover: "https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png"
        },

    ]

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
        <div className='delivery-collection'>
            <div className='max-width'>
                <div className="collection-title">
                    Eat what makes you Happy
                </div>

                <Slider {...settings}>
                    {deliveryItems.map((item) => {
                        return <DeliveryItem item={item} key={item.id} />

                    })}
                </Slider>
            </div>
        </div>
    )
}

export default DeliveryCollections  