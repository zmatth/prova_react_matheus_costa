import React from 'react';
import A from '../../components/micro componentes/A_button/A';
import Li from '../../components/Ul/Li';
import Ul from '../../components/Ul/Ul';

export default props => (
    <div className="main-content">
        <div className="container-fluid content-top-gap">

            <nav aria-label="breadcrumb" className="mb-4">
                <ol className="breadcrumb my-breadcrumb">
                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Pricing Tables</li>
                </ol>
            </nav>

            <section className="pricing">
                <div className="card card_border mb-5">
                    <div className="cards__heading">
                        <h3>Pricing Tables -<span> Version 1</span></h3>
                    </div>
                    <div className="card-body">


                        <section className="w3l-pricing1">
                            <div className="row px-2">
                                <div className="col-md-4 px-2">
                                    <div className="mb-4 price-card price-card1 p-lg-4 p-md-3 p-4">
                                        <div className="card-header p-0 card-heading">
                                            <h4 className="mb-4">Free</h4>
                                        </div>
                                        <div className="card-body p-0">
                                            <h1 className="card-title pricing-card-title my-price-title">$0<small
                                                className="text-dull">/month</small>
                                            </h1>
                                            <p>There are many variations of passages of Lorem Ipsum available.</p>
                                                <Ul class='list-unstyled list-pricing mt-3 mb-4'>
                                                    <Li texto='1 Domain'/>
                                                    <Li texto='10 users included'/>
                                                    <Li texto='2 GB of storage'/>
                                                    <Li texto='Email support'/>
                                                    <Li texto='Help center access'/>
                                                </Ul>
                                            <div className="mt-4">
                                                <A class='btn btn-lg btn-outline-primary btn-style border-btn' texto='Sign Up for free'/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 px-2">
                                    <div className="mb-4 price-card price-card2 p-lg-4 p-md-3 p-4 recomemded-price">
                                        <div className="card-header p-0 card-heading">
                                            <h4 className="mb-4">Regular <span className="label label-popular">Popular</span></h4>
                                        </div>
                                        <div className="card-body p-0">
                                            <h1 className="card-title pricing-card-title my-price-title">$49<small
                                                className="text-dull">/month</small>
                                            </h1>
                                            <p>There are many variations of passages of Lorem Ipsum available.</p>
                                                <Ul class='list-unstyled list-pricing mt-3 mb-4'>
                                                    <Li texto='10 Domain'/>
                                                    <Li texto='20 users included'/>
                                                    <Li texto='10 GB of storage'/>
                                                    <Li texto='Priority email support'/>
                                                    <Li texto='Help center access'/>
                                                </Ul>
                                            <div className="mt-4">
                                                < A class='btn btn-lg btn-primary btn-style' texto='Get started'/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 px-2">
                                    <div className="mb-4 price-card price-card3 p-lg-4 p-md-3 p-4">
                                        <div className="card-header p-0 card-heading">
                                            <h4 className="mb-4">Premium</h4>
                                        </div>
                                        <div className="card-body p-0">
                                            <h1 className="card-title pricing-card-title my-price-title">$199<small
                                                className="text-dull">/month</small>
                                            </h1>
                                            <p>There are many variations of passages of Lorem Ipsum available.</p>
                                                <Ul class='list-unstyled list-pricing mt-3 mb-4'>
                                                    <Li texto='30 Domain'/>
                                                    <Li texto='30 users included'/>
                                                    <Li texto='15 GB of storage'/>
                                                    <Li texto='Phone and email support'/>
                                                    <Li texto='Help center access'/>
                                                </Ul>
                                            <div className="mt-4">
                                                < A class='btn btn-lg btn-outline-primary btn-style border-btn' texto='Contact us'/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>



                        <div className="pricing-version-2">
                            <div className="card card_border mb-5">
                                <div className="cards__heading">
                                    <h3>Pricing Tables -<span> Version 2</span></h3>
                                </div>
                                <div className="card-body">
                                    <div className="row px-2">
                                        <div className="col-lg-4 col-md-6 px-2 mb-4">
                                            <div className="card text-center card__hover">
                                                <div className="card-header">
                                                    <h3 className="display-4"><span className="currency">$</span>19<span className="period">/month</span></h3>
                                                </div>
                                                <div className="card-block">
                                                    <h4 className="card-title">
                                                        Basic Plan
                                                    </h4>
                                                    <Ul className="list-group">
                                                        <Li class="list-group-item" texto='1 Domain' />
                                                        <Li class="list-group-item" texto='Ultimate Features'/>
                                                        <Li class="list-group-item" texto='Responsive Ready'/>
                                                        <Li class="list-group-item" texto='Editor Ready Builder'/>
                                                        <Li class="list-group-item" texto='Limited UI Blocks'/>
                                                        <Li class="list-group-item" texto='24/7 Support System'/>
                                                    </Ul>
                                                    <A class='btn btn-style btn-primary mt-4' texto='Choose Plan'/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 px-2 mb-4">
                                            <div className="card text-center card__hover">
                                                <div className="card-header">
                                                    <h3 className="display-4"><span className="currency">$</span>29<span className="period">/month</span></h3>
                                                </div>
                                                <div className="card-block">
                                                    <h4 className="card-title">
                                                        Regular Plan
                                                    </h4>
                                                    <Ul className="list-group">
                                                        <Li class="list-group-item" texto='10 Domain' />
                                                        <Li class="list-group-item" texto='Ultimate Features'/>
                                                        <Li class="list-group-item" texto='Responsive Ready'/>
                                                        <Li class="list-group-item" texto='Editor Ready Builder'/>
                                                        <Li class="list-group-item" texto='Unlimited UI Blocks'/>
                                                        <Li class="list-group-item" texto='24/7 Support System'/>
                                                    </Ul>
                                                    <A class='btn btn-style btn-primary mt-4' texto='Choose Plan'/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6 px-2 mb-4">
                                            <div className="card text-center card__hover">
                                                <div className="card-header">
                                                    <h3 className="display-4"><span className="currency">$</span>39<span className="period">/month</span></h3>
                                                </div>
                                                <div className="card-block">
                                                    <h4 className="card-title">
                                                        Premium Plan
                                                    </h4>
                                                    <Ul className="list-group">
                                                        <Li class="list-group-item" texto='15 Domain' />
                                                        <Li class="list-group-item" texto='Ultimate Features'/>
                                                        <Li class="list-group-item" texto='Responsive Ready'/>
                                                        <Li class="list-group-item" texto='Editor Ready Builder'/>
                                                        <Li class="list-group-item" texto='Unlmited UI Blocks'/>
                                                        <Li class="list-group-item" texto='24/7 Support System'/>
                                                    </Ul>
                                                    <A class='btn btn-style btn-primary mt-4' texto='Choose Plan'/>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
)