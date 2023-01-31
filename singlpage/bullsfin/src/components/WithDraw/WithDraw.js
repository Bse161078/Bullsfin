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

const WithDraw = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const dataSource = [];

  const columns = [
    {
      title: "Tickets",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Rebates",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Time",
      dataIndex: "address",
      key: "address",
    },
  ];
  return (
    <div className="">
      <Grid container>
        <Grid item xs={12}>
          <MainNavbar />
        </Grid>
        <div className="row g-3">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="col-10">
            <div className="row">
              <div className="col-6">
                <div className="d-flex gap-4 justify-content-between">
                  <div>
                    <p className="fs-b-18 fw-bold">$ 178</p>
                    <p className="fs-b-14 text-muted mb-0">Total Balance</p>
                    <hr className="barrownhr mt-1" />
                  </div>
                  <div>
                    <p className="fs-b-18 fw-bold">$ 178</p>
                    <p className="fs-b-14 text-muted mb-0">Profit Withdrawn</p>
                    <hr className="barrownhr mt-1" />
                  </div>
                  <div>
                    <p className="fs-b-18 fw-bold">$ 178</p>
                    <p className="fs-b-14 text-muted mb-0">Pending profit</p>
                    <hr className="barrownhr mt-1" />
                  </div>
                  <div>
                    <p className="fs-b-18 fw-bold">$ 178</p>
                    <p className="fs-b-14 text-muted mb-0">Profit Available</p>
                    <hr className="barrownhr mt-1" />
                  </div>
                </div>
              </div>
              <div className="col-6 ">
                <div className="d-flex gap-4 justify-content-between px-3">
                  <Button className="btnLightBrown px-3 py-2">
                    Request Payment
                  </Button>
                  <Button className="btnLightBrown px-3 py-2">
                    Payment setting
                  </Button>
                  <Button className="btnLightBrown px-3 py-2">
                    Id verification
                  </Button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="whiteCard ">
                  <div className="px-3 pt-4">
                    <p className="fs-b-16">IMPORTANT</p>
                    <p className="fs-b-16">
                      A withdrawal request will be processed within 72 hours.
                    </p>
                  </div>
                  <Divider />
                  <div className="px-3">
                    <table className="">
                      <tr>
                        <th>Payment</th>
                        <th>Limit</th>
                        <th>Min</th>
                        <th>Fee</th>
                      </tr>
                      <tr>
                        <td>Skrill (EUR)</td>
                        <td>€5000 per Day</td>
                        <td>€1</td>
                        <td>0%</td>
                      </tr>
                      <tr>
                        <td>Skrill (EUR)</td>
                        <td>€5000 per Day</td>
                        <td>€1</td>
                        <td>0%</td>
                      </tr>
                      <tr>
                        <td>Skrill (EUR)</td>
                        <td>€5000 per Day</td>
                        <td>€1</td>
                        <td>0%</td>
                      </tr>
                      <tr>
                        <td>Skrill (EUR)</td>
                        <td>€5000 per Day</td>
                        <td>€1</td>
                        <td>0%</td>
                      </tr>
                    </table>
                    <p className="fs-r-16 p-3">
                      * Please note that your bank or payment processor may
                      charge additional fees to receive the funds.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="whiteCard ">
                  <div className="px-5 pt-4">
                    <p className="fs-b-16 ">PAYMENTS HISTORY</p>
                  </div>
                  <Divider />
                  <div className="px-3 pb-4">
                    <table className="">
                      <tr>
                        <th>Account ID</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Currency</th>
                      </tr>
                      <tr>
                        <td>23232</td>
                        <td>€5000 </td>
                        <td>12.11.2022</td>
                        <td>Pending </td>
                        <td>USD </td>
                      </tr>
                      <tr>
                        <td>23232</td>
                        <td>€5000 </td>
                        <td>12.11.2022</td>
                        <td>Pending </td>
                        <td>USD </td>
                      </tr>{" "}
                      <tr>
                        <td>23232</td>
                        <td>€5000 </td>
                        <td>12.11.2022</td>
                        <td>Pending </td>
                        <td>USD </td>
                      </tr>{" "}
                      <tr>
                        <td>23232</td>
                        <td>€5000 </td>
                        <td>12.11.2022</td>
                        <td>Pending </td>
                        <td>USD </td>
                      </tr>
                      <tr>
                        <td>23232</td>
                        <td>€5000 </td>
                        <td>12.11.2022</td>
                        <td>Pending </td>
                        <td>USD </td>
                      </tr>{" "}
                      <tr>
                        <td>23232</td>
                        <td>€5000 </td>
                        <td>12.11.2022</td>
                        <td>Pending </td>
                        <td>USD </td>
                      </tr>{" "}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="whiteCard w-100 pb-4 mb-3">
          <p className="fs-b-16 px-3 pt-3">REBATES PAYMENTS</p>
          <Divider />
          <Table className="w-100" dataSource={dataSource} columns={columns} />
        </div>
      </Grid>
    </div>
  );
};

export default WithDraw;
