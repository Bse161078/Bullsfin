import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Sidebar from "../Sidebar/Sidebar";
import MainNavbar from "../LandingPage/Navbar/MainNavbar";
import BrokerType from "./BrokerType/BrokerType";
import EarningDetails from "./Earning/EarningDetails";
import BrokersList from "./BrokersList/BrokersList";
import Calculator from "../LandingPage/RebateCalculator/Calculator";
import ForexSearch from "./ForexSearch/ForexSearch";
import { firebase, db } from "../../Firebase/config";
import { useNavigate } from "react-router-dom";
import { Card, Spin } from "antd";

import { CardContent, Typography } from "@mui/material";
import { Checkbox, Divider, Form, Select } from "antd";
function Broker() {
  const [brokers, setBrokers] = useState([]);
  const [copyBrokers, setcopyBrokers] = useState([]);

  const [searchData, setsearchData] = useState([]);
  const getPopupContainer = (triggerNode) => {
    return triggerNode.parentNode;
  };
  const [loading, setloading] = useState(false);
  const handleFilterChange = (value, type) => {
    let newva;
    switch (type) {
      case "BrokerType":
        newva = copyBrokers.filter((el) => el.brokerType === value);
        break;
      case "Country":
        newva = copyBrokers.filter((el) => el.country === value);
        break;
      case "OfficeCountry":
        newva = copyBrokers.filter((el) => el.officeCountry === value);
        break;
      case "Regulation":
        newva = copyBrokers.filter((el) => el.regulation === value);
        break;
      case "AccountOption":
        newva = copyBrokers.filter((el) => el.accountOption === value);
        break;
      case "Trading":
        newva = copyBrokers.filter((el) => el.trading === value);
        break;
      case "Account":
        newva = copyBrokers.filter((el) => el.account === value);
        break;
      default:
        break;
    }
    console.log(newva);
    setBrokers(newva);
  };

  useEffect(() => {
    const getSearchData = async () => {
      setloading(true);
      const arr = [];
      db.collection("ForexCashback")
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            console.log(doc.id, "=>", doc.data());
            arr.push(doc.data());
          });
          setsearchData(arr);
          setloading(false);
        })
        .catch((error) => {
          setloading(false);

          console.error("Error getting documents: ", error);
        });
    };
    getSearchData();
  }, []);
  useEffect(() => {
    const getBrokers = async () => {
      setloading(true);
      const arr = [];
      db.collection("brokers")
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            console.log(doc.id, "=>", doc.data());
            arr.push(doc.data());
          });
          setBrokers(arr);
          setcopyBrokers(arr);
          setloading(false);
        })
        .catch((error) => {
          setloading(false);

          console.error("Error getting documents: ", error);
        });
    };
    getBrokers();
  }, []);
  return (
    <Grid container>
      <Grid item xs={12}>
        <MainNavbar />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={0.2}></Grid>
          <Grid item xs={2.8}>
            <Sidebar />
          </Grid>
          <Grid item xs={9}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <BrokerType />
              </Grid>
              <Grid item xs={12}>
                <EarningDetails />
              </Grid>
              <Grid item xs={7}>
                <Spin spinning={loading}>
                  {brokers.map((broker, ind) => {
                    return <BrokersList broker={broker} ind={ind} />;
                  })}
                </Spin>
              </Grid>

              <Grid item xs={5}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Calculator />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item xs={10}>
                        <Card className="mb-3">
                          <CardContent elevation={11}>
                            <Typography variant="h6">
                              Forex cashback search
                            </Typography>
                            <Typography variant="subtitle1">
                              General Information
                            </Typography>
                          </CardContent>
                          <div className="px-3 ">
                            <div>
                              <Select
                                allowClear
                                getPopupContainer={getPopupContainer}
                                className="w-100 my-select-class mb-3"
                                placeholder="Select Broker type"
                                style={{ width: 120 }}
                                onChange={(e) =>
                                  handleFilterChange(e, "BrokerType")
                                }
                              >
                                {searchData
                                  .filter(
                                    (el) =>
                                      el.ForexCashbackSearch === "BrokerType"
                                  )
                                  .map((e) => {
                                    return (
                                      <Select.Option value={e.name}>
                                        {e.name}
                                      </Select.Option>
                                    );
                                  })}
                              </Select>
                            </div>

                            <div>
                              <Select
                                allowClear
                                getPopupContainer={getPopupContainer}
                                className="w-100 my-select-class mb-3"
                                placeholder="Select  Country"
                                style={{ width: 120 }}
                                onChange={(e) =>
                                  handleFilterChange(e, "Country")
                                }
                              >
                                {searchData
                                  .filter(
                                    (el) => el.ForexCashbackSearch === "Country"
                                  )
                                  .map((e) => {
                                    return (
                                      <Select.Option value={e.name}>
                                        {e.name}
                                      </Select.Option>
                                    );
                                  })}
                              </Select>
                            </div>
                            <div>
                              <Select
                                allowClear
                                getPopupContainer={getPopupContainer}
                                onChange={(e) =>
                                  handleFilterChange(e, "OfficeCountry")
                                }
                                className="w-100 my-select-class mb-3 "
                                placeholder="Select Office Country"
                                style={{ width: 120 }}
                              >
                                {searchData
                                  .filter(
                                    (el) =>
                                      el.ForexCashbackSearch === "OfficeCountry"
                                  )
                                  .map((e) => {
                                    return (
                                      <Select.Option value={e.name}>
                                        {e.name}
                                      </Select.Option>
                                    );
                                  })}
                              </Select>
                            </div>
                            <div className="mb-3">
                              <Select
                                onChange={(e) =>
                                  handleFilterChange(e, "Regulation")
                                }
                                allowClear
                                getPopupContainer={getPopupContainer}
                                className="w-100 my-select-class mb-3"
                                style={{ width: 120 }}
                                placeholder="Select Regulation"
                              >
                                {searchData
                                  .filter(
                                    (el) =>
                                      el.ForexCashbackSearch === "Regulation"
                                  )
                                  .map((e) => {
                                    return (
                                      <Select.Option value={e.name}>
                                        {e.name}
                                      </Select.Option>
                                    );
                                  })}
                              </Select>
                            </div>

                            <div>
                              <Select
                                onChange={(e) =>
                                  handleFilterChange(e, "AccountOption")
                                }
                                allowClear
                                getPopupContainer={getPopupContainer}
                                className="w-100 my-select-class mb-3 mb-3"
                                placeholder="Account Option"
                                style={{ width: 120 }}
                              >
                                {searchData
                                  .filter(
                                    (el) =>
                                      el.ForexCashbackSearch === "AccountOption"
                                  )
                                  .map((e) => {
                                    return (
                                      <Select.Option value={e.name}>
                                        {e.name}
                                      </Select.Option>
                                    );
                                  })}
                              </Select>
                            </div>
                            <div>
                              <Select
                                onChange={(e) =>
                                  handleFilterChange(e, "CustomerService")
                                }
                                allowClear
                                getPopupContainer={getPopupContainer}
                                className="w-100 my-select-class mb-3 mb-3"
                                placeholder="Customer Service"
                                style={{ width: 120 }}
                              >
                                {searchData
                                  .filter(
                                    (el) =>
                                      el.ForexCashbackSearch ===
                                      "CustomerService"
                                  )
                                  .map((e) => {
                                    return (
                                      <Select.Option value={e.name}>
                                        {e.name}
                                      </Select.Option>
                                    );
                                  })}
                              </Select>
                            </div>
                            <div>
                              <Select
                                allowClear
                                getPopupContainer={getPopupContainer}
                                className="w-100 my-select-class mb-3 mb-3"
                                placeholder="Trading"
                                style={{ width: 120 }}
                                onChange={(e) =>
                                  handleFilterChange(e, "Trading")
                                }
                              >
                                {searchData
                                  .filter(
                                    (el) => el.ForexCashbackSearch === "Trading"
                                  )
                                  .map((e) => {
                                    return (
                                      <Select.Option value={e.name}>
                                        {e.name}
                                      </Select.Option>
                                    );
                                  })}
                              </Select>
                            </div>
                            <div>
                              <Select
                                allowClear
                                getPopupContainer={getPopupContainer}
                                className="w-100 my-select-class mb-3 mb-3"
                                placeholder="Account"
                                style={{ width: 120 }}
                                onChange={(e) =>
                                  handleFilterChange(e, "Account")
                                }
                              >
                                {searchData
                                  .filter(
                                    (el) => el.ForexCashbackSearch === "Account"
                                  )
                                  .map((e) => {
                                    return (
                                      <Select.Option value={e.name}>
                                        {e.name}
                                      </Select.Option>
                                    );
                                  })}
                              </Select>
                            </div>
                          </div>
                        </Card>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Broker;
