import React from 'react'
import { nightlife } from '../../data/nightlife';
import "./nightlife.css"
import Filters from '../common/filters'
import ExploreSection from '../common/exploreSection'
import Collection from '../common/collection';

const Nightlife = () => {

    const nightlifeFilter = [
        {
            id: 1,
            icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
            title: 'Filters',
        },
        {
            id: 2,
            icon: <i class="fi fi-sr-angle-down absolute-center"></i>,
            title: 'Pro Offers',
        },
        {
            id: 3,
            icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
            title: 'Distance',
        },
        {
            id: 4,
            title: 'Rating 4.0+',
        },
        {
            id: 5,
            title: 'Pubs and Bars',
        },
    ];

    const collectionList = [
        {
            id: 1,
            title: "Microbreweries",
            cover: "https://b.zmtcdn.com/data/collections/f29fa95355a78edb148d737d12bd9ef0_1647256377.jpg",
            places: "32 places",
        },
        {
            id: 2,
            title: "Best Bars and Pubs",
            cover: "https://b.zmtcdn.com/data/collections/420f473015c7d64962b60bb355828192_1613380120.jpg",
            places: "31 places",
        }
    ]

    const nightlifeList = nightlife;

    return (
        <div>
            <Collection list={collectionList} />

            <div className="max-width">
                <Filters filterList={nightlifeFilter} />
            </div>

            <ExploreSection list={nightlifeList} collectionName='Nightlife Restaurants in NCR' />
        </div>
    )
}

export default Nightlife;