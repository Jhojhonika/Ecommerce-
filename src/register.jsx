import React from 'react';
import { useForm } from "react-hook-form";

function Register() {

    const { register, handleSubmit, formState: { errors } } = useForm();
   
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>

            <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"></link>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"></link>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
            <link rel="stylesheet" href="index.css"></link>

            <section class="vh-100 mb-5" >
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col col-xl-10">
                            <div class="card">
                                <div class="row justify-content-center g-5">
                                    <div class="col-md-10 col-lg-6 col-xl-5 ">

                                        <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" style={{ color: "#ff6219" }}>Sign up</p>

                                        <form class="mx-1 mx-md-4" onSubmit={handleSubmit(onSubmit)}>

                                            <div class="d-flex flex-row align-items-center mb-4">

                                                <div data-mdb-input-init class="form-outline flex-fill mb-0">
                                                    <input type="text" id="form" class="form-control" name="name" {...register("name", { required: true })} />
                                                    {errors.name && errors.name.type === "required" && (
                                                        <p className="errorMsg"style={{ color: "red" }}>Name is required.</p>
                                                    )}
                                                      <label class="form-label" for="form" >Your name</label>                                                   
                                                </div>
                                            </div>

                                            <div class="d-flex flex-row align-items-center mb-4">

                                                <div data-mdb-input-init class="form-outline flex-fill mb-0">
                                                    <input type="text" id="form1" class="form-control" name="email" {...register("email", { required: true })} />
                                                    {errors.email && errors.email.type === "required" && (
                                                        <p className="errorMsg"style={{ color: "red" }}>Email is required.</p>
                                                    )}
                                                   
                                                    <label class="form-label" for="form1" >Your Email</label>
                                                </div>
                                            </div>

                                            <div class="d-flex flex-row align-items-center mb-4">

                                                <div data-mdb-input-init class="form-outline flex-fill mb-0">
                                                    <input type="password" id="form2" class="form-control" name="password" {...register("password", { required: true, minLength: 6 })} />
                                                    {errors.password && errors.password.type === "required" && (
                                                        <p className="errorMsg"style={{ color: "red" }}>Password is required.</p>
                                                    )}
                                                    {errors.password && errors.password.type === "minLength" && (
                                                        <p className="errorMsg"style={{ color: "red" }}>
                                                            Password should be at-least 6 characters.
                                                        </p>
                                                    )}
                                                    <label class="form-label" for="form2" >Password</label>
                                                </div>
                                            </div>

                                            <div class="d-flex flex-row align-items-center mb-4">

                                                <div data-mdb-input-init class="form-outline flex-fill mb-0">
                                                    <input type="password" id="form3" class="form-control" name="rpassword" {...register("rpassword", { required: true, minLength: 6 })} />
                                                    {errors.password && errors.password.type === "required" && (
                                                        <p className="errorMsg"style={{ color: "red" }}>Password is required.</p>
                                                    )}
                                                    {errors.password && errors.password.type === "minLength" && (
                                                        <p className="errorMsg"style={{ color: "red" }}>
                                                            Password should be at-least 6 characters.
                                                        </p>
                                                    )}
                                                    <label class="form-label" for="form3" >Repeat your password</label>
                                                </div>
                                            </div>

                                            <div class="form-check d-flex justify-content-center mb-5">
                                                <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                                <label class="form-check-label" for="form2Example3">
                                                    I agree all statements in <a href="#!">Terms of service</a>
                                                </label>
                                            </div>

                                            <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-lg">Register</button>
                                            </div>

                                        </form>

                                    </div>
                                    <div class="col-md-6 col-lg-5 d-none d-md-block p-3">
                                        <img src='./images/advertisement.webp'
                                            alt="login form" class="img-fluid" />
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

export default Register;
