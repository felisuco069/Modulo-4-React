import React from "react";
import { Context } from "../models/model";

export const MyContext = React.createContext<Context>({
  inputValue: "",
  setInputValue: (value) => {},
  members: [],
  setMembers: (value) => {},
  pages: 0,
  setPages: (value) => {},
});

export const MyContextProvider: React.FC = ({ children }) => {
  const [inputValue, setInputValue] = React.useState("lemoncode");
  const [members, setMembers] = React.useState([]);
  const [pages, setPages] = React.useState(1);

  return (
    <MyContext.Provider
      value={{
        inputValue,
        setInputValue,
        members,
        setMembers,
        pages,
        setPages,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
