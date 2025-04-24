const Donation = () => {
    return (
        <div data-scroll-index='1' className="make_donation_area section_padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section_title text-center mb-55">
                            <h3><strong><span>Κάντε μία δωρεά</span></strong></h3>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <form action="#" className="donation_form">
                            <div className="row align-items-center">
                                <div className="col-md-4">
                                    <div className="single_amount">
                                        <div className="input_field">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="basic-addon1">&euro;</span>
                                                </div>
                                                <input type="text" className="form-control" placeholder="10" aria-label="Username" aria-describedby="basic-addon1"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="single_amount">
                                        <div className="fixed_donat d-flex align-items-center justify-content-between">
                                            <div className="select_prise">
                                                <h4>Επιλέξτε ποσό:</h4>
                                            </div>
                                            <div className="single_doonate">
                                                <input type="radio" id="blns_1" name="radio-group" checked />
                                                    <label for="blns_1">10</label>
                                            </div>
                                            <div className="single_doonate">
                                                <input type="radio" id="blns_2" name="radio-group" checked /> 
                                                    <label for="blns_2">30</label>
                                            </div>
                                            <div className="single_doonate">
                                                <input type="radio" id="Other" name="radio-group" checked />
                                                    <label for="Other">Other</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="donate_now_btn text-center">
                            <a href="#" className="boxed-btn4">Donate Now</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}
export default Donation;