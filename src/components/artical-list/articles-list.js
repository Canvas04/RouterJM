import React from 'react'
import styled from 'styled-components'
import likeImage from './like.svg'
import profileImg from './avatar.svg'

export default () => {
  const articlesItem = [1, 2, 3, 4, 5].map((el) => {
    return (
      <LiComponent key={el}>
        <WrapperComponent>
          <Header>Some article title</Header>
          <LikeComponent>
            <img height="14px" src={likeImage} />
            <QuantityLikes>12</QuantityLikes>
          </LikeComponent>
          <ProfileImgWrapper>
            <img src={profileImg} width="46px" height="46px" />
          </ProfileImgWrapper>

          <NameComponent>John Doe</NameComponent>
          <DateComponent>March 5 , 2020</DateComponent>
          <GenreArticle>
            <WrapperForGenreArticle>Tag1</WrapperForGenreArticle>
          </GenreArticle>
          <ContainerForText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor
          </ContainerForText>
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

const UlComponent = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  margin: 26px 0px 30px 0px;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-row-gap: 26px;
`
const LiComponent = styled.li`
  padding: 15px 14px 24px 19px;
  background-color: #fff;
  border-radius: 5px;
`
const WrapperComponent = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr 0.1fr;
  grid-column-gap: 12px;
  grid-template-rows: repeat(4, 22px);
  grid-row-gap: 5px;
`
const Header = styled.h2`
  color: #1890ff;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
`
const LikeComponent = styled.div`
  position: relative;
  top: 3px;
`

const QuantityLikes = styled.span`
  margin-left: 5px;
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
`
// Надо поместить жанры еще один контейнер , чтобы уменьшить границу
const WrapperForGenreArticle = styled.span`
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 2px;
  padding: 2px;
`
const ContainerForText = styled.div`
grid-column:1/3;
grid-row:3/5;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 22px;
color: rgba(0, 0, 0, 0.75);
`