import React from 'react';
import './ToggleIntro.css';
import { useNavigate } from 'react-router-dom';

const ToggleIntro = () => {
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
        <div className="toggle-intro-container">
            <div className="toggle-intro-content">
                <section>
                    <p class="title">Toggle: The Task Management System</p>
                </section>
                <section>
                    <p>Conceived in 2022 while I was employed part-time at a small law firm, 
                    Toggle was inspired by a clear need. I observed the limitations of using 
                    Excel checklists to manage and share tasks among part-time colleagues. 
                    The back and forth exchange of recurring tasks within a single spreadsheet 
                    revealed the pressing need for an application like Toggle.</p>
                </section>
                <section>
                    <p class="subtitle">1. Quantitative Task Management</p>
                    <p>From observing countless projects go off-track, I understood a fundamental truth: 
                        what gets measured, gets managed. With Toggle, whether you're handling a recurring task 
                        or a major project, you always have clear metrics indicating your progress.</p>
                </section>
                <section>
                    <p class="subtitle">2. Intuitive User Interface</p>
                    <p>At its core, every task can be distilled into two states: incomplete (0) or complete (1). 
                        This binary approach inspired our use of toggles. And to organize these tasks? A simple, 
                        familiar structure: folders. Drawing inspiration from the universally recognized file 
                        management systems, like that of Windows OS, we aimed for a system that feels 
                        second-nature to users.</p>
                </section>
                <section>
                    <p class="subtitle">3. Essential Functionality for Task Management; for second launch</p>
                        <p>Every task comes with a deadline. With Toggle, set a date and seamlessly integrate it 
                            with your calendar. At a glance, view your tasks sorted by their due dates.</p>
                </section>
                <section>
                    <p class="subtitle"> 4. Collaborative Capabilities; for second launch</p>
                    <p>Enhance your workflow by sharing your workspace with peers.</p>
                </section>
                <section class="fone">
                    
                    <p>Toggle is presently in the production phase, with its inaugural launch slated for mid-2024.</p>
                    
                    <p>For an in-depth demonstration or to share feedback, suggestions, or collaboration ideas, please 
                        feel free to reach out.</p>
                </section>
            </div>
        </div>
      </div>
    );
  };
  

export default ToggleIntro;
