import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import InputRange from 'react-input-range';
import StarsRating from 'stars-rating';

function ProductSidebar(props) {
    const {showsidebar, setShowSidebar, range, setRange, data} = props
    const [numberProductFive, setNumberProductFive] = useState(0)
    const [numberProductFour, setNumberProductFour] = useState(0)
    const [numberProductThree, setNumberProductThree] = useState(0)
    const [numberProductTwo, setNumberProductTwo] = useState(0)

    const productsRatingFourToFive = data?.products?.filter(product => (
        product.rating >= 4 ? true : false
    ))
    const productsRatingFourToThree = data?.products?.filter(product => (
        product.rating <= 3 && product.rating > 2.1 ? true : false
    ))
    const productsRatingThreeToTwo = data?.products?.filter(product => (
        product.rating <= 2 && product.rating > 1.1 ? true : false
    ))
    const productsRatingOne = data?.products?.filter(product => (
        product.rating <= 1 ? true : false
    ))
    useEffect(() => {
        setNumberProductFive(productsRatingFourToFive.length)
        setNumberProductFour(productsRatingFourToThree.length)
        setNumberProductThree(productsRatingThreeToTwo.length)
        setNumberProductTwo(productsRatingOne.length)
    },[])
    const ratingFilter = (ratingRange) => {
        console.log(ratingRange)
    }

    return (
        <>
            <Sidebar className={`${showsidebar ? 'showsidebar' : ''}`}>
                <div className="sidebar-container">
                    <p className='sidebar__header'>Filters</p>
                    <div className='inner-sidebar'>
                        <div className='close-sidebar-icon'>
                            <i className="fi fi-rr-cross close-icon"
                                onClick={() => setShowSidebar(prev => !prev)}
                            ></i>
                        </div>
                        <div className="checkbox">
                            <h6>Multi Range</h6>
                            <label htmlFor="all">
                                <input type="radio" name="price" id="all" />
                                <span>All</span>
                            </label>
                            <label htmlFor="less-than-ten">
                                <input type="radio" name="price" id="less-than-ten" />
                                <span>&#60;=$10</span>
                            </label>
                            <label htmlFor="ten-to-hundred">
                                <input type="radio" name="price" id="ten-to-hundred" />
                                <span>$10-$100</span>
                            </label>
                            <label htmlFor="hundred-to-five-hundred">
                                <input type="radio" name="price" id="hundred-to-five-hundred" />
                                <span>$100-$500</span>
                            </label>
                            <label htmlFor="five-hundred">
                                <input type="radio" name="price" id="five-hundred" />
                                <span>&#62;=$500</span>
                            </label>
                        </div>
                        <div className="range">
                            <h6>Price Range</h6>
                            <form>
                                <InputRange
                                    maxValue={5000}
                                    minValue={51}
                                    formatLabel={value => `$${value}`}
                                    value={range}
                                    onChange={value => setRange(value)}
                                    onChangeComplete={value => ratingFilter(value)}
                                />
                            </form>
                        </div>
                        <div className="checkbox">
                            <h6>Categories</h6>
                            <label htmlFor="Appliances">
                                <input type="radio" name="Categories" id="Appliances" />
                                <span>Appliances</span>
                            </label>
                            <label htmlFor="Audio">
                                <input type="radio" name="Categories" id="Audio" />
                                <span>Audio</span>
                            </label>
                            <label htmlFor="Cameras-Camcorders">
                                <input type="radio" name="Categories" id="Cameras-Camcorders" />
                                <span>Cameras & Camcorders</span>
                            </label>
                            <label htmlFor="Car-Electronics-GPS">
                                <input type="radio" name="Categories" id="Car-Electronics-GPS" />
                                <span>Car Electronics & GPS</span>
                            </label>
                            <label htmlFor="Cell-Phones">
                                <input type="radio" name="Categories" id="Cell-Phones" />
                                <span>Cell Phones</span>
                            </label>
                            <label htmlFor="Computers-Tablets">
                                <input type="radio" name="Categories" id="Computers-Tablets" />
                                <span>Computers & Tablets</span>
                            </label>
                            <label htmlFor="Health-Fitness-Beauty">
                                <input type="radio" name="Categories" id="Health-Fitness-Beauty" />
                                <span>Health, Fitness & Beauty</span>
                            </label>
                            <label htmlFor="Office-School-Supplies">
                                <input type="radio" name="Categories" id="Office-School-Supplies" />
                                <span>Office & School Supplies</span>
                            </label>
                            <label htmlFor="TV-Home-Theater">
                                <input type="radio" name="Categories" id="TV-Home-Theater" />
                                <span>TV & Home Theater</span>
                            </label>
                            <label htmlFor="Video-Games">
                                <input type="radio" name="Categories" id="Video-Games" />
                                <span>Video Games</span>
                            </label>
                        </div>
                        <div className="checkbox">
                            <h6>Brands</h6>
                            <label htmlFor="Insignia™">
                                <div className="checkbox-container">
                                    <input type="checkbox" name="Brands" id="Insignia™" />
                                    <span className="checkmark"></span>
                                </div>
                                <span>Insignia™</span>
                            </label>
                            <label htmlFor="Samsung">
                                <div className="checkbox-container">
                                    <input type="checkbox" name="Brands" id="Samsung" />
                                    <span className='checkmark'></span>
                                </div>
                                <span>Samsung</span>
                            </label>
                            <label htmlFor="Metra">
                                <div className="checkbox-container">
                                    <input type="checkbox" name="Brands" id="Metra" />
                                    <span className='checkmark'></span>
                                </div>
                                <span>Metra</span>
                            </label>
                            <label htmlFor="HP">
                                <div className="checkbox-container">
                                    <input type="checkbox" name="Brands" id="HP" />
                                    <span className='checkmark'></span>
                                </div>
                                <span>HP</span>
                            </label>
                            <label htmlFor="Apple">
                                <div className="checkbox-container">
                                    <input type="checkbox" name="Brands" id="Apple" />
                                    <span className='checkmark'></span>
                                </div>
                                <span>Apple</span>
                            </label>
                            <label htmlFor="GE">
                                <div className="checkbox-container">
                                    <input type="checkbox" name="Brands" id="GE" />
                                    <span className='checkmark'></span>
                                </div>
                                <span>GE</span>
                            </label>
                            <label htmlFor="Sony">
                                <div className="checkbox-container">
                                    <input type="checkbox" name="Brands" id="Sony" />
                                    <span className='checkmark'></span>
                                </div>
                                <span>Sony</span>
                            </label>
                            <label htmlFor="Incipio">
                                <div className="checkbox-container">
                                    <input type="checkbox" name="Brands" id="Incipio" />
                                    <span className='checkmark'></span>
                                </div>
                                <span>Incipio</span>
                            </label>
                            <label htmlFor="KitchenAid">
                                <div className="checkbox-container">
                                    <input type="checkbox" name="Brands" id="KitchenAid" />
                                    <span className='checkmark'></span>
                                </div>
                                <span>KitchenAid</span>
                            </label>
                            <label htmlFor="Whirlpool">
                                <div className="checkbox-container">
                                    <input type="checkbox" name="Brands" id="Whirlpool" />
                                    <span className='checkmark'></span>
                                </div>
                                <span>Whirlpool</span>
                            </label>
                        </div>
                        <div className="rating">
                            <h6>Ratings</h6>
                            <div className="rating-content">
                                <div className="rating-content-star">
                                    <StarsRating
                                        edit={false}
                                        count={5}
                                        value={4}
                                        size={24}
                                        color1={'#ddd'}
                                        color2={'#FF9F43'}
                                    />
                                    <a href="##">&#38; up</a>
                                </div>
                                <span className="rating-content-text">{numberProductFive}</span>
                            </div>
                            <div className="rating-content">
                                <div className="rating-content-star">
                                    <StarsRating
                                        edit={false}
                                        count={5}
                                        value={3}
                                        size={24}
                                        color1={'#ddd'}
                                        color2={'#FF9F43'}
                                    />
                                    <a href="##">&#38; up</a>
                                </div>
                                <span className="rating-content-text">{numberProductFour}</span>
                            </div>
                            <div className="rating-content">
                                <div className="rating-content-star">
                                    <StarsRating
                                        edit={false}
                                        count={5}
                                        value={2}
                                        size={24}
                                        color1={'#ddd'}
                                        color2={'#FF9F43'}
                                    />
                                    <a href="##">&#38; up</a>
                                </div>
                                <span className="rating-content-text">{numberProductThree}</span>
                            </div>
                            <div className="rating-content">
                                <div className="rating-content-star">
                                    <StarsRating
                                        edit={false}
                                        count={5}
                                        value={1}
                                        size={24}
                                        color1={'#ddd'}
                                        color2={'#FF9F43'}
                                    />
                                    <a href="##">&#38; up</a>
                                </div>
                                <span className="rating-content-text">{numberProductTwo}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Sidebar>
        </>
    )
}

export default ProductSidebar

const Sidebar = styled.div`
    width: 25%;
    .sidebar-container {
        width: 100%;
        margin-top: 10px;
        .sidebar__header {
            margin: 20px 0 1.25rem 0;
            font-size: 13px;
            color: #726F7F;
        }
        .inner-sidebar {
            height: fit-content;
            padding: 15px;
            margin-top: 10px;
            border-radius: 5px;
            background: #fff;
            box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
            .close-sidebar-icon {
                display: none;
            }
            .checkbox {
                h6 {
                    padding-top: 10px;
                    font-size: 14px;
                }
                label {
                    display: flex;
                    align-items: center;
                    margin-bottom: 10px;
                    input {
                        margin-right: 10px;
                    }
                    input[type="radio"] {
                        -webkit-appearance: none;
                        appearance: none;
                        background-color: #fff;
                        width: 1.15em;
                        height: 1.15em;
                        border: 1px solid #ddd;
                        border-radius: 50%;
                        transform: translateY(-0.075em);
                        display: grid;
                        place-content: center;
                        &::before {
                            content: "";
                            width: 0.65em;
                            height: 0.65em;
                            border-radius: 50%;
                            transform: scale(0);
                            transition: 120ms transform ease-in-out;
                        }
                        &:checked::before {
                            width: 1.15em;
                            height: 1.15em;
                            background-color: #7D72F1;
                            transform: scale(1);
                        }
                    }
                    /* The container */
                    .checkbox-container {
                        display: block;
                        position: relative;
                        padding-left: 35px;
                        margin-bottom: 23px;
                        cursor: pointer;
                        font-size: 22px;
                        -webkit-user-select: none;
                        -moz-user-select: none;
                        -ms-user-select: none;
                        user-select: none;
                    }
                    /* Hide the browser's default checkbox */
                    .checkbox-container input {
                        position: absolute;
                        opacity: 0;
                        cursor: pointer;
                        height: 0;
                        width: 0;
                    }
                    /* Create a custom checkbox */
                    .checkmark {
                        position: absolute;
                        top: 0;
                        left: 0;
                        height: 25px;
                        width: 25px;
                        background-color: #fff;
                        border: 1px solid #eee;
                        border-radius: 5px;
                        transition: all 0.5s ease-in-out;
                    }
                    /* On mouse-focus, add a grey background color */
                    .checkbox-container:hover input ~ .checkmark {
                        transition: all 0.5s ease-in-out;
                        border: 1px solid #7367f0;
                    }
                    /* When the checkbox is checked, add a blue background */
                    .checkbox-container input:checked ~ .checkmark {
                        background-color: #7367f0;
                    }
                    /* Create the checkmark/indicator (hidden when not checked) */
                    .checkmark:after {
                        content: "";
                        position: absolute;
                        display: none;
                    }
                    /* Show the checkmark when checked */
                    .checkbox-container input:checked ~ .checkmark:after {
                        display: block;
                    }
                    /* Style the checkmark/indicator */
                    .checkbox-container .checkmark:after {
                        left: 9px;
                        top: 4px;
                        width: 6px;
                        height: 12px;
                        border: solid white;
                        border-width: 0 3px 3px 0;
                        -webkit-transform: rotate(45deg);
                        -ms-transform: rotate(45deg);
                        transform: rotate(45deg);
                    }
                    span {
                        line-height: 1.45;
                        font-weight: 400;
                        color: #a4a4a4;
                    }
                }
            }
            .range {
                position: relative;
                h6 {
                    padding-top: 10px;
                    font-size: 14px;
                }
                form {
                    margin: 20px auto;
                    width: 98%;
                }
            }
            .rating {
                .rating-content {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    &-star {
                        display: flex;
                        align-items: center;
                        margin-bottom: 10px;
                        a {
                            color: #7367f0;
                            font-size: 12.5px;
                        }
                    }
                }
            }
        }
    }
    @media (max-width: 991.98px) {
        display: none;
        transition: all 0.5s ease-in-out;
        &.showsidebar {
            display: inline-block;
            position: fixed;
            top: 0;
            left:0;
            width: 30%;
            z-index: 1000000;
            height: 100vh;
            overflow-x: hidden;
            transition: all 0.5s ease-in-out;
            .sidebar-container {
                margin: 0;
                .sidebar__header {
                    display: none;
                }
                .inner-sidebar {
                    margin: 0;
                    .close-sidebar-icon {
                        display: flex;
                        justify-content: flex-end;
                    }
                }
            }
        }
    }
    @media (max-width: 426px) {
        &.showsidebar {
            width: 65%;
        }
    }
`