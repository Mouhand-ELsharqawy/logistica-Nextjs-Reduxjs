"use client";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { createContact } from "../redux/contactSlice";
// import { useRouter } from "next/router";
const Contact = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [subject,setSubject] = useState('');
    const [message,setMessage] = useState('');

    const dispatch = useDispatch();
    // const router = useRouter();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const data={
            name:name,
            email:email,
            subject:subject,
            message:message
        }
        dispatch(createContact(data));
        // router.push("/");
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    }
    
    return ( 
        <div>
          
    <div className="container-fluid page-header py-5" style={{ marginBottom: "6rem" }}>
        <div className="container py-5">
            <h1 className="display-3 text-white mb-3 animated slideInDown">Contact Us</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link className="text-white" href="/">Home</Link></li>
                    {/* <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li> */}
                    <li className="breadcrumb-item text-white active" aria-current="page">Contact</li>
                </ol>
            </nav>
        </div>
    </div>
   
   


    <div className="container-fluid overflow-hidden py-5 px-lg-0">
        <div className="container contact-page py-5 px-lg-0">
            <div className="row g-5 mx-lg-0">
                <div className="col-md-6 contact-form wow fadeIn" data-wow-delay="0.1s">
                    <h6 className="text-secondary text-uppercase">Get In Touch</h6>
                    <h1 className="mb-4">Contact For Any Query</h1>
                    <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. 
                    {/* <a href="https://htmlcodex.com/contact-form">Download Now</a> */}
                    .</p>
                    <div className="bg-light p-4">
                        <form method="post" onSubmit={handleSubmit} >
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input 
                                        type="text" 
                                        className="form-control" 
                                        id="name" 
                                        placeholder="Your Name"
                                        value={name}
                                        onChange={(e)=> setName(e.target.value)} />
                                        <label>Your Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input 
                                        type="email" 
                                        className="form-control" 
                                        id="email" 
                                        placeholder="Your Email"
                                        value={email}
                                        onChange={(e)=>setEmail(e.target.value)} />
                                        <label >Your Email</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input 
                                        type="text" 
                                        className="form-control" 
                                        id="subject" 
                                        placeholder="Subject"
                                        value={subject}
                                        onChange={(e)=>setSubject(e.target.value)} />
                                        <label>Subject</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea 
                                        className="form-control" 
                                        placeholder="Leave a message here" 
                                        id="message" 
                                        style={{ height: "100px" }}
                                        value={message}
                                        onChange={(e)=>setMessage(e.target.value)}
                                        ></textarea>
                                        <label>Message</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-6 pe-lg-0 wow fadeInRight" data-wow-delay="0.1s">
                    <div className="position-relative h-100">
                        <iframe className="position-absolute w-100 h-100" style={{ objectFit: "cover" }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
     );
}
 
export default Contact;