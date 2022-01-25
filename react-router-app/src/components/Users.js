import { Outlet } from "react-router-dom";

export const Users = () => {
  return (
    <div>
      <h2>User page</h2>
      <Outlet/>
    </div>
  );
};
