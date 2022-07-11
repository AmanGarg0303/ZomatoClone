import React from 'react'
import Filters from '../common/filters'
import "./delivery.css"
import DeliveryCollections from './deliveryCollections';
import TopBrands from './topBrands';
import ExploreSection from "../common/exploreSection";
import { restaurants } from '../../data/restaurants';


const Delivery = () => {

    const deliveryFilter = [
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
            title: 'Safe and Hygenic',
        },
        {
            id: 4,
            title: 'Pure Veg',
        },
        {
            id: 5,
            icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
            title: 'Delivery Time',
        },
        {
            id: 6,
            title: 'Great Offers',
        }
    ];

    const restaurantList = restaurants;

    return (
        <div>
            <div className='max-width'>
                <Filters filterList={deliveryFilter} />
            </div>

            <DeliveryCollections />
            <TopBrands />
            <ExploreSection list={restaurantList} collectionName="Delivery Restourants in NCR" />

        </div>
    )
}

export default Delivery