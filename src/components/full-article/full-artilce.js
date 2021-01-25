import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Markdown from 'markdown-to-jsx'
import likeImage from '../artical-list/like.svg'
import pressedLike from '../artical-list/pressed-like.svg'
import Modal from '../modal/modal'
import { openModal } from '../../redux/modal-delete/modal-delete-action'
import Registration from '../registration/registration'
import { Link } from 'react-router-dom'
import { estimateArticle } from '../../redux/userState/login-action'
import { getCookie } from '../App'

export default ({ id }) => {
  const { articles } = useSelector((store) => store.loadArticles.articles)
  const isLogin = useSelector((store) => store.userState.isLogin)
  const { isOpened } = useSelector((store) => store.stateModal)
  const token = getCookie('token')
  const dispatch = useDispatch()
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  const queryForLikes = id.replace(/:/, '') + '/favorite'
  const ownerAccount = useSelector((store) => store.userState.user.username)
  const deleteButtonHandler = () => {
    dispatch(openModal())
  }
  const onButtonClickHandler = (favorited) => {
    if (favorited) {
      dispatch(estimateArticle('', 'articles', queryForLikes, token, 'DELETE'))
    } else {
      dispatch(estimateArticle('', 'articles', queryForLikes, token, 'POST'))
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
      const description = `${el.description}`
      return (
        <WrapperForArticle key={el.slug}>
          <ContainerForHeaderAndButton>
            <Header children={title}></Header>
            <LikeComponent>
              <ButtonLike onClick={() => onButtonClickHandler(el.favorited)}>
                <img src={el.favorited ? pressedLike : likeImage} alt='like' />
              </ButtonLike>

              <QuantityLikes children={favoritesCount} />
            </LikeComponent>
          </ContainerForHeaderAndButton>
          <ProfileImgWrapper>
            <img
              src={el.author.image}
              width='46px'
              height='46px'
              alt='author'
              style={{ borderRadius: '50%' }}
            />
          </ProfileImgWrapper>
          <NameComponent children={userName}>
            {el.author.username}
          </NameComponent>
          <DateComponent children={formattedDate} />
          <GenreArticle isTaglist={el.tagList.length}>
            {el.tagList.map((el, i) => {
              return (
                <WrapperForGenreArticle key={el} index={i}>
                  {el}
                </WrapperForGenreArticle>
              )
            })}
          </GenreArticle>
          <ContainerForDescription children={description} />
          <ContainerForBody children={body} />
          {isLogin && userName === ownerAccount && (
            <>
              <ContainerForButtons>
                <StyledButton
                  className='btn btn-outline-danger'
                  style={{ width: '5rem', height: '2rem' }}
                  type='button'
                  onClick={deleteButtonHandler}
                >
                  Delete
                </StyledButton>
                {isOpened && <Modal slug={el.slug} />}
              </ContainerForButtons>
              <StyledButton
                className='btn btn-outline-success'
                style={{
                  width: '4rem',
                  height: '2rem',
                  gridRow: '4/5',
                  gridColumn: '4/5',
                }}
                type='button'
              >
                <StyledLink to={`/articles/:${el.slug}/edit`}>Edit</StyledLink>
              </StyledButton>
            </>
          )}
        </WrapperForArticle>
      )
    })
    return (
      <>
        <Registration />
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
  row-gap: 5px;
  max-width: 58em;
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
  cursor: pointer;
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
const ContainerForDescription = styled(Markdown)`
  grid-column: 1/3;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.5);
  position: relative;
  top: -5px;
  grid-row: 4/5;
`
const LikeComponent = styled.div``
const QuantityLikes = styled(Markdown)``

const StyledButton = styled.button`
  font-size: 0.875rem;
`
const ContainerForButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  grid-row: 4/5;
  grid-column: 3/4;
  position: relative;
`
const ContainerForBody = styled(Markdown)`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 1.25rem;
  grid-row: 6/7;
  grid-column: 1/3;
`
const StyledLink = styled(Link)`
  display: block;
  color: inherit;
  &:hover {
    text-decoration: none;
    color: inherit;
  }
`
