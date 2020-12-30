import { Pagination } from 'antd'
import React, { useEffect, useState } from 'react'
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
  const [counter, setCounter] = useState(0)
  // console.log("🚀 ~ file: articles.js ~ line 18 ~ counter", counter)

  const dispatch = useDispatch()
  const onChangeHandler = (currentPage) => {
    let queryForRequest = 0
    for (let i = 0; i < currentPage; i++) {
      queryForRequest += 5
    }

    dispatch(loadArticles(queryForRequest))
  }

  useEffect(() => {
    dispatch(loadArticles())
    return () => dispatch(loadArticles())
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
