import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import {withRouter} from 'react-router-dom'
import _ from 'lodash/fp'
import {
  FormWrapper,
  Header,
  NameField,
} from '../registration-page/registration-page'
import Registration from '../registration/registration'

export default () => {
    const { register, handleSubmit, errors} = useForm()
    const onSubmit = () => {
        
    }
  return (
    <>
      <Registration />
      <FormWrapper>
        <FormComponent onSubmit={handleSubmit(onSubmit)}>
          <Header>Create new article</Header>
          <Label>
            <NameField>Title</NameField>
            <Input
              name="username"
              placeholder="Username"
              autoFocus
              //   ref={register({
              //     required: true,
              //     maxLength: 20,
              //     minLength: 3,
              //     pattern: /^[A-Za-z]+$/i,
              //   })}
              className="form-control "
            />
          </Label>

          <Label>
            <NameField>Short description</NameField>
            <Input
              name="username"
              placeholder="Username"
              autoFocus
              //   ref={register({
              //     required: true,
              //     maxLength: 20,
              //     minLength: 3,
              //     pattern: /^[A-Za-z]+$/i,
              //   })}
              className="form-control"
            />
          </Label>
          <Label>
            <NameField>Text</NameField>
            <TextAreaComponent    rows='6'  className="form-control" />
          </Label>
        </FormComponent>
      </FormWrapper>
    </>
  )
}
const FormComponent = styled.form`
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
