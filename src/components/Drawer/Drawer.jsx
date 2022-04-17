import React from 'react';
import styled from 'styled-components';

function Drawer({ setShow, sidebar, setSidebar }) {
    return (
        <>
            <DrawerContainer className={`${sidebar ? 'sidebar' : ''}`}>
                <ul>
                    <LogoContainer>
                        <a href="##">
                            <span>
                                <img
                                    src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/logo.36f34a9f.svg"
                                    alt="logo"
                                    width="36"
                                    height="36"
                                />
                            </span>
                            <h2>Vuexy</h2>
                        </a>
                        <div>
                            <span className='checkbox'>
                                <input
                                    type="checkbox"
                                    onClick={() => setSidebar(prev => !prev)}
                                />
                            </span>
                            <i className="fi fi-rr-cross close-icon"
                                onClick={() => setShow(prev => !prev)}
                            ></i>
                        </div>
                    </LogoContainer>
                    <DrawerContent>
                        <a href="##" className="add-arrow">
                            <span className="content-icon">
                                <i className="fi fi-rr-home"></i>
                            </span>
                            <span className='hide'>Dashboards</span>
                            <span className="number">2</span>
                        </a>
                    </DrawerContent>

                    <TextTruncate>
                        <span className={`${sidebar ? 'hide' : ''} content`}>
                            APPS & PAGES
                        </span>
                        <span className="remove-in-hover">...</span>
                    </TextTruncate>

                    <DrawerContent>
                        <a href="##">
                            <span className="content-icon">
                                <i className="fi fi-rr-envelope"></i>
                            </span>
                            <span className="hide">Email</span>
                        </a>
                    </DrawerContent>
                    <DrawerContent>
                        <a href="##">
                            <span className="content-icon">
                                <i className="fi fi-rr-comment-alt"></i>
                            </span>
                            <span className="hide">Chat</span>
                        </a>
                    </DrawerContent>
                    <DrawerContent>
                        <a href="##">
                            <span className="content-icon">
                                <i className="fi fi-rr-list-check"></i>
                            </span>
                            <span className="hide">Todo</span>
                        </a>
                    </DrawerContent>
                    <DrawerContent>
                        <a href="##">
                            <span className="content-icon">
                                <i className="fi fi-rr-calendar"></i>
                            </span>
                            <span className="hide">Calender</span>
                        </a>
                    </DrawerContent>
                    <DrawerContent>
                        <a href="##" className="add-arrow">
                            <span className="content-icon">
                                <i className="fi fi-rr-document"></i>
                            </span>
                            <span className="hide">Invoice</span>
                        </a>
                    </DrawerContent>
                    <DrawerContent>
                        <a href="##" className="add-arrow">
                            <span className="content-icon">
                                <i className="fi fi-rr-shopping-cart"></i>
                            </span>
                            <span className="hide">eCommerce</span>
                        </a>
                    </DrawerContent>
                    <DrawerContent>
                        <a href="##" className="add-arrow">
                            <span className="content-icon">
                                <i className="fi fi-rr-user"></i>
                            </span>
                            <span className="hide">Users</span>
                        </a>
                    </DrawerContent>
                    <DrawerContent>
                        <a href="##" className="add-arrow">
                            <span className="content-icon">
                                <i className="fi fi-rr-file"></i>
                            </span>
                            <span className="hide">Pages</span>
                        </a>
                    </DrawerContent>
                    <TextTruncate>
                        <span className={`${sidebar ? 'hide' : ''} content`}>
                            USER INTERFACE
                        </span>
                        <span className="remove-in-hover">...</span>
                    </TextTruncate>
                </ul>
            </DrawerContainer>
        </>
    )
}

export default Drawer

const DrawerContainer = styled.section`
    background-color: #eee;
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
    box-shadow: 0 0 15px 0 rgb(34 41 47 / 5%);
    background: #fff;
    ul {
        padding-left: 1px;
    }
    &.sidebar {
        width: 4%;
        position: fixed;
        transition: all 0.5s ease-in-out;
        &:hover {
            width: 16%;
            transition: all 0.5s ease-in-out;
            a {
                &::after {
                    content: '';
                }
            }
            /**take '.hide' out of 'a' to make it global */
            .hide {
                display: inline-block;
            }
            .remove-in-hover {display: none;}
        }
        a {
            &::after {
                content: none;
            }
        }
        /**take '.hide' out of 'a' to make it global */
        .hide {
            display: none;
        }
        .remove-in-hover {display: inline-block;}
    }
    .close-icon {
        color: #7367F0;
        display: none;
    }
    .remove-in-hover {display: none;}
    @media (max-width: 1440px) {
        &.sidebar {
            width: 4%;
        }
    }
    @media (max-width: 1200px) {
        .checkbox {
            display: none;
        }
        .close-icon {
            display: inline;
        }
    }
`
const LogoContainer = styled.li`
    display: flex;
    align-items: center;
    padding: 1.35rem 1rem .3rem 1.64rem;
    a {
        display: flex;
        flex: 1;
        align-items: center;
        h2 {
            margin: 0;
            padding-left: 1rem;
            color: #7367f0;
            letter-spacing: .01rem;
            font-size: 1.3rem;
            line-height: 1.5;
            display: inline-block;
        }
    }
    input[type="checkbox"] {
        -webkit-appearance: none;
        appearance: none;
        background-color: #fff;
        margin: 0;
        font: inherit;
        color: #7367f0;
        width: 1.15em;
        height: 1.15em;
        border: 0.15em solid #7367f0;
        border-radius: 50%;
        transform: translateY(-0.075em);
        display: grid;
        place-content: center;
    }
    input[type="checkbox"]::before {
        content: "";
        width: 0.60em;
        height: 0.60em;
        border-radius: 50%;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        /* box-shadow: inset 1em 1em #7367f0; */
        /* border: 2px solid #7367f0; */
    }
    input[type="checkbox"]:checked::before {
        border: 2px solid #7367f0;
        transform: scale(1);
    }
`
const DrawerContent = styled.li`
    display: flex;
    align-items: center;
    transition: padding 0.3s ease-in;
    a {
        display: flex;
        align-items: center;
        flex: 1;
        padding: 10px 15px 10px 15px;
        line-height: 1.45;
        margin: 0 15px;
        color: #625f6e8a;
        span {
            &.content-icon {
                display: flex;
                margin-right: 13px;
                color: #625f6e;
            }
            &.number {
                background: #ff9f4347;
                color: #ff9f43;
                border-radius: 50%;
                padding: 8px;
                font-size: 12px;
                width: 7px;
                height: 7px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 5px;
            }
        }
    }
    position: relative;
    & > .add-arrow::after {
        content: '';
        position: absolute;
        height: 1.1rem;
        width: 1.1rem;
        display: inline-block;
        top: 14px;
        -webkit-transition: all .2s ease-out;
        transition: all .2s ease-out;
        right: 20px;
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' className='feather feather-chevron-right'%3E%3Cpath d='M9 18l6-6-6-6'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: 50%;
        background-size: 1.1rem;
    }
    &:hover {
        padding-left: 10px;
        transition: padding 0.4s ease-in;
    }
    &.active {
        background: #eee;
    }
`
const TextTruncate = styled.li`
    margin: 2.286rem 0 .8rem 2.2rem;
    .content {
        font-weight: 500;
        font-size: 12px;
        text-transform: uppercase;
        line-height: 1.5;
        letter-spacing: .01rem;
        text-align: left;
        color: #625f6e8a;
    }
`