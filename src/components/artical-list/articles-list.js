import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'
import likeImage from './like.svg'
import { Pagination } from 'antd'
import { loadArticles } from '../../redux/req-articles/action'
import ErrorBoundary from '../error-boundary/error-boundary'
import { Link, Route, Switch } from 'react-router-dom'
export default () => {
  const articles = useSelector((store) => store.loadArticles.articles.articles)
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  if (articles) {
    const articlesItem = articles.map((el) => {
      const date = new Date(el.createdAt)
      const path = el.slug
      return (
        <LiComponent key={el.slug}>
          <Link
            key={el.slug}
            to={{
              pathname: `/articles/:${path}`,
            }}
          >
            <WrapperComponent>
              <Header>
                {el.title}
                <LikeComponent>
                  <img height="14px" src={likeImage} />
                  <QuantityLikes>{el.favoritesCount}</QuantityLikes>
                </LikeComponent>
              </Header>

              <ProfileImgWrapper>
                <ErrorBoundary type="img">
                  <img
                    src={el.author.image}
                    width="46px"
                    height="46px"
                    alt="author"
                  />
                </ErrorBoundary>
              </ProfileImgWrapper>
              <GenreArticle isTaglist={el.tagList.length}>
                {el.tagList.map((el) => {
                  return <WrapperForGenreArticle>{el}</WrapperForGenreArticle>
                })}
              </GenreArticle>
              <NameComponent>{el.author.username}</NameComponent>
              <DateComponent>
                {date.toLocaleString('en-US', options)}
              </DateComponent>

              <ContainerForText>{el.description}</ContainerForText>
            </WrapperComponent>
          </Link>
        </LiComponent>
      )
    })

    return (
      <>
        <UlComponent>{articlesItem}</UlComponent>
      </>
    )
  }

  return <></>
}

const UlComponent = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  margin: 26px 0px 30px 0px;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-row-gap: 26px;
  max-width: 1100px;
`
const LiComponent = styled.li`
  padding: 15px 14px 24px 19px;
  background-color: #fff;
  border-radius: 5px;
`
const WrapperComponent = styled.div`
  display: grid;
  grid-template-columns: 8fr 1fr 1fr 0.1fr;
  grid-column-gap: 12px;
  grid-template-rows: repeat(3, 22px);
  grid-row-gap: 5px;
`
const Header = styled.h2`
  color: #1890ff;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  display: flex;
`
const LikeComponent = styled.div`
  margin-left: 13px;
`

const QuantityLikes = styled.span`
  margin-left: 5px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.75);
  position: relative;
  top: -3px;
`

const ProfileImgWrapper = styled.div`
  grid-column: 4/5;
  grid-row: 1/3;
  display: flex;
  justify-content: flex-end;
`
const NameComponent = styled.span`
  grid-column: 3/4;
  grid-row: 1/2;
  display: flex;
  justify-content: flex-end;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
  color: rgba(0, 0, 0, 0.85);
`
const DateComponent = styled.span`
  grid-column: 3/4;
  grid-row: 2/3;
  display: flex;
  justify-content: flex-end;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.5);
  position: relative;
  top: -8px;
`
const GenreArticle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: rgba(0, 0, 0, 0.5);
  grid-row: 2/3;
  grid-column: 1/3;
  display: grid;
  grid-template-columns: repeat(15, 1fr);
  column-gap: 10px;
  grid-template-rows: repeat(2, 20px);
  display: ${props => props.isTaglist > 0 ? 'flex': 'none'};
`
const WrapperForGenreArticle = styled.span`
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 2px;
  padding: 2px;
`
const ContainerForText = styled.div`
  grid-column: 1/3;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.75);
`
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}))
