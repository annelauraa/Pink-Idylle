import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaFacebookMessenger } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { RiSendPlane2Fill } from 'react-icons/ri';

const Contact = () => {
    const notify_success = () => toast.success("Message sent successfully!", {
        position: "top-center",
      });

    const notify_error = () => toast.error("Message not sent! Please retry.", {
        position: "top-center",  
        });

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_1y905pv', 'template_3ry7mtp', form.current, {
                publicKey: '-PS2nV8BshSoYtwaV',
            })
            .then(
                () => {
                    notify_success();
                },
                (error) => {
                    notify_error();
                    console.log(error.text);
                },
            );
    };

    return (
        <div id='contact' className='contact'>
            <div className='left-side'>
                <h2>Want to get keep in touch?</h2>
                <p>Please don’t hesitate to reach me out,
                    via my social medias or  my present contact form.
                    I   will be pleased to connect with you and talk about interesting collaboration purposes</p>
                <div className='social-media'>
                    {/* Social media links here */}
                    <MdEmail className='icons' />
                    <FaFacebookMessenger className='icons' />
                    <IoLogoWhatsapp className='icons' />

                </div>
            </div>

            {/* Contact form here */}
            <div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Enter your name" required />
                    <input type="email" name="email" placeholder="Enter your email address" required />
                    <textarea name="message" placeholder="Enter your message" className="scrollbar-thin" required></textarea>

                    {/* Anti-spam hidden field */}
                    <input type="hidden" name="_captcha" value="false" />

                    <button type="submit" className="btn-primary">
                        Send <RiSendPlane2Fill />
                    </button>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Contact;