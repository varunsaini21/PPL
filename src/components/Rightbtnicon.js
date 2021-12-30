import axios from 'axios';
// import { useState } from 'react';
import { Link } from 'react-router-dom';

function Rightbtnicon({ setPosts, posts }) {

	const handle = (val) => {
		console.log('val', val)
		axios({
			method: 'post',
			data: { search: val },
			url: 'http://localhost:3001/post/filterdata',
		}).then(res => {
			console.log('filterData', res.data)
			setPosts(res.data)
		}).catch(err => {
			console.log('filterdata Err', err);
		})
	}
	// console.log('varun chutiya ', posts)



	return (
		<>
			<div className="rght_btn">
				<span className="rght_btn_icon">
					<img src="images/btn_iconb.png" alt="up" />
				</span>
				<span className="btn_sep">
					<img src="images/btn_sep.png" alt="sep" />
				</span>
				<Link to="/postupload"><a href="/">Upload Post</a></Link>
			</div>
			<div className="rght_btn">
				<span className="rght_btn_icon">
					<img src="images/btn_icona.png" alt="up" />
				</span>
				<span className="btn_sep">
					<img src="images/btn_sep.png" alt="sep" />
				</span>
				<a href="/">Invite Friends</a>
			</div>
			<div className="rght_cate">
				<div className="rght_cate_hd" id="rght_cat_bg">
					Categories
				</div>
				<div className="rght_list">
					<ul>
						<li>
							<div onClick={() => handle('Cats')}>
								<span className="list_icon">
									<img src="images/icon_01.png" alt="up" />
								</span>{" "}
								CATS
							</div>
						</li>
						<li>
							<div onClick={() => handle('Dogs')}>
								<span className="list_icon">
									<img src="images/icon_02.png" alt="up" />
								</span>{" "}
								Dogs
							</div>
						</li>
						<li>
							<div onClick={() => handle('Birds')}>
								<span className="list_icon">
									<img src="images/icon_03.png" alt="up" />
								</span>{" "}
								Birds
							</div>
						</li>
						<li>
							<div onClick={() => handle('Rabbit')}>
								<span className="list_icon">
									<img src="images/icon_04.png" alt="up" />
								</span>{" "}
								Rabbit
							</div>
						</li>
						<li>
							<div onClick={() => handle('Others')}>
								<span className="list_icon">
									<img src="images/icon_05.png" alt="up" />
								</span>{" "}
								Others
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div className="rght_cate">
				<div className="rght_cate_hd" id="opn_cat_bg">
					Featured
				</div>
				<div className="sub_dwn">
					<div className="feat_sec">
						<div className="feat_sec_img">
							<img src="images/feat_img1.png" alt="#" />
						</div>
						<div className="feat_txt">Lorem Ipusum Text</div>
						<div className="btm_rgt">
							<div className="btm_arc">Cats</div>
						</div>
					</div>
					<div className="feat_sec">
						<div className="feat_sec_img">
							<img src="images/feat_img2.png" alt="#" />
						</div>
						<div className="feat_txt">Lorem Ipusum Text</div>
						<div className="btm_rgt">
							<div className="btm_arc">Dogs</div>
						</div>
					</div>
					<div className="feat_sec">
						<div className="feat_sec_img">
							<img src="images/feat_img3.png" alt="#" />
						</div>
						<div className="feat_txt">Lorem Ipusum Text</div>
						<div className="btm_rgt">
							<div className="btm_arc">Rabbits</div>
						</div>
					</div>
				</div>
			</div>
		</>

	);
}

export default Rightbtnicon;