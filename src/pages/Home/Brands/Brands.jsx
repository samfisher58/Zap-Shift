import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '../../../assets/brands/amazon.png';
import image3 from '../../../assets/brands/casio.png';
import image4 from '../../../assets/brands/moonstar.png';
import image5 from '../../../assets/brands/randstad.png';
import image6 from '../../../assets/brands/star.png';
import image7 from '../../../assets/brands/start_people.png';
import { Autoplay } from 'swiper/modules';

const brandLogos = [image1, image3, image4, image5, image6, image7];

const Brands = () => {
	return (
		<div className='my-8 px-10 '>
            <h1 className='text-xl font-bold text-center my-3'>We've helped thousands of sales teams</h1>
			<Swiper
				slidesPerView={3}
				centeredSlides={true}
				spaceBetween={30}
				grabCursor={true}
				loop={true}
				modules={[Autoplay]}
				autoplay={{
					delay: 1000,
					disableOnInteraction: false,
				}}
			>
				{brandLogos.map((logo, index) => (
					<SwiperSlide key={index}>
						<img src={logo} alt="" />{' '}
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Brands;
