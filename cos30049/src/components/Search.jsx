 import styled from "styled-components";
 import searchIcon from '../assets/search.svg'

 
 function Search() {
    const SearchContainer = styled.div `
        display: flex;
        img{

            margin-right: 5px;
            width:20px;
            height:20px;
        }
        align-items: center;
        padding: 10px 20px;
        border-radius: 50px;
        input {
            font-size: 16px;
            border: none;
            outline: none;
            background-color: transparent;
        }
        input::placeholder {
            color: #2A2A2A;
        }
        border: 1px solid #2A2A2A;
        background-color: #1C1C1C;
        max-width: 275px;

    `;

    return (
        <>
            <SearchContainer>
                <img src={searchIcon} alt="Search" />
                <input type="text" className="search-box" placeholder="Search for art"/>
            </SearchContainer>
        </>
    );
 }

 export default Search