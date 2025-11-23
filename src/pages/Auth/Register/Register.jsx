import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link, Navigate, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';

const Register = () => {
	const location = useLocation();
	const { register, handleSubmit,formState:{errors} } = useForm();
    const { registerUser, updateUserProfile } = useAuth();
	const navigate = useNavigate();

	const handleRegistration = data => {
		console.log(data);
		const profileImg = data.photo[0];
        registerUser(data.email , data.password)
        .then(result =>{
            console.log(result.user);
			//store the image and get the photo url
			const formData = new FormData();
			formData.append('image',profileImg)
			const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`;
			axios.post(image_API_URL, formData)
			.then(res=>{
				console.log('after image upload',res.data.data.url);
				//update user profile here
				const userProfile = {
					displayName: data.name,
					photoURL: res.data.data.url,
				};
				updateUserProfile(userProfile)
				.then(()=>{
					console.log('user profile updated');
					navigate(location?.state|| '/');
				})
				.catch(error=>{
					console.log(error);
				})
			})
        })
        .catch (error=>{
            console.log(error);
        })
	};

	return (
		<div>
			<h3 className="text-3xl text-center my-2 font-bold">
				Welcome to ZapShift!
			</h3>
			<p className="text-center text-2xl font-semibold">Create an account : </p>
			<form className="card-body" onSubmit={handleSubmit(handleRegistration)}>
				<fieldset className="fieldset card-body">
					{/* Name */}
					<label className="label">Name</label>
					<input
						type="text"
						{...register('name', { required: true })}
						className="input"
						placeholder="Your Name"
					/>
					{errors.name?.type === 'required' && (
						<p className="text-red-600"> Name is required </p>
					)}
					{/* Image */}
					<label className="label">Photo</label>
					<input
						type="file"
						{...register('photo', { required: true })}
						className="file-input"
						placeholder="Your Photo"
					/>
					{errors.name?.type === 'required' && (
						<p className="text-red-600"> Name is required </p>
					)}
					{/* Email */}
					<label className="label">Email</label>
					<input
						type="email"
						{...register('email', { required: true })}
						className="input"
						placeholder="Email"
					/>
					{errors.email?.type === 'required' && (
						<p className="text-red-600"> Email is required </p>
					)}
					{/* Password */}
					<label className="label">Password</label>
					<input
						type="password"
						{...register('password', {
							required: true,
							minLength: 6,
							pattern:
								/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/,
						})}
						className="input"
						placeholder="Password"
					/>
					{errors.password?.type === 'required' && (
						<p className="text-red-600"> Password is required </p>
					)}
					{errors.password?.type === 'minLength' && (
						<p className="text-red-600">
							{' '}
							Password must be 6 character or higher{' '}
						</p>
					)}
					{errors.password?.type === 'pattern' && (
						<ul className="text-red-600">
							<li>Minimum 6 characters</li>
							<li>At least one uppercase letter</li>
							<li>At least one lowercase letter</li>
							<li>At least one digit (0–9)</li>
							<li>At least one special character</li>
						</ul>
					)}

					<div>
						<a className="link link-hover">Forgot password?</a>
					</div>
					<button className="btn btn-neutral mt-4">Register</button>
					<p className="text-center mt-2">
						Already have an account?
						<Link to="/login" state={location.state} className="text-blue-600 font-bold underline">
							Login
						</Link>
					</p>
					<SocialLogin></SocialLogin>
				</fieldset>
			</form>
		</div>
	);
};

export default Register;
