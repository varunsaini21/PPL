import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Feed from "./Feed";
import Rightbtnicon from "./Rightbtnicon";
import Login from "./Login";
import Wtoppl from "./Wtoppl";
import Post from "./Post";
import CreateAcc from "./CreateAcc";
import Forgotpw from "./Forgotpw";
import Newpw from "./Newpw";

function Container({ setPosts, posts }) {
	return (
		<Router>
			<div className="content_rgt">
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/createaccount" element={<CreateAcc />} />
					<Route path="/forgot" element={<Forgotpw />} />
					<Route path="/reset" element={<Newpw />} />
					<Route path="/post" element={<Rightbtnicon setPosts={setPosts} posts={posts} />} />
					<Route path="postupload" element={<Rightbtnicon />} />

				</Routes>
			</div>
			<div className="content_lft">

				<Routes>
					<Route path="/" element={<Wtoppl />} />
					<Route path="/createaccount" element={<Wtoppl />} />
					<Route path="/forgot" element={<Wtoppl />} />
					<Route path="/reset" element={<Wtoppl />} />
					<Route path="/post" element={<Feed setPosts={setPosts} posts={posts} />} />
					<Route path="/postupload" element={<Post />} />

				</Routes>
			</div>
		</Router>
	);
}

export default Container;