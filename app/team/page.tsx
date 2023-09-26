"use client";
import Image from "next/image";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { getExpert } from "../redux/technicianSlice";
const Team = () => {
    const dispatch = useDispatch();
    const { isLoading, experts} = useSelector(state=> state.experts)
    useEffect(()=>{
        dispatch(getExpert());
    },[])
    return ( 
        <div>

    <div className="container-fluid page-header py-5" style={{ marginBottom: "6rem" }}>
        <div className="container py-5">
            <h1 className="display-3 text-white mb-3 animated slideInDown">Our Team</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                    <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                    <li className="breadcrumb-item text-white active" aria-current="page">Our Team</li>
                </ol>
            </nav>
        </div>
    </div>
    
    

    <div className="container-xxl py-5">
        <div className="container py-5">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="text-secondary text-uppercase">Our Team</h6>
                <h1 className="mb-5">Expert Team Members</h1>
            </div>
            <div className="row g-4">
                { isLoading && <div> Loading... </div> }
                { experts && experts.map((expert)=>(
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="team-item p-4">
                            <div className="overflow-hidden mb-4">
                                <Image className="img-fluid" src="/img/team-1.jpg" width={200} height={200} alt="" />
                            </div>
                            <h5 className="mb-0"> { expert.username } </h5>
                            <p> { expert.company.name } </p>
                        </div>
                    </div>
                )) }
                
                
            </div>
        </div>
    </div>

        
        </div>
     );
}
 
export default Team;