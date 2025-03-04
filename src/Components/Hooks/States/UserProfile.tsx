import { useState } from "react";

interface User {
  first: string;
  last: string;
  age: number;
  email: string;
}
const UserProfile = () => {
  const [profile, setProfile] = useState<User>({
    first: "",
    last: "",
    age: 0,
    email: "",
  });

  const updateFirstName = (firstName: string) => {
    setProfile((prevProfile) => ({ ...prevProfile, first: firstName }));
  };

  const updateLastName = (lastName: string) => {
    setProfile((prevProfile) => ({ ...prevProfile, last: lastName }));
  };

  const updateAge = (age: number) => {
    setProfile((prevProfile) => ({ ...prevProfile, age: age }));
  };

  const updateEmail = (email: string) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      email: email,
    }));
  };

  return (
    <div>
      <h1>UserProfile</h1>
      <p>First Name: {profile.first}</p>
      <p>Last Name: {profile.last} </p>
      <p>Age: {profile.age} </p>
      <p>Email: {profile.email} </p>

      <h1>Set Profile Info</h1>
      <input
        type="text"
        value={profile.first}
        onChange={(e) => updateFirstName(e.target.value)}
        placeholder="Enter Your First Name"
      />
      <input
        type="text"
        value={profile.last}
        onChange={(e) => updateLastName(e.target.value)}
        placeholder="Enter Your Last Name"
      />
      <input
        type="number"
        value={profile.age}
        onChange={(e) => updateAge(parseInt(e.target.value))}
        placeholder="Enter Your Age"
      />
      <input
        type="email"
        value={profile.email}
        onChange={(e) => updateEmail(e.target.value)}
        placeholder="Enter Your Email"
      />
    </div>
  );
};

export default UserProfile;
