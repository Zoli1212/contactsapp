import React, { useEffect, useRef, useState } from "react";

import "./index.css";

import {
  Grid,
  Header as SemanticHeader,
  Card,
  Form,
  Button,
  Select,
  Icon,
  Image,
} from "semantic-ui-react";
import countries from "../../utils/countries";
import { Header } from "../../components/Header";
import Prompt from "./Prompt";



const CreateContact = ({
  onChange,
  formInvalid,
  formIsHalfFilled,
  loading,
  onSubmit,
  onImageChange,
  tempFile,
  form
}) => {
  const imagePickRef = useRef(null);



  const choseImage = () => {
    if (imagePickRef.current) {
      imagePickRef.current.click();
    }
  };





  return (
    <div>
      <Prompt formIsHalfFilled={formIsHalfFilled} currentForm={form}  message={'You have changes unsaved changes, sure you wanna leave?'} />
      
   

      <Header />
      <Grid centered>
        <Grid.Column className="form-column">
          <SemanticHeader>Create Contact</SemanticHeader>

          <Card fluid>
            <Card.Content>
              <Form unstackable>
                <input
                  onChange={onImageChange}
                  ref={imagePickRef}
                  type="file"
                  accept="images/*"
                  hidden
                />

                <div className="image-wrapper">
                  {tempFile && (
                    <Image className="contactpicture" src={tempFile} />
                  )}
                  {!tempFile && (
                    <div onClick={choseImage} className="contactpicture">
                      <span>Choose Picture</span>
                    </div>
                  )}

                  <Icon name="pencil" onClick={choseImage} />
                </div>

                <Form.Group widths={2}>
                  <Form.Input
                    label="First name"
                    name="firstName"
                    onChange={onChange}
                    placeholder="First name"
                  />
                  <Form.Input
                    name="lastName"
                    onChange={onChange}
                    label="Last name"
                    placeholder="Last name"
                  />
                </Form.Group>
                <Form.Group widths={2}>
                  <Form.Input
                    name="countryCode"
                    onChange={onChange}
                    control={Select}
                    options={countries}
                    label="Country"
                    placeholder="Country"
                  />
                  <Form.Input
                    name="phoneNumber"
                    onChange={onChange}
                    label="PhoneNumber"
                    placeholder="Phone Number"
                  />
                </Form.Group>
                <Form.Checkbox
                  name="isFavorite"
                  onChange={(e, data) => {
                    onChange(e, { name: "isFavorite", value: data.checked });
                  }}
                  label="Add to favorites"
                />
                <Button
                  disabled={formInvalid || loading}
                  onClick={onSubmit}
                  primary
                  type="submit"
                  loading={loading}
                >
                  Submit
                </Button>
              </Form>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default CreateContact;