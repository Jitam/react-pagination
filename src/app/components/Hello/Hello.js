import { fetchPosts } from '@/features/postSlice'
import React, { Suspense, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../Loading/page'
import Pagination from '../Pagination/page'

const Hello = () => {
    const posts = useSelector((state) => state.posts)
    const dispatch = useDispatch()
    const [allPosts, setAllPosts] = useState(posts.posts);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(20);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const Posts = () => {
        return (
            <Suspense fallback={<Loading />}>
                {currentPosts?.length > 0 ? <ul>
                    {currentPosts.map((item) => (
                        <li key={item.id}>
                            {item.title}
                        </li>
                    ))}
                </ul> : <></>}
            </Suspense>
        )
    }

    return (
        <div>
            <button onClick={() => dispatch(fetchPosts())}>Get Posts</button>
            <>
                {posts.loading && <><Loading /></>}
            </>
            <Posts />
            <Pagination postsPerPage={postsPerPage} totalPosts={allPosts.length} paginate={paginate} />
            {!posts.loading && posts.error ? <>{posts.error}</> : <></>}
        </div>
    )
}

export default Hello