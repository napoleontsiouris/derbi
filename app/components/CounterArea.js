const CounterArea = ({  }) => {
    return (
        <div className="counter_area">
            <div className="container-fluid">
                <div className="col-lg-10 offset-lg-1">
                    <div className="counter_bg overlay">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="single_counter d-flex align-items-center justify-content-center">
                                    <div className="icon">
                                        <i className="flaticon-calendar"></i>
                                    </div>
                                    <div className="events">
                                        <h3 className="counter">20</h3>
                                        <p>Συμμετοχές</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="single_counter d-flex align-items-center justify-content-center">
                                    <div className="icon">
                                        <i className="flaticon-heart-beat"></i>
                                    </div>
                                    <div className="events">
                                        <h3 className="counter">50</h3>
                                        <p>Μέλη</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="single_counter d-flex align-items-center justify-content-center">
                                    <div className="icon">
                                        <i className="flaticon-in-love"></i>
                                    </div>
                                    <div className="events">
                                        <h3 className="counter">11</h3>
                                        <p>Εκδηλώσεις</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="single_counter d-flex align-items-center justify-content-center">
                                    <div className="icon">
                                        <i className="flaticon-hug"></i>
                                    </div>
                                    <div className="events">
                                        <h3 className="counter">15</h3>
                                        <p>Δραστηριότητες</p>
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
export default CounterArea;