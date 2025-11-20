import React from 'react';
import FeatureCard from './FeatureCard';

const FeatureSection = () => {
    return (
			<div className="px-20">
				<h1 className="py-5 font-bold text-3xl">How it Works</h1>

				<section className="services grid sm:grid-cols-2 md:grid-cols-4 gap-3 justify-between my-5">
					{[
						{ title: 'Booking Pick & Drop' },
						{ title: 'Cash On Delivery' },
						{ title: 'Delivery Hub' },
						{ title: 'Booking SME & Corporate' },
					].map(item => (
						<FeatureCard key={item.title} item={item}></FeatureCard>
					))}
				</section>
			</div>
		);	
};

export default FeatureSection;