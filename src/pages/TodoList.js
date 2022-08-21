import React, { useState, useEffect } from "react";
import Schedule from "../components/Schedule";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MainPage = styled.div`
    /* border: 1px solid #000; */
    display: flex;
    justify-content: center;
    align-items: center;
    //width: 100%;
`;

const ScheduleList = styled.ul`
    /* border: 1px solid blue; */
    width: 70vw;
    height: 90vw;
    padding: 0 0 0 0;
`;

const Button = styled.button`
    width: 70vw;
    height: 5vw;
    background: white;
    border: none;
    font-size: 2em;
`;

function TodoList({ todoList }) {
    return (
        <MainPage>
            <ScheduleList>
                {todoList.map(function (el) {
                    return (
                        <Schedule
                            key={el.id}
                            id={el.id}
                            name={el.title}
                            todo={el.content}
                        />
                    );
                })}
                <Link to="/input">
                    <Button>+</Button>
                </Link>
            </ScheduleList>
        </MainPage>
    );
}

export default TodoList;
