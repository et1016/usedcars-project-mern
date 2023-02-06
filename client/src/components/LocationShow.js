import React from "react";
import ReactDOM from "react-dom";
import landmark from "../Assets/landmark.png";
import telephone from "../Assets/telephone.png";

const appRootEl = document.getElementById("root");

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.el = document.createElement("div");
  }

  componentDidMount() {
    appRootEl.appendChild(this.el);
  }

  componentWillUnmount() {
    appRootEl.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

class LocationShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false, telephoneShow: false };

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
    this.handleTelephoneShow = this.handleTelephoneShow.bind(this);
    this.handleTelephoneHide = this.handleTelephoneHide.bind(this);
  }

  handleShow() {
    this.setState({ showModal: true });
  }

  handleHide() {
    this.setState({ showModal: false });
  }

  handleTelephoneShow() {
    this.setState({ telephoneShow: true });
  }

  handleTelephoneHide() {
    this.setState({ telephoneShow: false });
  }

  render() {
    const modal = this.state.showModal ? (
      <Modal>
        <div className="modal">
          <div className="filter" onClick={this.handleHide}></div>

          <div className="modal-background">
            <div className="modal-background-navbar">
              <h2>車輛位置 :</h2>

              <p onClick={this.handleHide}>✕</p>
            </div>

            <iframe
              title="google-map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57840.07730496881!2d121.4316216!3d25.0339101!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346802bc26ab658b%3A0x9fe68e1fa0bf0ef2!2z5ZCJ6aeV5YGc6LuK5aC0!5e0!3m2!1szh-TW!2stw!4v1670905024020!5m2!1szh-TW!2stw"
              width="100%"
              height="80%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Modal>
    ) : null;

    const modalImg = this.state.telephoneShow ? (
      <Modal>
        <div className="modal">
          <div className="filter" onClick={this.handleTelephoneHide}></div>

          <div className="modal-background">
            <div className="modal-background-navbar">
              <h2>聯絡資訊 :</h2>

              <p onClick={this.handleTelephoneHide}>✕</p>
            </div>

            <h2 style={{ padding: "25px" }}>電話 : 0900-000-000</h2>
          </div>
        </div>
      </Modal>
    ) : null;

    return (
      <div className="modal-front">
        <div className="location-container">
          <img src={landmark} alt="landmark" />

          <p onClick={this.handleShow}>220 台灣新北市板橋區信義路279巷</p>
          {modal}
        </div>

        <img
          style={{ width: "20%", marginTop: "1rem" }}
          src={telephone}
          alt="telephone"
          onClick={this.handleTelephoneShow}
        />

        {modalImg}
      </div>
    );
  }
}

export default LocationShow;
