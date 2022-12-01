import React from 'react';

const BlogCard = (currData) => {

   /* Destructuring the props. */
    const { image, name, description } = currData;

    return (
        <>
              <div className="col-lg-3 col-md-6 col-12">
              <div className="full my-2">
                <div className="card">
                  <img src={image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title my-2"> {name} </h5>
                      <p className="card-text my-3"> {description} </p>
                      <div className="text-center">
                        <a href="#" className="btn buy-btn">Read More.</a>
                      </div>
                  </div>
                </div>
              </div>
            </div>
        </>
    )
}

export default BlogCard;