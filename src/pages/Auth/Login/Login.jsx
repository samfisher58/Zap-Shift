import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router';

const Login = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const { signInUser } = useAuth();
	const handleLogin = data => {
		console.log('from data:', data);
        signInUser(data.email, data.password).then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error);
        })
	};

	return (
		<form onSubmit={handleSubmit(handleLogin)}>
			<fieldset className="fieldset">
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
				<button className="btn btn-neutral mt-4">Login</button>
			</fieldset>
			<p className="text-center mt-2">
				New to Zap Shift ?{' '}
				<Link to="/register" className="text-blue-600 font-bold underline">
					Register
				</Link>{' '}
			</p>

			{/* Google login */}
			<button className="btn bg-white text-black border-[#e5e5e5]">
				<svg
					aria-label="Google logo"
					width="16"
					height="16"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
				>
					<g>
						<path d="m0 0H512V512H0" fill="#fff"></path>
						<path
							fill="#34a853"
							d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
						></path>
						<path
							fill="#4285f4"
							d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
						></path>
						<path
							fill="#fbbc02"
							d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
						></path>
						<path
							fill="#ea4335"
							d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
						></path>
					</g>
				</svg>
				Login with Google
			</button>
		</form>
	);
};

export default Login;
