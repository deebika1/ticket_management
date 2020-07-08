import React from "react";

class Tickets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ticketslist: [],
      agentlist: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:4040/tickets")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ ticketslist: data });
        //console.log(this.state.ticketslist);
        return fetch("http://localhost:4040/agents");
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ agentlist: data });
      })
      .catch((err) => {
        //console.log(err);
      });
  }
  match = (agentid) => {
    const res = this.state.agentlist.reduce((acc, val) => {
      if (val.id === agentid) return val.name.first + " " + val.name.last;
      else return acc;
    }, " ");
    return res;
  };

  mobile1 = (agentid) => {
    const res = this.state.agentlist.reduce((acc, val) => {
      if (val.id === agentid) return val.mobile;
      else return acc;
    }, " ");
    return res;
  };

  email1 = (agentid) => {
    const res = this.state.agentlist.reduce((acc, val) => {
      if (val.id === agentid) return val.email;
      else return acc;
    }, " ");
    return res;
  };

  render() {
    return (
      <div>
        <h2 style={{ marginLeft: "20px" }}>TICKETS DETAILS</h2>

        <table>
          <thead>
            <tr>
              <th>MOBILE NUMBER</th>
              <th>EMAIL ADDRESS</th>
              <th>NAME</th>
            </tr>
          </thead>
          <tbody>
            {this.state.ticketslist.map((value, index) => (
              <tr key={index}>
                <td>{this.mobile1(value.agentId)}</td>
                <td>{this.email1(value.agentId)}</td>
                <td>{this.match(value.agentId)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Tickets;
