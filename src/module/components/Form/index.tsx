import React from 'react';
import { StyledForm } from './Form.styled';

const Form = () => {
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [name, setName] = React.useState("");
    const [currentWebsite, setCurrentWebsite] = React.useState("");
    const [business, setBusiness] = React.useState("");
    const [requirements, setRequriements] = React.useState("");
    const [portfolio, setPortfolio] = React.useState("");
    const [github, setGithub] = React.useState("");
    const [profession, setProfession] = React.useState("")

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        console.log(`
      Email: ${email}
      Name: ${name}
      Phone: ${phone}
      Business: ${business}
      Requirements: ${requirements}
      CurrentWebsite: ${currentWebsite}
      Github: ${github}
      Portfolio: ${portfolio}
    `);
    }
    return (
        <>
            <StyledForm onSubmit={handleSubmit}>
                <div>

                    <h1>Business Contact Form</h1>
                    <label>Name:
            <input type="text" placeholder="Name" name="name" value={name} onChange={e => setName(e.target.value)} required></input></label>
                    <label>Email</label>
                    <input type="email" placeholder="Email" name="email" value={email} onChange={e => setEmail(e.target.value)} required></input>
                    <label>Phone</label>
                    <input type="phone" placeholder="Phone" name="phone" value={phone} onChange={e => setPhone(e.target.value)} required></input>
                    <label>Website URL
            <input type="text" placeholder="www.website.com" name="website" value={currentWebsite} onChange={e => setCurrentWebsite(e.target.value)} required></input></label>
                    <button type="submit">Send</button>
                    {/* GiveHubbers Contact Form */}
                    <input type="text" placeholder="URL" name="portfolio" value={portfolio} onChange={e => setPortfolio(e.target.value)} required></input>
                    <input type="text" placeholder="GitHub" name="github" value={github} onChange={e => setGithub(e.target.value)} required></input>
                    <select className="select-selected" placeholder="Profession" name="profession" value={profession} onChange={e => setProfession(e.target.value)} required>
                        <option value="UX Designer">UX Designer</option>
                        <option defaultValue="profession"> Profession</option>
                        <option value="Front End Developer">Front End Developer</option>
                        <option value="Back End Developer">Back End Developer</option>
                        <option value="Unicorn">Unicorn</option>
                    </select>

                </div>
            </StyledForm>
        </>
    )
}
export default Form;