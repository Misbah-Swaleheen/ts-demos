import { FormEvent, useRef, useState } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const [submittedData, setSubmittedData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const message = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nameValue = name.current!.value;
    const emailValue = email.current!.value;
    const messageValue = message.current!.value;

    setSubmittedData({
      name: nameValue,
      email: emailValue,
      message: messageValue,
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Your Name" ref={name} /> <br />
        <input type="email" placeholder="Enter Your Email" ref={email} /> <br />
        <input
          type="text"
          placeholder="Enter Your Message"
          ref={message}
        />{" "}
        <br />
        <button type="submit">Submit</button>
      </form>

      <section>
        <h1>Name: {submittedData.name}</h1>
        <h1>Email: {submittedData.email}</h1>
        <h1>Message: {submittedData.message}</h1>
      </section>
    </div>
  );
};

export default ContactForm;
