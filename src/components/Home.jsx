import React from 'react'
import './style.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <div className="container about-sections">
                <img src="/images/img-15/unnamed.jpg" width="150px" height="150px" style={{ borderRadius: '50%', objectFit: 'cover' }} alt="Description" />
                <h2 className="about-section-title navbar-brand">Mostudio</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. A rem ea quas amet velit, exercitationem doloribus
                    perferendis, maxime sequi quaerat fugit deleniti cum ipsam expedita et obcaecati impedit? Officia, error.
                </p>
            </div>
            <div className="container">
                <h2 className="mb-5 navbar-brand">Featured Works</h2>
                <div className="row">
                    <div className="col-12">
                        <div className="custom-card">
                            <div className="custom-card-left">
                                <img src="/images/img-1/work-1.jpg.webp" alt="" />
                            </div>
                            <div className="custom-card-right">
                                <p className="custom-card-tag">PORTRAIT</p>
                                <h2 className="custom-card-title">Black & Gold Paint Face</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                                <Link className="custom-card-Btn"  as={Link} to = "/detail/1">VIEW PORTFOLIO</Link >
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="custom-card">
                            <div className="custom-card-right">
                                <p className="custom-card-tag">NATURE</p>
                                <h2 className="custom-card-title">Green Leaves</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                    there live the blind texts. Separated they live in Bookmarksgrove.</p>
                                <Link className="custom-card-Btn"  as={Link} to = "/detail/2">VIEW PORTFOLIO</Link >
                            </div>
                            <div className="custom-card-left">
                                <img src="/images/img-2/work-2.jpg.webp" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="custom-card">
                            <div className="custom-card-left">
                                <img src="/images/img-4/work-7.jpg.webp" alt="" />
                            </div>
                            <div className="custom-card-right">
                                <p className="custom-card-tag">ANIMALS</p>
                                <h2 className="custom-card-title">Pug Puppy</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                                <Link className="custom-card-Btn"  as={Link} to = "/detail/3">VIEW PORTFOLIO</Link >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <a className="text-decoration-none" href="blog.html">
                    <h2 className="mb-5 navbar-brand">Blogs</h2>
                </a>
                <div className="row" style={{ rowGap: '30px' }}>
                    <div className="col-12 col-md-4">
                        <div className="card">
                            <div className="card-img-wrap">
                                <img
                                    src="images/img-10/pexels-photo-8467419.webp"
                                    height="300px"
                                    className="card-img-top"
                                    alt="..."
                                />
                            </div>
                            <div className="card-body">
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="card">
                            <div className="card-img-wrap">
                                <img
                                    src="images/img-3/work-6.jpg.webp"
                                    height="300px"
                                    className="card-img-top"
                                    alt="..."
                                />
                            </div>
                            <div className="card-body">
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="card">
                            <div className="card-img-wrap">
                                <img
                                    src="images/img-8/pexels-photo-1526410.jpeg"
                                    height="300px"
                                    className="card-img-top"
                                    alt="..."
                                />
                            </div>
                            <div className="card-body">
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="card">
                            <div className="card-img-wrap">
                                <img
                                    src="images/img-7/pexels-photo-1020016.jpeg"
                                    height="300px"
                                    className="card-img-top"
                                    alt="..."
                                />
                            </div>
                            <div className="card-body">
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <a className="text-decoration-none" href="Gallery.html">
                    <h2 className="mb-5 navbar-brand">Works</h2>
                </a>
                <div className="row" style={{ rowGap: '30px' }}>
                    <div className="col-12 col-md-4">
                        <div className="card">
                            <div className="card-img-wrap">
                                <img
                                    src="images/img-11/amazing-animal-beautiful-beautifull.jpg"
                                    height="300px"
                                    className="card-img-top"
                                    alt="..."
                                />
                            </div>
                            <div className="card-body">
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="card">
                            <div className="card-img-wrap">
                                <img
                                    src="images/img-13/pexels-photo-4553618.jpeg"
                                    height="300px"
                                    className="card-img-top"
                                    alt="..."
                                />
                            </div>
                            <div className="card-body">
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="card">
                            <div className="card-img-wrap">
                                <img
                                    src="images/img-14/pexels-photo-1234035.jpeg"
                                    height="300px"
                                    className="card-img-top"
                                    alt="..."
                                />
                            </div>
                            <div className="card-body">
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="card">
                            <div className="card-img-wrap">
                                <img
                                    src="images/img-6/work-9.jpg.webp"
                                    height="300px"
                                    className="card-img-top"
                                    alt="..."
                                />
                            </div>
                            <div className="card-body">
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Home;