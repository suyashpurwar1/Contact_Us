import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { useState } from "react";
const ContactForm = () => {
  const [name,setName]=useState("Suyash Purwar(default)");
  const [email, setEmail] = useState("suyashpurwar@gmail.com(default)");
  const [text, setText] = useState("This is just practise projecct(default)");
  

  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
    console.log("Name :", name);
    console.log("Email :", email);
    console.log("Text :", text);
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
        <Button
          text="VIA EMAIL FORM"
          icon={<MdOutlineMailOutline fontSize="24px" />}
          isSec={true}
        />
        <form onSubmit={onSubmit}>
          <div className={styles.form_container}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_container}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_container}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="7" />
          </div>
          <div className={styles.sub_btn}>
            <Button text="SUBMIT" />
          </div>
          <div>
            <p>
              <strong>Name:</strong> {name}
            </p>
            <p>
              <strong>Email:</strong> {email}
            </p>
            <p>
              <strong>Text:</strong> {text}
            </p>
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/public/images/Service 24_7-pana 1.svg" alt="contact image" />
      </div>
    </section>
  );
};
export default ContactForm;
