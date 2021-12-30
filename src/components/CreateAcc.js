import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function CreateAcc() {

	const navigate = useNavigate();
	const [newacc, setNewAcc] = useState({
		Username: '',
		Password: '',
		Email: '',
		First_Name: '',
		Last_Name: ''
	});

	function handle(e) {
		setNewAcc({ ...newacc, [e.target.name]: e.target.value });
	}

	async function handleClick(event) {
		event.preventDefault();
		// console.log(newacc);
		const newnode = {
			userName: newacc.Username,
			password: newacc.Password,
			email: newacc.Email,
			firstName: newacc.First_Name,
			lastName: newacc.Last_Name
		}
		// console.log('HERE' + newnode);
		try {
			const response = await axios.post('http://127.0.0.1:3001/user/signup', newnode);
			console.log('response>>>', response);
			navigate('/');
		}
		catch (err) {
			console.log("error", err);
		}
	}

	return (
		<div className="register_sec">
			<h1>Create An Account</h1>
			<ul>
				<li>
					<span>Username</span>
					<input name="Username" onChange={handle} type="text" placeholder="Enter your username" />
				</li>
				<li>
					<span>Password</span>
					<input name="Password" onChange={handle} type="text" placeholder="Enter your password" />
				</li>
				<li>
					<span>Email</span>
					<input name="Email" onChange={handle} type="text" placeholder="Enter your email" />
				</li>
				<li>
					<span>First Name</span>
					<input name="First_Name" onChange={handle} type="text" placeholder="Enter your first name" />
				</li>
				<li>
					<span>Last Name</span>
					<input name="Last_Name" onChange={handle} type="text" placeholder="Enter your last name" />
				</li>
				<li>
					<input type="checkbox" />I agree to Term &amp; Conditions
				</li>
				<li>
					<Link to="/">
						<input onClick={handleClick} type="submit" defaultValue="Register" />
					</Link>
				</li>
			</ul>
			<div className="addtnal_acnt">
				I already have an account.<a href><Link to="/">Login My Account !</Link></a>
			</div>
		</div>

	);
}

export default CreateAcc;