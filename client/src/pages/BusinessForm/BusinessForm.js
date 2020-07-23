import React, { useState, useEffect, useRef } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Card } from "../../components/Card";
import { Input, TextArea, FormBtn, Address } from "../../components/Form";
import API from "../../utils/API";

function BusinessForm() {
  const [business, setBusiness] = useState([]);
  const [formObject, setFormObject] = useState([]);
  const [images, setImages] = useState([]);
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

    API.addressConvert(
      `${formObject.street}, ${formObject.city}, ${formObject.state}`
    ).then((res) => {
      console.log("LAT, LONGGG", res.data.results[0].geometry.location);
      console.log("DOES THIS PASS DOWN", formObject);
      API.saveBusiness({
        owner: formObject.owner,
        businessName: formObject.businessName,
        phoneNumber: formObject.phoneNumber,
        email: formObject.email,
        about: formObject.about,
        instagram: formObject.instagram,
        facebook: formObject.facebook,
        website: formObject.website,
        hours: formObject.hours,
        menuOrServices: formObject.menuOrServices,
        tagline: formObject.tagline,
        masks: formObject.masks,
        photos: images,
        street: formObject.street,
        city: formObject.city,
        state: formObject.state,
        zip: formObject.zip,
        county: formObject.county,
        country: formObject.country,
        lat: res.data.results[0].geometry.location.lat,
        lng: res.data.results[0].geometry.location.lng,
      })
        .then((res) => {
          formEl.current.reset();
        })
        .catch((err) => console.log(err));
    });
  }

  function showUploadWidget(event) {
    event.preventDefault();
    window.cloudinary.openUploadWidget(
      {
        cloudName: "dolssrjeq",
        uploadPreset: "cloudinaryPreset",
        sources: [
          "local",
          "url",
          "camera",
          "google_drive",
          "facebook",
          "dropbox",
          "shutterstock",
          "instagram",
        ],

        showAdvancedOptions: false,
        cropping: false,
        multiple: true,
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
      (err, result) => {
        if (result.event === "queues-end") {
          const imageUrl = result.info.files;
          saveImages(imageUrl);
        }
      }
    );
  }

  const saveImages = (imageUrl) => {
    imageUrl.forEach((entry) => {
      const imageUrl = entry.uploadInfo.url;
      setImages((images) => [...images, imageUrl]);
    });
  };

  return (
    <Container fluid>
      <Row>
        <Col size="size md-12">
          <Card title="Welcome! Please fill out the following forms to set up your business.">
            <form ref={formEl}>
              <div className="row">
                <div className="col-4">
                  <div className="list-group" id="list-tab" role="tablist">
                    <a
                      className="list-group-item list-group-item-action active"
                      id="list-home-list"
                      data-toggle="list"
                      href="#basic-info"
                      role="tab"
                      aria-controls="Basic Info"
                    >
                      Basic Info
                    </a>
                    <a
                      className="list-group-item list-group-item-action"
                      id="list-profile-list"
                      data-toggle="list"
                      href="#contact-info"
                      role="tab"
                      aria-controls="Contact Info"
                    >
                      Contact Info
                    </a>
                    <a
                      className="list-group-item list-group-item-action"
                      id="list-messages-list"
                      data-toggle="list"
                      href="#social-media"
                      role="tab"
                      aria-controls="Social Media"
                    >
                      Social Media
                    </a>
                    <a
                      className="list-group-item list-group-item-action"
                      id="list-settings-list"
                      data-toggle="list"
                      href="#list-settings"
                      role="tab"
                      aria-controls="Photos and Services"
                    >
                      Photos and Services
                    </a>
                    <a
                      className="list-group-item list-group-item-action"
                      id="list-settings-list"
                      data-toggle="list"
                      href="#about-more"
                      role="tab"
                      aria-controls="About and More"
                    >
                      About and More
                    </a>
                  </div>
                </div>
                <div className="col-8">
                  <div className="tab-content" id="nav-tabContent">
                    {/* Basic Info */}
                    <div
                      className="tab-pane fade show active"
                      id="basic-info"
                      role="tabpanel"
                      aria-labelledby="list-home-list"
                    >
                      <Input
                        onChange={handleInputChange}
                        name="businessName"
                        placeholder="Name of Business (Required)"
                      />
                      <Input
                        onChange={handleInputChange}
                        name="owner"
                        placeholder="Owner Name (Required)"
                      />
                      <Input
                        onChange={handleInputChange}
                        name="tagline"
                        placeholder="Tagline (Required)"
                      />
                      <Input
                        onChange={handleInputChange}
                        name="hours"
                        placeholder="Hours of Operation  (Required)"
                      />
                    </div>
                    {/* Contact Info */}
                    <div
                      className="tab-pane fade"
                      id="contact-info"
                      role="tabpanel"
                      aria-labelledby="list-profile-list"
                    >
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

                      <Address onChange={handleInputChange} />
                    </div>
                    {/* Social Media */}
                    <div
                      className="tab-pane fade"
                      id="social-media"
                      role="tabpanel"
                      aria-labelledby="list-messages-list"
                    >
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
                    </div>
                    {/* Photos And Services */}
                    <div
                      className="tab-pane fade"
                      id="list-settings"
                      role="tabpanel"
                      aria-labelledby="list-settings-list"
                    >
                      <button onClick={showUploadWidget}>Upload Photos</button>
                      <Input
                        onChange={handleInputChange}
                        name="menuOrServices"
                        placeholder="A list of Services or Menu"
                      />
                    </div>
                    {/* About and More */}
                    <div
                      className="tab-pane fade"
                      id="about-more"
                      role="tabpanel"
                      aria-labelledby="list-settings-list"
                    >
                      <TextArea
                        onChange={handleInputChange}
                        name="about"
                        placeholder="About Section"
                      />
                      <Input
                        onChange={handleInputChange}
                        name="masks"
                        placeholder="Masks"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <FormBtn
                disabled={
                  !(
                    formObject.businessName &&
                    formObject.phoneNumber &&
                    formObject.email &&
                    formObject.owner &&
                    formObject.tagline &&
                    formObject.hours &&
                    formObject.street &&
                    formObject.city &&
                    formObject.state &&
                    formObject.zip &&
                    formObject.county &&
                    formObject.country
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
