// import Counter from "./Components/States/Counter";
// import UserProfile from "./Components/States/UserProfile";
// import AdminInfo from "./Components/Typing Props/AdminInfo";
// import Button from "./Components/Typing Props/Button";
// import User from "./Components/Typing Props/User";
// import UserInfo from "./Components/Typing Props/UserInfo";

import HandlingEvents from "./Components/Hooks/Ref/handlingEvents";

// import ContactForm from "./Components/Hooks/Ref/ContactForm";
// import FocusInput from "./Components/Hooks/Ref/FocusInput";
// import Form from "./Components/Hooks/Ref/Form";

// import TodoList from "./Components/Hooks/States/TodoList";

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

      {/* <AdminInfo
        id={1}
        name="admin"
        email="admin@gmail.com"
        isAdmin={true}
        department="IT"
        
      /> */}
      {/* <Counter /> */}

      {/* <UserProfile /> */}

      {/* <TodoList /> */}

      {/* <Form />
      <FocusInput /> */}

      {/* <ContactForm /> */}
      <HandlingEvents />
    </div>
  );
};

export default App;
