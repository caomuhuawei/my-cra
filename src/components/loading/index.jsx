import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import "./index.scss";

@inject("common")
@observer
class Loading extends Component {
  render() {
    const { common } = this.props;
    const { loading } = common;
    return (
      loading && (
        <div className="loading">
          <svg className="circular" viewBox="25 25 50 50">
            <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10" />
          </svg>
        </div>
      )
    );
  }
}
export default Loading;
