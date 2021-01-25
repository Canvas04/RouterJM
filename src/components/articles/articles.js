import { Pagination } from 'antd'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { loadArticles } from '../../redux/req-articles/action'
import Registration from '../registration/registration'
import './articles.scss'
import ArticlesList from '../artical-list/articles-list'
import ErrorBoundary from '../error-boundary/error-boundary'
import { getCookie } from '../App'
export default () => {
  const isFetching = useSelector((store) => store.loadArticles.isFetching)
  const isError = useSelector((store) => store.loadArticles.isError)
  const dispatch = useDispatch()
  const classes = useStyles()
  const token = getCookie('token')

  const onChangeHandler = (currentPage) => {
    let queryForRequest = 10
    for (let i = 0; i < currentPage; i++) {
      queryForRequest += 10
    }
    dispatch(loadArticles(queryForRequest,token))
  }

  return (
    <>
      <Registration />
      <WrapperForAlignment>
        <ErrorBoundary type='common' isErrorDurationLoading={isError}>
          {isFetching ? (
            <div className={classes.root}>
              <LinearProgress color='secondary' />
            </div>
          ) : (
            <ArticlesList />
          )}

          <PaginationWrapper isFetching={isFetching}>
            <Pagination size={'small'} total={200} onChange={onChangeHandler} />
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
  margin-bottom:15px;
`
const WrapperForAlignment = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  overflow: hidden;
`
