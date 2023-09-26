"use client"
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
const One = () => {

    return ( 
        <div>
            <div className="container-fluid page-header py-5" style={{ marginBottom: "6rem" }}>
        <div className="container py-5">
            <h1 className="display-3 text-white mb-3 animated slideInDown">Services</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link className="text-white" href="/">Home</Link></li>
                    <li className="breadcrumb-item text-white active" aria-current="page">Services</li>
                    <li className="breadcrumb-item text-white active" aria-current="page">SERVICE DETAIL</li>
                </ol>
            </nav>
        </div>
    </div>
        </div>
     );
}
 
export default One;