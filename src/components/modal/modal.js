import React from 'react'
import styled from 'styled-components'
import image from './warning.svg'
import arrow from './arrow.svg'
import { useDispatch } from 'react-redux'
import { closeModal } from '../../redux/modal-delete/modal-delete-action'
import login from '../../redux/userState/login-action'
import { getCookie } from '../App'
import { Link } from 'react-router-dom'
export default ({ slug }) => {
  const token = getCookie('token')
  const dispatch = useDispatch()
  const noButtonHandler = () => {
    dispatch(closeModal())
  }
  const yesButtonHandler = () => {
    dispatch(closeModal())
    dispatch(login('', 'articles', `${slug}`, token, 'DELETE'))
  }
  return (
    <>
      <Container>
        <Icon />
        <WarningText>Are you sure to delete this article?</WarningText>
        <ContainterForButtons>
          <StyledButton
            type='button'
            className='btn btn-outline-secondary'
            style={{ marginRight: '0.5rem' }}
            onClick={noButtonHandler}
          >
            No
          </StyledButton>
          <StyledButton
            type='button'
            style={{ padding: '0' }}
            className='btn btn-outline-primary'
            onClick={yesButtonHandler}
          >
            <StyledLink to='/'> Yes</StyledLink>
          </StyledButton>
        </ContainterForButtons>
      </Container>
    </>
  )
}

const Container = styled.div`
  position: absolute;
  background: #ffffff;
  display: grid;
  grid-template-columns: 0.1fr 1fr;
  grid-template-rows: 44px 34px;
  column-gap: 0.5rem;
  row-gap: 0.75rem;
  border-radius: 0.25rem;
  padding: 0.75rem 1rem;
  width: 15rem;
  left: 7.8rem;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);

  &::before {
    content: '';
    width: 2.5rem;
    height: 2.5rem;
    background: url(${arrow});
    background-repeat: no-repeat;
    position: absolute;
    left: -5px;
  }
`
const WarningText = styled.p`
  font-family: 'Roboto';
  font-size: 0.875rem;
  color: #595959;
  grid-column: 2/3;
`
const StyledButton = styled.button`
  font-size: 0.875rem;
  font-family: 'Roboto';
`
const ContainterForButtons = styled.div`
  grid-row: 2/3;
  grid-column: 2/3;
  display: flex;
  justify-content: flex-end;
`
const Icon = styled.span`
  background: url(${image});
  background-repeat: no-repeat;
  position: relative;
  top: 3px;
`
const StyledLink = styled(Link)`
  display: block;
  padding: 0.5rem;
  &:hover {
    text-decoration: none;
  }
`
