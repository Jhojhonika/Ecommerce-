import React from "react";
import { cards } from "./productlist"
import { getcart } from './store/slice'
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
function Productview() {
    const dispatch = useDispatch()
    let navigate=useNavigate()
    let [searchParams] = useSearchParams();
    const productId = searchParams.get('_id');
    const productId1 = searchParams.get('id');
    console.log(searchParams.get('_id'))
    console.log(searchParams.get('id'))
    const card = cards.find((p) => p._id == productId)
    console.log(card)
    const cart = card.product.filter((card) => card.id == productId1)
    console.log(cart)
    function addcart(cart) {
        console.log(cart)
        //  addtocart([...cartvalue,cart])        
        dispatch(getcart(cart))
        navigate('/productcart')
    }
    function addwishlist(cart) {
       
        //  addtocart([...cartvalue,cart])        
        dispatch(getcart(cart))
        navigate('/wishlist')
    }

    return (
        <>

            <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"></link>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"></link>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
            <link rel="stylesheet" href="index.css"></link>
            {cart.map((card, index) => {
                return (

                    <div class="py-3 py-md-5 bg-light" >
                        <div class="container">
                            <div class="row">
                                <div class="col-md-5 mt-3">
                                    <div class="bg-white border">
                                        <img src={card.product_image} class="w-100" alt="Img" />
                                    </div>
                                </div>
                                <div class="col-md-7 mt-3">
                                    <div class="product-view">
                                        <h4 class="product-name">
                                            Comet King Size Bed in Teak Finish with Hydraulic Storage
                                            <label class="label-stock bg-success">In Stock</label>
                                        </h4>
                                        <hr />

                                        <div>
                                            <span class="selling-price">{card.selling_price}</span>
                                            <span class="original-price">{card.orginal_price}</span>
                                        </div>
                                        <div class="mt-2">
                                            <div class="input-group">
                                                <span class="btn btn1"><i class="fa fa-minus"></i></span>
                                                <input type="text" value="1" class="input-quantity" />

                                                <span class="btn btn1"><i class="fa fa-plus"></i></span>
                                            </div>
                                        </div>
                                        <div class="mt-2">
                                            <button onClick={() => { addcart(card) }}  class="btn btn1" > <i class="fa fa-shopping-cart"></i> Add To Cart</button>
                                            <button onClick={() => { addwishlist(card) }} class="btn btn1"> <i class="fa fa-heart"></i> Add To Wishlist </button>
                                        </div>
                                        <div class="mt-3">
                                            <h5 class="mb-0">Small Description</h5>
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ty
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                       
                    </div>
                )
            })}

        </>
    )
}
export default Productview;