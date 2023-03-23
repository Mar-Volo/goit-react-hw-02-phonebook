import styled from 'styled-components';

// import { Form as FormikForm, Field as FormikField } from 'formik';

export const Form = styled.form`
width: 400px;
padding: 5px;
margin-bottom: 20px;
`
export const Label = styled.label`
font-size: 20px;
font-weight: 450px;
display: flex;
  flex-direction: column;
  gap: 8px;
`
export const Field = styled.input`
width: auto;
margin-bottom: 20px;
outline: none;
padding: 5px 10px;
`

export const FormSubmit = styled.button`
font-size: 12px;
display: flex;
align-items: center;
justify-content: center;
padding: 15px;
border: none;
border-radius: 3px;
background-color: blue;
color: white;
box-shadow: 1px 1px 2px grey;
`