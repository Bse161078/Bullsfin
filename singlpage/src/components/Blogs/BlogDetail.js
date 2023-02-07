import React, { useState } from "react";
import { Grid } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import Moment from "react-moment";
import {
  Button,
  Checkbox,
  Collapse,
  Form,
  Input,
  Modal,
  notification,
  Select,
  Table,
  Timeline,
} from "antd";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import MainNavbar from "../LandingPage/Navbar/MainNavbar";
import Sidebar from "../Sidebar/Sidebar";
const { Panel } = Collapse;
const { Option } = Select;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const BlogDetail = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const { state, broker } = useLocation();
  console.log(state);
  const showConfirmModal = () => {
    setIsConfirmModalOpen(!isConfirmModalOpen);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "Account Added",
      description: "Congratulations! Your account was added successfully.",
    });
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onChange = (key) => {
    console.log(key);
  };
  const millisecondsTimestamp = state.broker.nanoseconds / 1000000;
  return (
    <div className="">
      {contextHolder}
      <dic className="container">
        <Grid item xs={12}>
          <MainNavbar />
        </Grid>
        <div className="row p-0 m-0">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="col-9">
            <div className="row mb-3 ">
              <div className="col-8 ">
                <img className="w-100" src={state.broker.image} />
              </div>
              <br />
              <br />

              <h1 className="mb-0 mt-4">{state.broker.title}</h1>
              <div className="d-flex justify-content-between">
                <p className="text-muted">posted By:{state.broker.postBy}</p>
                <p>
                  {/* {state?.broker?.createdat} */}
                  {/* <Moment format="YYYY/MM/DD">{state.broker.createdat}</Moment> */}
                  {/* {millisecondsTimestamp} */}
                  <Moment fromNow>{state.broker.seconds}</Moment>
                </p>
              </div>
              <br />
              <br />

              <div
                dangerouslySetInnerHTML={{
                  __html: state.broker.content,
                }}
              />
              <br />
              <br />
            </div>
            {/* <Collapse
              accordion
              ghost
              defaultActiveKey={["1"]}
              onChange={onChange}
              expandIconPosition={"end"}
              // expandIcon={({ isActive }) =>isActive? <CaretRightOutlined  />:}
            >
              <Panel
                style={{ borderRadius: "12px" }}
                className="whiteCard p-2 mb-3 border"
                // className="mb-3"
                header={
                  <p className="fs-b-18 fw-weight-600">General Information</p>
                }
                key="1"
              >
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  eos laboriosam dolor blanditiis sapiente placeat unde
                  quisquam, dicta ipsam iure reiciendis similique explicabo
                  voluptatibus accusantium ad. Repellat fugiat dolorum, neque
                  exercitationem reprehenderit aut iusto cupiditate consequuntur
                  quis ullam ea quae eaque explicabo ipsam necessitatibus
                  praesentium adipisci similique dolor nam sint alias expedita?
                  Recusandae itaque laborum cupiditate totam doloribus natus est
                  eveniet, veritatis magnam neque velit reprehenderit sint
                  officiis optio ullam iusto, dicta, nulla distinctio quia.
                  Repellat optio perspiciatis cumque modi magnam porro sunt
                  officia eum maxime at. Vero, unde itaque! Eos iste tenetur
                  blanditiis dolorum qui voluptatibus, atque aliquid nemo?
                </div>
              </Panel>
            </Collapse> */}
          </div>
        </div>
      </dic>
      <Modal
        title="Setup your live IC Trading Account"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <br />
        <Timeline>
          <Timeline.Item
            dot={
              <span
                className="p-1"
                style={{
                  height: "70px",
                  width: "70px",
                  borderRadius: "50%",
                  background: "#A97C50",
                  fontSize: "18px",
                  color: "#FFFFFF",
                }}
              >
                01
              </span>
            }
            color="red"
          >
            <div className="fs-b-18 fw-600">
              Open A Live Account With {state.broker.brokerName}
            </div>
            <br />
            <p className="text-muted">
              • When creating a new profile, choosing the EU entity will not
              allow you to use our service. Please choose a different entity to
              open a new profile.
              <br />
              • If you already have a live account that is set under a different
              IB, you must open a new account (under a new email) by clicking
              above.
              <br />• If the trading account is not set under any IB groups,
              enter the account number at Step 2 to send an IB change request to
              the broker.
            </p>
          </Timeline.Item>
          <Timeline.Item
            dot={
              <span
                className="p-1"
                style={{
                  height: "70px",
                  width: "70px",
                  borderRadius: "50%",
                  background: "#DAC9AE",
                  fontSize: "18px",
                  color: "#FFFFFF",
                }}
              >
                01
              </span>
            }
            color="red"
          >
            <div className="fs-b-18 fw-600">
              Provide Your Live {state.broker.brokerName} Account Number
            </div>
            <br />
            <div className="col-md-6 mb-2">
              <Input placeholder="Account Number" className="inputWhite" />
            </div>
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>
                I have read, understood and accepted the Terms and Conditions.
              </Checkbox>
            </Form.Item>
          </Timeline.Item>
          <Timeline.Item
            dot={
              <span
                className="p-1"
                style={{
                  height: "70px",
                  width: "70px",
                  borderRadius: "50%",
                  background: "#DAC9AE",
                  fontSize: "18px",
                  color: "#FFFFFF",
                }}
              >
                01
              </span>
            }
            color="red"
          >
            <div className="fs-b-18 fw-600">Submit Your Account</div>
            <br />
            <Button
              onClick={() => {
                showConfirmModal();
                handleCancel();
              }}
              className="btnBlack px-4 py-2"
            >
              Submit
            </Button>
          </Timeline.Item>
        </Timeline>
      </Modal>
      {/* Confirm Modal */}
      <Modal
        open={isConfirmModalOpen}
        // onOk={isConfirmModalOpen}
        // onCancel={isConfirmModalOpen}
        footer={null}
      >
        <br />
        <div className="text-center p-3">
          <h4>Do you want to confirm your account submission?</h4>
          <hr className="barrownhr" />
          <div className="d-flex gap-3">
            <Button className="btnWhite px-5 py-2">No</Button>
            <Button className="btnLightBrown px-5 py-2">Yes</Button>
          </div>
        </div>
      </Modal>
      <Modal
        open={isConfirmModalOpen}
        // onOk={isConfirmModalOpen}
        // onCancel={isConfirmModalOpen}
        footer={null}
      >
        <br />
        <div className="text-center p-3">
          <h4>Do you want to confirm your account submission?</h4>
          <hr className="barrownhr" />
          <div className="d-flex gap-3">
            <Button className="btnWhite px-5 py-2">No</Button>
            <Button
              className="btnLightBrown px-5 py-2"
              onClick={() => {
                openNotificationWithIcon("success");
                showConfirmModal(false);
              }}
            >
              Yes
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default BlogDetail;
