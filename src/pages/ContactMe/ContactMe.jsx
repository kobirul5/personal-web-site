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
                (res) => {
                    console.log(res)
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
        <div className="container mx-auto px-6 mb-20 grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            {/* Left - Contact Form */}
            <div className="bg-white/30 /80 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-gray-200 ">
                <h2 className="text-3xl font-bold text-center text-gray-800 -6">
                    Get In Touch
                </h2>
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-700 ">Your Name</span>
                        </label>
                        <input
                            type="text"
                            name="from_name"
                            placeholder="Enter your name"
                            className="input input-bordered w-full bg-white"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text 0">Your Email</span>
                        </label>
                        <input
                            type="email"
                            name="from_email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full bg-white "
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Message</span>
                        </label>
                        <textarea
                            name="message"
                            placeholder="Write your message..."
                            className="textarea textarea-bordered w-full bg-white "
                            required
                        />
                    </div>
                    <div className="form-control">
                        <button className="btn bg-Highlights-color w-full text-lg font-semibold transition-transform transform hover:scale-105">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>

            {/* Right - Contact Details */}
            <div className="space-y-6 ">
                <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left">
                    Contact Information
                </h2>
                <p className="flex items-center gap-3 text-lg">
                    <FaLocationArrow className="text-blue-500 text-2xl" /> Sirajganj, Bangladesh
                </p>
                <p className="flex items-center gap-3 text-lg">
                    <FaPhone className="text-green-500 text-2xl" /> +880 1990 955633
                </p>
                <p className="flex items-center gap-3 text-lg">
                    <MdEmail className="text-red-500 text-2xl" /> kobirul05j@gmail.com
                </p>
            </div>
        </div>
    );
};

export default ContactMe;