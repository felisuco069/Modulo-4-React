import React from "react";
import { getMembers } from "./api";
import { GetMemberTableRow } from "./component/members-table-row";
import { MyContext } from "./core/myContext";

export const ListPage: React.FC = () => {
  const { inputValue, setInputValue, members, setMembers } =
    React.useContext(MyContext);

  React.useEffect(() => {
    getMembers(inputValue).then((data) => {
      setMembers(data);
    });
  }, []);

  const handleClick = () => {
    getMembers(inputValue).then((data) => {
      setMembers(data);
    });
  };

  return (
    <>
      <h2>Hello from List page</h2>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      ></input>
      <button onClick={handleClick}>Search</button>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <GetMemberTableRow key={member.id} member={member} />
          ))}
        </tbody>
      </table>
    </>
  );
};
