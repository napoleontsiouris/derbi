const Slider = () => {
    return (
        <div className="slider_area">
            <div className="single_slider  d-flex align-items-center slider_bg_1 overlay2">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="slider_text ">
                                <span>Get Started Today.</span>
                                <h3><strong>Πολιτιστικός Σύλλογος<br/>"Δέρβη"</strong></h3>
                                {/* <p>With so much to consume and such little time, coming up <br />
                                    with relevant title ideas is essential</p> */}
                                <a href="About.html" className="boxed-btn3">Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;