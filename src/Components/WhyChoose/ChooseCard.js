import React from 'react';

const ChooseCard = (currData) => {

    const { icon, title, description } = currData;

    return (
        <>
            <div className="col-xl-4 col-md-6 d-flex align-items-stretch my-3" >
                <div className="icon-box">
                    <div className="icon text-center"> {icon} </div>
                    <h4><a href=""> {title} </a></h4>
                    <p> {description} </p>
                    <a href="#" className="bluebtn">Read More</a>
                </div>
            </div>
        </>
    )
}

export default ChooseCard;