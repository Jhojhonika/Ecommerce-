import React, { useState } from 'react';
import { getcart } from './store/slice'
import { useNavigate, useSearchParams, } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Footer from './footer';
export const cards = [
    {
        _id: "0",
        product:
            [
                {
                    id: "0",
                    product_name: "bed1",
                    selling_price: "500",
                    orginal_price: "700",
                    product_image: './images/bed1.webp'
                },
                {
                    id: "1",
                    product_name: "bed2",
                    selling_price: "500",
                    orginal_price: "700",
                    product_image: './images/bed2.webp'
                },
                {
                    id: "2",
                    product_name: "bed3",
                    selling_price: "500",
                    orginal_price: "700",
                    product_image: './images/bed3.webp'
                },
                {
                    id: "3",
                    product_name: "bed4",
                    selling_price: "500",
                    orginal_price: "700",
                    product_image: './images/bed4.webp'
                },
                {
                    id: "4",
                    product_name: "bed4",
                    selling_price: "500",
                    orginal_price: "700",
                    product_image: './images/bed5.webp'
                },
                {
                    id: "5",
                    product_name: "bed4",
                    selling_price: "500",
                    orginal_price: "700",
                    product_image: './images/bed6.webp'
                },
                {
                    id: "6",
                    product_name: "bed4",
                    selling_price: "500",
                    orginal_price: "700",
                    product_image: './images/bed7.webp'
                },
                {
                    id: "7",
                    product_name: "bed4",
                    selling_price: "500",
                    orginal_price: "700",
                    product_image: './images/bed8.webp'
                },
                {
                    id: "8",
                    product_name: "bed4",
                    selling_price: "500",
                    orginal_price: "700",
                    product_image: './images/bed9.webp'
                },
                {
                    id: "9",
                    product_name: "bed4",
                    selling_price: "500",
                    orginal_price: "700",
                    product_image: './images/bed10.webp'
                },
                {
                    id: "10",
                    product_name: "bed4",
                    selling_price: "500",
                    orginal_price: "700",
                    product_image: './images/bed11.webp'
                },
                {
                    id: "11",
                    product_name: "bed4",
                    selling_price: "500",
                    orginal_price: "700",
                    product_image: './images/bed12.webp'
                }
            ]
    },


    {
        _id: "1",
        product:

            [
                {
                    id: "0",
                    product_name: "sofa",
                    selling_price: "500",
                    orginal_price: "700",
                    product_image: './images/sofa1.webp'
                },
                {
                    id: "1",
                    product_name: "bed2",
                    selling_price: "500",
                    orginal_price: "700",
                    product_image: './images/sofa2.webp'
                },
                {
                    id: "2",
                    product_name: "bed3",
                    selling_price: "500",
                    orginal_price: "700",
                    product_image: './images/sofa3.webp'
                },
                {
                    id: "3",
                    product_name: "bed4",
                    selling_price: "500",
                    orginal_price: "700",
                    product_image: './images/sofa4.webp'
                },
                {
                    id: "4",
                    product_name: "bed4",
                    selling_price: "500",
                    orginal_price: "700",
                    product_image: './images/sofa5.webp'
                },
                {
                    id: "5",
                    product_name: "bed4",
                    selling_price: "500",
                    orginal_price: "700",
                    product_image: './images/sofa6.webp'
                },
                {
                    id: "6",
                    product_name: "bed4",
                    selling_price: "500",
                    orginal_price: "700",
                    product_image: './images/sofa7.webp'
                },
                {
                    id: "7",
                    product_name: "bed4",
                    selling_price: "500",
                    orginal_price: "700",
                    product_image: './images/sofa8.webp'
                },
                {
                    id: "8",
                    product_name: "bed4",
                    selling_price: "500",
                    orginal_price: "700",
                    product_image: './images/sofa9.webp'
                },
                {
                    id: "9",
                    product_name: "bed4",
                    selling_price: "500",
                    orginal_price: "700",
                    product_image: './images/sofa10.webp'
                },
                {
                    id: "10",
                    product_name: "bed4",
                    selling_price: "500",
                    orginal_price: "700",
                    product_image: './images/sofa11.webp'
                },
                {
                    id: "11",
                    product_name: "bed4",
                    selling_price: "500",
                    orginal_price: "700",
                    product_image: './images/sofa12.webp'
                }
            ]
    }
]


function Productlist() {
    // const[cartvalue,addtocart]=useState([])


    const navigate = useNavigate();
    const dispatch = useDispatch()

    let [searchParams] = useSearchParams();
    console.log(searchParams.get('id'))

    const productId = searchParams.get('id');

    const c = cards.find((p) => p._id == productId)
    console.log(c)


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
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"></link>
            <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"></link>
            <link rel="stylesheet" href="index.css"></link>

            <div >
                <img src='./images/addproductlist.webp' className="mw-100 p-2"></img>
            </div>

            <div class="py-3 py-md-3 bg-light">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h4 class="mb-4">Our Products</h4>
                        </div>

                        {c.product.map((card, index) => {
                            return (

                                <div class="col-md-4 col-lg-3 " key={index} >
                                    <div class="product-card">
                                        <div class="product-card-img">
                                            < label class="stock bg-success">In Stock</label>
                                          <a href={`./productview?_id=${c._id}&id=${card.id}`}> <img src={card.product_image} alt="Laptop" /></a>
                                        </div>
                                        <div class="product-card-body">
                                            <p class="product-brand">HP</p>
                                            <h5 class="product-name">
                                                <a href={`./productview?_id=${c._id}&id=${card.id}`} >

                                                    {card.product_name}
                                                </a>

                                            </h5>
                                            <div>
                                                <span class="selling-price">{card.selling_price}</span>
                                                <span class="original-price">{card.orginal_price}</span>
                                            </div>
                                            <div class="mt-2 ">
                                                <button onClick={() => { addcart(card) }} class="btn btn1">Add To Cart</button>
                                                <button onClick={() => { addwishlist(card) }} class="btn btn1"> <i class="fa fa-heart"></i> </button>
                                                <a href={`./productview?_id=${c._id}&id=${card.id}`} class="btn btn1"> View </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                
            </div>

           
        </>

    );
}
export default Productlist;