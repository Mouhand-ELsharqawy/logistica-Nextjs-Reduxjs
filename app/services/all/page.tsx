"use client";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getServices, deleteService } from "@/app/redux/serviceSlice";
const All = () => {
    const { isLoading,services } = useSelector( state => state.services);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getServices());
    },[])
    return ( 
        <div>
            <div className="container-fluid page-header py-5" style={{ marginBottom: "6rem" }}>
        <div className="container py-5">
            <h1 className="display-3 text-white mb-3 animated slideInDown">Services</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link className="text-white" href="/">Home</Link></li>
                    <li className="breadcrumb-item text-white active" aria-current="page">Services</li>
                    <li className="breadcrumb-item text-white active" aria-current="page">ALL</li>
                </ol>
            </nav>
        </div>
    </div>

        <table className="table table-striped">
        <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col"> Name </th>
      <th scope="col"> Description </th>
      <th scope="col"> Operation </th>
    </tr>
  </thead>
  <tbody>
    { isLoading && <div> Loading... </div> }
    { services && services.map((service)=>(
        <tr key={service.id} >
        <th scope="row"> { service.id } </th>
        <td> { service.name } </td>
        <td> { service.description } </td>
        <td> <button type="button" className="btn btn-danger" onClick={()=>dispatch(deleteService(service.id))}> Delete </button> </td>
      </tr>
    )) }
    
  </tbody>
        </table>
        </div>
     );
}
 
export default All;