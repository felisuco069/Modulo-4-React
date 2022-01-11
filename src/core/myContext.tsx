import React from "react";
import { Context } from "../models/member-model";

export const MyContext = React.createContext<Context>({
  inputValue: "",
  setInputValue: (value) => {},
  members: [],
  setMembers: (value) => {},
  listPage: 1,
  setListPage: (value) => {},
});

export const MyContextProvider: React.FC = ({ children }) => {
  const [inputValue, setInputValue] = React.useState("lemoncode");
  const [members, setMembers] = React.useState([]);
  const [listPage, setListPage] = React.useState(1);
  return (
    <MyContext.Provider
      value={{
        inputValue,
        setInputValue,
        members,
        setMembers,
        listPage,
        setListPage,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
