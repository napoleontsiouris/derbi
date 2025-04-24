"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const News = () => {
    const newsData = [
        {
            img: "img/news/1.png",
            date: "July 18, 2019",
            title: "Pure Water Is More Essential",
            description: "The passage experienced a surge in popularity during the 1960s when used it on their sheets, and again.",
            link: "single-blog.html"
        },
        {
            img: "img/news/2.png",
            date: "July 18, 2019",
            title: "Pure Water Is More Essential",
            description: "The passage experienced a surge in popularity during the 1960s when used it on their sheets, and again.",
            link: "single-blog.html"
        }
    ];

    return (
        <div className="reson_area section_padding">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section_title text-center mb-55">
                            <h3><span>Νέα/Ανακοινώσεις</span></h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="single_reson">
                                    <div className="thum">
                                        <div className="thum_1">
                                            <img src="img/help/1.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="help_content">
                                        <h4>Η ιστορία της Δερβιτσάνης</h4>
                                        <p>Lorem ipsum, or lipsum as it is
                                            sometimes known, is dummy
                                            text used in laying out print.</p>
                                        <a href="#" className="read_more">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single_reson">
                                    <div className="thum">
                                        <div className="thum_1">
                                            <img src="img/help/2.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="help_content">
                                        <h4>Δραστηριότητες</h4>
                                        <p>Lorem ipsum, or lipsum as it is
                                            sometimes known, is dummy
                                            text used in laying out print.</p>
                                        <a href="#" className="read_more">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single_reson">
                                    <div className="thum">
                                        <div className="thum_1">
                                            <img src="img/help/3.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="help_content">
                                        <h4>Νέα/Ανακοινώσεις</h4>
                                        <p>Lorem ipsum, or lipsum as it is
                                            sometimes known, is dummy
                                            text used in laying out print.</p>
                                        <a href="#" className="read_more">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single_reson">
                                    <div className="thum">
                                        <div className="thum_1">
                                            <img src="img/help/1.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="help_content">
                                        <h4>Η ιστορία της Δερβιτσάνης</h4>
                                        <p>Lorem ipsum, or lipsum as it is
                                            sometimes known, is dummy
                                            text used in laying out print.</p>
                                        <a href="#" className="read_more">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single_reson">
                                    <div className="thum">
                                        <div className="thum_1">
                                            <img src="img/help/2.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="help_content">
                                        <h4>Δραστηριότητες</h4>
                                        <p>Lorem ipsum, or lipsum as it is
                                            sometimes known, is dummy
                                            text used in laying out print.</p>
                                        <a href="#" className="read_more">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single_reson">
                                    <div className="thum">
                                        <div className="thum_1">
                                            <img src="img/help/3.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="help_content">
                                        <h4>Νέα/Ανακοινώσεις</h4>
                                        <p>Lorem ipsum, or lipsum as it is
                                            sometimes known, is dummy
                                            text used in laying out print.</p>
                                        <a href="#" className="read_more">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single_reson">
                                    <div className="thum">
                                        <div className="thum_1">
                                            <img src="img/help/1.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="help_content">
                                        <h4>Η ιστορία της Δερβιτσάνης</h4>
                                        <p>Lorem ipsum, or lipsum as it is
                                            sometimes known, is dummy
                                            text used in laying out print.</p>
                                        <a href="#" className="read_more">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single_reson">
                                    <div className="thum">
                                        <div className="thum_1">
                                            <img src="img/help/2.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="help_content">
                                        <h4>Δραστηριότητες</h4>
                                        <p>Lorem ipsum, or lipsum as it is
                                            sometimes known, is dummy
                                            text used in laying out print.</p>
                                        <a href="#" className="read_more">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single_reson">
                                    <div className="thum">
                                        <div className="thum_1">
                                            <img src="img/help/3.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="help_content">
                                        <h4>Νέα/Ανακοινώσεις</h4>
                                        <p>Lorem ipsum, or lipsum as it is
                                            sometimes known, is dummy
                                            text used in laying out print.</p>
                                        <a href="#" className="read_more">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News;
