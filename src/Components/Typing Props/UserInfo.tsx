import { Info } from "./type";

const UserInfo: React.FC<Info> = ({ id, name, email }: Info) => {
  return (
    <div>
      <h2>id: {id}</h2>
      <h2>Name: {name}</h2>
      <h2>email: {email}</h2>
    </div>
  );
};

export default UserInfo;
