import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import Drawer from './components/Drawer/Drawer';
import TopNav from './components/TopNav/TopNav';
import SubNav from './components/SubNav/SubNav';
import Product from './components/Product/Product';

function App() {
    const [show, setShow] = useState(false)
    const [sidebar, setSidebar] = useState(false)
    const hiddenNavbar = () => {
        setShow(prev => !prev)
    }
    return (
        <Content>
            <DrawerContainer className={`${show ? `hidden` : ''} ${sidebar ? 'sidebar' : ''}`}>
                <Drawer setShow={setShow} sidebar={sidebar} setSidebar={setSidebar} />
            </DrawerContainer>
            <PageContent className={`${show ? `hidden` : ''} ${sidebar ? 'sidebar' : ''}`}>
                <TopNav hiddenNavbar={hiddenNavbar} sidebar={sidebar} />
                <SubNav />
                <Product />
            </PageContent>
            <ButtonBuyNow>Buy Now</ButtonBuyNow>
        </Content>
    );
}

export default App;
const Content = styled.div`
    display: flex;
    background: #F1F2F2;
`
const DrawerContainer = styled.div`
    width: 20%;
    position: fixed;
    &.sidebar {
        width: 25%;
        background: red;
        z-index: 100000000000;
        transition: all 0.5s ease-in-out;
    }
    @media (max-width: 1200px) {
        width: 0%;
        position: fixed;
        transition: all 0.5s ease-in-out;
        z-index: 100000000000;
        &.hidden {
            width: 22%;
            position: fixed;
            transition: all 0.5s ease-in-out;
        }
    }
    @media (max-width: 991.98px) {
        &.hidden {
            width: 25%;
        }
    }
    @media (max-width: 768px) {
        &.hidden {
            width: 47%;
        }
    }
    @media (max-width: 426px) {
        &.hidden {
            width: 75%;
        }
    }
`
const PageContent = styled.div`
    margin: 1.3rem 2rem;
    margin-left: 22%;
    width: calc(100% - (20%));
    padding-bottom: 10px;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
    &.hidden {
        width: 100%;
        transition: all 0.5s ease-in-out;
    }
    &.sidebar {
        width: 95%;
        margin-left: 5%;
        transition: all 0.5s ease-in-out;
    }
    @media (max-width: 1200px) {
        margin: 1.3rem 1rem 1rem 1rem;
        width: auto;
    }
`
const ButtonBuyNow = styled.button`
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #ea5455;
    padding: 12px 21px;
    border: none;
    border-radius: 5px;
    color: #fff;
    box-shadow: 0 1px 20px 1px #ea5455;
`