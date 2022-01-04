import Rightbtnicon from '../components/Rightbtnicon'

const HomePage = ({ setPosts, posts }) => {
    return (
        <>
            <Rightbtnicon setPosts={setPosts} posts={posts} />
        </>
    );
}

export default HomePage;