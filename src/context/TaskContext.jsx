import { createContext, useState } from "react";

export const TaskContext = createContext({});

export function TaskContentDataProvider({ children }) {
  const { Provider } = TaskContext;
  const [selectedLevel, setSelectedLevel] = useState()
  const [selectedTask, setSelectedTask] = useState()
  const [taskData, setTaskData] = useState()

  

  const value = {
    taskData, setTaskData,
    selectedLevel, setSelectedLevel,
    selectedTask, setSelectedTask
  };

  return <Provider value={value}>{children}</Provider>;
}