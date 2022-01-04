import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const Login = ({ setUName }) => {

	const navigate = useNavigate();

	const [login, setLoginDetails] = useState({
		Email: '',
		Password: ''
	});

	function handle(e) {
		setLoginDetails({ ...login, [e.target.name]: e.target.value });
	}

	async function handleClick(event) {
		event.preventDefault();
		const newnode = {
			email: login.Email,
			password: login.Password,
		}
		try {
			const response = await axios.post('http://127.0.0.1:3001/user/login', newnode);
			console.log('response>>>login>>>', response);
			if (response.data.success) {
				navigate('/feed');
				console.log(response.data.data);
				localStorage.uName = response.data.data.userName;
				setUName(response.data.data.userName);
			}
			else {
				// setIsLogin(false);
				console.log('Incorrect entry');
				alert("Invalid Entry");
			}
		}
		catch (err) {
			console.log("login>>>error", err);
		}
	}

	return (
		<div className="login_sec">
			<h1>Log In</h1>
			<ul>
				<li>
					<span>Email-ID</span>
					<input
						name="Email"
						onChange={handle}
						type="text"
						placeholder="Enter your email"
						required
					/>
				</li>
				<li>
					<span>Password</span>
					<input
						name="Password"
						onChange={handle}
						type="text"
						placeholder="Enter your password"
						required />
				</li>
				<li>
					<input type="checkbox" required />Remember Me
				</li>
				<li>
					<input
						onClick={handleClick}
						type="submit"
						Value="Log In" />
					<Link to="/forgot">Forgot Password</Link>
				</li>
			</ul>
			<div className="addtnal_acnt">
				I do not have any account yet.
				<Link to="/signup">Create My Account Now !</Link>
			</div>
		</div>
	);
}

export default Login;