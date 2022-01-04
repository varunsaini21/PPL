import { useEffect } from "react";
import axios from "axios";

const Post = ({ setPosts, posts }) => {
	useEffect(() => {
		axios.get('http://127.0.0.1:3001/post/present')
			.then(jsonRes => {
				setPosts(jsonRes.data);
				console.log("post>>>present>>>res", jsonRes.data);
			})
			.catch((err) => {
				console.log("post>>>present>>>error", err);
			});
	}, [setPosts]);

	async function handleClick(e) {

		await axios({
			method: 'POST',
			data: { 'postId': e, 'userId': localStorage.getItem('uName') },
			url: 'http://localhost:3001/post/likes'
		})
			.then((res) => {
				console.log('Post like button pressed', res);
			})
			.catch((err) => {
				console.log('Feed.js>>>err', err);
			})
	}

	return (
		<>
			{
				posts.slice(0).reverse().map(post =>
					<div className="contnt_2">
						<div className="div_a">
							<div className="div_title">
								{post.title}
							</div>
							<div className="btm_rgt">
								<div className="btm_arc">{post.category}</div>
							</div>
							<div className="div_top">
								<div className="div_top_lft">
									<img src="images/img_6.png" alt="#" />
									{post.userName}
								</div>
								<div className="div_top_rgt">
									<span className="span_date">{post.date}</span>
									<span className="span_time">{post.time}</span>
								</div>
							</div>
							<div className="div_image">
								<img src={'http://localhost:3001/' + post.image} alt="pet" />
							</div>
							<div className="div_btm">
								<div className="btm_list">
									<ul>
										<li>
											<a href="/">
												<span className="btn_icon">
													<img src="images/icon_001.png" alt="share" />
												</span>
												Share
											</a>
										</li>
										<li>
											<a href="/">
												<span className="btn_icon">
													<img src="images/icon_002.png" alt="share" />
												</span>
												Flag
											</a>
										</li>
										<li>
											<a href="/">
												<span className="btn_icon">
													<img src="images/icon_004.png" alt="share" />
												</span>
												4 Comments
											</a>
										</li>
										<li>
											<a href="#" onClick={() => handleClick(post._id)}>
												<span className="btn_icon">
													<img src="images/icon_003.png" alt="share" />
												</span>
												Likes
											</a>
										</li>
										<div className="like_count" style={{ marginRight: 10 }}>
											<span className="lft_cnt" />
											<span className="mid_cnt">{post.likes.length}</span>
											<span className="rit_cnt" />
										</div>
										<li>
											<a href="/">
												<span className="btn_icon">
													<img src="images/icon_003.png" alt="share" />
												</span>
												Unlike
											</a>
										</li>
										<div className="like_count">
											<span className="lft_cnt" />
											<span className="mid_cnt">4</span>
											<span className="rit_cnt" />
										</div>
									</ul>
								</div>
							</div>
						</div>
					</div>
				)
			}
		</>
	);
}

export default Post;