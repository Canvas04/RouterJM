import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Markdown from 'markdown-to-jsx'
import likeImage from '../artical-list/like.svg'
import pressedLike from '../artical-list/pressed-like.svg'
export default ({ id }) => {
  const [likedQ, setLikedQ] = useState(false)
  const [uri, setUri] = useState(likeImage)
  const { articles } = useSelector((store) => store.loadArticles.articles)
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  const onButtonClickHandler = () => {
    setLikedQ(!likedQ)
    if (likedQ) {
      setUri(pressedLike)
    } else {
      setUri(likeImage)
    }
  }
  if (articles && id) {
    const searchedArticle = articles.filter(
      (el) => el.slug === id.replace(/:/g, '')
    )
    const elements = searchedArticle.map((el) => {
      const title = `# ${el.title}`
      const favoritesCount = `${el.favoritesCount}`
      const userName = `${el.author.username}`
      const body = `${el.body}`
      const date = new Date(el.createdAt)
      const formattedDate = `${date.toLocaleString('en-US', options)}`
      return (
        <WrapperForArticle key={el.slug}>
          <ContainerForHeaderAndButton>
            <Header children={title}></Header>
            <LikeComponent>
              <ButtonLike onClick={onButtonClickHandler}>
                <img src={uri} />
              </ButtonLike>
              <QuantityLikes children={favoritesCount} />
            </LikeComponent>
          </ContainerForHeaderAndButton>
          <ProfileImgWrapper>
            <img
              src={el.author.image}
              width="46px"
              height="46px"
              alt="author"
            />
          </ProfileImgWrapper>
          <NameComponent children={userName}>
            {el.author.username}
          </NameComponent>
          <DateComponent children={formattedDate} />
          <GenreArticle isTaglist={el.tagList.length}>
            {el.tagList.map((el,i) => {
              return (
                <WrapperForGenreArticle key={el} index={i}>{el}</WrapperForGenreArticle>
              )
            })}
          </GenreArticle>
          <ContainerForText children={body} />
        </WrapperForArticle>
      )
    })
    return (
      <>
        <WrapperForAlignment>{elements}</WrapperForAlignment>
      </>
    )
  }

  return <> </>
}

const WrapperForArticle = styled.div`
  background-color: #ffffff;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr 0.1fr;
  grid-column-gap: 12px;
  grid-template-rows: repeat(20, 20px);
  flex-basis: 80%;
  filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.15));
  margin-top: 20px;
  margin-bottom: 61px;
  padding-top: 17px;
  padding-right: 14px;
  padding-left: 16px;
  row-gap:5px;
`
const Header = styled(Markdown)`
  color: #1890ff;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
`
const WrapperForAlignment = styled.div`
  display: flex;
  justify-content: center;
  height: 870px;
`
const ContainerForHeaderAndButton = styled.div`
  display: flex;
  grid-column: 1/3;
`
const ButtonLike = styled.button`
  border: 0;
  background: none;
  outline: none;
  align-self: flex-start;
  margin-left: 13px;
  &:focus {
    outline: none;
  }
`
const ProfileImgWrapper = styled.div`
  grid-column: 4/5;
  grid-row: 1/3;
  display: flex;
  justify-content: flex-end;
`
const NameComponent = styled(Markdown)`
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
const DateComponent = styled(Markdown)`
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
  top: -26px;
`
const GenreArticle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: rgba(0, 0, 0, 0.5);
  grid-row: 2/3;
  grid-column: 1/3;
  display: ${props => props.isTaglist > 0 ? 'flex': 'none'};
`
const WrapperForGenreArticle = styled.span`
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 2px;
  padding: 2px;
  margin-left: ${props => props.index === 0 ? '0' : '5px'};
`
const ContainerForText = styled(Markdown)`
  grid-column: 1/3;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.75);
  position:relative;
  top:-5px;
`
const LikeComponent = styled.div``
const QuantityLikes = styled(Markdown)``
