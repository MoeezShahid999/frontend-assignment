import React from "react";
import { Route, Redirect, Switch, Router } from "react-router-dom";
import AllTasks from "../AllTasks/allTasks";
import CreateTasks from "../CreateTasks/createTasks";
import BulkDelete from "../BulkDelete/bulkDelete";

const MainComponent = () => {
  const [tasks, setTasks] = React.useState<{ id?: number; task?: string }[]>(
    []
  );
  const addTask = (data: { id?: number; task?: string }) => {
    tasks.push({ id: data.id, task: data.task });
    localStorage.setItem("tasksData", JSON.stringify(tasks));
    setTasks(tasks);
  };
  const deleteTasks = (ids: (number | undefined)[]) => {
    const newTasks = tasks.filter((el) => {
      return ids.every((id) => {
        if (el.id !== id) {
          return el;
        }
      });
    });
    localStorage.setItem("tasksData", JSON.stringify(newTasks));
    setTasks(newTasks);
  };
  React.useEffect(() => {
    const myTasks = localStorage.getItem("tasksData");
    console.log(myTasks ? JSON.parse(myTasks.toString()) : null);
    if (myTasks) {
      setTasks(JSON.parse(myTasks));
    }
  }, [setTasks]);
  return (
    <Switch>
      <Route
        exact
        path="/list-tasks"
        component={() => <AllTasks tasks={tasks} />}
      />
      <Route
        exact
        path="/create-task"
        component={() => <CreateTasks addTask={addTask} />}
      />
      <Route
        exact
        path="/bulk-delete"
        component={() => <BulkDelete deleteTasks={deleteTasks} tasks={tasks} />}
      />
      <Route exact path="/" component={() => <Redirect to="/list-tasks" />} />
    </Switch>
  );
};

export default MainComponent;
