const LatestActivities = () => {
    return (
        <div className="latest_activites_area">
            
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-5">
                            <div className=" video_bg_1 video_activite  d-flex align-items-center justify-content-center">
                            {/* <a className="popup-video" href="https://www.youtube.com/watch?v=MG3jGHnBVQs">
                                <i className="flaticon-ui"></i>
                            </a> */}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="activites_info">
                            <div className="section_title">
                                <h3> <span>Το όραμα του Πολιτιστικού Συλλόγου</span> <br/>
                                &ldquo;Δέρβη&rdquo;</h3>
                            </div>
                            <p className="para_1">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
                                eiusmod tempor incididunt  ut labore dolore magna aliqua.
                                enim minim veniam, quis nostrud exercitation.</p>
                            <p className="para_2">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
                                eiusmod tempor incididunt  ut labore dolore magna aliqua.
                                enim minim veniam, quis nostrud exercitation. tempor
                                incididunt  ut labore dolore magna aliqua. enim minim
                                veniam, quis nostrud exercitation.</p>
                            <a href="#" data-scroll-nav='1' className="boxed-btn4">Donate Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LatestActivities;