import React from 'react';
import MenuLateral from './templates/MenuLateral';
import Header from './templates/Header';
import Routes from './Routes';
import Footer from './templates/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

export default props => (
    <>
        <MenuLateral/>
        <Header />
        <Routes />
        <Footer />
    </>

)