/* eslint-disable react/prop-types */
const Search = ({handleSearch}) => {
  return (
    <div className="text-center my-3">
      <span>Search: </span>
      <input type="text" onChange={handleSearch} />
     
    </div>
  );
};
export default Search;
 {/* <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form> */}
