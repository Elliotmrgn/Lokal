import React from "react"
import './Homepage.css';

function Homepage() {

    return (
        <Container fluid>
          <Row>
            <Col size="md-6">
              <Card title="What Books Should I Read?">
                <form ref={formEl}>
                  <Input
                    onChange={handleInputChange}
                    name="title"
                    placeholder="Title (required)"
                  />
                  <Input
                    onChange={handleInputChange}
                    name="author"
                    placeholder="Author (required)"
                  />
                  <TextArea
                    onChange={handleInputChange}
                    name="synopsis"
                    placeholder="Synopsis (Optional)"
                  />
                  <FormBtn
                    disabled={!(formObject.author && formObject.title)}
                    onClick={handleFormSubmit}
                  >
                    Submit Book
                  </FormBtn>
                </form>
              </Card>
            </Col>
            <Col size="md-6 sm-12">
              <Card title="Books On My List">
                {/* {books.length ? (
                  <List>
                    {books.map((book) => (
                      <ListItem key={book._id}>
                        <Link to={"/books/" + book._id}>
                          <strong>
                            {book.title} by {book.author}
                          </strong>
                        </Link>
                        <DeleteBtn onClick={() => deleteBook(book._id)} />
                      </ListItem>
                    ))}
                  </List>
                ) : ( */}
                <h3>No Results to Display</h3>
                {/* )} */}
              </Card>
            </Col>
          </Row>
        </Container>
      );
    }
    

export default Homepage;
