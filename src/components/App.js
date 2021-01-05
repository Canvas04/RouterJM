import { Pagination } from 'antd'
import React, { useEffect } from 'react'
import 'antd/dist/antd.css'
import Registration from './registration/registration'
import Articles from './articles/articles'
import { loadArticles } from '../redux/req-articles/action'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FullArticle from './full-article/full-artilce'

export default function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadArticles())
    return () => dispatch(loadArticles())
  })
  return (
    <>
      <Switch>
        <Route path="/" exact component={Articles}></Route>
        <Route path="/articles" component={Articles} exact />
        <Route
          path="/articles/:slug"
          render={({match}) => {
            const {slug} = match.params
            
            return <FullArticle id={slug} />
          }}
        />
      </Switch>

    </>
  )
}
