import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaFacebookMessenger } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { RiSendPlane2Fill } from 'react-icons/ri';

const Contact = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);

    const notify_success = () => toast.success("Message sent successfully!", {
        position: "top-center",
    });

    const notify_error = () => toast.error("Message not sent! Please retry.", {
        position: "top-center",
    });

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);

        emailjs
            .sendForm('service_1y905pv', 'template_3ry7mtp', form.current, {
                publicKey: '-PS2nV8BshSoYtwaV',
            })
            .then(
                () => {
                    notify_success();
                    form.current.reset(); // Reset le formulaire
                    setIsSending(false);
                },
                (error) => {
                    notify_error();
                    console.log(error.text);
                    setIsSending(false);
                },
            );
    };

    return (
        <div id='contact' className='contact'>
            <div className='left-side'>
                <h2>Want to keep in touch?</h2>
                <p>Please don’t hesitate to reach me out via my social medias or the contact form.
                   I will be pleased to connect with you and talk about interesting collaborations.</p>
                <div className='social-media'>
                    <a href="mailto:laingotsiory@outlook.com"><MdEmail className='icons' /></a>
                    <a href="https://m.me/tsiory.laura/" target='_blank' rel="noreferrer"><FaFacebookMessenger className='icons' /></a>
                    <a href="https://wa.me/+261332570863" target='_blank' rel="noreferrer"><IoLogoWhatsapp className='icons' /></a>
                </div>
            </div>

            <div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Enter your name" required />
                    <input type="email" name="email" placeholder="Enter your email address" required />
                    <textarea name="message" placeholder="Enter your message" className="scrollbar-thin" required></textarea>

                    <input type="hidden" name="_captcha" value="false" />

                    <button type="submit" className="btn-primary" disabled={isSending}>
                        {isSending ? (
                            <span className="flex items-center gap-2">
                                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10"
                                        stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor"
                                        d="M4 12a8 8 0 018-8v8z"></path>
                                </svg>
                                Sending...
                            </span>
                        ) : (
                            <span className="flex items-center gap-2">
                                Send <RiSendPlane2Fill />
                            </span>
                        )}
                    </button>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Contact;
