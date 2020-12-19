import { Pagination } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { loadArticles } from '../../redux/req-articles/action'
import Registration from '../registration/registration'
import './articles.scss'
import ArticlesList from '../artical-list/articles-list'

const WrapperForAlignment = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
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

      <WrapperForAlignment>
        <ArticlesList />
        <Pagination size={'small'} total={50} onChange={onChangeHandler} />
      </WrapperForAlignment>
    </>
  )
}
