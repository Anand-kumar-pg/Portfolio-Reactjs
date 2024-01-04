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
                                <Link className="custom-card-Btn"  as={Link} to = "/black/1">VIEW PORTFOLIO</Link >
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
                                <Link className="custom-card-Btn"  as={Link} to = "/green/2">VIEW PORTFOLIO</Link >
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
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.there live the blind texts. Separated they live in Bookmarksgrove</p>
                                <Link className="custom-card-Btn"  as={Link} to = "/animal/3">VIEW PORTFOLIO</Link >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <h2 className="mb-5 navbar-brand">Featured Blogs</h2>
                <div className="row">
                    <div className="col-12">
                        <div className="custom-card">
                            <div className="custom-card-left">
                                <img src="/images/img-16/pexels-photo-847393.jpeg" alt="" />
                            </div>
                            <div className="custom-card-right">
                                <p className="custom-card-tag">Turtle Swimming Underwater</p>
                                <h2 className="custom-card-title">Turtle Swimming</h2>
                                <p>Although much smaller than ours, a turtle’s lungs are incredibly powerful, allowing them to stay underwater for long periods. Turtles also breathe through their shells and scutes. They have red blood cells that absorb oxygen in the water while they swim, albeit in very small quantities.</p>
                                <Link className="custom-card-Btn"  as={Link} to = "/turtle/1">VIEW PORTFOLIO</Link >
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="custom-card">
                            <div className="custom-card-right">
                                <p className="custom-card-tag">Brown and Black Owl Staring</p>
                                <h2 className="custom-card-title">Owl</h2>
                                <p>Explore the various interpretations of owl staring, from its in different cultures to its role in spirituality and personal reflection. Uncover the and beliefs surrounding owl staring, including its connection to warnings and death omens. Understand the reasons behind owl staring and its potential as a form of recognition.</p>
                                <Link className="custom-card-Btn"  as={Link} to = "/owl/2">VIEW PORTFOLIO</Link >
                            </div>
                            <div className="custom-card-left">
                                <img src="/images/img-17/owl-bird-eyes-eagle-owl-86596.jpeg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="custom-card">
                            <div className="custom-card-left">
                                <img src="/images/img-18/antelope-nature-flowers-meadow-52961.jpeg" alt="" />
                            </div>
                            <div className="custom-card-right">
                                <p className="custom-card-tag">Antelopes on Green Field</p>
                                <h2 className="custom-card-title">Antelopes</h2>
                                <p>We had walked only a few hundred meters from our house when a four-horned antelope broke cover from a tiny bush and darted toward the distant thicket of trees. Its golden fur stood out as it flew across the green wheat fields. The deep green colour of the wheat crop on the left side of the path was a stark contrast to the exposed black of the fallow field on the other side. The air still felt warm and sparse from the afternoon sun. In a few days, the wheat will mature and the gold of the goat-sized antelope will melt in the gold of the dry wheat stems. </p>
                                <Link className="custom-card-Btn"  as={Link} to = "/antelopes/3">VIEW PORTFOLIO</Link >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Home;