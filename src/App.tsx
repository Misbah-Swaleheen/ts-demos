import AdminInfo from "./Components/Typing Props/AdminInfo";
import Button from "./Components/Typing Props/Button";
import User from "./Components/Typing Props/User";
import UserInfo from "./Components/Typing Props/UserInfo";

const App = () => {
  return (
    <div>
      {/* <User name="Alex" age={20} isStudent={true}>
        <p>Hello</p>
      </User>

      <Button
        label="Click Me"
        onClick={() => alert("Clicked")}
        disabled={false}
      />
      <Button
        label="Click Me"
        onClick={() => alert("Clicked")}
        disabled={true}
      />

      <UserInfo name="Alex" id={2} email="alex@gmail.com" /> */}

      <AdminInfo
        id={1}
        name="admin"
        email="admin@gmail.com"
        isAdmin={true}
        department="IT"
      />
    </div>
  );
};

export default App;
