import React from "react";
import { generatePath, Link } from "react-router-dom";

export const GetMemberTableRow = (props) => {
  const { member } = props;
  return (
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
  );
};
