import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 20px;
`;
const CardContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Card = styled.div`
  padding: 10px;
  width: 10vw;
  min-width: 120px;
  border: 1px solid #eee;
  border-radius: 2px;
  box-shadow: 2px 2px 2px #eee;
  margin: 10px;
`;
const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Heading = styled.div`
  font-size: 24px;
  margin: 5px 0;
`;
const Button = styled.button`
  padding: 8px;
  font-size: 16px;
  outline: none;
  border: none;
  margin: 5px;
  cursor: pointer;
  color: white;
  background-color: #4f4ff3;
  cursor: pointer;
`;
const DeleteButton = styled(Button)`
  background-color: #ea4a4a;
`;

const AllTasks = (props: { tasks: { id?: number; task?: string }[] }) => {
  return (
    <Container>
      <SubContainer>
        <Heading>My Tasks</Heading>
        <div>
          <Link to="/create-task">
            <Button>Create Tasks</Button>
          </Link>
          <Link to="/bulk-delete">
            <DeleteButton>Delete Tasks</DeleteButton>
          </Link>
        </div>
      </SubContainer>
      <CardContainer>
        {props.tasks.length > 0 ? (
          props.tasks.map((el) => {
            return <Card>{el.task}</Card>;
          })
        ) : (
          <Card>No task available</Card>
        )}
      </CardContainer>
    </Container>
  );
};

export default AllTasks;
