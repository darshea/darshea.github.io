import React from 'react';
import './ToggleIntro.css';
import { useNavigate } from 'react-router-dom';

const ContactMe = () => {
    const navigate = useNavigate();
  
    // Function to navigate to another page
    const handleNavigate = () => {
      navigate('/'); // Replace 'target-page' with the desired page URL
    };
  
    return (
        <div>
            <div className='back' onClick={handleNavigate}>
                <p className='description'>back.</p>
            </div>

            
            <section className='title-center'>
                <p>
                    danbik@sfu.ca
                </p>
                <p>
                    danbi000121@gmail.com
                </p>
            </section>

        </div>
    );
  };
  

export default ContactMe;
