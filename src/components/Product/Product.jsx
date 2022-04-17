import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import 'react-input-range/lib/css/index.css';
import data from '../../store-demo-data.json';
import StarsRating from 'stars-rating';
import SearchBar from '../SearchBar/SearchBar';
import Paginate from '../Paginate/Paginate';
import ProductSidebar from '../ProductSidebar/ProductSidebar';

function Product() {
    const [range, setRange] = useState({min: 1500, max: 3500,})
    const [showsidebar, setShowSidebar] = useState(false)

    //pagination
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    //pagination
    let itemsPerPage = 9
    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage ;
        setCurrentItems(data.products.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.products.length / itemsPerPage ));
    }, [itemOffset, setItemOffset]);

    const paginateFunction = (data) => {
        const endOffset = itemOffset + itemsPerPage ;
        setCurrentItems(data.slice(itemOffset, endOffset));
        if (data.length === 0) {
            setPageCount(1);
            return;
        }
        setPageCount(Math.ceil(data.length / itemsPerPage ));
    }

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage ) % data.products.length;
        setItemOffset(newOffset);
    }

    const searchHandler = (e) => {
        const filteredData = data.products.filter(product => {
            if (e === "") {
                //if query is empty return all products
                return product;
            } else if (product.name.toLowerCase().includes(e.toLowerCase())) {
                //returns filtered array
                return product;
            }
        });
        paginateFunction(filteredData)
    }

    const filterPrice = (e) => {
        if (e.target.value === 'Lowest') {
            let lowestPrice = data.products.sort((a, b) => a.price - b.price)
            setCurrentItems(prev => [...lowestPrice, prev])
            paginateFunction(lowestPrice)
            return;
        } else if (e.target.value === 'Highest') {
            let highestPrice = data.products.sort((a, b) => b.price - a.price)
            setCurrentItems(prev => [...highestPrice, prev])
            paginateFunction(highestPrice)
            return;
        } else if (e.target.value === 'Featured') {
            const sortedById = data.products.sort((a, b) => a.id - b.id)
            setCurrentItems(prev => [...sortedById, prev])
            paginateFunction(sortedById)
            return;
        }
    }

    return (
        <Content>
            <ProductSidebar
                showsidebar={showsidebar}
                setShowSidebar={setShowSidebar}
                range={range}
                setRange={setRange}
                data={data}
            />
            <Products>
                <ProductHeader>
                        <div className='result-and-icon'>
                            <span>{data.products.length} Results Found</span>
                            <i
                                className="fi fi-rr-menu-burger"
                                onClick={() => setShowSidebar(prev => !prev)}
                            ></i>
                        </div>
                        <div className='order-products'>
                            <select onChange={(e) => filterPrice(e)}>
                                <option value="Featured">Featured</option>
                                <option value="Lowest">Lowest</option>
                                <option value="Highest">Highest</option>
                            </select>
                            <span className='order-products__card active'><i className="fi fi-rr-apps-sort"></i></span>
                            <span className='order-products__list'><i className="fi fi-rr-list"></i></span>
                        </div>
                </ProductHeader>
                <SearchBar searchHandler={searchHandler} />
                <ProductContent>
                    <div className="container-fluid">
                        <div className="row">
                            {pageCount && currentItems.length !== 0 ? currentItems?.map((product) => {
                                return (
                                    <div className="col-lg-4 col-md-6 col-sm-12" key={product.id}>
                                        <div>
                                            <div className="card">
                                                <img src={product.img} className="card-img-top" alt={product.name} />
                                                <div className="card-body rating-price">
                                                    <div>
                                                        <StarsRating
                                                            edit={false}
                                                            count={5}
                                                            value={product.rating}
                                                            size={24}
                                                            color1={'#ddd'}
                                                            color2={'#FF9F43'}
                                                        />
                                                    </div>
                                                    <div>
                                                        <span className="card-text">${product.price}</span>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">{product.name}</h5>
                                                    <p className="card-text">{product.description}</p>
                                                </div>
                                                <div className="card-body card-link">
                                                    <a href="##" className="card-link-wishlist"><i className="fi fi-rr-heart"></i>Wishlist</a>
                                                    <a href="##" className="card-link-cart"><i className="fi fi-rr-shopping-cart"></i>View In Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }): <Error>No Results!!</Error>}
                        </div>
                    </div>
                </ProductContent>
                <Paginate pageCount={pageCount} currentItems={currentItems} handlePageClick={handlePageClick} />
            </Products>
        </Content>
    )
}

export default Product

const Content = styled.section`
    display: flex;
    @media (max-width: 425px) {
        justify-content: center;
    }
`
const ProductHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 11px;
    .result-and-icon {
        & > span {
            font-weight: 500;
            color: #5e5873;
            font-size: 14px;
        }
        & > i {
            display: none;
        }
    }
    .order-products {
        display: flex;
        align-items: center;
        select {
            color: #7A6FF1;
            background: transparent;
            margin-right: 5px;
            padding: 5px;
            border-color: #B5AFF4;
            border-radius: 5px;
            &:focus {
                outline: none;
            }
        }
        &__card {
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
        }
        &__list {
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
        }
        &__card,
        &__list {
            color: #7A6FF1;
            border: 1px solid #B5AFF4;
            padding: 8px 6px;
            &.active {
                background: #DDDBF6;
            }
        }
    }
    @media (max-width: 991.98px) {
        .result-and-icon {
            & > span {
            display: none;
            }
            & > i {
                margin-top: 5px;
                display: inline-block;
            }
        }
    }
    @media (max-width: 425px) {
        justify-content: space-around;
    }
`
const Products = styled.div`
    width: calc(100% - (25%));
    margin-top: 10px;
    margin-left: 10px;
    .card {
        margin-bottom: 2rem;
        border-radius: 5px;
        border: none;
        width: 100%;
        box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
        transition: all 0.7s ease;
        .card-body {
            .card-title,
            .card-text {
                white-space: nowrap;
                width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            &.rating-price {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 16px;
                .card-text {
                    text-align: right;
                }
            }
            .card-link {
                &-wishlist,
                &-cart {
                    padding: 10px;
                    width: 100%;
                    font-size: 13px;
                    text-align: center;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: 1px solid transparent;
                    transition: all 0.4s ease;
                    i {
                        margin-right: 5px;
                    }
                }
                &-wishlist {
                    background: #f3f2f2;
                    color: #000;
                    border-bottom-left-radius: 5px;
                    :hover {
                        background: #ddd;
                        transition: all 0.4s ease;
                    }
                }
                &-cart {
                    background: #7367f0;
                    color: #fff;
                    border-bottom-right-radius: 5px;
                    &:hover {
                        box-shadow: 0 8px 25px -8px #7367f0;
                        transition: all 0.4s ease;
                    }
                }
            }
            &.card-link {
                padding: 0;
                display: flex;
                flex-direction: column;
                &-wishlist,
                &-cart {
                    width: 100%
                }
            }
        }
        &:hover {
            transform: translateY(-5px);
            box-shadow: 0 4px 25px 0 rgb(34 41 47 / 25%);
        }
    }
    .page-item {
        &.active {
            .page-link {
                background-color: #7367F0!important;
                &::focus {
                    box-shadow: none !important;
                }
            }
            a {
                &:hover {
                    color: #fff!important;
                }
                &::focus {
                    box-shadow: none !important;
                }
            }
        }
        &.disabled {
            a {
                color: #c6c5ca !important;
            }
        }
        &:first-child,
        &:last-child {
            a {
                &:hover{
                    background: #7367F0!important;
                    color: #fff!important;
                }
            }
        }
    }
    .page-link {
        margin: 0 10px;
        background-color: #F3F2F7!important;
        color: #6e6b7b;
        &:hover {
            color: #7367F0!important;
        }
        &:first-child {
            border-radius: 50%;
        }
        &::focus {
            box-shadow: none;
        }
    }
    @media (max-width: 991.98px) {
        width: auto;
        .card {
            width: 28rem;
            .card-img-top {
                width: 17rem;
                margin: 0 auto;
            }
            .card-body {
                &.card-link {
                    flex-direction: row;
                    &-wishlist,
                    &-cart {
                        width: 50%
                    }
                }
            }
        }
    }
    @media (max-width: 768px) {
        .card {
            width: 22rem;
            margin: 0 auto 15px auto;
        }
    }
    @media (max-width: 425px) {
        /* margin-left: -10px; */
        /* justify-content: center; */
        .card {
            width: 18rem;
            margin: 0 auto 15px auto;
        }
    }
`
const ProductContent = styled.div`
    margin-top: 14px;
`
const Error = styled.div`
    display:grid;
    justify-items: center;
    padding: 20px 0;
    font-size: 13px;
    color: #726F7F;
    text-transform: capitalize;
`