import ReactDOM from 'react-dom';
import React, { useState, useRef } from 'react';

// Class based component
class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };

        this.usernameRef = React.createRef();
        this.passwordRef = React.createRef();
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log("Form is being sent!!!", this.usernameRef);

        if (this.state.username.length < 2) {
            console.log("Username too short, impossible!");
            this.usernameRef.current.focus();
            this.usernameRef.current.style.borderColor = "red";
        }

        if (this.state.password.length < 2) {
            console.log("password too short, be better")
            this.passwordRef.current.focus();
            this.passwordRef.current.style.borderColor = "red";
        }
    }

    handleChange = (event) => {
        // Computed property names (ES2015)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    name="username"
                    type="text"
                    value={this.state.username}
                    onChange={this.handleChange}
                    ref={this.usernameRef}
                />
                <br />
                <input
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    ref={this.passwordRef}
                />
                <hr />
                <button type="submit">Login</button>
            </form>
        );
    };
}

// Functional component
/*function LoginForm() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const usernameRef = useRef();
    const passwordRef = useRef();

    function handleSubmit(event) {
        event.preventDefault()
        console.log("Form is being sent!!!");

        if (username.length < 2) {
            console.log("Username too short, impossible!");
            usernameRef.current.focus();
            usernameRef.current.style.borderColor = "red";
        }

        if (password.length < 2) {
            console.log("password too short, be better")
            passwordRef.current.focus();
            passwordRef.current.style.borderColor = "red";
        }
    }

    function handleChange(event) {
        if (event.target.name === "username") {
            setUsername(event.target.value);
        } else {
            setPassword(event.target.value);
        }
    }

    return <form onSubmit={handleSubmit}>
        <input
            name="username"
            type="text"
            value={username}
            onChange={handleChange}
            ref={usernameRef}
        />
        <br />
        <input
            name="password"
            type="password"
            value={password}
            onChange={handleChange}
            ref={passwordRef}
        />
        <hr />
        <button type="submit">Login</button>
    </form>
}*/

ReactDOM.render(
    <div>
        <LoginForm />
    </div>,
    document.querySelector("#root")
);