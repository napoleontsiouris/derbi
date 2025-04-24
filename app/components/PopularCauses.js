"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const PopularCauses = () => {
    const causes = [
        { img: "img/causes/1.png", title: "Help us to Send Food" },
        { img: "img/causes/2.png", title: "Clothes For Everyone" },
        { img: "img/causes/3.png", title: "Water For All Children" },
        { img: "img/causes/1.png", title: "Help us to Send Food" },
    ];

    return (
        <div className="popular_causes_area section_padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section_title text-center mb-55">
                            <h3><span>Popular Causes</span></h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <Swiper
                            navigation={true}
                            modules={[Navigation]}
                            spaceBetween={30}
                            slidesPerView={1}
                            breakpoints={{
                                600: { slidesPerView: 2 },
                                1000: { slidesPerView: 3 },
                            }}
                        >
                            {causes.map((cause, index) => (
                                <SwiperSlide key={index}>
                                    <div className="single_cause">
                                        <div className="thumb">
                                            <img src={cause.img} alt={cause.title} />
                                        </div>
                                        <div className="causes_content">
                                            <h4>{cause.title}</h4>
                                            <p>Help those in need with your kind support.</p>
                                            <a className="read_more" href="cause_details.html">
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularCauses;
