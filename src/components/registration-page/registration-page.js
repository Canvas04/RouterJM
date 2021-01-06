import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Registration from '../registration/registration'

export default () => {
  const ref = useRef()

  return (
    <>
      <Registration />
      <FormWrapper>
        <FormComponent>
          <Header>Create new account</Header>
          <Label label="username">
            <NameField>Username</NameField>
            <Input type="text" placeholder="Username" autoFocus/>
          </Label>
          <Label>
            <NameField>Email adress</NameField>
            <Input type="text" placeholder="Email adress" />
          </Label>
          <Label>
            <NameField>Password</NameField>
            <Input type="text" placeholder="Password" />
          </Label>
          <Label>
            <NameField>Repeat Password</NameField>
            <Input type="text" placeholder="Repeat Password" />
          </Label>
          <Divider />
          <AgreementContainer>
            <Checkbox id="check" type="checkbox" />
            <AgreementLabel htmlFor="check">
              I agree to the processing of my personal information
            </AgreementLabel>
          </AgreementContainer>
          <Button type="submit">Create</Button>
          <ContainerForLink>
            <LabelForLink>Already have an account?</LabelForLink>
            <StyledLink to="/sign-in">Sign In</StyledLink>
          </ContainerForLink>
        </FormComponent>
      </FormWrapper>
    </>
  )
}
const FormComponent = styled.form`
  max-width: 384px;
  max-height: 599px;
  display: flex;
  flex-direction: column;
  padding: 36.5px 48px;
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  box-shadow: 0px 22px 106px rgba(0, 0, 0, 0.07),
    0px 9.19107px 44.2843px rgba(0, 0, 0, 0.0503198),
    0px 4.91399px 23.6765px rgba(0, 0, 0, 0.0417275),
    0px 2.75474px 13.2728px rgba(0, 0, 0, 0.035),
    0px 1.46302px 7.04911px rgba(0, 0, 0, 0.0282725),
    0px 0.608796px 2.93329px rgba(0, 0, 0, 0.0196802);
  border-radius: 6px;
  margin-top: 59px;
  margin-bottom: 239px;
`
const Header = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: #262626;
  display: flex;
  justify-content: center;
  margin-bottom: 20px; ;
`
const Label = styled.label`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`
const NameField = styled.p`
  margin-bottom: 2px;
`
const Input = styled.input`
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  border-radius: 4px;
  padding-left: 12px;
  padding-top: 8px;
  padding-right: 12px;
  padding-bottom: 8px;
`
const Divider = styled.hr`
  height: 1px;
  color: #e8e8e8;
  width: 100%;
  margin-top: 9px;
  margin-bottom: 8px;
`
const AgreementContainer = styled.div`
  display: flex;
  margin-bottom: 21px;
`
const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  position: relative;
  top: 3px;
  cursor: pointer;
`
const AgreementLabel = styled.label`
  position: relative;
  left: 8px;
  margin: 0;
`
const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
`
const Button = styled.button`
  background: #1890ff;
  border-radius: 4px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  padding-top: 8px;
  padding-bottom: 8px;

  outline: none;
  border: none;
  &:focus {
    outline: none;
  }
  margin-bottom: 8px;

  &:hover {
    background-color: rgba(24, 144, 255, 0.5);
  }
  cursor: pointer;
`
const ContainerForLink = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  display: flex;
  justify-content: center;
`
const StyledLink = styled(Link)`
  color: #1890ff;
  margin-left: 3px;
`
const LabelForLink = styled.span`
  color: #8c8c8c;
`
