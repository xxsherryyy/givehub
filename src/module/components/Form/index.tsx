import React from 'react';
import { StyledForm } from './Form.styled';

const Form = () => {
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [name, setName] = React.useState("");
    const [test, setTest] = React.useState("");
    const [portfolio, setPortfolio] = React.useState("");
    const [github, setGithub] = React.useState("");
    const [profession, setProfession] = React.useState("")

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        console.log(`
      Email: ${email}
      Name: ${name}
      Phone: ${phone}
      Portfolio: ${portfolio}
      Test: ${test}
      Github: ${github}

    `);
    }
    return (
        <StyledForm onSubmit={handleSubmit}>
            <label>Name:
            <input type="text" placeholder="Name" name="name" value={name} onChange={e => setName(e.target.value)} required></input></label>
            <label>test
            <input type="select" placeholder="test" name="test" value={test} onChange={e => setTest(e.target.value)} required></input></label>

            <input type="email" placeholder="Email" name="email" value={email} onChange={e => setEmail(e.target.value)} required></input>
            <input type="phone" placeholder="Phone" name="phone" value={phone} onChange={e => setPhone(e.target.value)} required></input>
            <input type="text" placeholder="URL" name="portfolio" value={portfolio} onChange={e => setPortfolio(e.target.value)} required></input>
            <input type="text" placeholder="GitHub" name="github" value={github} onChange={e => setGithub(e.target.value)} required></input>
            <select className="select-selected" placeholder="Profession" name="profession" value={profession} onChange={e => setProfession(e.target.value)} required>
            <option value="UX Designer">UX Designer</option>
                <option defaultValue="profession"> Profession</option>
                <option value="Front End Developer">Front End Developer</option>
                <option value="Back End Developer">Back End Developer</option>
                <option value="Unicorn">Unicorn</option>
            </select>
            <button type="submit">Send</button>
        </StyledForm>
    )
}
export default Form;