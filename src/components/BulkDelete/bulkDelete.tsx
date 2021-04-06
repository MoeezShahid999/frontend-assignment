import React, { ChangeEvent } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
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
const CheckBoxContainer = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
`;
const CheckBox = styled.input`
margin 0 10px;`;
const Label = styled.div`
margin 0 10px;`;
const Heading = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
`;
const Button = styled.button`
  padding: 8px 5px;
  font-size: 16px;
  border-radius: 5px;
  outline: none;
  border: none;
  margin: 20px 0;
  cursor: pointer;
  color: white;
  background-color: #ea4a4a;
  width: 26vw;
  cursor: pointer;
`;
const CreateTasks = (props: {
  tasks: { id?: number; task?: string }[];
  deleteTasks: (ids: (number | undefined)[]) => void;
}) => {
  const [checkVal, setCheckVal] = React.useState<(number | undefined)[]>([]);
  const handleCheckbox = (id?: number) => {
    const isPresent = checkVal.some((el) => el === id);
    if (isPresent) {
      checkVal.forEach((el, ind) => {
        if (el === id) {
          const newCheckVal = [...checkVal];
          newCheckVal.splice(ind, 1);
          setCheckVal(newCheckVal);
        }
      });
    } else {
      checkVal.push(id);
      setCheckVal(checkVal);
    }
  };
  React.useEffect(() => {
    console.log(checkVal);
  }, [checkVal]);

  const deleteTasks = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (checkVal.length > 0) {
      props.deleteTasks(checkVal);
    }else{
      alert("Please select some task first")
    }
  };
  return (
    <Container>
      <Heading>Delete Tasks</Heading>
      {props.tasks.length > 0 ? (
        props.tasks.map((el) => {
          return (
            <CheckBoxContainer key={el.id}>
              <CheckBox
                type="checkbox"
                value={el.id}
                name="tasks"
                onChange={() => handleCheckbox(el.id)}
              />
              <Label>{el.task}</Label>
            </CheckBoxContainer>
          );
        })
      ) : (
        <div>No task available</div>
      )}
      <Button onClick={deleteTasks}>Delete</Button>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </Container>
  );
};

export default CreateTasks;
