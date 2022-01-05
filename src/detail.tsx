import React from "react";
import { Link, useParams } from "react-router-dom";
import { MyContext } from "./core/myContext";

export const DetailPage: React.FC = () => {
  const { id } = useParams();
  const { listPage } = React.useContext(MyContext);

  return (
    <>
      <h2>Hello from Detail page</h2>
      <h3>User Id: {id}</h3>
      <Link to={`/list/${listPage}`}>Back to list page</Link>
    </>
  );
};
