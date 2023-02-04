import React, { useState } from "react";
import { Grid } from "@mui/material";
import MainNavbar from "../LandingPage/Navbar/MainNavbar";
import Calculator from "../LandingPage/RebateCalculator/Calculator";
import Sidebar from "../Sidebar/Sidebar";
import BrokersList from "../Broker/BrokersList/BrokersList";
import BrokerType from "../Broker/BrokerType/BrokerType";
import EarningDetails from "../Broker/Earning/EarningDetails";
import ForexSearch from "../Broker/ForexSearch/ForexSearch";
import { SettingOutlined } from "@ant-design/icons";
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

const { Panel } = Collapse;
const { Option } = Select;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Blogs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
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

  return (
    <div className="">
      {contextHolder}
      <div>
        <Grid item xs={12}>
          <MainNavbar />
        </Grid>
        <div className="row p-0 m-0">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="col-9">
            <div className="container-md container-fluid mt-3 mb-3 h-100">
              <h1>Blogs </h1>
              <div className="row">
                <div className="col-xs-6 col-sm-4 ">
                  <div className="card m-0">
                    <p className="img-card">
                      <img
                        className="w-100"
                        src={require("../../assets/card.png")}
                      />
                    </p>

                    <div className="card-content p-2">
                      <h4 className="card-title pt-2">
                        <p href="#">Blog Title</p>
                      </h4>
                      {/* <div
                            className="text-capitalize richtextimagesize "
                            dangerouslySetInnerHTML={{
                              __html: JSON.parse(el?.newsDescription),
                            }}
                          /> */}
                      <p className="">
                        sa Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Tempore, quaerat. ...
                      </p>
                    </div>
                    <Button className="btn-green m-2">Read More</Button>
                  </div>
                </div>
                <div className="col-xs-6 col-sm-4 ">
                  <div className="card m-0">
                    <p className="img-card">
                      <img
                        className="w-100"
                        src={require("../../assets/card.png")}
                      />
                    </p>

                    <div className="card-content p-2">
                      <h4 className="card-title pt-2">
                        <p href="#">Blog Title</p>
                      </h4>
                      {/* <div
                            className="text-capitalize richtextimagesize "
                            dangerouslySetInnerHTML={{
                              __html: JSON.parse(el?.newsDescription),
                            }}
                          /> */}
                      <p className="">
                        sa Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Tempore, quaerat. ...
                      </p>
                    </div>
                    <Button className="btn-green m-2">Read More</Button>
                  </div>
                </div>
                <div className="col-xs-6 col-sm-4 ">
                  <div className="card m-0">
                    <p className="img-card">
                      <img
                        className="w-100"
                        src={require("../../assets/card.png")}
                      />
                    </p>

                    <div className="card-content p-2">
                      <h4 className="card-title pt-2">
                        <p href="#">Blog Title</p>
                      </h4>
                      {/* <div
                            className="text-capitalize richtextimagesize "
                            dangerouslySetInnerHTML={{
                              __html: JSON.parse(el?.newsDescription),
                            }}
                          /> */}
                      <p className="">
                        sa Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Tempore, quaerat. ...
                      </p>
                    </div>
                    <Button className="btn-green m-2">Read More</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
