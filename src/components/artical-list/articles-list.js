import React from 'react'
import styled from 'styled-components'

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
  display: grid;
  display:template-columns: 5fr 1fr;
  display-columns-gap:85px;
  background-color:#fff;
  border-radius: 5px;
`
const TitleComponent = styled.div`
  display: grid;
`
const Header = styled.h2`
  color: #1890ff;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
`
const Avatar = styled.div``
const ArticleComponent = styled.div``
export default () => {
  const articlesItem = [1, 2, 3, 4, 5].map((el) => {
    return (
      <LiComponent key={el}>
        <ArticleComponent>
          <TitleComponent>
            <Header>Some article title</Header>
          </TitleComponent>
        </ArticleComponent>
        <Avatar></Avatar>
      </LiComponent>
    )
  })
  return (
    <>
      <UlComponent>{articlesItem}</UlComponent>
    </>
  )
}
