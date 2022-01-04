import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Wtoppl from './components/Wtoppl';
import Post from './components/Post';

import LoginPage from './screens/LoginPage';
import SignUpPage from './screens/SignUpPage';
import ForgotPage from './screens/ForgotPage';
import ResetPage from './screens/ResetPage';
import HomePage from './screens/HomePage';

import { useState } from 'react';

const App = () => {
	let isLogin = localStorage.getItem('uName');
	if (isLogin === "null") {
		isLogin = null;
	}
	const [uName, setUName] = useState(isLogin || null);
	const [posts, setPosts] = useState([]);

	return (
		<Router>
			<div className="navbar navbar-inverse navbar-fixed-top">
				<Navbar />
			</div>
			<div className="header">
				<Header uName={uName} setUName={setUName} />
			</div>
			<div className="container">
				<div className='content'>
					<div className="content_lft">
						{uName !== null ? <Post posts={posts} setPosts={setPosts} /> : <Wtoppl />}
					</div>
					<div className="content_rgt">
						<Routes>
							<Route path="/" element={
								uName === null ?
									<LoginPage setUName={setUName} /> :
									<Navigate to="/feed" />} />

							<Route path="/signup" element={
								uName === null ?
									<SignUpPage /> :
									<Navigate to="/feed" />} />

							<Route path="/forgot" element={
								uName === null ?
									<ForgotPage /> :
									<Navigate to="/feed" />} />

							<Route path="/reset" element={
								uName === null ?
									<ResetPage /> :
									<Navigate to="/feed" />} />

							<Route path="/feed" element={
								uName === null ?
									<Navigate to="/" /> :
									<HomePage posts={posts} setPosts={setPosts} />} />

						</Routes>
					</div>
				</div>
			</div>
			<div className="footr">
				<Footer />
			</div>
		</Router>
	);
}

export default App;