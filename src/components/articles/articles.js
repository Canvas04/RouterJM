import { Pagination } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { loadArticles } from '../../redux/req-articles/action'
import Registration from '../registration/registration'
import './articles.scss'

const WrapperForPagination = styled.div`
  display: flex;
  justify-content: center;
`

export default () => {
  const dispatch = useDispatch()
  const onChangeHandler = () => {
    dispatch(loadArticles())
  }

  useEffect(() => {
    dispatch(loadArticles())
  })

  return (
    <>
      <Registration />
      <WrapperForPagination>
        <Pagination size={'small'} total={50} onChange={onChangeHandler} />
      </WrapperForPagination>
    </>
  )
}
