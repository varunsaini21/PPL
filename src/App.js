// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Navbarbar from './components/Navbarbar';
import Container from './components/Container';
import Footer from './components/Footer';
import { useState } from 'react';
// import { Router } from 'react-router';

function App() {
	const [posts, setPosts] = useState([]);
	return (
		<>
			<div className="navbar navbar-inverse navbar-fixed-top">
				<Navbar />
			</div>
			<div className="header">
				<Navbarbar />
			</div>
			<div className="container">
				<div className="content">
					<Container setPosts={setPosts} posts={posts} />
				</div>
			</div>
			<div className="footr">
				<Footer />
			</div>
		</>
	);
}

export default App;
