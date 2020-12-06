import React from 'react'
import styled from 'styled-components'

const RegistrationContainer = styled.header`
  background-color: #fff;
  padding: 22px 9px 22px 15px;
  display: flex;
  justify-content: space-between;
`
const NameOfPage = styled.span`
  font-size: 18px;
  position: relative;
  top: 6px;
`
const SignIn = styled.button`
  background: none;
  border: 1px solid white;
  font-size: 18px;
  color: rgba(0, 0, 0, 85);
  padding: 6px 18px 10px 18px;
  box-sizing: border-box;
  &:hover {
    border: 1px solid rgba(0, 0, 0, 85);
    border-radius: 5px;
  }
`
const SignUp = styled.button`
  background: none;
  color: #52c41a;
  border: 1px solid white;
  font-size: 18px;
  box-sizing: border-box;
  padding: 6px 18px 10px 18px;
  &:hover {
    border: 1px solid #52c41a;
    border-radius: 5px;
  }
`
const WrapperForButtons = styled.div``
export default function Registration() {
  return (
    <>
      <RegistrationContainer>
        <NameOfPage>Realworld Blog</NameOfPage>
        <WrapperForButtons>
          <SignIn>Sign In</SignIn>
          <SignUp>Sign Up</SignUp>
        </WrapperForButtons>
      </RegistrationContainer>
    </>
  )
}
