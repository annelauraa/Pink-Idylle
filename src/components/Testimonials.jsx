import React from 'react';

const Testimonials = () => {
    return (
        <div>
            <h2>What collaborators say of me ...</h2>

            {/* To multiple*/}
            <div>
                <img src="" alt="collaborator profil picture" />
                <h4>Mara Sambelahatse</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, sequi adipisci doloribus voluptas quas harum ducimus,</p>
                <div>
                    {/* stars here */}
                    <span>⭐</span>
                    <span>⭐</span> 
                    <span>⭐</span> 
                    <span>⭐</span> 
                    <span>⭐</span> 
                </div>
            </div>
        </div>
    );
};

export default Testimonials;