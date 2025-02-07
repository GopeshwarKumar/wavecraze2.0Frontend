import React, { useEffect, useRef } from 'react';
import './Events.css';

const Event = () => {
    const eventsRef = useRef([]);
    const videoRef = useRef(null);

    useEffect(() => {
        const currentEvents = eventsRef.current;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    if (entry.target.classList.contains('cmn') && videoRef.current) {
                        videoRef.current.play(); // Play video on view
                    }
                } else {
                    entry.target.classList.remove('animate');
                    if (entry.target.classList.contains('cmn') && videoRef.current) {
                        videoRef.current.pause(); // Pause video off-screen
                    }
                }
            });
        }, {
            threshold: 0.1
        });

        currentEvents.forEach(element => {
            if (element) observer.observe(element);
        });

        return () => {
            currentEvents.forEach(element => {
                if (element) observer.unobserve(element);
            });
        };
    }, []);

    return (
        <div className="event">
            <h1>Our Events</h1>
            <div className='events'>
                <div className='sevent' ref={(el) => eventsRef.current[0] = el}>
                    <h2>Talent X</h2>
                    <h5>Event description for Talent X.</h5>
                    <div className="image-container">
                        <img src="/assets/rcomedynight.jpg" alt="Talent X" />
                        <img src="/InGroupCreative_mainlogo_CMYK.jpg" alt="Talent X" />
                        <img src="/assets/OIP (1).jpg" alt="Talent X" />
                    </div>
                </div>
                <div className='cmn' ref={(el) => eventsRef.current[1] = el}>
                    <h2>Comedy Night</h2>
                    <h5>Event description for Comedy Night.</h5>
                    <div className="image-container">
                        <img src="/assets/OIP (1).jpg" alt="Comedy Night" />
                        <img src="/assets/OIP (1).jpg" alt="Comedy Night" /><img src="/assets/OIP (1).jpg" alt="Comedy Night" />
                    </div>
                </div>
                <div className='glam' ref={(el) => eventsRef.current[2] = el}>
                    <h2>Glam It Up</h2>
                    <h5>Event description for Glam It Up.</h5>
                    <div className="image-container">
                        <img src="/assets/moviemystic.jpg" alt="Glam It Up" />
                        <img src="/assets/moviemystic.jpg" alt="Glam It Up" />
                        <img src="/assets/moviemystic.jpg" alt="Glam It Up" />
                    </div>
                </div>
                <div className='movie' ref={(el) => eventsRef.current[3] = el}>
                    <h2>Movie Mystic</h2>
                    <h5>Event description for Movie Mystic.</h5>
                    <div className="image-container">
                        <img src="/assets/moviemystic.jpg" alt="Glam It Up" />
                        <img src="/assets/moviemystic.jpg" alt="Glam It Up" />
                        <img src="/assets/moviemystic.jpg" alt="Glam It Up" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Event;
