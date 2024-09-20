import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Navigate } from 'react-router-dom';

function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    let jsonString;
    const [data, setData] = useState("");
    const onSubmit = (data) => {
        setData(data)

        jsonString = JSON.stringify(data);
        console.log(jsonString);
    };
    console.log(data);
    let result;
    axios.get("")
    .then(response=>response.json())
    .then((data)=>console.log(data.json));
   


    return (
        <>

            <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"></link>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"></link>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
            <link rel="stylesheet" href="index.css"></link>

            <section class="vh-100" >
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col col-xl-10">
                            <div class="card">
                                <div class="row g-0">
                                    <div class="col-md-6 col-lg-5 d-none d-md-block">
                                        <img src='./images/advertisement.webp'
                                            alt="login form" class="img-fluid" />
                                    </div>
                                    <div class="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div class="card-body p-4 p-lg-5 text-black">

                                            <form onSubmit={handleSubmit(onSubmit)}>

                                                <div class="d-flex justify-content-center mb-5 pb-1" style={{ fontSize: "30px" }}>

                                                    <span style={{ color: "#ff6219" }} className='fw-bold' >Sign Up Or Log In</span>
                                                </div>

                                                <h5 class="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>

                                                <div data-mdb-input-init class="form-outline mb-4">
                                                    <input id="form" class="form-control form-control-lg" type="text" name="email" {...register("email", { required: true })} />
                                                    {errors.email && errors.email.type === "required" && (
                                                        <p className="errorMsg" style={{ color: "#ff6219" }}>Email is required.</p>
                                                    )}
                                                    <label class="form-label" for="form">Email address</label>
                                                </div>

                                                <div data-mdb-input-init class="form-outline mb-4">
                                                    <input id="form1" class="form-control form-control-lg" type="password" name="password" {...register("password", { required: true, minLength: 6 })} />
                                                    {errors.password && errors.password.type === "required" && (
                                                        <p className="errorMsg" style={{ color: "#ff6219" }}>Password is required.</p>
                                                    )}
                                                    {errors.password && errors.password.type === "minLength" && (
                                                        <p className="errorMsg" style={{ color: "#ff6219" }}>
                                                            Password should be at-least 6 characters.
                                                        </p>
                                                    )}
                                                    <label class="form-label" for="form1">Password</label>
                                                </div>

                                                <div class="pt-1 mb-4">
                                                    <button data-mdb-button-init data-mdb-ripple-init class="btn btn-dark btn-lg btn-block">Login</button>
                                                </div>

                                                <a class="small text-muted" href="#!">Forgot password?</a>
                                                <p class="mb-5 pb-lg-2" style={{ color: "#393f81" }}>Don't have an account? <a href="/register"
                                                    style={{ color: "#393f81" }}>Register here</a></p>
                                                <a href="#!" class="small text-muted">Terms of use.</a>
                                                <a href="#!" class="small text-muted">Privacy policy</a>

                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Login;
