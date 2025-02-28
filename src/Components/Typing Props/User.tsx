// type UserShape = {
//   name: string;
//   age: number;
//   isStudent: boolean;
// };

import { FC, ReactNode } from "react";

interface UserShape {
  children: ReactNode;
  name: string;
  age: number;
  isStudent: boolean;
}

const User: FC<UserShape> = ({ children, name, age, isStudent }: UserShape) => {
  return (
    <div>
      {children}
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <h2>Is Student: {isStudent ? "true" : "false"} </h2>
    </div>
  );
};

export default User;
