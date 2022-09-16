import React from "react";
import styled from "styled-components";

const Navbar = styled.div`
    width: 100vw;
    height: 20vh;
    background: #8fa8ff;
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
                <span id="name">TO-DO LIST</span>
            </Title>
            <div id="menu"></div>
        </Navbar>
    );
}

export default Nav;
