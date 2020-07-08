import React from "react";

class Agent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      agentlist: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:4040/agents")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ agentlist: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h2 style={{ marginLeft: "20px" }}>AGENT DETAILS</h2>

        <table>
          <thead>
            <tr>
              <th>NAME</th>
              <th style={{ margnRight: "0px", marginLeft: "0px" }}>
                MOBILE NUMBER
              </th>
              <th style={{ marginLeft: "0px", marginRight: "0px" }}>
                EMAIL ADDRESS
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.agentlist.map((agent, index) => (
              <tr key={index}>
                <td>
                  {agent.name.first} {agent.name.last}
                </td>
                <td>{agent.mobile}</td>
                <td>{agent.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Agent;
