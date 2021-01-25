import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import UserButton from '../user-button/user-button'
import { logOut } from '../../redux/userState/login-action'
import {setCookie} from '../sign-in/sign-in'

const WrapperForButtons = styled.div``

const RegistrationMemo = React.memo(() =>{
  const { isLogin } = useSelector((store) => store.userState)
  const dispatch = useDispatch()
  const onLogoutClickHandler = () => {
    dispatch(logOut())
    deleteCookie('email')
    deleteCookie('password')
    deleteCookie('token')
  }
 
  return (
    <>
      <RegistrationContainer>
        <NameOfPage>Realworld Blog</NameOfPage>
        <WrapperForButtons>

         
          {isLogin && (
            <CreatingArticle to='/new-article' style={{ color: '#52c41a' }}>
              Create Article
            </CreatingArticle>
          )}
           {isLogin && <UserButton />}
          {isLogin && (
            <LogoutButton
              onClick={onLogoutClickHandler}
              style={{ color: 'rgba(0, 0, 0, 0.75)' }}
              to='/'
            >
              Log out
            </LogoutButton>
          )}
          {!isLogin && <SignIn to='/sign-in'>Sign In</SignIn>}
          {!isLogin && <SignUp to='/sign-up'>Sign Up</SignUp>}
        </WrapperForButtons>
      </RegistrationContainer>
    </>
  )
})

export default RegistrationMemo
const RegistrationContainer = styled.header`
  background-color: #fff;
  padding: 9px 22px 15px 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const NameOfPage = styled.span`
  font-size: 18px;
`
const SignIn = styled(Link)`
  background: #ffffff;
  border: 1px solid white;
  font-size: 18px;
  color: rgba(0, 0, 0, 85);
  padding: 6px 18px 10px 18px;
  box-sizing: border-box;
  &:hover {
    border: 1px solid rgba(0, 0, 0, 85);
    border-radius: 5px;
    color: rgba(0, 0, 0, 0.75);
  }
`
const SignUp = styled(Link)`
  background: none;
  color: #52c41a;
  border: 1px solid white;
  font-size: 18px;
  box-sizing: border-box;
  padding: 6px 18px 10px 18px;
  &:hover {
    border: 1px solid #52c41a;
    border-radius: 5px;
    color: #52c41a;
  }
`
const CreatingArticle = styled(Link)`
  border: 1px solid #52c41a;
  box-sizing: border-box;
  border-radius: 5px;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-right: 10px;
  padding-left: 10px;
  color: #52c41a;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
  margin-right: 26px;
`
const LogoutButton = styled(Link)`
  background: #ffffff;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
  color: rgba(0, 0, 0, 0.75);
  border: 1px solid rgba(0, 0, 0, 0.75);
  box-sizing: border-box;
  border-radius: 5px;
  padding-left: 18px;
  padding-top: 6px;
  padding-bottom: 10px;
  padding-right: 18px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 0.5;
  }
`
function deleteCookie(name) {
  setCookie(name, "", {
    'max-age': -1
  })
}