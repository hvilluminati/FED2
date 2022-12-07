import { useState, useEffect } from 'react';
import { axiosCreateModel } from '../axioscalls';
import { useNavigate } from 'react-router-dom';

export default function CreateJobs() {
	const [firstName, setFirstName] = useState();
	const [lastName, setLastName] = useState();
	const [email, setEmail] = useState();
	const [phone, setPhone] = useState();
	const [address1, setAddress1] = useState();
	const [address2, setAddress2] = useState();
	const [zip, setZip] = useState();
	const [city, setCity] = useState();
	const [country, setCountry] = useState();
	const [birthDate, setBirthdate] = useState();
	const [nationality, setNationality] = useState();
	const [height, setHeight] = useState();
	const [shoeSize, setShoeSize] = useState();
	const [hairColor, setHairColor] = useState();
	const [eyeColor, setEyeColor] = useState();
	const [comments, setComments] = useState();
	const [password, setPassword] = useState();

	const nav = useNavigate();

	useEffect(() => {
		if (localStorage.getItem('type') == 'none') nav('/');
		else if (localStorage.getItem('type') == 'Model') nav('/welcome');
	}, []);

	function CreateModel() {
		axiosCreateModel(
			firstName,
			lastName,
			email,
			phone,
			address1,
			address2,
			zip,
			city,
			country,
			birthDate,
			nationality,
			height,
			shoeSize,
			hairColor,
			eyeColor,
			comments,
			password
		).then((resp) => {
			console.log(resp);
		});
	}

	return (
		<div id='createModelPage'>
			<h1>Create a new Model</h1>
			<div id='hejsa'>
				<text>First Name</text>
				<textarea
					id='_firstName'
					className='signInText'
					rows='1'
					onChange={(event) => setFirstName(event.target.value)}
				/>
				<text>Last Name</text>
				<textarea
					id='_lastName'
					className='signInText'
					rows='1'
					onChange={(event) => setLastName(event.target.value)}
				/>
				<text>Email</text>
				<textarea
					id='_email'
					className='signInText'
					rows='1'
					onChange={(event) => setEmail(event.target.value)}
				/>
				<text>Address line 1</text>
				<textarea
					id='_address1'
					className='signInText'
					rows='1'
					onChange={(event) => setAddress1(event.target.value)}
				/>
				<text>Address line 2</text>
				<textarea
					id='_address2'
					className='signInText'
					rows='1'
					onChange={(event) => setAddress2(event.target.value)}
				/>
				<text>zip</text>
				<textarea
					id='_zip'
					className='signInText'
					rows='1'
					onChange={(event) => setZip(event.target.value)}
				/>
				<text>City</text>
				<textarea
					id='_city'
					className='signInText'
					rows='1'
					onChange={(event) => setCity(event.target.value)}
				/>

				<text>country</text>
				<textarea
					id='_country'
					className='signInText'
					rows='1'
					onChange={(event) => setCountry(event.target.value)}
				/>

				<text>birthDate</text>
				<textarea
					id='_birthDate'
					className='signInText'
					rows='1'
					onChange={(event) => setBirthdate(event.target.value)}
				/>
				<text>nationality</text>
				<textarea
					id='_nationality'
					className='signInText'
					rows='1'
					onChange={(event) => setNationality(event.target.value)}
				/>
				<text>Height</text>
				<textarea
					id='_height'
					className='signInText'
					rows='1'
					onChange={(event) => setHeight(event.target.value)}
				/>
				<text>Shoesize</text>
				<textarea
					id='_Shoesize'
					className='signInText'
					rows='1'
					onChange={(event) => setShoeSize(event.target.value)}
				/>
				<text>Haircolor</text>
				<textarea
					id='_hairColor'
					className='signInText'
					rows='1'
					onChange={(event) => setHairColor(event.target.value)}
				/>

				<text>Eye Color</text>
				<textarea
					id='_eyeColor'
					className='signInText'
					rows='1'
					onChange={(event) => setEyeColor(event.target.value)}
				/>
				<text>Comments</text>
				<textarea
					id='_comments'
					className='signInText'
					rows='1'
					onChange={(event) => setComments(event.target.value)}
				/>
				<text>Password</text>
				<textarea
					id='_password'
					className='signInText'
					rows='1'
					onChange={(event) => setPassword(event.target.value)}
				/>

				<button id='create' onClick={CreateModel}>
					Create the model
				</button>
			</div>
		</div>
	);
}
