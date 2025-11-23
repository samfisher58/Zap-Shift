import React from 'react';
import Logo from '../components/Logo/Logo';
import { Outlet } from 'react-router';
import AuthImage from "../assets/AuthImage.png"

const AuthLayout = () => {
	return (
		<div className="max-w-7xl mx-auto p-10 bg-[#EAECED]">
			<Logo></Logo>
			<div className="flex justify-center items-center">
				<div className="flex-1">
					<Outlet></Outlet>
				</div>
				<div className="flex-1">
					<img src={AuthImage} alt="" />
				</div>
			</div>
		</div>
	);
};

export default AuthLayout;
