import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Li = styled.li`
    border: 1px solid blue;
    width: 70vw;
    height: 5vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Checkbox = styled.input`
    margin-left: 20px;
`;

const Name = styled.span`
    /* border: 1px solid purple; */
    margin-left: 20px;
    font-size: 1.5em;
    flex-basis: 6em;
    text-decoration: ${(props) => (props.isChecked ? "line-through" : null)};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1.6rem;
    @media screen and (max-width: 820px) {
        display: none;
    }
`;

const Todo = styled.span`
    /* border: 1px solid black; */
    margin-left: 20px;
    font-size: 1.5em;
    flex-basis: 31em;
    text-decoration: ${(props) => (props.isChecked ? "line-through" : null)};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media screen and (max-width: 820px) {
        font-size: 140%;
    }
`;
const Button = styled.span`
    cursor: default;
    flex-basis: 3rem;
`;

export default function Schedule({ id, name, todo }) {
    const navigate = useNavigate();
    const moveToUpdate = () => {
        navigate(`/input/${id}`);
    };
    const [isChecked, setIsChecked] = useState(false);
    const handleChecked = () => {
        setIsChecked((prev) => !prev);
    };
    const handleDeleteSchedule = () => {
        fetch(`${process.env.REACT_APP_SERVER}/api/todo/${id}`, {
            method: "DELETE",
        }).then(() => window.location.reload("/"));
    };

    return (
        <Li>
            <Checkbox type={"checkbox"} onChange={handleChecked} />
            <Name onClick={moveToUpdate} isChecked={isChecked}>
                {name}
            </Name>
            <Todo onClick={moveToUpdate} isChecked={isChecked}>
                {todo}
            </Todo>
            <Button onClick={handleDeleteSchedule}>X</Button>
        </Li>
    );
}
