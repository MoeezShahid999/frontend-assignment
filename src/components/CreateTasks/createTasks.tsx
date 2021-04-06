import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import history from "../../container/history";
const Container = styled.div`
  padding: 20px;
  border: 1px solid #eee;
  box-shadow: 2px 2px 2px #eee;
  width: 40vw;
  margin: 15vh auto;
  min-width: 320px;
  text-align: center;
`;
const Heading = styled.div`
  font-size: 24px;
  margin: 5px 0;
`;
const Input = styled.input`
  padding: 5px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #eee;
  margin: 5px 0;
  width: 25vw;
`;
const Button = styled.button`
  padding: 8px 5px;
  font-size: 16px;
  border-radius: 5px;
  outline: none;
  border: none;
  margin: 5px 0;
  cursor: pointer;
  color: white;
  background-color: #4f4ff3;
  width: 26vw;
`;
const CreateTasks = (props: {
  addTask: (data: { id?: number; task?: string }) => void;
}) => {
  const [task, setTask] = React.useState<string>("");
  const handleTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };
  const AddTask = () => {
    if (task.length > 0) {
      var id = Math.floor(Math.random() * 9000 + 100000);
      props.addTask({ id, task: task });
      setTask("");
      history.push("/list-tasks");
    } else {
      alert("Please add some text to the task");
    }
  };
  return (
    <Container>
      <Heading>Create Task</Heading>
      <Input value={task} onChange={handleTask} placeholder="Add a task" />
      <Button onClick={AddTask}>Add</Button>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </Container>
  );
};

export default CreateTasks;
