import React, { useState, useEffect, useRef } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Card } from "../../components/Card";
import { Input, TextArea, FormBtn } from "../../components/Form";
import API from "../../utils/API";

function BusinessForm() {
  const [business, setBusiness] = useState([]);
  const [formObject, setFormObject] = useState([]);
  const formEl = useRef(null);

  useEffect(() => {
    console.log("Page Mounted");
  }, []);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    API.saveBusiness({
      owner: formObject.owner,
      businessName: formObject.businessName,
      phoneNumber: formObject.phoneNumber,
      email: formObject.email,
      about: formObject.about,
      address: formObject.address,
      instagram: formObject.instagram,
      facebook: formObject.facebook,
      website: formObject.website,
      hours: formObject.hours,
      menuOrServices: formObject.menuOrServices,
      tagline: formObject.tagline,
      masks: formObject.masks,
      photos: formObject.photos,
    })
      .then((res) => {
        formEl.current.reset();
      })
      .catch((err) => console.log(err));
  }

  function showUploadWidget() {
    window.cloudinary.openUploadWidget(
      {
        cloudName: "dolssrjeq",
        uploadPreset: "cloudinaryPreset",
        sources: [
          "local",
          "url",
          "camera",
          "image_search",
          "google_drive",
          "facebook",
          "dropbox",
          "shutterstock",
          "instagram",
        ],
        googleApiKey: "<image_search_google_api_key>",
        showAdvancedOptions: true,
        cropping: true,
        multiple: false,
        defaultSource: "local",
        styles: {
          palette: {
            window: "#FFFFFF",
            windowBorder: "#90A0B3",
            tabIcon: "#0078FF",
            menuIcons: "#5A616A",
            textDark: "#000000",
            textLight: "#FFFFFF",
            link: "#0078FF",
            action: "#FF620C",
            inactiveTabIcon: "#0E2F5A",
            error: "#F44235",
            inProgress: "#0078FF",
            complete: "#15A727",
            sourceBg: "#E4EBF1",
          },
          fonts: { default: { active: true } },
        },
      },
      (err, info) => {
        if (!err) {
          console.log("Upload Widget event - ", info);
        }
      }
    );
  }

  return (
    <Container fluid>
      <Row>
        <Col size="size md-12">
          <Card title="Welcome! Please fill out the following forms to set up your business.">
            <form ref={formEl}>
              <button onClick={showUploadWidget}>Upload Images</button>
              <Input
                onChange={handleInputChange}
                name="businessName"
                placeholder="Name of Business (Required)"
              />
              <Input
                onChange={handleInputChange}
                name="phoneNumber"
                placeholder="Phone Number (Required)"
              />
              <Input
                onChange={handleInputChange}
                name="email"
                placeholder="Email Address (Required)"
              />
              <Input
                onChange={handleInputChange}
                name="owner"
                placeholder="Owner Name (Required)"
              />
              <Input
                onChange={handleInputChange}
                name="hours"
                placeholder="Hours of Operation  (Required)"
              />
              <Input
                onChange={handleInputChange}
                name="tagline"
                placeholder="Tagline (Required)"
              />
              <lable for="photos">
                Select Photos, or click and drag to upload.
              </lable>
              <Input
                type="file"
                onChange={handleInputChange}
                name="photos"
                multiple
              />
              <Input
                onChange={handleInputChange}
                name="masks"
                placeholder="Masks"
              />
              <Input
                onChange={handleInputChange}
                name="address"
                placeholder="Address"
              />
              <Input
                onChange={handleInputChange}
                name="instagram"
                placeholder="Instagram"
              />
              <Input
                onChange={handleInputChange}
                name="facebook"
                placeholder="Facebook"
              />
              <Input
                onChange={handleInputChange}
                name="website"
                placeholder="Website"
              />

              <Input
                onChange={handleInputChange}
                name="menuOrServices"
                placeholder="A list of Services or Menu"
              />

              <TextArea
                onChange={handleInputChange}
                name="about"
                placeholder="About Section"
              />
              <FormBtn
                disabled={
                  !(
                    formObject.businessName &&
                    formObject.phoneNumber &&
                    formObject.email &&
                    formObject.owner &&
                    formObject.tagline &&
                    formObject.hours
                  )
                }
                onClick={handleFormSubmit}
              >
                Submit Business
              </FormBtn>
            </form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default BusinessForm;
