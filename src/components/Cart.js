import React from "react";
import PropTypes from "prop-types";
import { Button } from "../ui-kit";

class Cart extends React.Component {
    render() {
        const products = [
            {
                id: 1,
                name: 'Apple iPhone Xs Max',
                image: 'appleIphoneXS.png',
                description: 'Facial Recognition, Fingerprint Scanner',
                brand: 'Apple',
                price: 99000,
                type: 'Mobile',
            },
            {
                id: 2,
                name: 'Oppo F11 Pro',
                image: 'oppoF11Pro.jpeg',
                description: '48 MP Rear Camera, 4G LTE, Dual SIM',
                brand: 'Oppo',
                price: 24990,
                type: 'Mobile',
            },
            {
                id: 3,
                name: 'BlackBerry Key2',
                image: 'bbKey2.jpeg',
                description: '22 hours battery life, 4.5 inches screen',
                brand: 'BlackBerry',
                price: 29249,
                type: 'Mobile',
            },
            {
                id: 4,
                name: 'Nokia 6.1 Plus',
                image: 'Nokia6Plus.jpeg',
                description: '16 MP Front Camera, 5 MP Rear Camera, Storage capacity 64 GB, Dual SIM',
                brand: 'Nokia',
                price: 15270,
                type: 'Mobile',
            }
        ];
        return (
            <div className="accordion" id="accordionExample">
                {
                    products.map(product => {
                        return (
                            <div className="card" key={product.id}>
                                <div className="card-header" id={"heading" + product.id}>
                                    <h5 className={"mb-" + (product.id - 1)}>
                                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target={"#collapse" + product.id} aria-expanded="true" aria-controls={"collapse" + product.id}>
                                            {product.name}
                                        </button>
                                    </h5>
                                </div>
                                <div id={"collapse" + product.id} className="collapse" aria-labelledby={"heading" + product.id} data-parent="#accordionExample">
                                    <div className="card-body row">
                                        <div className="product-preview-pic col-6">
                                            <img src="https://5.imimg.com/data5/EF/RQ/MY-3030942/lenovo-desktop-computer-500x500.jpg" />
                                        </div>
                                        <div className="col-6">
                                            <p className="product-description">{product.description}</p>
                                            <h4 className="price">current price: <span> <i className="fa fa-usd"></i> {product.price} </span></h4>
                                            <div className="action">
                                                <Button type="button" className="btn btn-info" text={<i className='fa fa-trash'></i>} />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }

}

Cart.propTypes = {
}

export default Cart;