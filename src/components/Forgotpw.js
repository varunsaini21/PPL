import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Forgotpw() {
	const navigate = useNavigate();

	async function submit(e) {
		e.preventDefault();
		let formdata = new FormData(e.target);
		await axios({
			method: 'POST',
			data: formdata,
			url: 'http://localhost:3001/user/forgot',
		})
			.then((res) => {
				console.log('Email found', res);
				localStorage.forgotPw = res.data;
				console.log(res.data);
				if (res.data === "not found") {
					alert('Email not found');
					navigate('/');
				}
				else {
					navigate('/reset');
				}

			})
			.catch((err) => {
				console.log('Forgotpw.js>>>err', err);
				localStorage.forgotPw = 'null';
				navigate('/');
			})
	}

	return (
		<div className="register_sec">
			<form onSubmit={submit}>
				<h1>Forgot Password</h1>
				<ul>
					<li>
						<span>Enter E-mail ID</span>
						<input name="email" type="text" placeholder="User@gmail.com" />
					</li>
					<li>
						<input type="submit" Value="Submit" />
					</li>
				</ul>
			</form>
		</div>

	);
}

export default Forgotpw;