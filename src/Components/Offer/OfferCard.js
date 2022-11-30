import React from 'react';

const OfferCard = (currData) => {

    const { title, border ,  price, service1, service2, service3, service4, service5, service6, service7, service8, service9, service10, service11 } = currData;

    return (
        <>
            <div className="col-lg-4 mt-3">
                <div className="box" style={{borderTopColor:border}}>
                    <h3> {title} </h3>
                    <h4>{price}</h4>
                    <ul>
                        <li><i className="fa fa-check" aria-hidden="true"></i> {service1}
                        </li>
                        <li><i className="fa fa-check" aria-hidden="true"></i> {service2}
                        </li>
                        <li><i className="fa fa-check" aria-hidden="true"></i> {service3}
                        </li>
                        <li > <i className="fa fa-check" aria-hidden="true"></i><span> {service4}
                        </span></li>
                        <li ><i className="fa fa-check" aria-hidden="true"></i> <span> {service5}
                        </span></li>
                        <li ><i className="fa fa-check" aria-hidden="true"></i> <span>  {service6}
                        </span></li>
                        <li ><i className="fa fa-check" aria-hidden="true"></i> <span>    {service7}
                        </span></li>
                        <li ><i className="fa fa-check" aria-hidden="true"></i> <span>   {service8}
                        </span></li>
                        <li ><i className="fa fa-check" aria-hidden="true"></i> <span> {service9}
                        </span></li>
                        <li ><i className="fa fa-check" aria-hidden="true"></i> <span>   {service10}
                        </span></li>
                        <li ><i className="fa fa-check" aria-hidden="true"></i> <span>  {service11}
                        </span></li>
                    </ul>
                    <center> <a href="#" className="buy-btn" style={{borderColor:border , color:border}}>Get Started</a></center>
                </div>
            </div>
        </>
    )
}

export default OfferCard;