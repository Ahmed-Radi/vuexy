import React from 'react'
import styled from 'styled-components';

function SubNav() {
    return (
        <SubNavbar>
            <Left>
                <p className="page-name">Shop</p>
                <div className="breadcrumb hidden-navbar">
                    <a href="##">
                        <i className="fi fi-rr-home"></i>
                    </a>
                    <Arrow>&#62;</Arrow>
                    <a href="##">ECommerce</a>
                    <Arrow>&#62;</Arrow>
                    <a>Shop</a>
                </div>
            </Left>
            <Right>
                <i className="fi fi-rr-settings"></i>
            </Right>
        </SubNavbar>
    )
}

export default SubNav

const SubNavbar = styled.section`
    padding: 100px 17px 0;
    display: flex;
    justify-content: space-between;
`
const Left = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    .page-name {
        display: inline-block;
        font-size: 22px;
        border-right: 1px solid #d6d6d6;
        padding-right: 20px;
        margin: 0;
        color: #6e6b7b;
    }
    .breadcrumb {
        display: flex;
        align-items: center;
        font-size: 14px;
        margin: 0;
        margin-left: 10px;
        a[href] {color: #7367f0;}
        a:not([href]) {color: #6e6b7b;}
    }
    @media (max-width: 425px) {
        .hidden-navbar {
            display: none;
        }
        .page-name {
            border: none;
        }
    }
`
const Arrow = styled.span`
    margin: 0 10px;
    padding-top: 3px;
`
const Right = styled.div`
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    i {
        color: #eee;
        background: #7367f0;
        padding: 10px;
        border-radius: 5px;
    }
`
