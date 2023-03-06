import { createContext, useState } from "react";

export const TaskContext = createContext({});

export function TaskContentDataProvider({ children }) {
  const { Provider } = TaskContext;
  const [level, setLevel] = useState();
  const [taskNo, setTaskNo] = useState();
  const [title, setTitle] = useState();
  const [text, setText] = useState();

  const value = {
    level,
    setLevel,
    taskNo,
    setTaskNo,
    title,
    setTitle,
    text,
    setText,
  };

  return <Provider value={value}>{children}</Provider>;
}