import React, { useState } from 'react'
import Booknavbar from './Booknavbar'

const Viewallbook = () => {
    const [bookData, changeBookData] = useState(
        [
            { "name": "Marvel", "description": "Comic", "Coverpage": "https://tse4.mm.bing.net/th/id/OIP.9-IwyumLzcQ2I-OXbPeyigHaLP?pid=Api&P=0&h=180" },
            { "name": "Story Theives", "description": "Fiction", "Coverpage": "https://tse1.mm.bing.net/th/id/OIP.rY_GG6duh9isxrrcTI1_EwHaLM?pid=Api&P=0&h=180" },
            { "name": "Avengers", "description": "Comic", "Coverpage": "https://tse4.mm.bing.net/th/id/OIP.5LFp1SyXWzIi5BFgK4ZV7wHaLF?pid=Api&P=0&h=180" },
            { "name": "Those Eyes", "description": "Horor", "Coverpage": "https://tse3.mm.bing.net/th/id/OIP._oNdWRc8phreA1wqALiJmQHaLH?pid=Api&P=0&h=180" },
            { "name": "Moon Light", "description": "Horor", "Coverpage": "https://tse3.mm.bing.net/th/id/OIP._80gRygjwAMX_czBc4g7fQHaKe?pid=Api&P=0&h=180" },
            { "name": "Story Theives", "description": "Fiction", "Coverpage": "https://tse1.mm.bing.net/th/id/OIP.rY_GG6duh9isxrrcTI1_EwHaLM?pid=Api&P=0&h=180"},
            { "name": "Avengers", "description": "Comic", "Coverpage": "https://tse4.mm.bing.net/th/id/OIP.5LFp1SyXWzIi5BFgK4ZV7wHaLF?pid=Api&P=0&h=180" },
            { "name": "Those Eyes", "description": "Horor", "Coverpage": "https://tse3.mm.bing.net/th/id/OIP._oNdWRc8phreA1wqALiJmQHaLH?pid=Api&P=0&h=180" }

        ]
    )
    return (
        <div>
            <Booknavbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                        <div className="row g-3">
                            {bookData.map(
                                (value, index) => {
                                    return (
                                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                            <div class="card" >
                                                <img src={value.Coverpage} class="card-img-top" alt="..." />
                                                <div class="card-body">
                                                    <h5 class="card-title">{value.name}</h5>
                                                    <p class="card-text">{value.description}</p>
                                                    <a href="#" class="btn btn-primary">Buy Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    )

                                }
                            )}


                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Viewallbook