import React from "react";
import { Context } from "../models/model";

export const MyContext = React.createContext<Context>({
  inputValue: "",
  setInputValue: (value) => {},
  members: [],
  setMembers: (value) => {},
});

export const MyContextProvider: React.FC = ({ children }) => {
  const [inputValue, setInputValue] = React.useState("lemoncode");
  const [members, setMembers] = React.useState([]);
  return (
    <MyContext.Provider
      value={{ inputValue, setInputValue, members, setMembers }}
    >
      {children}
    </MyContext.Provider>
  );
};
