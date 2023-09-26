"use client";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { insertService } from "@/app/redux/serviceSlice";
import { useRouter } from 'next/router'

const Add = () => {
  const [title,setTitle] = useState('');
  const [desc,setDesc] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();
  const handleSubmit = (e)=>{
    e.prevntDefault();
    const data = {
      title:title,
      description:desc
    }
    dispatch(insertService(data));
    router.push("/services/all");
  }
    return ( 
        <div>
        <div className="container-fluid page-header py-5" style={{ marginBottom: "6rem" }}>
    <div className="container py-5">
        <h1 className="display-3 text-white mb-3 animated slideInDown">Services</h1>
        <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link className="text-white" href="/">Home</Link></li>
                <li className="breadcrumb-item text-white active" aria-current="page">Services</li>
                <li className="breadcrumb-item text-white active" aria-current="page">ADD</li>
            </ol>
        </nav>
    </div>
</div>
<form method="post" onSubmit={handleSubmit}>
  <div className="mb-3">
    <label  className="form-label">Title</label>
    <input 
    type="text" 
    className="form-control" 
    aria-describedby="emailHelp"
    value={title}
    onChange={(e) => setTitle(e.target.value)} />
  </div>
  <div className="mb-3">
    <label  className="form-label">Description</label>
   <textarea rows={10} cols={10}
   value={desc}
   onChange={(e)=> setDesc(e.target.value)}>  </textarea>
  </div>
  
  <button type="submit" className="btn btn-primary">Send</button>
</form>
    </div>
     );
}
 
export default Add;