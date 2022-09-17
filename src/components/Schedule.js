import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Li = styled.li`
    border-bottom: 1px solid #8fa8ff;
    padding: 5px;
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
    margin-left: 20px;
    font-size: 1.5em;
    flex-basis: 6em;
    text-decoration: ${(props) => (props.isChecked ? 'line-through' : null)};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1.6rem;
    @media screen and (max-width: 820px) {
        display: none;
    }
`;

const Todo = styled.span`
    margin-left: 20px;
    font-size: 1.5em;
    flex-basis: 31em;
    text-decoration: ${(props) => (props.isChecked ? 'line-through' : null)};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media screen and (min-width: 414px) and (max-width: 820px) {
        font-size: 140%;
    }
    @media screen and (max-width: 414px) {
        font-size: 100%;
    }
`;
const Button = styled.span`
    cursor: default;
    flex-basis: 3rem;
`;

export default function Schedule({ id, name, todo, setCheckedArr, checkedArr, checked }) {
    const navigate = useNavigate();
    const moveToUpdate = () => {
        navigate(`/input/${id}`);
    };
    const [isChecked, setIsChecked] = useState(checked);
    const handleChecked = () => {
        setIsChecked((prev) => !prev);
        if (!checkedArr.includes(id)) {
            setCheckedArr((prev) => [...prev, id]);
        } else {
            const arr = checkedArr.filter((el) => el !== id);
            setCheckedArr([...arr]);
        }
    };
    const handleDeleteSchedule = () => {
        fetch(`${process.env.REACT_APP_SERVER}/api/todo/${id}`, {
            method: 'DELETE',
        }).then(() => setCheckedArr((prev) => [...prev]));
    };
    return (
        <Li>
            <Checkbox type={'checkbox'} onChange={handleChecked} checked={isChecked} />
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
