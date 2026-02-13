import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { SIH2k24WinnersAPI } from "../../APIs/resultAPI";
import "../../stylesheets/ResultPageStyle.css";

const SIH2k24WinnersList = () => {
  const [data] = useState(SIH2k24WinnersAPI);

  // For Searching
  const [search, setSearch] = useState("");
  return (
    <>
      <section className="container result margin-top-ultra-max">
        {/* <Form>
          <InputGroup className="my-3 search-bar">
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="search-input"
            />
          </InputGroup>
        </Form> */}

        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Position</th>
                <th scope="col">Leader Name</th>
                <th scope="col">Team Name</th>
                <th scope="col">InstituteName</th>
                <th scope="col">Theme</th>
                <th scope="col">PSCode</th>
                <th scope="col">PSTitle</th>
              </tr>
            </thead>
            <tbody>
              {data
                // .filter((item) => {
                //   return search.toLowerCase() === ""
                //     ? item
                //     : item.PSID.toLowerCase().includes(search) ||
                //         item.teamName.toLowerCase().includes(search) ||
                //         item.teamLeaderName.toLowerCase().includes(search) ||
                //         item.collage.toLowerCase().includes(search);
                // })
                .map((element, index) => {
                  return (
                    <>
                      <tr key={element.id}>
                        {/* <th scope="row">{element.id}</th> */}
                        <th scope="row" >{element.position}</th>
                        <td>{element.teamLeaderName}</td>
                        <td>{element.teamName}</td>
                        <td>{element.collage}</td>
                        <td>{element.organization}</td>
                        <td>{element.PSCategory}</td>
                        <td>{element.problemStatement}</td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default SIH2k24WinnersList;
