import { Pagination } from 'antd'
import React, { useEffect } from 'react'
import 'antd/dist/antd.css'
import Registration from './registration/registration'
import Articles from './articles/articles'
import { loadArticles } from '../redux/req-articles/action'
import { useDispatch } from 'react-redux'

export default function App() {
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(loadArticles())
      return () => dispatch(loadArticles())
    })
  return (
    <>
      <Articles />
    </>
  )
}
