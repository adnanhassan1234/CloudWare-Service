import React from 'react';

const supportCard = (currData) => {

    const { icon , title , description } = currData;

    return (
        <>
            <div className="col-lg-6">
                <div className="member memberBox d-flex align-items-start" >
                    <div className="downButton">
                       {icon}
                    </div>
                    <div className="member-info">
                        <h4> {title} </h4>
                        <p> {description} </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default supportCard;