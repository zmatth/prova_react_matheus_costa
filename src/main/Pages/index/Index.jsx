import React from 'react';
import CardDash from '../../components/cards dashboard/CardDash';
import H3 from '../../components/cards dashboard/H3';
import I from '../../components/cards dashboard/I';
import P from '../../components/cards dashboard/P';

export default props => (
    <div className="main-content">
        <div className="container-fluid content-top-gap">

            <nav aria-label="breadcrumb">
                <ol className="breadcrumb my-breadcrumb">
                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                </ol>
            </nav>
            <div className="welcome-msg pt-3 pb-4">
                <h1>Hi <span className="text-primary">John</span>, Welcome back</h1>
                <p>Very detailed & featured admin.</p>
            </div>

            <div className="statistics">
                <div className="row">
                    <div className="col-xl-6 pr-xl-2">
                        <div className="row">
                            <div className="col-sm-6 pr-sm-2 statistics-grid">
                                <CardDash class='card card_border border-primary-top p-4'>
                                    <I Iclass='lnr lnr-users'/>
                                    <H3 Hclass='text-primary number' h3texto='29.75M'/>
                                    <P Pclass='stat-text' Ptexto='Total Users'/>
                                </CardDash>
                            </div>
                            <div className="col-sm-6 pl-sm-2 statistics-grid">
                                <CardDash class='card card_border border-primary-top p-4'>
                                    <I Iclass='lnr lnr-eye'/>
                                    <H3 Hclass='text-secondary number' h3texto='51.25K'/>
                                    <P Pclass='stat-text' Ptexto='Daily Visitors'/>
                                </CardDash>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 pl-xl-2">
                        <div className="row">
                            <div className="col-sm-6 pr-sm-2 statistics-grid">
                                <CardDash class='card card_border border-primary-top p-4'>
                                    <I Iclass='lnr lnr-cloud-download'/>
                                    <H3 Hclass='text-success number' h3texto='29.75M'/>
                                    <P Pclass='stat-text' Ptexto='Downloads'/>
                                </CardDash>
                            </div>
                            <div className="col-sm-6 pl-sm-2 statistics-grid">
                                <CardDash class='card card_border border-primary-top p-4'>
                                    <I Iclass='lnr lnr-cart'/>
                                    <H3 Hclass='text-danger number' h3texto='1,250K'/>
                                    <P Pclass='stat-text' Ptexto='Purchased'/>
                                </CardDash>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="chart">
                <div className="row">
                    <div className="col-lg-6 pr-lg-2 chart-grid">
                        <div className="card text-center card_border">
                            <div className="card-header chart-grid__header">
                                Bar Chart
                            </div>
                            <div className="card-body">
                                <div id="container">
                                    <canvas id="barchart"></canvas>
                                </div>
                            </div>
                            <div className="card-footer text-muted chart-grid__footer">
                                Updated 2 hours ago
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 pl-lg-2 chart-grid">
                        <div className="card text-center card_border">
                            <div className="card-header chart-grid__header">
                                Line Chart
                            </div>
                            <div className="card-body">
                                <div id="container">
                                    <canvas id="linechart"></canvas>
                                </div>
                            </div>
                            <div className="card-footer text-muted chart-grid__footer">
                                Updated just now
                        </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
)