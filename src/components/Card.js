import React from "react";

export default function Catalogue() {
    return (
        <>
                <div className="card">
                    <div className="card-image">
                        <img src="/black-gram.webp" alt="" />
                    </div>
                    <div className="card-content">
                        <div className="head-conten">
                            <h2> Black Gram, Good Quality</h2>
                        </div>
                        <div className="blog-details">
                                <ul >
                                    <li><img src="/location.png" alt=""/>Sagar, Madhya Pradesh</li>
                                    <li><img src="/warehouse.png" alt=""/>Quantity: 25MT</li>
                                    <li><img src="/pricetag.png" alt=""/> Expected Price: 460000/MT</li>
                                    <li><img src="/payment.png" alt=""/> Payment Term: Ex Warehouse</li>
                                </ul>
                        </div>
                    </div>
                </div>


                <div className="card">
                    <div className="card-image">
                        <img src="/wheat.jpg" alt="" />
                    </div>
                    <div className="card-content">
                        <div className="head-conten">
                            <h2>Wheat, Mill Quality</h2>
                        </div>
                        <div className="blog-details">
                                <ul >
                                    <li><img src="/location.png" alt=""/>Tikamgarh, Madhya Pradesh</li>
                                    <li><img src="/warehouse.png" alt=""/>Quantity: 570MT</li>
                                    <li><img src="/pricetag.png" alt=""/> Expected Price: 30000/MT</li>
                                    <li><img src="/payment.png" alt=""/> Payment Term: Ex Warehouse</li>
                                </ul>
                        </div>
                    </div>
                </div>


                <div className="card">
                    <div className="card-image">
                        <img src="/RedGram.jpg" alt="" />
                    </div>
                    <div className="card-content">
                        <div className="head-conten">
                            <h2> Red Gram, Good Quality</h2>
                        </div>
                        <div className="blog-details">
                                <ul >
                                    <li><img src="/location.png" alt=""/>Kalaburagi, Karnataka</li>
                                    <li><img src="/warehouse.png" alt=""/>Quantity: 22MT</li>
                                    <li><img src="/pricetag.png" alt=""/> Expected Price: 860000/MT</li>
                                    <li><img src="/payment.png" alt=""/> Payment Term: Ex Warehouse</li>
                                </ul>
                        </div>
                    </div>
                </div>
        </>
    )
}
