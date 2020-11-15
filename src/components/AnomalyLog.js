import React, {useState} from "react"
import styled from "styled-components"
import {Formik, Form} from "formik"
import * as Yup from 'yup'

import {StyledButton, StyledForm} from "./ReusableStylings"
import {FormInput} from "./FormComponents"



const WrapperDiv = styled.div
`
  width: 100%;
`

const AnomalyLog = (props) => {
  return (
    <div>
      <h3>Log Anomaly</h3>
      <Formik
        initialValues = {{
          name: '',
          description: '',
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(5, 'Name must be at least 5 characters')
            .required('Required'),
          description: Yup.string()
            .required('Required')
        })}
        onSubmit={(values) => {
          props.postNewAnomaly(values)
        }}
        >
        <Form>
          <FormInput
            label="Name of Anomaly"
            name="name"
            />
          <FormInput
            label="Description of Anomaly"
            name="description"
            multiline
            />
          <StyledButton
            type="submit">Submit Log</StyledButton>
        </Form>
      </Formik>
    </div>
  )
}

export default AnomalyLog
