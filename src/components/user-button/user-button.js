import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import profileImg from '../artical-list/avatar.svg'
import { Link } from 'react-router-dom'
export default () => {
  const { user } = useSelector((store) => store.userState)
  const { image, username } = user
  let imgPath = profileImg
  
  if (image) {
    imgPath = image
  }

  return (
    <>
      <Button style={{color: 'rgba(0,0,0,0.75)', textDecoration: 'none' }} to="/profile">
        <AuthorLabel>{username}</AuthorLabel>
        <img src={imgPath} alt="avatar" width="46px" height="46px" />
      </Button>
    </>
  )
}
const Button = styled(Link)`
  background: none;
  border: none;

  &:hover {
    opacity: 0.5;
    color: rgba(0,0,0,0.75);
  }
  cursor: pointer;
  margin-right: 27px;
`
const AuthorLabel = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
  margin-right: 13px;
  color: rgba(0, 0, 0, 0.85);
`
