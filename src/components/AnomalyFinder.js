import React from "react"
import styled from "styled-components"
import {StyledButton, StyledForm} from "./ReusableStylings"

import {FormInput} from "./FormComponents"

import {Formik, Form} from "formik"
import * as Yup from "yup"

const AnomalyFinder = (props) => {
  return (
    <div>
      <h3>Anomaly Finder</h3>
      <p>Enter the identification number of the anomaly you wish to find below, or allow a random anomaly to be chosen for you.</p>
      <Formik
        initialValues = {{
          id: ''
        }}
        validationSchema = {Yup.object({
          id: Yup.number('Id must be a number.')
        })}
        onSubmit={(values)=>props.setId(values.id)}
      >
        <Form>
          <FormInput label="Anomaly ID" name="id" />
          <StyledButton type="submit">Find Anomaly</StyledButton>
          <StyledButton onClick={props.getRandomAnomaly} type="button">Random Anomaly</StyledButton>
          <StyledButton onClick={props.openList} type="button">Saved Anomalies</StyledButton>
      </Form>
      </Formik>

    </div>
  )
}

export default AnomalyFinder
