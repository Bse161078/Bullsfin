import React, { useState } from "react";
import { Grid } from "@mui/material";
import MainNavbar from "../LandingPage/Navbar/MainNavbar";
import Sidebar from "../Sidebar/Sidebar";
import { Button, Collapse, Divider, Select, Table, Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";

const { Panel } = Collapse;
const { Option } = Select;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Support = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: `Tab 1`,
      children: `Content of Tab Pane 1`,
    },
    {
      key: "2",
      label: `Tab 2`,
      children: `Content of Tab Pane 2`,
    },
    {
      key: "3",
      label: `Tab 3`,
      children: `Content of Tab Pane 3`,
    },
  ];
  return (
    <div className="">
      <div>
        <Grid item xs={12}>
          <MainNavbar />
        </Grid>
        <div className="row g-3">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="col-10">
            <div className="row">
              <div className="col-10">
                <div className="">
                  <Tabs defaultActiveKey="1" onChange={onChange}>
                    <TabPane tab="Frequently asked questions" key="1">
                      <Collapse defaultActiveKey={["1"]} ghost>
                        <Panel
                          className="whiteCard p-3 mb-4"
                          header={<h6>1- How Forex Cashback works?</h6>}
                          key="1"
                        >
                          It is all quite very simple. You open an account
                          through us with your selected broker, apply it in
                          PAYBACKFX and every trade you make will earn you a
                          rebate, whether it makes profit or not.
                        </Panel>
                        <Panel
                          className="whiteCard p-3 mb-4"
                          header={<h6>1- How Forex Cashback works?</h6>}
                          key="2"
                        >
                          It is all quite very simple. You open an account
                          through us with your selected broker, apply it in
                          PAYBACKFX and every trade you make will earn you a
                          rebate, whether it makes profit or not.
                        </Panel>
                        <Panel
                          className="whiteCard p-3 mb-4"
                          header={<h6>1- How Forex Cashback works?</h6>}
                          key="3"
                        >
                          It is all quite very simple. You open an account
                          through us with your selected broker, apply it in
                          PAYBACKFX and every trade you make will earn you a
                          rebate, whether it makes profit or not.
                        </Panel>
                        <Panel
                          className="whiteCard p-3 mb-4"
                          header={<h6>1- How Forex Cashback works?</h6>}
                          key="4"
                        >
                          It is all quite very simple. You open an account
                          through us with your selected broker, apply it in
                          PAYBACKFX and every trade you make will earn you a
                          rebate, whether it makes profit or not.
                        </Panel>
                        <Panel
                          className="whiteCard p-3 mb-4"
                          header={<h6>1- How Forex Cashback works?</h6>}
                          key="5"
                        >
                          It is all quite very simple. You open an account
                          through us with your selected broker, apply it in
                          PAYBACKFX and every trade you make will earn you a
                          rebate, whether it makes profit or not.
                        </Panel>
                        <Panel
                          className="whiteCard p-3 mb-4"
                          header={<h6>1- How Forex Cashback works?</h6>}
                          key="6"
                        >
                          It is all quite very simple. You open an account
                          through us with your selected broker, apply it in
                          PAYBACKFX and every trade you make will earn you a
                          rebate, whether it makes profit or not.
                        </Panel>
                        <Panel
                          className="whiteCard p-3 mb-4"
                          header={<h6>1- How Forex Cashback works?</h6>}
                          key="7"
                        >
                          It is all quite very simple. You open an account
                          through us with your selected broker, apply it in
                          PAYBACKFX and every trade you make will earn you a
                          rebate, whether it makes profit or not.
                        </Panel>
                        <Panel
                          className="whiteCard p-3 mb-4"
                          header={<h6>1- How Forex Cashback works?</h6>}
                          key="8"
                        >
                          It is all quite very simple. You open an account
                          through us with your selected broker, apply it in
                          PAYBACKFX and every trade you make will earn you a
                          rebate, whether it makes profit or not.
                        </Panel>
                        <Panel
                          className="whiteCard p-3 mb-4"
                          header={<h6>1- How Forex Cashback works?</h6>}
                          key="9"
                        >
                          It is all quite very simple. You open an account
                          through us with your selected broker, apply it in
                          PAYBACKFX and every trade you make will earn you a
                          rebate, whether it makes profit or not.
                        </Panel>
                        <Panel
                          className="whiteCard p-3 mb-4"
                          header={<h6>1- How Forex Cashback works? </h6>}
                          key="10"
                        >
                          It is all quite very simple. You open an account
                          through us with your selected broker, apply it in
                          PAYBACKFX and every trade you make will earn you a
                          rebate, whether it makes profit or not.
                        </Panel>
                      </Collapse>
                    </TabPane>
                    <TabPane tab="Payment" key="2"></TabPane>
                    <TabPane tab="Privacy Policy" key="3">
                      Privacy Policy
                    </TabPane>
                    <TabPane tab="Term of service" key="3">
                      Term of service
                    </TabPane>
                    <TabPane tab="About" key="3">
                      About
                    </TabPane>
                    <TabPane tab="Contct Us" key="3"></TabPane>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
