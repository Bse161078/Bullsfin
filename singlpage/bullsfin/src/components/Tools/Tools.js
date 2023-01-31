import React, { useState } from "react";
import { Grid } from "@mui/material";
import MainNavbar from "../LandingPage/Navbar/MainNavbar";
import Sidebar from "../Sidebar/Sidebar";
import { Button, Collapse, Divider, Select, Table } from "antd";

const { Panel } = Collapse;
const { Option } = Select;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Tools = () => {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div className="">
      <Grid container>
        <Grid item xs={12}>
          <MainNavbar />
        </Grid>
        <div className="row m-0 mb-3">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="col-7">
            <div className="d-flex">
              <Button className="btnLightBrown p-2 px-3 border-radius-none ">
                Subscription
              </Button>
              <Button className="btnWhite p-2 px-3 border-radius-none">
                Download
              </Button>
            </div>
            <p className="fs-b-16 mt-3 mb-3">
              How much forex Cashback can I earn?
            </p>
            <p className="fs-b-14 mb-3">
              Earnings will very much depend on the rebate rate of your broker,
              the instruments your trade as well as the volume of your trades.
              Use the calculator below to roughly estimate your earnings. Just
              as an example, with only 20 trades per day (0.1 lot size) and a
              rebate level of 0.5 pips, you could be making a monthly profit of
              $210 or a yearly profit of $2,520!
            </p>
            <input
              className="inputWhite w-100"
              placeholder="Name of your Broker"
            />
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el) => {
              return (
                <div className="mt-4 whiteCard p-3">
                  <div className="row">
                    <div className="col-md-3">
                      <img src={require("../../assets/FBS.png")} alt="" />
                    </div>
                    <div className="col-md-9">
                      <div className="d-flex justify-content-between pt-1 ">
                        <p className="fs-b-16 fw-bold">Standard MT4/MT5</p>
                        <p className="fs-b-16 fw-bold">Raw Spead</p>
                        <p className="fs-b-16 fw-bold">CTrader</p>
                      </div>
                      <Divider />
                      <div className="d-flex justify-content-between ">
                        <p className="fs-b-16 ">
                          Up to 0.409 Pips/Round Turn Lot
                        </p>
                        <p className="fs-b-16">37.3% of commision</p>
                        <p className="fs-b-16 ">$ 4.09/ Million</p>
                      </div>
                      <div className="d-flex justify-content-end gap-3 mt-3">
                        <Button className="btnBlack px-3 py-2">
                          Add account
                        </Button>
                        <Button className="btnLightGreen px-3 py-2">
                          More information
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default Tools;
