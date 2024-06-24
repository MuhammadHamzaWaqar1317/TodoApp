import React, { useState } from "react";
import { Row, Col, Checkbox } from "antd";
import { CiStar } from "react-icons/ci";
import { FaRegCircle } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { Flex, Layout, Button, Modal, Form, Input } from "antd";

function Todo() {
  const { Header, Footer, Sider, Content } = Layout;
  const [appendList, setAppendList] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [tasks, setTasks] = useState([]);

  //   <Checkbox.Group
  //     options={options}
  //     className="checkbox"
  //     style={{
  //       display: "flex",
  //       flexDirection: "column",
  //       fontSize: "90px",
  //     }}
  //   />;

  const handleSelect = (index) => {
    tasks[index].select = !tasks[index].select;
    setTasks([...tasks]);
    console.log(index);
  };

  const handleComplete = (index) => {
    tasks[index].status = !tasks[index].status;
    setTasks([...tasks]);
  };

  const handleDelete = () => {
    const Index = [];
    tasks.map((item, index) => {
      const { select } = item;
      if (!select) {
        Index.push(index);
        console.log("select", index);
        // tasks.splice(item, 1);
      }
    });

    console.log("Index: ", Index);

    Index.map((item) => {
      tasks.map((item, index) => {
        const { select } = item;
        if (!select) {
          tasks.splice(index, 1);
        }
      });
    });
    setTasks([...tasks]);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    const obj = { select: true, label: appendList, status: false };
    tasks.push(obj);

    setTasks([...tasks]);
    setAppendList("");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setAppendList("");
    console.log("cancel");
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setAppendList(e.target.value);
  };

  return (
    <>
      <div className="main">
        <Row>
          <div className="container">
            <Row>
              <Col>
                <h2 className="todoHeader">Tasks</h2>
              </Col>
            </Row>
            {/* <Col span={24}> */}
            {/* <div className="task">jh</div> */}

            {tasks?.map((item, index) => (
              <Row>
                <Col offset={0} lg={23} md={23} xs={22}>
                  <div className="task">
                    <div className="innerTask">
                      <span
                        onClick={() => handleSelect(index)}
                        className="icon"
                      >
                        {item.select ? (
                          <FaRegCircle size={20} color="white" />
                        ) : (
                          <FaCircle size={20} color="white" />
                        )}
                      </span>

                      {item.status ? (
                        <p className="para-not-complete">{item.label}</p>
                      ) : (
                        <p className="para">{item.label}</p>
                      )}
                      <span
                        className="lasticon"
                        onClick={() => handleComplete(index)}
                      >
                        {item.status ? (
                          <IoCheckmarkDoneCircle color="white" size={20} />
                        ) : (
                          <IoCheckmarkDoneCircleOutline
                            color="white"
                            size={20}
                          />
                        )}
                      </span>
                    </div>
                  </div>
                </Col>
              </Row>
            ))}

            {/* </Col> */}
            <Row>
              <Col offset={0}>
                <div className="footer">
                  <Button className="btn" onClick={showModal}>
                    Add
                  </Button>
                  <Button className="btn" onClick={handleDelete}>
                    Delete
                  </Button>
                  <Modal
                    title="Add Item"
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                  >
                    <Form>
                      <Form.Item>
                        <Input onChange={handleChange} value={appendList} />
                      </Form.Item>
                    </Form>
                  </Modal>
                </div>
              </Col>
            </Row>
          </div>
        </Row>
      </div>
    </>
  );
}

export default Todo;
