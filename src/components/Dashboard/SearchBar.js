import React from 'react';
import styled from 'styled-components';

const SearchBar = () => {
  return (
    <SearchBar1 className="SearchBar">
          <div className="SearchBox">
            <form class="d-flex align-items-center gap-2">
              <i class="fas fa-search" aria-hidden="true"></i>
              <input
                class=""
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>

          <div className="cartIcons">
            <div className="favorite">
              <img
                src={require("../../assets/images/fav.png")}
                alt="fav"
                className="img-fluid"
              />
            </div>

            <div className="cart-icon">
              <img
                src={require("../../assets/images/cart.png")}
                alt="cart"
                className="img-fluid"
              />
            </div>

            <div className="footer-logo">
              <img
                src={require("../../assets/images/Rosavan-Logo-Png-removebg-preview.png")}
                alt="footer-logo"
                className="img-fluid"
                style={{width:"3.5rem"}}
              />
            </div>
          </div>
        </SearchBar1>
  )
}

export default SearchBar;
const SearchBar1 = styled.div`
  display: flex;
  padding: 10px;
  gap: 1rem;
  .SearchBox {
    width: 75%;

    input {
      width: 100%;
      border: none;
      outline: none;
      &:focus {
        border: none !important;
        outline: none !important;
      }
    }

    form {
      background: white;
      padding: 1.3% 3%;
      border-radius: 50px;
    }
  }

  .cartIcons {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 25%;
    gap: 1rem;
  }
`;