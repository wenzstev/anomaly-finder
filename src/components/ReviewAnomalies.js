import React from "react"
import styled from "styled-components"

import {Formik, Form} from "formik"
import {FormInput} from "./FormComponents"
import {StyledButton} from "./ReusableStylings"

const SmallForm = styled.div
`
form, input, button, label {
  color: darkgrey;
  font-size: .75rem;
}
input, button {
  font-size: .75rem;
  border: 2px solid darkgrey;
}

`

const ReviewAnomalies = () => {
  return (
    <SmallForm>
      This page is still under construction! Check back for additional features, including checking your anomaly ratings and much more!
      <Formik
        initialValues={{
          adminPassword: ''
        }}
        onSubmit={(values)=>alert(values.adminPassword)}
        >
        <Form>
          <FormInput label="Admin Password" name="adminPassword" />
          <StyledButton type="submit">Submit</StyledButton>
        </Form>
      </Formik>
    </SmallForm>
  )
}

export default ReviewAnomalies
