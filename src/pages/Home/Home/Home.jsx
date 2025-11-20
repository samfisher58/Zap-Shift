import React from 'react';
import Banner from "../Banner/Banner"
import FeatureSection from '../FeatureSection/FeatureSection';
import Service from '../Service/Service';
import Brands from '../Brands/Brands';
import Reviews from '../Reviews/Reviews';

const reviewsPromise = fetch('/reviews.json').then(res => res.json());

const Home = () => {
    return (
			<div>
				<Banner></Banner>
				<FeatureSection></FeatureSection>
				<Service></Service>
				<Brands></Brands>
				<Reviews reviewsPromise={reviewsPromise}></Reviews>
			</div>
		);
};

export default Home;