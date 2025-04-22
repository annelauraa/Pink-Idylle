import React from 'react';

const Contact = () => {
    return (
        <div id='contact' className='contact'>
            <div>
                <h3>Want to keep in touch?</h3>
                <p>Please don’t hesitate to reach me out,
                    via my social medias or  my present contact form.
                    I   will be pleased to connect with you and talk about interesting collaboration purposes</p>
                <div>
                    {/* Social media links here */}
                </div>
            </div>

            {/* Contact form here */}
            <div>
                <input type="text" placeholder='Enter your name' />
                <input type="email" placeholder='Enter your email adress' />
                <textarea name="message" id="message" placeholder='enter your message'></textarea>
                <input type="button" value="Send" />
            </div>
        </div>
    );
};

export default Contact;