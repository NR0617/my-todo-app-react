import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Li = styled.li`
    border: 1px solid blue;
    width: 70vw;
    height: 5vw;
    display: flex;
    align-items: center;
`;

const Checkbox = styled.input`
    margin-left: 20px;
`;

const Name = styled.span`
    /* border: 1px solid purple; */
    margin-left: 20px;
    font-size: 1.5em;
    flex-basis: 6em;
`;

const Todo = styled.span`
    /* border: 1px solid black; */
    margin-left: 20px;
    font-size: 1.5em;
    flex-basis: 31em;
`;
const Button = styled.span`
    cursor: default;
`;

export default function Schedule({ id, name, todo }) {
    const navigate = useNavigate();
    const moveToUpdate = () => {
        navigate(`/input/${id}`);
    };
    const handleDeleteSchedule = () => {
        fetch(`http://localhost:3001/todo/${id}`, {
            method: "DELETE",
        }).then(() => window.location.reload("/"));
    };
    // console.log(id);
    return (
        <Li>
            <Checkbox type={"checkbox"} />
            <Name onClick={moveToUpdate}>{name}</Name>
            <Todo onClick={moveToUpdate}>{todo}</Todo>
            <Button onClick={handleDeleteSchedule}>X</Button>
        </Li>
    );
}
