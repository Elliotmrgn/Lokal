import React, { useState, useEffect, useRef } from "react";
import { Container } from "../../components/Grid";
import { Card } from "../../components/Card";
import { Input, TextArea, FormBtn, Address } from "../../components/Form";
import API from "../../utils/API";
import Checkbox from "../../components/Checkbox";
import "./formstyles.css";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { useHistory } from 'react-router-dom';


function BusinessForm(props) {
  let history = useHistory();

  //IF edit mode
  const editMode = props.match.params.id;
  const [editBusiness, setEditBusiness] = useState([]);

  useEffect(() => {
    if(editMode) {
      loadBusiness();
    }
  }, []);

  function loadBusiness(){
    API.getProfile(editMode)
        .then((res) => {
        console.log(res.data);
        setEditBusiness(res.data);
      })
      .catch((err) => console.log(err));
    }



  const [business, setBusiness] = useState([]);
  const [formObject, setFormObject] = useState([]);
  const [images, setImages] = useState([]);
  const [logo, setLogo] = useState([]);
  const [menuOrServices, setMenuOrServices] = useState([]);
  const [tags, setTags] = useState([]);
  const formEl = useRef(null);

  function checkClick(event) {
    const tagName = event.target.value;

    if (tags.includes(tagName) === false) {
      setTags((tags) => [...tags, tagName]);
    } else {
    }
  }

  useEffect(() => {
    console.log(tags);
  }, [tags]);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    if(editMode) {
      event.preventDefault();

    API.addressConvert(
      `${formObject.street}, ${formObject.city}, ${formObject.state}`
    ).then((res) => {
      console.log("LAT, LONGGG", res.data.results);
      console.log("schedule fix", formObject.MonOpen);
      console.log("DOES THIS PASS DOWN", formObject);
      console.log("formObject.schedule:", formObject.schedule);

      API.updateBusiness(editMode, {
        owner: formObject.owner,
        businessName: formObject.businessName,
        phoneNumber: formObject.phoneNumber,
        email: formObject.email,
        about: formObject.about,
        instagram: formObject.instagram,
        facebook: formObject.facebook,
        website: formObject.website,
        schedule: {
          MonOpen: formObject.MonOpen,
          MonClose: formObject.MonClose,
          TuesOpen: formObject.TuesOpen,
          TuesClose: formObject.TuesClose,
          WedOpen: formObject.WedOpen,
          WedClose: formObject.WedClose,
          ThursOpen: formObject.ThursClose,
          ThursClose: formObject.ThursClose,
          FriOpen: formObject.FriOpen,
          FriClose: formObject.FriClose,
          SatOpen: formObject.SatOpen,
          SatClose: formObject.SatClose,
          SunOpen: formObject.SunOpen,
          SunClose: formObject.SunClose,
        },
        tagline: formObject.tagline,
        masks: formObject.masks,
        photos: images,
        street: formObject.street,
        city: formObject.city,
        state: formObject.state,
        zip: formObject.zip,
        lat: res.data.results[0].geometry.location.lat,
        lng: res.data.results[0].geometry.location.lng,
        logo: logo,
        menuOrServices: menuOrServices,
        tags: tags,
      })
        .then((res) => {
          console.log("res!!!!:", res);
          formEl.current.reset();
          history.push('/profilepage/' + editMode)
        })
        .catch((err) => console.log("aftersave" + err));
    });
  

    } else {
    event.preventDefault();

    API.addressConvert(
      `${formObject.street}, ${formObject.city}, ${formObject.state}`
    ).then((res) => {
      console.log("LAT, LONGGG", res.data.results);
      console.log("schedule fix", formObject.MonOpen);
      console.log("DOES THIS PASS DOWN", formObject);
      console.log("formObject.schedule:", formObject.schedule);

      API.saveBusiness({
        owner: formObject.owner,
        businessName: formObject.businessName,
        phoneNumber: formObject.phoneNumber,
        email: formObject.email,
        about: formObject.about,
        instagram: formObject.instagram,
        facebook: formObject.facebook,
        website: formObject.website,
        schedule: {
          MonOpen: formObject.MonOpen,
          MonClose: formObject.MonClose,
          TuesOpen: formObject.TuesOpen,
          TuesClose: formObject.TuesClose,
          WedOpen: formObject.WedOpen,
          WedClose: formObject.WedClose,
          ThursOpen: formObject.ThursClose,
          ThursClose: formObject.ThursClose,
          FriOpen: formObject.FriOpen,
          FriClose: formObject.FriClose,
          SatOpen: formObject.SatOpen,
          SatClose: formObject.SatClose,
          SunOpen: formObject.SunOpen,
          SunClose: formObject.SunClose,
        },
        tagline: formObject.tagline,
        masks: formObject.masks,
        photos: images,
        street: formObject.street,
        city: formObject.city,
        state: formObject.state,
        zip: formObject.zip,
        lat: res.data.results[0].geometry.location.lat,
        lng: res.data.results[0].geometry.location.lng,
        logo: logo,
        menuOrServices: menuOrServices,
        tags: tags,
      })
        .then((res) => {
          console.log("res!!!!:", res);
          formEl.current.reset();
        })
        .catch((err) => console.log("aftersave" + err));
    });
  }
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
            tabIcon: "#354959",
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

  // const saveHours = (event) => {
  //   const { name, value } = event.target;
  //   setHours(hours.push(name, value))
  // };

  return (
    <main>
      <Container fluid>
        <div className="titlecontainer">
          <span className="title">Create a listing for your business</span>
        </div>
        <Row className="mainContainer">
          <Col size="size-md-12">
            {/* <Card title="Welcome! Please fill out the following forms to set up your business."> */}
            <form ref={formEl}>
              <div className="row">
                <div className="col-md-4">
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
                      id="list-messages-list"
                      data-toggle="list"
                      href="#hours"
                      role="tab"
                      aria-controls="Hours"
                    >
                      Hours
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
                <div className="col-md-8">
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
                        class="form__field"
                        placeholder="Name of Business (Required)"
                        defaultValue={editMode ? editBusiness.businessName : ""}
                        // { ...editBusiness ? value= :  placeholder="Name of Business (Required)" }
                      />
                      <Input
                        onChange={handleInputChange}
                        name="owner"
                        placeholder="Owner Name (Required)"
                        defaultValue={editMode ? editBusiness.owner : ""}
                      />
                      <Input
                        onChange={handleInputChange}
                        name="tagline"
                        placeholder="Tagline (Required) - A short, one sentance description of your business and what is unique about it"
                        defaultValue={editMode ? editBusiness.tagline : ""}
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
                        type="number"
                        defaultValue={editMode ? editBusiness.phoneNumber : ""}

                      />
                      <Input
                        onChange={handleInputChange}
                        name="email"
                        placeholder="Email Address (Required)"
                        defaultValue={editMode ? editBusiness.email : ""}
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
                        placeholder="Instagram URL"
                        defaultValue={editMode ? editBusiness.instagram : ""}
                      />
                      <Input
                        onChange={handleInputChange}
                        name="facebook"
                        placeholder="Facebook URL"
                        defaultValue={editMode ? editBusiness.facebook : ""}

                      />
                      <Input
                        onChange={handleInputChange}
                        name="website"
                        placeholder="Website"
                        defaultValue={editMode ? editBusiness.website : ""}
                      />
                    </div>
                    {/* Hours */}
                    <div
                      className="tab-pane fade"
                      id="hours"
                      role="tabpanel"
                      aria-labelledby="list-messages-list"
                    >
                      {/* Monday Hours */}
                      <Row>
                        <Col size="size col-md-2">
                          <h4>Monday:</h4>
                        </Col>
                        <Col size="size col-md-2">
                          <Input
                            onChange={handleInputChange}
                            name="MonOpen"
                            placeholder="Open"
                            defaultValue={editMode ? editBusiness.MonOpen : ""}

                          />
                        </Col>
                        <Col size="size col-md-2">
                          <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Control
                              onSelect={handleInputChange}
                              name="AMorPM"
                              as="select"
                            >
                              <option>AM</option>
                              <option value="pm">PM</option>
                            </Form.Control>
                          </Form.Group>
                        </Col>
                        -
                        <Col size="size col-md-2">
                          <Input
                            onChange={handleInputChange}
                            name="MonClose"
                            placeholder="Close"
                            defaultValue={editMode ? editBusiness.MonClose : ""}
                          />
                        </Col>
                        <Col size="size col-md-2">
                          <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Control as="select">
                              <option>PM</option>
                              <option>AM</option>
                            </Form.Control>
                          </Form.Group>
                        </Col>
                      </Row>

                      {/* Tuesday Hours */}
                      <Row>
                        <Col size="size col-md-2">
                          <h4>Tuesday:</h4>
                        </Col>
                        <Col size="size col-md-2">
                          <Input
                            onChange={handleInputChange}
                            name="TuesOpen"
                            placeholder="Open"
                            defaultValue={editMode ? editBusiness.TuesOpen : ""}
                          />
                        </Col>
                        <Col size="size col-md-2">
                          <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Control as="select">
                              <option>AM</option>
                              <option>PM</option>
                            </Form.Control>
                          </Form.Group>
                        </Col>
                        -
                        <Col size="size col-md-2">
                          <Input
                            onChange={handleInputChange}
                            name="TuesClose"
                            placeholder="Close"
                            defaultValue={editMode ? editBusiness.TuesClose : ""}
                          />
                        </Col>
                        <Col size="size col-md-2">
                          <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Control as="select">
                              <option>PM</option>
                              <option>AM</option>
                            </Form.Control>
                          </Form.Group>
                        </Col>
                      </Row>

                      {/* Wedneday Hours */}
                      <Row>
                        <Col size="size col-md-2">
                          <h4>Wednesday:</h4>
                        </Col>
                        <Col size="size col-md-2">
                          <Input
                            onChange={handleInputChange}
                            name="WedOpen"
                            placeholder="Open"
                            defaultValue={editMode ? editBusiness.WedOpen : ""}
                          />
                        </Col>
                        <Col size="size col-md-2">
                          <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Control as="select">
                              <option>AM</option>
                              <option>PM</option>
                            </Form.Control>
                          </Form.Group>
                        </Col>
                        -
                        <Col size="size col-md-2">
                          <Input
                            onChange={handleInputChange}
                            name="WedClose"
                            placeholder="Close"
                            defaultValue={editMode ? editBusiness.WedClose : ""}
                          />
                          
                        </Col>
                        <Col size="size col-md-2">
                          <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Control as="select">
                              <option>PM</option>
                              <option>AM</option>
                            </Form.Control>
                          </Form.Group>
                        </Col>
                      </Row>

                      {/* Thursday */}

                      <Row>
                        <Col size="size col-md-2">
                          <h4>Thursday:</h4>
                        </Col>
                        <Col size="size md-2">
                          <Input
                            onChange={handleInputChange}
                            name="ThursOpen"
                            placeholder="Open"
                            defaultValue={editMode ? editBusiness.ThursOpen : ""}
                          />
                        </Col>
                        <Col size="size col-md-2">
                          <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Control as="select">
                              <option>AM</option>
                              <option>PM</option>
                            </Form.Control>
                          </Form.Group>
                        </Col>
                        -
                        <Col size="size col-md-2">
                          <Input
                            onChange={handleInputChange}
                            name="ThursClose"
                            placeholder="Close"
                            defaultValue={editMode ? editBusiness.ThursClose : ""}
                          />
                        </Col>
                        <Col size="size col-md-2">
                          <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Control as="select">
                              <option>PM</option>
                              <option>AM</option>
                            </Form.Control>
                          </Form.Group>
                        </Col>
                      </Row>

                      {/* Friday hours */}

                      <Row>
                        <Col size="size col-md-2">
                          <h4>Friday:</h4>
                        </Col>
                        <Col size="size md-2">
                          <Input
                            onChange={handleInputChange}
                            name="FriOpen"
                            placeholder="Open"
                            defaultValue={editMode ? editBusiness.FriOpen : ""}
                          />
                        </Col>
                        <Col size="size col-md-2">
                          <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Control as="select">
                              <option>AM</option>
                              <option>PM</option>
                            </Form.Control>
                          </Form.Group>
                        </Col>
                        -
                        <Col size="size col-md-2">
                          <Input
                            onChange={handleInputChange}
                            name="FriClose"
                            placeholder="Close"
                            defaultValue={editMode ? editBusiness.FriClose : ""}
                          />
                        </Col>
                        <Col size="size col-md-2">
                          <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Control as="select">
                              <option>PM</option>
                              <option>AM</option>
                            </Form.Control>
                          </Form.Group>
                        </Col>
                      </Row>

                      {/* Saturday hours */}

                      <Row>
                        <Col size="size col-md-2">
                          <h4>Saturday:</h4>
                        </Col>
                        <Col size="size col-md-2">
                          <Input
                            onChange={handleInputChange}
                            name="SatOpen"
                            placeholder="Open"
                            defaultValue={editMode ? editBusiness.SatOpen : ""}
                          />
                        </Col>
                        <Col size="size col-md-2">
                          <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Control as="select">
                              <option>AM</option>
                              <option>PM</option>
                            </Form.Control>
                          </Form.Group>
                        </Col>
                        -
                        <Col size="size md-2">
                          <Input
                            onChange={handleInputChange}
                            name="SatClose"
                            placeholder="Close"
                            defaultValue={editMode ? editBusiness.SatClose : ""}
                          />
                        </Col>
                        <Col size="size md-2">
                          <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Control as="select">
                              <option>PM</option>
                              <option>AM</option>
                            </Form.Control>
                          </Form.Group>
                        </Col>
                      </Row>

                      {/* sunday hours */}

                      <Row>
                        <Col size="size md-2">
                          <h4>Sudnay:</h4>
                        </Col>
                        <Col size="size md-2">
                          <Input
                            onChange={handleInputChange}
                            name="SunOpen"
                            placeholder="Open"
                            defaultValue={editMode ? editBusiness.SunOpen : ""}
                          />
                        </Col>
                        <Col size="size md-2">
                          <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Control as="select">
                              <option>AM</option>
                              <option>PM</option>
                            </Form.Control>
                          </Form.Group>
                        </Col>
                        -
                        <Col size="size md-2">
                          <Input
                            onChange={handleInputChange}
                            name="SunClose"
                            placeholder="Close"
                            defaultValue={editMode ? editBusiness.SunClose : ""}
                          />
                        </Col>
                        <Col size="size md-2">
                          <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Control as="select">
                              <option>PM</option>
                              <option>AM</option>
                            </Form.Control>
                          </Form.Group>
                        </Col>
                      </Row>
                    </div>
                    {/* Photos And Services */}
                    <div
                      className="tab-pane fade"
                      id="list-settings"
                      role="tabpanel"
                      aria-labelledby="list-settings-list"
                    >
                      <Button
                        className="ButtonText"
                        id="uploadButton"
                        name="logo"
                        variant="info"
                        size="sm"
                        onClick={(e) => showUploadWidget("logo", e)}
                      >
                        Upload Logo
                      </Button>
                      <br></br>
                      <Button
                        className="ButtonText"
                        id="uploadButton"
                        name="photos"
                        variant="info"
                        size="sm"
                        onClick={(e) => showUploadWidget("photos", e)}
                      >
                        Upload Photos
                      </Button>
                      <br></br>
                      <Button
                        className="ButtonText"
                        id="uploadButton"
                        name="menuOrServices"
                        variant="info"
                        size="sm"
                        onClick={(e) => showUploadWidget("menuOrServices", e)}
                      >
                        Upload PDF of Menu or Information
                      </Button>
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
                        defaultValue={editMode ? editBusiness.about : ""}
                      />
                      <Input
                        onChange={handleInputChange}
                        name="masks"
                        placeholder="Current News or Events (ex: does your business currently require masks?)"
                        defaultValue={editMode ? editBusiness.masks : ""}
                      />
                      <h4>
                        Select as many tags as apply to you, its how users will
                        be able to discover your business!
                      </h4>
                      <Checkbox onChange={checkClick} />
                    </div>
                  </div>
                </div>
              </div>

              <FormBtn
              className="form-button"
                // disabled={
                //   !(
                //     formObject.businessName &&
                //     formObject.phoneNumber &&
                //     formObject.email &&
                //     formObject.owner &&
                //     formObject.tagline &&
                //     formObject.street &&
                //     formObject.city &&
                //     formObject.state &&
                //     formObject.zip
                //   )
                // }
                onClick={handleFormSubmit}
              >
                Submit Business
              </FormBtn>
            </form>
            {/* </Card> */}
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default BusinessForm;
