import Link from "next/link";
const Price = () => {
    return ( 
        <div>
       
    <div className="container-fluid page-header py-5" style={{ marginBottom: "6rem" }} >
        <div className="container py-5">
            <h1 className="display-3 text-white mb-3 animated slideInDown">Pricing</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link className="text-white" href="/">Home</Link></li>
                    {/* <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li> */}
                    <li className="breadcrumb-item text-white active" aria-current="page">Pricing</li>
                </ol>
            </nav>
        </div>
    </div>
    
    


    <div className="container-xxl py-5">
        <div className="container py-5">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="text-secondary text-uppercase">Pricing Plan</h6>
                <h1 className="mb-5">Perfect Pricing Plan</h1>
            </div>
            <div className="row g-4">
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="price-item">
                        <div className="border-bottom p-4 mb-4">
                            <h5 className="text-primary mb-1">Basic Plan</h5>
                            <h1 className="display-5 mb-0">
                                <small className="align-top" style={{ fontSize: "22px", lineHeight: "45px" }}>$</small>49.00<small
                                    className="align-bottom" style={{ fontSize: "16px", lineHeight: "40px"  }}>/ Month</small>
                            </h1>
                        </div>
                        <div className="p-4 pt-0">
                            <p><i className="fa fa-check text-success me-3"></i>HTML5 & CSS3</p>
                            <p><i className="fa fa-check text-success me-3"></i>Bootstrap v5</p>
                            <p><i className="fa fa-check text-success me-3"></i>FontAwesome Icons</p>
                            <p><i className="fa fa-check text-success me-3"></i>Responsive Layout</p>
                            <p><i className="fa fa-check text-success me-3"></i>Cross-browser Support</p>
                            <a className="btn-slide mt-2" href=""><i className="fa fa-arrow-right"></i><span >Order Now</span></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="price-item">
                        <div className="border-bottom p-4 mb-4">
                            <h5 className="text-primary mb-1">Standard Plan</h5>
                            <h1 className="display-5 mb-0">
                                <small className="align-top" style={{ fontSize: "22px", lineHeight: "45px" }}>$</small>99.00<small
                                    className="align-bottom" style={{ fontSize: "16px", lineHeight: "40px"  }}>/ Month</small>
                            </h1>
                        </div>
                        <div className="p-4 pt-0">
                            <p><i className="fa fa-check text-success me-3"></i>HTML5 & CSS3</p>
                            <p><i className="fa fa-check text-success me-3"></i>Bootstrap v5</p>
                            <p><i className="fa fa-check text-success me-3"></i>FontAwesome Icons</p>
                            <p><i className="fa fa-check text-success me-3"></i>Responsive Layout</p>
                            <p><i className="fa fa-check text-success me-3"></i>Cross-browser Support</p>
                            <a className="btn-slide mt-2" href=""><i className="fa fa-arrow-right"></i><span >Order Now</span></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="price-item">
                        <div className="border-bottom p-4 mb-4">
                            <h5 className="text-primary mb-1">Advanced Plan</h5>
                            <h1 className="display-5 mb-0">
                                <small className="align-top" style={{ fontSize: "22px", lineHeight: "45px" }}>$</small>149.00<small
                                    className="align-bottom" style={{ fontSize: "16px", lineHeight: "40px"  }}>/ Month</small>
                            </h1>
                        </div>
                        <div className="p-4 pt-0">
                            <p><i className="fa fa-check text-success me-3"></i>HTML5 & CSS3</p>
                            <p><i className="fa fa-check text-success me-3"></i>Bootstrap v5</p>
                            <p><i className="fa fa-check text-success me-3"></i>FontAwesome Icons</p>
                            <p><i className="fa fa-check text-success me-3"></i>Responsive Layout</p>
                            <p><i className="fa fa-check text-success me-3"></i>Cross-browser Support</p>
                            <a className="btn-slide mt-2" href=""><i className="fa fa-arrow-right"></i><span >Order Now</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    

    <div className="container-xxl py-5">
        <div className="container py-5">
            <div className="row g-5 align-items-center">
                <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="text-secondary text-uppercase mb-3">Get A Quote</h6>
                    <h1 className="mb-5">Request A Free Qoute!</h1>
                    <p className="mb-5">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                    <div className="d-flex align-items-center">
                        <i className="fa fa-headphones fa-2x flex-shrink-0 bg-primary p-3 text-white"></i>
                        <div className="ps-4">
                            <h6>Call for any query!</h6>
                            <h3 className="text-primary m-0">+012 345 6789</h3>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="bg-light text-center p-5 wow fadeIn" data-wow-delay="0.5s">
                        <form>
                            <div className="row g-3">
                                <div className="col-12 col-sm-6">
                                    <input type="text" className="form-control border-0" placeholder="Your Name" style={{ height: "55px" }} />
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input type="email" className="form-control border-0" placeholder="Your Email" style={{ height: "55px" }} />
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input type="text" className="form-control border-0" placeholder="Your Mobile" style={{ height: "55px" }} />
                                </div>
                                <div className="col-12 col-sm-6">
                                    <select className="form-select border-0" style={{ height: "55px" }} >
                                        <option>Select A Freight</option>
                                        <option value="1">Freight 1</option>
                                        <option value="2">Freight 2</option>
                                        <option value="3">Freight 3</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <textarea className="form-control border-0" placeholder="Special Note"></textarea>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
        </div>
     );
}
 
export default Price;