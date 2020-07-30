import React from 'react';
import { useForm } from 'react-hook-form';
import { StyledForm } from './Form.styled';

const Form = () => {
	const { register, handleSubmit, errors } = useForm();

	function onSubmit(data) {
		console.log(data)
	}

	return (
		<div style={{}}>
			<h1>Business Contact Form</h1>
			<div style={{ marginBottom: '1em' }}>
				{
					Object.entries(errors).map(([key, error]) => (
						<small key={key} style={{ color: 'red' }}>{error.message}</small>
					))
				}
			</div>
			<StyledForm onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="firstName">First Name:</label>
				<input ref={register({ required: 'First name is required' })} type="text" placeholder="First Name" name="firstName" id='firstName' />
				<label htmlFor="lastName">Last Name:</label>
				<input ref={register({ required: 'Last name is required' })} type="text" placeholder="last Name" name="lastName" id='lastName' />
				<label htmlFor='email'>Email</label>
				<input ref={register({ required: 'Email is required' })} type="email" placeholder="Email" name="email" id='email' />
				<label htmlFor='phone'>Phone</label>
				<input ref={register({ required: 'Phone number is required' })} type="phone" placeholder="Phone" name="phone" id='phone' />
				<label htmlFor='website'>Website URL</label>
				<input ref={register({ required: 'Website url is required' })} type="text" placeholder="www.example.com" name="website" id='website' />
				<button type="submit">Submit</button>
				{/* GiveHubbers Contact Form */}
				{/* <input type="text" placeholder="URL" name="portfolio" value={portfolio} onChange={e => setPortfolio(e.target.value)} required></input>
				<input type="text" placeholder="GitHub" name="github" value={github} onChange={e => setGithub(e.target.value)} required></input>
				<select className="select-selected" placeholder="Profession" name="profession" value={profession} onChange={e => setProfession(e.target.value)} required>
					<option value="UX Designer">UX Designer</option>
					<option defaultValue="profession"> Profession</option>
					<option value="Front End Developer">Front End Developer</option>
					<option value="Back End Developer">Back End Developer</option>
					<option value="Unicorn">Unicorn</option>
				</select> */}
			</StyledForm>
		</div>
	)
}
export default Form;