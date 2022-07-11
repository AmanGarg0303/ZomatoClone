import React from 'react'
import { diningOut } from '../../data/diningOut';
import Collection from '../common/collection';
import "./diningOut.css"
import Filters from '../common/filters'
import ExploreSection from '../common/exploreSection'

const DiningOut = () => {

    const diningFilter = [
        {
            id: 1,
            icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
            title: 'Filters',
        },
        {
            id: 2,
            title: 'Rating 4.0+',
        },
        {
            id: 3,
            icon: <i class="fi fi-sr-angle-down absolute-center"></i>,
            title: 'Pro Offers',
        },
        {
            id: 4,
            title: 'Outdoor Seating',
        },
        {
            id: 5,
            title: 'Serves Alcohol',
        },
        {
            id: 6,
            title: 'Open Now',
        }
    ];

    const collectionList = [
        {
            id: 1,
            title: "Trending This Week",
            cover: "https://b.zmtcdn.com/data/collections/f60eb469dbcdadaaa48c8be4f5ba48b3_1646040546.png",
            places: "30 places",
        },
        {
            id: 2,
            title: "Newly Opened",
            cover: "https://b.zmtcdn.com/data/collections/031c2dd47d839ff2bf98dbb66147ab4f_1648708839.jpg",
            places: "10 places",
        },
        {
            id: 3,
            title: "Random Specials",
            cover: "https://b.zmtcdn.com/data/collections/15242b397d79d3498922b4779231c850_1555421190.jpg",
            places: "10 places",
        },
        {
            id: 4,
            title: "Live Cricket Screening",
            cover: "https://b.zmtcdn.com/data/collections/e2ceb701e81a8113eab9627069f6f6bf_1649145041.jpg",
            places: "41 places",
        },
        {
            id: 5,
            title: "Best of NCR",
            cover: "https://b.zmtcdn.com/data/collections/53be5a745e959a8f6c51c52dd3d9edd1_1536825795.jpg",
            places: "113 places",
        },
        {
            id: 6,
            title: "Best Pizza Places in Town",
            cover: "https://b.zmtcdn.com/data/collections/f6e7f7d903d6499e1420d755ddc0ab11_1647253868.jpg",
            places: "24 places",
        },
        {
            id: 7,
            title: "Brilliant Biryanis",
            cover: "https://b.zmtcdn.com/data/collections/121c28675e83cd77ae12f5904580f241_1647256967.jpg",
            places: "28 places",
        },
        {
            id: 8,
            title: "Darshini",
            cover: "https://b.zmtcdn.com/data/collections/3ec0a1d41a727287821715478cb6ee2b_1633438403.jpg",
            places: "30 places",
        },
    ]

    const diningList = diningOut;

    return (
        <div>
            <Collection list={collectionList} />

            <div className="max-width">
                <Filters filterList={diningFilter} />
            </div>

            <ExploreSection list={diningList} collectionName='Dine Out Restaurants in NCR' />
        </div>
    )
}

export default DiningOut
