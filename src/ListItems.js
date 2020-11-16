import React, { Component } from "react";
import axios from "axios";
import { Modal } from "antd";
import "antd/dist/antd.css";
export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [],
      visible: false,
    };
  }

  handleButton = (first_name) => {
    alert(first_name);
  };
  handleModal = () => {
    this.setState({
      visible: true,
    });
  };

  componentDidMount() {
    axios({
      method: "get",
      url: "https://reqres.in/api/users",
      headers: {
        accept: "*/*",
      },
    })
      .then((data) => {
        console.log(data.data);
        this.setState({
            listData: data.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div className="boxWhite">
          <center>
            <h1>List User</h1>
          </center>
          <Modal
            title="LIST DETAIL USER"
            centered
            visible={this.state.visible}
            onOk={() => this.setState({ visible: false })}
            onCancel={() => this.setState({ visible: false })}
            width={500}
          >
            <div style={{ textAlign: "center" }}>
                <p>isi disinii ya buat tugas ntar :D</p>
            </div>
          </Modal>

           {this.state.listData.map((results, index) => {
            return (
              <div className="card" key={results.id}>
                <div className="card-body">
                  <h6 className="card-title">Email : {results.email}</h6>
                  <h6 className="card-subtitle mb-2 text-muted">
                    First name : {results.first_name}
                  </h6>
                  <p className="card-text">Last Name : {results.last_name}</p>
                </div>
                <button
                  className="button"
                  onClick={() => this.handleModal()}
                >
                  {" "}
                  klik aku
                </button>
              </div>
            );
          })} 
        </div>
      </div>
    );
  }
}
