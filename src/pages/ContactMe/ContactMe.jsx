import { useRef } from "react";
import { FaLocationArrow, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

const ContactMe = () => {

    const form = useRef();
    console.log(form)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_1cwh7ah', 'template_xw07nfm', form.current, {
                publicKey: 'gsRLxFOjLeCYZW5IM',
            })
            .then(
                () => {
                    Swal.fire({
                        title: "MAIL SEND SUCCESSFULLY!",
                        icon: "success",
                        draggable: true
                      });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };


    return (
        <div className="container mx-auto px-4 mb-20 grid grid-cols-1 gap-20 md:grid-cols-2">
            <div className="card bg-[#222222] w-full text-black shadow-2xl">
                <form ref={form} onSubmit={sendEmail} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" name="from_name" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="email" name="from_email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Massage</span>
                        </label>
                        <textarea name="message" type="password" placeholder="Massage" className="input input-bordered h-28" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-accent">Send Mail</button>
                    </div>
                </form>
            </div>
            <div className="space-y-2">
                <h2 className="text-2xl md:text-4xl text-center font-bold mb-20">Get In Touch</h2>
                <p className="flex items-center gap-2 text-xl"><FaLocationArrow></FaLocationArrow> Sirajganj, Bangladesh.</p>
                <p className="flex items-center gap-2 text-xl"><FaPhone></FaPhone> +880 1990 955633</p>
                <p className="flex items-center gap-2 text-xl"> <MdEmail></MdEmail> kobirul05j@gmail.com</p>
            </div>
        </div>
    );
};

export default ContactMe;