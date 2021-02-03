import React, {useState, useEffect} from 'react';
import Widget from './Widget';
import Pagination from './Pagination';

import axios from 'axios';

const PageWidgets = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(9);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(res.data);
            setLoading(false);
        };

        fetchPosts();
    }, []);

    //Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    //Chane page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div >
            <Widget
                postsPerPage={postsPerPage}
                posts={currentPosts}
                loading={loading}
            />
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
            />

        </div>
    );
};

export default PageWidgets;