import React from 'react'
import styled from 'styled-components';

function SearchBar({ searchHandler }) {
    return (
        <>
            <SearchBarContainer>
                    <input
                        type="text"
                        placeholder='search product'
                        onChange={(e)=> searchHandler(e.target.value)}
                    />
            </SearchBarContainer>
        </>
    )
}

export default SearchBar

const SearchBarContainer = styled.div`
    width: 100%;
    margin-top: 14px;
    padding: 0 10px;
    input {
        width: 100%;
        padding: 10px;
        border:1px solid #eee;
        border-radius: 5px;
        ::placeholder {
            text-transform: capitalize;
            transition: all 0.5s ease-in-out;
        }
        &:focus {
            outline: none;
            ::placeholder {
                padding-left: 5px;
                transition: all 0.5s ease-in-out;
            }
        }
    }
`