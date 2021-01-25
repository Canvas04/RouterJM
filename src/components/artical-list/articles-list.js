import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import likeImage from './like.svg'
import ErrorBoundary from '../error-boundary/error-boundary'
import pressedLike from './pressed-like.svg'
import defaultAvatar from './avatar.svg'
import { Link } from 'react-router-dom'
import { estimateArticle } from '../../redux/userState/login-action'
import { getCookie } from '../App'
export default () => {
  const articles = useSelector((store) => store.loadArticles.articles.articles)
  const dispatch = useDispatch()
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  const token = getCookie('token')

  if (articles) {
    const articlesItem = articles.map((el) => {
      let authorImage
      if (el.author.image) {
        authorImage = el.author.image
      } else {
        authorImage = defaultAvatar
      }

      const onButtonClickHandler = (favorited) => {
        if (favorited) {
          dispatch(
            estimateArticle(
              '',
              'articles',
              el.slug + '/favorite',
              token,
              'DELETE'
            )
          )
        } else {
          dispatch(
            estimateArticle(
              '',
              'articles',
              el.slug + '/favorite',
              token,
              'POST'
            )
          )
        }
      }
      const date = new Date(el.createdAt)
      const path = el.slug

      return (
        <LiComponent key={el.slug}>
          <WrapperComponent>
            <Header>
              <Link
                key={el.slug}
                to={{
                  pathname: `/articles/:${path}`,
                }}
              >
                {' '}
                {el.title}
              </Link>
              <LikeComponent>
                <ButtonLike onClick={() => onButtonClickHandler(el.favorited)}>
                  <img
                    height='14px'
                    src={el.favorited ? pressedLike : likeImage}
                    alt='like'
                  />
                </ButtonLike>

                <QuantityLikes>{el.favoritesCount}</QuantityLikes>
              </LikeComponent>
            </Header>

            <ProfileImgWrapper>
              <ErrorBoundary type='img'>
                <img
                  src={authorImage}
                  width='46px'
                  height='46px'
                  alt='author'
                  style={{ borderRadius: '50%' }}
                />
              </ErrorBoundary>
            </ProfileImgWrapper>
            <GenreArticle isTaglist={el.tagList.length}>
              {el.tagList.map((el, i) => {
                return (
                  <WrapperForGenreArticle index={i}>
                    {el}
                  </WrapperForGenreArticle>
                )
              })}
            </GenreArticle>
            <NameComponent>{el.author.username}</NameComponent>
            <DateComponent>
              {date.toLocaleString('en-US', options)}
            </DateComponent>

            <ContainerForText>{el.description}</ContainerForText>
          </WrapperComponent>
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
  height: 140px;
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
  display: ${(props) => (props.isTaglist > 0 ? 'flex' : 'none')};
`
const WrapperForGenreArticle = styled.span`
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 2px;
  padding: 2px;
  margin-left: ${(props) => (props.index === 0 ? '0' : '5px')};
`
const ContainerForText = styled.div`
  grid-column: 1/3;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.75);
  position: relative;
  top: -5px;
`

const ButtonLike = styled.button`
  border: 0;
  background: none;
  outline: none;
  margin: 0;
  padding: 0;
  &:focus {
    outline: none;
  }
  cursor: pointer;
`
