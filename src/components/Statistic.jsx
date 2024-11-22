import React from "react";

function Statistic({keyword, content, icon}) {
    return (
        <div className="stat">
            <div className="stat-kw">
                { keyword }
            </div>
            <div className="stat-content">
                { content }
            </div>
            <div className="stat-icon">
                <i className={ "bi " + icon }></i>
            </div>
        </div>
    );
}

export default Statistic;