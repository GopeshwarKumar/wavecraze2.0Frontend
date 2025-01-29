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
                        <img src="/rcomedynight.jpg" alt="Talent X" />
                        <img src="/InGroupCreative_mainlogo_CMYK.jpg" alt="Talent X" />
                        <img src="https://wallpaperaccess.com/full/127079.jpg" alt="Talent X" />
                    </div>
                </div>
                <div className='cmn' ref={(el) => eventsRef.current[1] = el}>
                    <h2>Comedy Night</h2>
                    <h5>Event description for Comedy Night.</h5>
                    <div className="image-container">
                        <img src="https://th.bing.com/th/id/OIP.QranivAG9q-XyJtSnI88FwHaE8?w=1000&h=667&rs=1&pid=ImgDetMain" alt="Comedy Night" />
                        <img src="https://th.bing.com/th/id/OIP.QranivAG9q-XyJtSnI88FwHaE8?w=1000&h=667&rs=1&pid=ImgDetMain" alt="Comedy Night" />
                        <img src="https://th.bing.com/th/id/OIP.QranivAG9q-XyJtSnI88FwHaE8?w=1000&h=667&rs=1&pid=ImgDetMain" alt="Comedy Night" />
                    </div>
                </div>
                <div className='glam' ref={(el) => eventsRef.current[2] = el}>
                    <h2>Glam It Up</h2>
                    <h5>Event description for Glam It Up.</h5>
                    <div className="image-container">
                        <img src="https://img.buzzfeed.com/buzzfeed-static/static/2017-06/28/10/campaign_images/buzzfeed-prod-fastlane-01/whats-the-best-concert-youve-ever-been-to-2-20175-1498661147-0_dblbig.jpg" alt="Glam It Up" />
                        <img src="https://img.buzzfeed.com/buzzfeed-static/static/2017-06/28/10/campaign_images/buzzfeed-prod-fastlane-01/whats-the-best-concert-youve-ever-been-to-2-20175-1498661147-0_dblbig.jpg" alt="Glam It Up" />
                        <img src="https://img.buzzfeed.com/buzzfeed-static/static/2017-06/28/10/campaign_images/buzzfeed-prod-fastlane-01/whats-the-best-concert-youve-ever-been-to-2-20175-1498661147-0_dblbig.jpg" alt="Glam It Up" />
                    </div>
                </div>
                <div className='movie' ref={(el) => eventsRef.current[3] = el}>
                    <h2>Movie Mystic</h2>
                    <h5>Event description for Movie Mystic.</h5>
                    <div className="image-container">
                        <img src="https://img.buzzfeed.com/buzzfeed-static/static/2017-06/28/10/campaign_images/buzzfeed-prod-fastlane-01/whats-the-best-concert-youve-ever-been-to-2-20175-1498661147-0_dblbig.jpg" alt="Movie Mystic" />
                        <img src="https://img.buzzfeed.com/buzzfeed-static/static/2017-06/28/10/campaign_images/buzzfeed-prod-fastlane-01/whats-the-best-concert-youve-ever-been-to-2-20175-1498661147-0_dblbig.jpg" alt="Movie Mystic" />
                        <img src="https://img.buzzfeed.com/buzzfeed-static/static/2017-06/28/10/campaign_images/buzzfeed-prod-fastlane-01/whats-the-best-concert-youve-ever-been-to-2-20175-1498661147-0_dblbig.jpg" alt="Movie Mystic" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Event;
