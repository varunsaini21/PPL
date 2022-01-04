import axios from 'axios';

const UploadPost = () => {

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
			}
			else {
				console.log('not added');
			}
		})

	}

	return (
		<form onSubmit={submit} >
			<div className="createPost">
				<div>
					<div>Title</div>
					<input name="title" type="text" placeholder="Enter the title" required />
				</div>
				<div>
					<label> Select Category </label>
					<select name="category" required>
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
					<input type="file" name="image" required />
				</div>
				<div>
					<input type="submit" defaultValue="Upload" />
				</div>
			</div>
		</form>
	);
}

export default UploadPost;