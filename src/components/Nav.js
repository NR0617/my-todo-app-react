import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.div`
    width: 100vw;
    height: 20vh;
    background: #8fa8ff;
    /* border: 1px solid #000; */
    /* margin-bottom: 20px; */
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled.div`
    font-size: 3em;
    color: white;
`;

function Nav() {
    return (
        <Navbar id="nav-body">
            <Title id="title">
                {/* <img id="logo" src="../logo.png" alt="logo" /> */}
                <span id="name">TO-DO LIST</span>
            </Title>
            <div id="menu">
                {/* <Link to="/">상품리스트</Link> */}
                {/* <Link to="/shoppingcart">
                    장바구니
                    <span id="nav-item-counter">{cartItems.length}</span>
                </Link> */}
            </div>
        </Navbar>
    );
}

export default Nav;
