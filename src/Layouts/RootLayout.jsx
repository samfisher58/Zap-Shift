import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../pages/Shared/Navbar/Navbar';


const RootLayout = () => {
    return (
			<div className="max-w-7xl mx-auto bg-[#EAECED] px-10">
				<Navbar></Navbar>
				<Outlet></Outlet>
				<Footer></Footer>
			</div>
		);
};

export default RootLayout;