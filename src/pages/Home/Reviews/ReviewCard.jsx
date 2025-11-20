import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewCard = ({ review }) => {
    const { userName, user_photoURL, review: testimonial, ratings } = review;
	return (
		<div className="card bg-base-100 shadow-xl max-w-sm">
			<div className="card-body items-center text-center">
				{/* top quote icon */}
				<FaQuoteLeft className="text-primary text-3xl mb-2" />

				{/* main text */}
				<p className="text-sm text-base-content/80">{testimonial}</p>

				{/* avatar + names */}
				<div className="flex items-center gap-3 mt-4">
					<div className="avatar">
						<div className="w-12 h-12 rounded-full ring ring-primary ring-offset-2">
							<img src={user_photoURL} alt="Awlad Hossin" />
						</div>
					</div>
					<div>
						<p className="font-semibold text-base-content">{userName}</p>
						<p className="text-xs text-base-content/60">Ratings: {ratings}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReviewCard;