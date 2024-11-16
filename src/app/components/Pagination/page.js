import React from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div>
            <nav className="p-5">
                <ul className="flex">
                    {pageNumbers.map((number, index) => (
                        <li className="mr-6" key={number}>
                            {console.log(index)}
                            <button
                                className={index === number - 1 ? "text-blue-500" : "text-red-500"}
                                onClick={() => paginate(number)}
                                aria-label={`Go to Page ${number}`}
                            >
                                {number}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div >
    )
}

export default Pagination