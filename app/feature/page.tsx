import Image from "next/image"
import Link from "next/link";
const Feature = () => {
    return ( 
        <div>
           
    <div className="container-fluid page-header py-5" style={{ marginBottom: "6rem" }}>
        <div className="container py-5">
            <h1 className="display-3 text-white mb-3 animated slideInDown">Features</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link className="text-white" href="/">Home</Link></li>
                    {/* <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li> */}
                    <li className="breadcrumb-item text-white active" aria-current="page">Features</li>
                </ol>
            </nav>
        </div>
    </div>
    


    
    <div className="container-xxl py-5">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="text-secondary text-uppercase mb-3">Some Facts</h6>
                    <h1 className="mb-5">#1 Place To Manage All Of Your Shipments</h1>
                    <p className="mb-5">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <div className="d-flex align-items-center">
                        <i className="fa fa-headphones fa-2x flex-shrink-0 bg-primary p-3 text-white"></i>
                        <div className="ps-4">
                            <h6>Call for any query!</h6>
                            <h3 className="text-primary m-0">+012 345 6789</h3>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="row g-4 align-items-center">
                        <div className="col-sm-6">
                            <div className="bg-primary p-4 mb-4 wow fadeIn" data-wow-delay="0.3s">
                                <i className="fa fa-users fa-2x text-white mb-3"></i>
                                <h2 className="text-white mb-2" data-toggle="counter-up">1234</h2>
                                <p className="text-white mb-0">Happy Clients</p>
                            </div>
                            <div className="bg-secondary p-4 wow fadeIn" data-wow-delay="0.5s">
                                <i className="fa fa-ship fa-2x text-white mb-3"></i>
                                <h2 className="text-white mb-2" data-toggle="counter-up">1234</h2>
                                <p className="text-white mb-0">Complete Shipments</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="bg-success p-4 wow fadeIn" data-wow-delay="0.7s">
                                <i className="fa fa-star fa-2x text-white mb-3"></i>
                                <h2 className="text-white mb-2" data-toggle="counter-up">1234</h2>
                                <p className="text-white mb-0">Customer Reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
   

    <div className="container-fluid overflow-hidden py-5 px-lg-0">
        <div className="container feature py-5 px-lg-0">
            <div className="row g-5 mx-lg-0">
                <div className="col-lg-6 feature-text wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="text-secondary text-uppercase mb-3">Our Features</h6>
                    <h1 className="mb-5">We Are Trusted Logistics Company Since 1990</h1>
                    <div className="d-flex mb-5 wow fadeInUp" data-wow-delay="0.3s">
                        <i className="fa fa-globe text-primary fa-3x flex-shrink-0"></i>
                        <div className="ms-4">
                            <h5>Worldwide Service</h5>
                            <p className="mb-0">Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet</p>
                        </div>
                    </div>
                    <div className="d-flex mb-5 wow fadeIn" data-wow-delay="0.5s">
                        <i className="fa fa-shipping-fast text-primary fa-3x flex-shrink-0"></i>
                        <div className="ms-4">
                            <h5>On Time Delivery</h5>
                            <p className="mb-0">Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet</p>
                        </div>
                    </div>
                    <div className="d-flex mb-0 wow fadeInUp" data-wow-delay="0.7s">
                        <i className="fa fa-headphones text-primary fa-3x flex-shrink-0"></i>
                        <div className="ms-4">
                            <h5>24/7 Telephone Support</h5>
                            <p className="mb-0">Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 pe-lg-0 wow fadeInRight" data-wow-delay="0.1s" style={{ minHeight: "400px" }}>
                    <div className="position-relative h-100">
                        <Image className="position-absolute img-fluid w-100 h-100" src="/img/feature.jpg" fill style={{ objectFit: "cover" }} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    
        
        </div>
     );
}
 
export default Feature;