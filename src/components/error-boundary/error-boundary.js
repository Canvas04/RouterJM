import React, { Component } from 'react'
import profile from '../artical-list/avatar.svg'
import { Alert } from 'antd'
import styled  from 'styled-components'
class ErrorBoundary extends Component {
  state = {
    hasError: false,
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    const { type, isErrorDurationLoading } = this.props
    const { hasError } = this.state
    if (type === 'img') {
      if (hasError) {
        return <img src={profile} alt='profile' />
      }
      return this.props.children
    }
    if (type === 'common') {
      if (isErrorDurationLoading) {
        return (
          <>
            <WrapperForError>
              <Alert message={'Error'} 
              type={'error'}
              description={'The server isn\'t working temporarily.Please,try to reload the page!'}
              />
            </WrapperForError>
          </>
        )
      }
      return this.props.children
    }
  }
}
export default ErrorBoundary

const WrapperForError = styled.div`
  display: flex;
  margin-top:20px;
  justify-content: center;
`
