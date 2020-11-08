import React, {useState} from "react"
import styled from "styled-components"

import {Formik, Form} from "formik"
import {FormInput} from "./FormComponents"
import {StyledButton} from "./ReusableStylings"

import axios from "../AxiosConfig"

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

const ReviewAnomaliesController = () => {
  const [anomaliesToReview, setAnomaliesToReview] = useState([])
  const [password, setPassword] = useState("")

  const updateAnomalyReviewList = (pw) => {
    axios.post(`/api/review`,{"revpassword":pw})
    .then(req=>{
      setAnomaliesToReview(req.data)
    })
  }

  const display = anomaliesToReview.length === 0 ? (
    <ReviewAnomaliesForm
      setPassword={setPassword}
      setAnomaliesToReview={setAnomaliesToReview}
      updateAnomalyReviewList={updateAnomalyReviewList}/>
  ) : (
    <ReviewAnomaliesList
      password={password}
      anomaliesToReview={anomaliesToReview}
      updateAnomalyReviewList={updateAnomalyReviewList}/>
  )

  return display

}

const ReviewAnomaliesList = (props) => {
  const confirmAnomaly = async(id) => {
    console.log(props.password)
    const confirm = await axios.put(`/api/anomalies/${id}/confirm`,{"revpassword":props.password})
    props.updateAnomalyReviewList(props.password)
  }
  const deleteAnomaly = async(id) => {
    const deleted = await axios.delete(`/api/anomalies/${id}`, {"revpassword":props.password})
    props.updateAnomalyReviewList(props.password)
  }
  return (
    <div>
      {props.anomaliesToReview.map((item, index)=>(
        <div key={index}>
          <h4>{item.title}</h4>
          <p>{item.body}</p>
          <StyledButton onClick={()=>confirmAnomaly(item.id_)}>Confirm</StyledButton>
          <StyledButton onClick={()=>deleteAnomaly(item.id_)}>Delete</StyledButton>
        </div>
      ))}

    </div>
  )
}

const ReviewAnomaliesForm = (props) => {
  return (
    <SmallForm>
      This page is still under construction! Check back for additional features, including checking your anomaly ratings and much more!
      <Formik
        initialValues={{
          adminPassword: ''
        }}
        onSubmit={(values)=>{
          axios.post(`/api/review`,{"revpassword":values.adminPassword})
          .then(req=>{
            props.setPassword(values.adminPassword)
            props.updateAnomalyReviewList(values.adminPassword)
          })
        }}
        >
        <Form>
          <FormInput label="Admin Password" name="adminPassword" type="password"/>
          <StyledButton type="submit">Submit</StyledButton>
        </Form>
      </Formik>
    </SmallForm>
  )
}

export default ReviewAnomaliesController
