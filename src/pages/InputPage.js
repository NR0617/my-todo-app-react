import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useParams, useNavigate } from "react-router-dom";

const MainPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const InputContainers = styled.div`
    border: 1px solid #000;
    width: 70vw;
    height: 60vh;
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Text = styled.span`
    font-size: 130%;
    padding-bottom: 20px;
    margin-left: 5px;
`;

const Input = styled.textarea`
    height: 80%;
    width: 70%;
    margin-left: 10px;
    font-size: 130%;
    resize: none;
`;

const InputContainer1 = styled.div`
    display: flex;
    width: 30rem;
    margin-bottom: 20px;
    margin-top: 20px;
    @media screen and (max-width: 768px) {
        width: fit-content;
    }
`;
const InputContainer2 = styled.div`
    display: flex;
    width: 30rem;
    height: 30rem;
    @media screen and (max-width: 768px) {
        width: fit-content;
    }
`;

const Button = styled.button`
    background: none;
    margin-bottom: 50px;
    border: 1px solid black;
    height: 2rem;
    font-size: 1.2rem;
`;
const ButtonContainer = styled.div`
    width: 11rem;
    display: flex;
    justify-content: space-between;
`;

function InputPage({ todoList, setTodoList }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        if (id === undefined) return;
        setIsLoading(true);
        fetch(`${process.env.REACT_APP_SERVER}/api/todo/${id}`)
            .then((res) => res.json())
            .then((res) => {
                setTitle(res.title);
                setContent(res.content);
            })
            .then(() => setIsLoading(false));
    }, [id]);

    const newSchedule = {
        updatedAt: new Date().toLocaleDateString(),
        checked: "false",
    };

    const handleTitle = function (titleValue) {
        setTitle(titleValue.trim());
        newSchedule.title = title;
    };
    const handleTodo = function (contentValue) {
        setContent(contentValue.trim());
        newSchedule.content = content;
    };
    const handleCreateSchedule = function () {
        newSchedule.title = title;
        newSchedule.content = content;

        if (
            newSchedule.title === undefined ||
            newSchedule.content === undefined ||
            newSchedule.title.trim().length === 0 ||
            newSchedule.content.trim().length === 0
        ) {
            alert("내용을 입력해주세요");

            return null;
        }
        fetch(`${process.env.REACT_APP_SERVER}/api/todo`, {
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newSchedule),
            method: "POST",
        })
            .then((res) => res.json())
            .then((res) => setTodoList((prev) => [...prev, res]))
            .then(() => navigate("/"));
    };
    const handleUpdateScedule = function () {
        newSchedule.title = title;
        newSchedule.content = content;

        if (
            newSchedule.title.trim().length === 0 &&
            newSchedule.content.trim().length === 0
        ) {
            alert("내용을 입력해주세요");
            return;
        }

        fetch(`${process.env.REACT_APP_SERVER}/api/todo/${id}`, {
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newSchedule),
            method: "PATCH",
        })
            .then((res) => res.json())
            .then((res) => {
                const beforeItem = todoList.filter((el) => el.id < res.id);
                const afterItem = todoList.filter((el) => el.id > res.id);
                setTodoList([...beforeItem, res, ...afterItem]);
            })
            .then(() => navigate("/"));
    };

    return (
        <MainPage>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <InputContainers>
                    <InputContainer1>
                        <Text>제목</Text>
                        <Input
                            onKeyUp={(e) => {
                                handleTitle(e.target.value);
                            }}
                            defaultValue={title}
                        />
                    </InputContainer1>
                    <InputContainer2>
                        <Text>일정</Text>
                        <Input
                            onKeyUp={(e) => {
                                handleTodo(e.target.value);
                            }}
                            defaultValue={content}
                        />
                    </InputContainer2>
                    <ButtonContainer>
                        {id === undefined ? (
                            <Button onClick={handleCreateSchedule}>
                                입력하기
                            </Button>
                        ) : (
                            <Button onClick={handleUpdateScedule}>
                                수정하기
                            </Button>
                        )}
                        <Link to="/">
                            <Button>돌아가기</Button>
                        </Link>
                    </ButtonContainer>
                </InputContainers>
            )}
        </MainPage>
    );
}

export default InputPage;
