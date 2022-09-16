import React from "react";
import Schedule from "../components/Schedule";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MainPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ScheduleList = styled.ul`
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

function TodoList({ todoList, checkedArr, setCheckedArr }) {
    return (
        <MainPage>
            <ScheduleList>
                {todoList.map(function (el) {
                    if (checkedArr.includes(el.id)) {
                        return (
                            <Schedule
                                key={el.id}
                                id={el.id}
                                name={el.title}
                                todo={el.content}
                                setCheckedArr={setCheckedArr}
                                checkedArr={checkedArr}
                                checked={true}
                            />
                        );
                    } else {
                        return (
                            <Schedule
                                key={el.id}
                                id={el.id}
                                name={el.title}
                                todo={el.content}
                                setCheckedArr={setCheckedArr}
                                checkedArr={checkedArr}
                                checked={false}
                            />
                        );
                    }
                })}
                <Link to="/input">
                    <Button>+</Button>
                </Link>
            </ScheduleList>
        </MainPage>
    );
}

export default TodoList;
