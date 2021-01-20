import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import _ from 'lodash/fp'
import { withRouter } from 'react-router-dom'
import {
  Button,
  Header,
  NameField,
  WarningLabel,
} from '../registration-page/registration-page'
import Registration from '../registration/registration'
import AddTag from '../add-tag/add-tag'
import { useDispatch, useSelector } from 'react-redux'
import login from '../../redux/userState/login-action'
import { getCookie } from '../App'
const NewArticle = ({ history }) => {
  const { register, handleSubmit, errors } = useForm()
  const [isSend, setIsSend] = useState(false)
  const tagList = useSelector((store) => store.creationTags.tagList)
  const dispatch = useDispatch()
  const currentPath = history.location.pathname
  const token = getCookie('token')
  const slug = currentPath
    .split('/')
    .filter((el) => el.match(':'))
    .join('').replace(':','')

  const headerText = currentPath.match('edit')
    ? 'Edit article'
    : 'Create new article'
  const onSubmit = (data) => {
    const { title, description, body } = data
    const objForCreationArticle = {
      article: {
        title,
        description,
        body,
        tagList,
      },
    }

    if (currentPath.match('edit')) {
      dispatch(
        login(
          JSON.stringify(objForCreationArticle),
          'articles',
          slug,
          token,
          'PUT'
        )
      )
    } else {
      dispatch(
        login(
          JSON.stringify(objForCreationArticle),
          'articles',
          '',
          getCookie('token')
        )
      )
    }
    setIsSend(true)
  }

  useEffect(() => {
    if (isSend) {
      history.push('/')
    }
  })
  return (
    <>
      <Registration />
      <FormWrapper>
        <FormContainer>
          <FormComponent id='form' onSubmit={handleSubmit(onSubmit)}>
            <Header>{headerText}</Header>
            <Label>
              <NameField>Title</NameField>
              <Input
                name='title'
                placeholder='Title'
                autoFocus
                ref={register({
                  required: true,
                })}
                className='form-control '
              />
            </Label>
            {_.get('title.type', errors) === 'required' && (
              <WarningLabel>This field is required</WarningLabel>
            )}
            <Label>
              <NameField>Short description</NameField>
              <Input
                name='description'
                placeholder='Description'
                ref={register({
                  required: true,
                })}
                className='form-control'
              />
            </Label>
            {_.get('description.type', errors) === 'required' && (
              <WarningLabel>This field is required</WarningLabel>
            )}
            <Label>
              <NameField>Text</NameField>
              <TextAreaComponent
                name='body'
                rows='6'
                placeholder='Text'
                className='form-control'
                ref={register({
                  required: true,
                })}
              />
            </Label>
            {_.get('body.type', errors) === 'required' && (
              <WarningLabel>This field is required</WarningLabel>
            )}

            <AddTag />
            <Button style={{ marginTop: '9px' }} type='submit'>
              Send
            </Button>
          </FormComponent>
        </FormContainer>
      </FormWrapper>
    </>
  )
}
const FormComponent = styled.form`
  // width: 938px;
  // display: flex;
  // flex-direction: column;
  // padding: 48px 36.5px;
  // background-color: #ffffff;
  // border: 1px solid #d9d9d9;
  // box-sizing: border-box;
  // box-shadow: 0px 22px 106px rgba(0, 0, 0, 0.07),
  //   0px 9.19107px 44.2843px rgba(0, 0, 0, 0.0503198),
  //   0px 4.91399px 23.6765px rgba(0, 0, 0, 0.0417275),
  //   0px 2.75474px 13.2728px rgba(0, 0, 0, 0.035),
  //   0px 1.46302px 7.04911px rgba(0, 0, 0, 0.0282725),
  //   0px 0.608796px 2.93329px rgba(0, 0, 0, 0.0196802);
  // border-radius: 6px;
  // margin-top: 34px;
  // margin-bottom: 162px;
`
export const Input = styled.input`
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  border-radius: 4px;
  padding-left: 12px;
  padding-top: 8px;
  padding-right: 12px;
  padding-bottom: 8px;
  width: 320px;
  border-color: ${(props) => (props.error ? 'red' : '#d9d9d9')};
  width: 100%;
`
export const Label = styled.label`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  display: flex;
  flex-direction: column;
  margin-bottom: 21px;
`

const TextAreaComponent = styled.textarea``
const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
`
const FormContainer = styled.div`
  width: 938px;
  display: flex;
  flex-direction: column;
  padding: 48px 36.5px;
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  box-shadow: 0px 22px 106px rgba(0, 0, 0, 0.07),
    0px 9.19107px 44.2843px rgba(0, 0, 0, 0.0503198),
    0px 4.91399px 23.6765px rgba(0, 0, 0, 0.0417275),
    0px 2.75474px 13.2728px rgba(0, 0, 0, 0.035),
    0px 1.46302px 7.04911px rgba(0, 0, 0, 0.0282725),
    0px 0.608796px 2.93329px rgba(0, 0, 0, 0.0196802);
  border-radius: 6px;
  margin-top: 34px;
  margin-bottom: 162px;
`
export default withRouter(NewArticle)
