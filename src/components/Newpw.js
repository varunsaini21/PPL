import axios from 'axios';
// import { Link } from 'react-router-dom';

function Newpw() {

	async function submit(e) {
		e.preventDefault();
		let formdata = new FormData(e.target);
		formdata.append('email', localStorage.getItem('forgotPw'));
		const pw1 = e.target.password.value;
		const pw2 = e.target.passwordAgain.value;
		if ((pw1 === pw2) && pw1 !== '') {
			await axios({
				method: 'POST',
				data: formdata,
				url: 'http://localhost:3001/user/reset',
			})
				.then((res) => {
					console.log('Email found', res);


				})
				.catch((err) => {
					console.log('Newpw.js>>>err', err);
				})
		}
		else {
			console.log('Password not matched');
			alert('Enter same password');
		}
	}

	return (
		<div className="register_sec">
			<form onSubmit={submit}>
				<h1>Reset Password</h1>
				<ul>
					<li>
						<span>Enter New Password</span>
						<input name="password" type="text" placeholder="Enter your new password" />
					</li>
					<li>
						<span>Confirm Password</span>
						<input name="passwordAgain" type="text" placeholder="Enter your password again" />
					</li>
					<li>
						<input type="submit" Value="Submit" />
					</li>
				</ul>
			</form>
		</div>

	);
}

export default Newpw;