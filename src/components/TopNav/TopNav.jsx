import React from 'react'
import styled from 'styled-components';
import person from '../../images/13-small.d796bffd.png';
import flag from '../../images/flag.png';

function TopNav({ hiddenNavbar, sidebar }) {
    return (
        <NavContainer className={`${sidebar ? 'sidebar-hidden' : ''}`}>
            <Left>
                <span className="icon hidden" onClick={() => hiddenNavbar()}>
                    <i className="fi fi-rr-menu-burger"></i>
                </span>
                <span className="icon hidden-tools-icon">
                    <i className="fi fi-rr-calendar"></i>
                </span>
                <span className="icon hidden-tools-icon">
                    <i className="fi fi-rr-comment-alt"></i>
                </span>
                <span className="icon hidden-tools-icon">
                    <i className="fi fi-rr-envelope"></i>
                </span>
                <span className="icon hidden-tools-icon">
                    <i className="fi fi-rr-checkbox"></i>
                </span>
                <span className="icon hidden-tools-icon">
                    <i className="fi fi-rr-star"></i>
                </span>
            </Left>
            <Right>
                <span className="language">
                    <span className='language__image'>
                        <img src={flag} alt="flag" />
                    </span>
                    <span className='language__title' id="hidden-small-width">English</span>
                </span>
                <span className="icon">
                    <i className="fi fi-rr-moon"></i>
                    <i className="fi fi-rr-search"></i>
                    <span className='notification'>
                        <i className="fi fi-rr-shopping-cart"></i>
                        <span className="notification-shop">5</span>
                    </span>
                    <span className='notification'>
                        <i className="fi fi-rr-bell"></i>
                        <span className="notification-ball">6</span>
                    </span>
                </span>
                <span className="info" id="hidden-small-width">
                    <h6>Ahmed Radi</h6>
                    <span>Admin</span>
                </span>
                <span className="person">
                    <img src={person} alt="personImage" />
                    <span className="online"></span>
                </span>
            </Right>
        </NavContainer>
    )
}

export default TopNav

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    /* position: sticky;
    top: 20px; */
    position: fixed;
    margin: auto;
    width: 77%;
    background: #fff;
    z-index: 5000;
    /* margin: 1.3rem 2rem 0; */
    border-radius: 0.428rem;
    padding: .8rem 1rem;
    box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
    &.sidebar-hidden {
        width: 93%;
    }
    @media (max-width: 1200px) {
        width: 96%;
        /* margin: 0 auto; */
    }
    @media (max-width: 991.98px) {
        width: 94%;
        margin-left: 20px;
    }
    @media (max-width: 426px) {
        width: 91%;
        margin: 0 auto;
        #hidden-small-width {
            display: none;
        }
    }
`
const Left = styled.div`
    display: flex;
    align-items: center;
    .icon {
        padding: 0 10px;
        font-size: 18px;
        .fi-rr-star {
            color: #FF9F43;
        }
    }
    @media (min-width: 1200px) {
        .hidden {
            display: none;
        }
    }
    @media (max-width: 991.98px) {
        .hidden-tools-icon {
            display: none;
        }
    }
`
const Right = styled.div`
    display: flex;
    align-items: center;
    .language {
        display: flex;
        .language__image {
            height: 14px;
            width: 22px;
            margin-right: 5px;
            img {
                height: 100%;
                width: 100%;
            }
        }
        .language__title {
            color: #6e6b7b;
        }
    }
    .icon {
        display: flex;
        margin: 0 10px;
        i {
            margin-right: 10px;
            font-size: 18px;
        }
        .notification {
            position: relative;
            &-shop,
            &-ball {
                position: absolute;
                padding: 5px;
                right: -1px;
                top: -13px;
                width: 20px;
                height: 20px;
                line-height: 10px;
                color: #fff;
                font-size: 12px;
                border-radius: 50%;
                background: red;
                text-align: center;
            }
            &-shop {
                background: #7367f0;
            }
        }
        .notification-icon {
            position: relative;
        }
    }
    .info {
        display: flex;
        flex-direction: column;
        margin: 0 10px;
        h6 {margin: 0;font-size: 14px;}
        span {
            color: #6e6b7b;
            font-size: 14px;
            text-align: right;
        }
    }
    .person {
        height: 48px;
        width: 48px;
        position: relative;
        img {
            height: 100%;
            width: 100%;
            border-radius: 50%;
        }
        .online {
            height: 10px;
            width: 10px;
            padding: 5px;
            right: 5px;
            bottom: 0px;
            border: 1px solid #fff;
            border-radius: 50%;
            position: absolute;
            background: #28c76f;
        }
    }
    @media (max-width: 426px) {
        justify-content: space-between;
        .language__image {
            img {
                margin-top: -15px;
            }
        }
    }
`