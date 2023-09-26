
import Link from "next/link";
const Service = () => {
    return ( 
        <div>
    <div className="container-fluid page-header py-5" style={{ marginBottom: "6rem" }}>
        <div className="container py-5">
            <h1 className="display-3 text-white mb-3 animated slideInDown">Services</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link className="text-white" href="/">Home</Link></li>
                    {/* <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li> */}
                    <li className="breadcrumb-item text-white active" aria-current="page">Services</li>
                </ol>
            </nav>
        </div>
    </div>
    
    


    <div className="container-xxl py-5">
        <div className="container py-5">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="text-secondary text-uppercase">Our Services</h6>
                <h1 className="mb-5">Explore Our Services</h1>
            </div>
            <div className="row g-4">
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item p-4">
                        <div className="overflow-hidden mb-4">
                            {/* <Image className="img-fluid" src="/img/service-1.jpg" fill alt="" /> */}
                        </div>
                        <h4 className="mb-3">Air Freight</h4>
                        <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                        <a className="btn-slide mt-2" href=""><i className="fa fa-arrow-right"></i><span>Read More</span></a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item p-4">
                        <div className="overflow-hidden mb-4">
                            {/* <Image className="img-fluid" src="/img/service-2.jpg" fill alt="" /> */}
                        </div>
                        <h4 className="mb-3">Ocean Freight</h4>
                        <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                        <a className="btn-slide mt-2" href=""><i className="fa fa-arrow-right"></i><span>Read More</span></a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="service-item p-4">
                        <div className="overflow-hidden mb-4">
                            {/* <Image className="img-fluid" src="/img/service-3.jpg" fill alt="" /> */}
                        </div>
                        <h4 className="mb-3">Road Freight</h4>
                        <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                        <a className="btn-slide mt-2" href=""><i className="fa fa-arrow-right"></i><span>Read More</span></a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item p-4">
                        <div className="overflow-hidden mb-4">
                            {/* <Image className="img-fluid" src="/img/service-4.jpg" fill alt="" /> */}
                        </div>
                        <h4 className="mb-3">Train Freight</h4>
                        <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                        <a className="btn-slide mt-2" href=""><i className="fa fa-arrow-right"></i><span>Read More</span></a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item p-4">
                        <div className="overflow-hidden mb-4">
                            {/* <Image className="img-fluid" src="/img/service-5.jpg" fill alt="" /> */}
                        </div>
                        <h4 className="mb-3">Customs Clearance</h4>
                        <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                        <a className="btn-slide mt-2" href=""><i className="fa fa-arrow-right"></i><span>Read More</span></a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="service-item p-4">
                        <div className="overflow-hidden mb-4">
                            {/* <Image className="img-fluid" src="/img/service-6.jpg" fill alt="" /> */}
                        </div>
                        <h4 className="mb-3">Warehouse Solutions</h4>
                        <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                        <a className="btn-slide mt-2" href=""><i className="fa fa-arrow-right"></i><span>Read More</span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    


    
        </div>
     );
}
 
export default Service;