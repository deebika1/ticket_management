import React from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactslist: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:4040/contacts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ contactslist: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h2 style={{ marginLeft: "20px" }}>CONTACTS DETAILS</h2>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th style={{ margnRight: "0px", marginLeft: "0px" }}>NAME</th>
              <th style={{ marginLeft: "0px", marginRight: "0px" }}>
                MOBILE NUMBER
              </th>
              <th style={{ marginLeft: "0px", marginRight: "0px" }}>
                EMAIL ADDRESS
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.contactslist.map((contact, index) => (
              <tr key={index}>
                <td>{contact.id}</td>
                <td>
                  {contact.name.first} {contact.name.last}
                </td>
                <td>{contact.mobile}</td>
                <td>{contact.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Contact;
