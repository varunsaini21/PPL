function Rightcategory() {
	return (
		<>
			<div className="rght_cate">
				<div className="rght_cate_hd" id="rght_cat_bg">
					Categories
				</div>
				<div className="rght_list">
					<ul>
						<li>
							<a href="/">
								<span className="list_icon">
									<img src="images/icon_01.png" alt="up" />
								</span>{" "}
								CATS
							</a>
						</li>
						<li>
							<a href="/">
								<span className="list_icon">
									<img src="images/icon_02.png" alt="up" />
								</span>{" "}
								Dogs
							</a>
						</li>
						<li>
							<a href="/">
								<span className="list_icon">
									<img src="images/icon_03.png" alt="up" />
								</span>{" "}
								Birds
							</a>
						</li>
						<li>
							<a href="/">
								<span className="list_icon">
									<img src="images/icon_04.png" alt="up" />
								</span>{" "}
								Rabbit
							</a>
						</li>
						<li>
							<a href="/">
								<span className="list_icon">
									<img src="images/icon_05.png" alt="up" />
								</span>{" "}
								Others
							</a>
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

export default Rightcategory;