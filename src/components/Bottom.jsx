import React from "react";

function Bottom() {
    return (
        <div className="bottom-bar">
            <div className="bottom-column">
                <div className="bottom-large"><i className="bi bi-rocket-takeoff" style={{marginRight : "7px"}}></i>Booster.nu</div>
                <div className="bottom-text">Support Our Mission</div>
                <div className="bottom-text">Join Our Team</div>
                <div className="bottom-text">Example Item</div>
            </div>
            <div className="bottom-column">
                <div className="bottom-topper">Social</div>
                <div className="bottom-text">Contact Us</div>
                <div className="bottom-text">Follow Us</div>
                <div className="bottom-text">Other Projects</div>
            </div>
            <div className="bottom-column">
                <div className="bottom-topper">Built with</div>
                <div className="bottom-text">React + Vite</div>
                <div className="bottom-text">Supabase</div>
                <div className="bottom-text">Vercel</div>
            </div>
        </div>
    );
}

export default Bottom;