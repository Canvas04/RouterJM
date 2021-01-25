import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { addTag, removeTag, typeInput } from '../../redux/creation-tags/action'
import { Label, NameField } from '../registration-page/registration-page'

export default () => {
  const onButtonClickHandler = () => {
    dispatch(addTag(inputData, prevStateInput))
  }
  const inputData = useSelector((store) => store.creationTags.inputData)
  const valueInput = inputData.join('')
  const prevStateInput = useSelector((store) => store.creationTags.tagList)
  const dispatch = useDispatch()
  const onChangeHandler = (e) => {
    dispatch(typeInput(e.target.value))
  }
  const tagList = useSelector((store) => store.creationTags.tagList)

  const elementsTagList = tagList.map((el, i) => {
    return (
      <Fragment key={i}>
        <StyledInput value={el} className='form-control' disabled />
        <ButtonAdd
          className='btn btn-outline-danger'
          type='button'
          onClick={() => dispatch(removeTag(i))}
        >
          Delete
        </ButtonAdd>
        <div></div>
      </Fragment>
    )
  })

  return (
    <>
      <Label>
        <NameField>Tags</NameField>
        {tagList.length !== 0 && (
          <ContainerForTags>{elementsTagList}</ContainerForTags>
        )}
        <ContainerForButtonInput>
          <StyledInput
            value={valueInput}
            className='form-control'
            onChange={onChangeHandler}
          />
          <ButtonAdd
            className='btn btn-outline-primary'
            type='button'
            onClick={onButtonClickHandler}
          >
            Add Tag
          </ButtonAdd>
        </ContainerForButtonInput>
      </Label>
    </>
  )
}

const StyledInput = styled.input``
const ButtonAdd = styled.button``
const ContainerForButtonInput = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.5fr 1.5fr;
  column-gap: 1.2rem;
`
const ContainerForTags = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.5fr 1.5fr;
  column-gap: 1.2rem;
  margin-bottom: 0.5rem;
  row-gap: 0.5rem;
`
