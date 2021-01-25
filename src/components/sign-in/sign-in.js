import React, { useEffect, useState } from 'react'
import Registration from '../registration/registration'
import { useForm } from 'react-hook-form'
import _ from 'lodash/fp'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import login from '../../redux/userState/login-action'
import {
	FormComponent,
	FormWrapper,
	Header,
	Label,
	WarningLabel,
	NameField,
	Input,
	Button,
	ContainerForLink,
	LabelForLink,
	StyledLink,
} from '../registration-page/registration-page'
const SignIn = ({ history }) => {
	const { register, handleSubmit, errors } = useForm()
	const dispatch = useDispatch()
	const [flagForWarning, setFlagForWarning] = useState(false)
	const isLogin = useSelector((store) => store.userState.isLogin)
	const onSubmit = (data) => {
		const { email, newPassword: password } = data
		const objForRegistration = {
			user: {
				email,
				password,
			},
		}

		dispatch(login(JSON.stringify(objForRegistration), 'users', 'login'))

		setCookie('email', email)
		setCookie('password', password)

		fetch('https://conduit.productionready.io/api/users/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			},
			body: JSON.stringify(objForRegistration),
		}).then((res) => {
			if (res.status !== '200') {
				setFlagForWarning(true)
			}
		})
	}

	useEffect(() => {
		if (isLogin) {
			history.push('/')
		}
	}, [history, isLogin])
	return (
		<>
			<Registration />
			<FormWrapper>
				<FormComponent onSubmit={handleSubmit(onSubmit)}>
					<Header>Sign In</Header>
					<Label>
						<NameField>Email adress</NameField>
						<Input
							name="email"
							placeholder="Email adress"
							ref={register({
								required: true,
								pattern: /.+@.+\..+/i,
							})}
							className="form-control form-control-sm"
							autoFocus
						/>
					</Label>
					{_.get('email.type', errors) === 'pattern' && (
						<WarningLabel>Email is not correct</WarningLabel>
					)}
					{_.get('email.type', errors) === 'required' && (
						<WarningLabel>This field is required</WarningLabel>
					)}
					<Label>
						<NameField>Password</NameField>
						<Input
							name="newPassword"
							placeholder="Password"
							ref={register({
								required: true,
								minLength: 8,
								pattern: /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*/,
							})}
							error={_.get('newPassword.type', errors) === 'minLength'}
							className="form-control form-control-sm"
						/>
					</Label>

					{_.get('newPassword.type', errors) === 'required' && (
						<WarningLabel>This field is required</WarningLabel>
					)}

					{flagForWarning && (
						<WarningLabel>Email or password are invalid</WarningLabel>
					)}
					<Button style={{ marginTop: '9px' }} type="submit">
						Login
					</Button>
					<ContainerForLink>
						<LabelForLink>Don’t have an account? </LabelForLink>
						<StyledLink to="/sign-up">Sign Up</StyledLink>
					</ContainerForLink>
				</FormComponent>
			</FormWrapper>
		</>
	)
}

export default withRouter(SignIn)

export function setCookie(name, value, options = {}) {
	options = {
		path: '/',
		...options,
	}

	if (options.expires instanceof Date) {
		options.expires = options.expires.toUNCString()
	}

	let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value)

	for (let optionKey in options) {
		updatedCookie += '; ' + optionKey
		let optionValue = options[optionKey]
		if (optionValue !== true) {
			updatedCookie += '=' + optionValue
		}
	}

	document.cookie = updatedCookie
}
