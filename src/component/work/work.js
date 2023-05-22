import React from 'react';
import { useDispatch } from 'react-redux'
import { selPortfolio } from './workSlice';
import { Link } from 'react-router-dom';
import './work.css'

export default function Work() {

    const dispatch = useDispatch();
    const array =[0, 0, 0, 0, 0, 0, 0, 0, 0];

    return (
        <div className="container">
            <div className="section-title">
                <h2>Portfolio</h2>
                <p>My Works</p>
            </div>
            <div className="row">
                <div className="col-lg-12 d-flex justify-content-center">
                    <ul id="portfolio-flters">
                        <li className="filter-active">products</li>
                    </ul>
                </div>
            </div>
            <div className="row portfolio-container">
                {
                    array.map((element, idx) => {
                        return(
                            <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item" key={idx}>
                                <div className="portfolio-wrap">
                                    <img src={"/assets/img/portfolio/portfolio-" + (idx + 1) + ".jpg"} className="img-fluid" alt=""/>
                                    <div className="portfolio-info">
                                        <div className="portfolio-links">
                                            <Link to='/portfolio-detail'>
                                                <i className="bx bx-link" onClick={() => dispatch(selPortfolio(idx+1))}></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
