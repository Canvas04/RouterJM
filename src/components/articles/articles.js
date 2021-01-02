import { Pagination } from 'antd'
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { loadArticles } from '../../redux/req-articles/action'
import Registration from '../registration/registration'
import './articles.scss'
import ArticlesList from '../artical-list/articles-list'
import ErrorBoundary from '../error-boundary/error-boundary'
export default () => {
  const isFetching = useSelector((store) => store.loadArticles.isFetching)
  const isError = useSelector(store => store.loadArticles.isError)
  const classes = useStyles()
  const dispatch = useDispatch()
  const onChangeHandler = (currentPage) => {
    let queryForRequest = 0
    for (let i = 0; i < currentPage; i++) {
      queryForRequest += 5
    }

    dispatch(loadArticles(queryForRequest))
  }
  return (
    <>
      <Registration />
      <WrapperForAlignment>
        <ErrorBoundary type='common' isErrorDurationLoading={isError}>
            {isFetching ? (
          <div className={classes.root}>
            <LinearProgress color="secondary" />
          </div>
        ) : (
          <ArticlesList />
        )}

        <PaginationWrapper isFetching={isFetching}>
          <Pagination size={'small'} total={50} onChange={onChangeHandler} />
        </PaginationWrapper>
        </ErrorBoundary>
      
      </WrapperForAlignment>
    </>
  )
}
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}))
const PaginationWrapper = styled.div`
  display: ${(props) => (props.isFetching ? 'none' : 'block')};
`
const WrapperForAlignment = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`
