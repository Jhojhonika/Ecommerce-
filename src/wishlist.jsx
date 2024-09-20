import React from "react";
import { useSelector } from "react-redux";
function Wishlist() {
    const cartproduct = useSelector((state) => { return state.cart })
    console.log(cartproduct)
    return (
        <>

            <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"></link>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"></link>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
            <link rel="stylesheet" href="index.css"></link>
           

            <div class="py-3 py-md-5 bg-light wishlist">
                <div class="container">

                    <div class="row">
                        <div class="col-md-12">
                            <div class="shopping-cart">

                                <div class="cart-header d-none d-sm-none d-mb-block d-lg-block">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <h4>Products</h4>
                                        </div>
                                        <div class="col-md-2">
                                            <h4>Price</h4>
                                        </div>
                                        <div class="col-md-2">
                                            <h4>Quantity</h4>
                                        </div>
                                        <div class="col-md-2">
                                            <h4>Remove</h4>
                                        </div>
                                    </div>
                                </div>
                                {cartproduct.map((product) => {
                                    return (
                                        <div class="cart-item">
                                            <div class="row">
                                                <div class="col-md-6 my-auto">
                                                    <a href="">
                                                        <label class="product-name">
                                                            <img src={product.product_image} className="cartimg" alt="" />
                                                            {product.product_name}
                                                        </label>
                                                    </a>
                                                </div>
                                                <div class="col-md-2 my-auto">
                                                    <label class="price">{product.selling_price} </label>
                                                </div>
                                                <div class="col-md-2 col-7 my-auto">
                                                    <div class="quantity">
                                                        <div class="input-group">
                                                            <span class="btn btn1"><i class="fa fa-minus"></i></span>
                                                            <input type="text" value="1" class="input-quantity" />

                                                            <span class="btn btn1"><i class="fa fa-plus"></i></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-2 col-5 my-auto">
                                                    <div class="remove">
                                                        <a href="" class="btn btn-danger btn-sm">
                                                            <i class="fa fa-trash"></i> Remove
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    )


                                })}




                            </div>
                        </div>
                    </div>

                </div>
                
            </div>


        </>
    )
}
export default Wishlist;