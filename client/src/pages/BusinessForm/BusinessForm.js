import React, { useState, useEffect, useRef } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Card } from "../../components/Card";
import {
  Input,
  TextArea,
  FormBtn,
  Address,
  Hours,
} from "../../components/Form";
import API from "../../utils/API";
import Checkbox from "../../components/Checkbox";

function BusinessForm() {
  const [business, setBusiness] = useState([]);
  const [formObject, setFormObject] = useState([]);
  const [images, setImages] = useState([]);
  const [logo, setLogo] = useState([]);
  const [menuOrServices, setMenuOrServices] = useState([]);
  const [tags, setTags] = useState([]);
  const formEl = useRef(null);
  const checkedTags = [];

  function checkClick(event) {
    const tagName = event.target.value;
    console.log("checkClick -> tagName", tagName);
    const checkingTags = checkedTags.indexOf(tagName);
    if (checkingTags > -1) {
      checkedTags.splice(checkingTags, 1);
    } else {
      checkedTags.push(tagName);
      setTags((tags) => [...tags, checkedTags]);
    }
  }

  useEffect(() => {
    console.log("Page Mounted");
  }, []);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(formObject);
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
        logo: logo,
        menuOrServices: menuOrServices,
        tags: tags,
      })
        .then((res) => {
          formEl.current.reset();
        })
        .catch((err) => console.log(err));
    });
  }

  function showUploadWidget(name, event) {
    event.preventDefault();
    window.photoType = name;
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
      switch (window.photoType) {
        case "logo":
          setLogo((logo) => [...logo, imageUrl]);
          break;
        case "photos":
          setImages((images) => [...images, imageUrl]);
          break;
        case "menuOrServices":
          setMenuOrServices((menuOrServices) => [...menuOrServices, imageUrl]);
          break;
        default:
          break;
      }
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
                      <Hours />
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
                      <button
                        name="logo"
                        onClick={(e) => showUploadWidget("logo", e)}
                      >
                        Upload Logo
                      </button>
                      <br />
                      <button
                        name="photos"
                        onClick={(e) => showUploadWidget("photos", e)}
                      >
                        Upload Photos
                      </button>
                      <br />
                      <button
                        name="menuOrServices"
                        onClick={(e) => showUploadWidget("menuOrServices", e)}
                      >
                        Upload Menu or Pricing List
                      </button>
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
                      <Checkbox onChange={checkClick} />
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
