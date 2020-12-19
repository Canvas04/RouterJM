import { Pagination } from 'antd'
import React from 'react'
import styled from 'styled-components'
import Registration from '../registration/registration'
import './articles.scss'

const WrapperForPagination = styled.div`
  display: flex;
  justify-content: center;
`
export default () => {
  return (
    <>
      <Registration />
      <WrapperForPagination>
        <Pagination size={'small'} total={50} />
      </WrapperForPagination>
    </>
  )
}
