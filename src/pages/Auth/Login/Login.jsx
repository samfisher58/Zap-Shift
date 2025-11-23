import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link, useLocation } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useNavigate } from 'react-router';

const Login = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const { signInUser } = useAuth();
	const location = useLocation();
	const navigate = useNavigate();
	console.log('in the login page', location);
	const handleLogin = data => {
		console.log('from data:', data);
        signInUser(data.email, data.password).then(result=>{
            console.log(result.user);
			navigate(location?.state|| '/')
        })
        .catch(error=>{
            console.log(error);
        })
	};

	return (
		<form onSubmit={handleSubmit(handleLogin)}>
			<fieldset className="fieldset card-body">
				{/* email field */}
				<h3 className="text-3xl text-center my-2 font-bold">Welcome Back!</h3>
				<p className="text-center text-2xl font-semibold">Please login : </p>
				<label className="label">Email</label>
				<input
					type="email"
					{...register('email', {
						required: true,
					})}
					className="input"
					placeholder="Email"
				/>
				{errors.email?.type === 'required' && (
					<p className="text-red-600">Email is required</p>
				)}
				{/* password field */}
				<label className="label">Password</label>
				<input
					type="password"
					{...register('password', {
						required: true,
						minLength: 6,
						pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/,
					})}
					className="input"
					placeholder="Password"
				/>
				{errors.password?.type === 'required' && (
					<ul className="text-red-600">
						<li>Minimum 6 characters</li>
						<li>At least one uppercase letter</li>
						<li>At least one lowercase letter</li>
						<li>At least one digit (0-9)</li>
						<li>At least one special character</li>
					</ul>
				)}
				{errors.password?.type === 'pattern' && (
					<p className="text-red-600">Password is required</p>
				)}

				{/* rest */}
				<div>
					<a className="link link-hover">Forgot password?</a>
				</div>
				<button className="btn btn-neutral my-4">Login</button>
				<div>
					<p className="text-center mt-2">
						New to Zap Shift ?
						<Link to="/register" state={location.state} className="text-blue-600 font-bold underline">
							Register
						</Link>
					</p>

					<SocialLogin></SocialLogin>
				</div>
			</fieldset>
		</form>
	);
};

export default Login;
