import React from "react";
import { Link, generatePath } from "react-router-dom";
import { getMembers } from "./api";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [inputValue, setInputValue] = React.useState("lemoncode");

  React.useEffect(() => {
    getMembers(inputValue).then((data) => {
      setMembers(data);
    });
  }, []);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    getMembers(inputValue).then((data) => {
      setMembers(data);
    });
  };

  return (
    <>
      <h2>Hello from List page</h2>
      <input onChange={handleChange} value={inputValue}></input>
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
            <tr key={member.id}>
              <td>
                <img src={member.avatar_url} style={{ width: "5rem" }} />
              </td>
              <td>
                <span>{member.id}</span>
              </td>
              <td>
                <Link to={generatePath("/detail/:id", { id: member.login })}>
                  {member.login}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
