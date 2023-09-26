"use client";
import Image from "next/image";
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { getTestimonial } from "../redux/testimonialSlice";
const Teastmonial = () => {

    const dispatch = useDispatch();
    const { isLoading, testimonials } = useSelector( (state)=> state.testimonials);

    useEffect(()=>{
        dispatch(getTestimonial());
    },[])

    return ( 
        <div>
            
    <div className="container-fluid page-header py-5" style={{ marginBottom: "6rem" }}>
        <div className="container py-5">
            <h1 className="display-3 text-white mb-3 animated slideInDown">Testimonial</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                    <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                    <li className="breadcrumb-item text-white active" aria-current="page">Testimonial</li>
                </ol>
            </nav>
        </div>
    </div>
    
    



    <div className="container-xxl py-5">
        <div className="container py-5">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="text-secondary text-uppercase">Our Testimonial</h6>
                <h1 className="mb-5">Our Clients Say!</h1>
            </div>
            <div className="row g-4">
            { isLoading && <div> Loading... </div> }
            { testimonials && testimonials.map((testimonial)=>(
                
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s" key={testimonial.id}>
                    <div className="team-item p-4">
                        <div className="overflow-hidden mb-4">
                            <Image className="img-fluid" src="/img/team-1.jpg" width={80} height={80} alt="" />
                        </div>
                        <h5 className="mb-0"> { testimonial.name } </h5>
                        <p> { testimonial.website } </p>
                    </div>
                </div>

            ))}
            
            
            </div>
        </div>
    </div>
    
        
        </div>
     );
}
 
export default Teastmonial;