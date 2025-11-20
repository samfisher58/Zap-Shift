import React from 'react';
import { LuTruck } from 'react-icons/lu';

const FeatureCard = ({item}) => {
    return (
			<div className="bg-white p-5 flex-1 rounded-lg">
				<LuTruck />
				<h1 className='font-bold my-2'>{item.title}</h1>
				<p className='text-xs'>
					From personal packages to <br /> business shipments — we deliver{' '}
					<br /> on time, every time.
				</p>
			</div>
		);
};

export default FeatureCard;