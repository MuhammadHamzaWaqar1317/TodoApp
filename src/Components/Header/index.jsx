import React from "react";
import { Row, Col } from "antd";
function Header() {
  return (
    <>
      <Row className="header">
        <Col>
          <h4 className="header">
            <span className="to">to</span>
            <span className="do">do</span>
          </h4>
        </Col>
      </Row>
    </>
  );
}

export default Header;
