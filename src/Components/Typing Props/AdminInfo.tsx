import { AdminInfoList } from "./type";

const AdminInfo = ({ name, id, email, isAdmin, department }: AdminInfoList) => {
  return (
    <div>
      <h2>Id: {id}</h2>
      <h2>Name: {name}</h2>
      <h2>Email: {email}</h2>
      <h2>Is Admin: {isAdmin}</h2>
      <h2>Department: {department}</h2>
    </div>
  );
};

export default AdminInfo;
