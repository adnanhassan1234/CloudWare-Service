import React from 'react';

const TestimonialCard = (currData) => {

    /* Destructuring the props. */
    const { image, name, description, position } = currData;

    return (
        <>
            <div>
                <div className="card mx-3 text-center d-flex flex-column">
                    <div className="img_client mx-auto text-center mt-4">
                        <img src={image} alt="" className="rounded-circle " />
                    </div>
                    <div className="main  same pb-2 pt-2"> {name} </div>
                    <div className="testimonial"> {description} </div>
                    <div className="tech mt-4">
                        <h5 className="same"> {position} </h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestimonialCard;