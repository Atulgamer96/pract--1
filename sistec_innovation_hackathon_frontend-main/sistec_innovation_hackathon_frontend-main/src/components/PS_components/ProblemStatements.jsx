import React, { useEffect, useState } from "react";
import problemStatementsAPI from "../../APIs/problemStatementsAPI";
import "../../stylesheets/PSPageStyle.css";
import { Form, InputGroup, Modal, Button, Spinner } from "react-bootstrap";
import { API_URL } from "../../store/apiurl";

const URL = `${API_URL}/api/problemStatements`;

const ProblemStatements = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ new state
  const [show, setShow] = useState(false);
  const [selectedElement, setSelectedElement] = useState(null);

  const getAllProblems = async () => {
    try {
      const response = await fetch(URL, {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        setData(data);
      } else {
        console.error("Failed to fetch problem statements:", response.statusText);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // ✅ stop loading in both success & error cases
    }
  };

  useEffect(() => {
    getAllProblems();
  }, []);

  //for the popup problem description
  const handleShow = (element) => {
    setSelectedElement(element);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  // Searching
  const [search, setSearch] = useState("");

  // ✅ Filter data once
  const filteredData = data.filter((item) => {
    return search.toLowerCase() === ""
      ? item
      : item.PSNumber.toLowerCase().includes(search.toLowerCase()) ||
          item.problemStatement.toLowerCase().includes(search.toLowerCase()) ||
          item.organization.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <section className="container problem-statements margin-top-ultra-max">
        <Form>
          <InputGroup className="my-3 search-bar">
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by PS Number, Problem Statement, or Organization" // ✅ improved placeholder
              className="search-input"
            />
          </InputGroup>
        </Form>

        {loading ? (
          // ✅ Centered Spinner
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "200px" }}>
            <Spinner animation="border" role="status" variant="success" />
            <span className="ms-2">Loading problem statements...</span>
          </div>
        ) : (
          <div className="table-responsive">
            {filteredData.length === 0 ? (
              // ✅ Show message when no search results found
              <div className="text-center p-4">
                <h5 style={{ color: "var(--text-black-700)" }}>
                  No problem statements found for your search.
                </h5>
              </div>
            ) : (
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">S. No.</th>
                    <th scope="col">Organization</th>
                    <th scope="col">Problem Statement</th>
                    <th scope="col">PS Number</th>
                    <th scope="col">Category</th>
                    <th scope="col">Domain Bucket</th>
                    <th scope="col">Problem Description</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData
                    .sort((a, b) => a.id - b.id)
                    .map((element) => {
                      return (
                        <tr key={element.id}>
                          <th scope="row">{element.id}</th>
                          <td>{element.organization}</td>
                          <td>{element.problemStatement}</td>
                          <td>{element.PSNumber}</td>
                          <td>{element.category}</td>
                          <td>{element.domainBucket}</td>
                          <td>
                            <button className="btn" onClick={() => handleShow(element)}>
                              View Description
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            )}

            {selectedElement && (
              <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                  <Modal.Title>PS Code: {selectedElement.PSNumber}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <strong>Problem Statement:</strong> {selectedElement.problemStatement}
                  <br />
                  <br />
                  <strong>Description:</strong> {selectedElement.description}
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            )}
          </div>
        )}
      </section>
    </>
  );
};

export default ProblemStatements;
