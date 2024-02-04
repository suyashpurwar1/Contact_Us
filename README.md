# Contact Us

This project is a simple contact form built using React. It allows users to enter their name, email, and a text message, and submit the information. The project utilizes various React concepts and external libraries for a smooth user experience.

### Concepts Utilized : State Management with React Hooks

- The project uses the `useState` hook to manage the state of the input fields (`name`, `email`, and `text`).
![Screenshot 2024-02-04 113440](https://github.com/suyashpurwar1/Contact_Us/assets/153590375/6c4a2c0a-b427-4b6a-97a5-3a9a618d998a)
![Screenshot 2024-02-04 113524](https://github.com/suyashpurwar1/Contact_Us/assets/153590375/0e00e677-e885-4a55-a0e0-04aec1b98d1c)
```javascript
const [name, setName] = useState("Suyash Purwar(default)");
const [email, setEmail] = useState("suyashpurwar@gmail.com(default)");
const [text, setText] = useState("This is just a practice project(default)");


