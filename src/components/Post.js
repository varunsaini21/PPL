import axios from 'axios';
// import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Post() {

	const navigate = useNavigate();

	async function submit(e) {
		e.preventDefault();
		let formdata = new FormData(e.target);
		console.log("FORMDATA----------------------------\n", formdata);
		formdata.append('userName', localStorage.getItem('uName'));

		await axios({
			method: 'POST',
			data: formdata,
			// withCredentials: true,
			url: 'http://localhost:3001/post/upload',
			config: {
				headers: {
					'Content-Type': 'multipart/form-data',
				}
			}
		}).then((res) => {
			console.log(res);
			if (res.data.success) {
				alert(res.data.message);
				navigate('/post');
			}
			else {
				console.log('not added');
			}
		})

	}

	return (
		<form onSubmit={submit} >
			<div className="createPost">
				<h1>Upload a Post</h1>
				<div>
					<div>Title</div>
					<input name="title" type="text" placeholder="Enter the title" required />
				</div>
				<div>
					<label> Select Category </label>
					<select name="category">
						<option value="Others"> Others
						</option>
						<option value="Dogs"> Dogs
						</option>
						<option value="Cats"> Cats
						</option>
						<option value="Birds"> Birds
						</option>
						<option value="Rabbit"> Rabbit
						</option>

					</select>
				</div>
				<div>
					<div>Image</div>
					<input type="file" name="image" />
				</div>
				<div>
					<input type="submit" defaultValue="Upload" />
				</div>
				<Link to="/post"><h3>Go Back</h3></Link>
			</div>
		</form>
	);
}

export default Post;