import React, { useState } from "react";
import { Grid } from "@mui/material";
import MainNavbar from "../LandingPage/Navbar/MainNavbar";
import Calculator from "../LandingPage/RebateCalculator/Calculator";
import Sidebar from "../Sidebar/Sidebar";
import BrokersList from "./BrokersList/BrokersList";
import BrokerType from "./BrokerType/BrokerType";
import EarningDetails from "./Earning/EarningDetails";
import ForexSearch from "./ForexSearch/ForexSearch";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { SettingOutlined } from "@ant-design/icons";
import EmailIcon from "@mui/icons-material/Email";
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
const { Panel } = Collapse;
const { Option } = Select;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const ProkerProfile = (props) => {
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
              <div className="col-md-7">
                <div className="whiteCard ">
                  <div className="d-flex justify-content-between align-items-center p-2">
                    <div className="d-flex align-items-center">
                      <img
                        style={{ width: "80px", borderRadius: "12px" }}
                        src={state.broker.brokerImages}
                        alt=""
                      />
                      <div className="px-2">
                        <p className="fs-b-16 fw-bold m-0">
                          {state.broker.brokerName}
                        </p>
                        <p className="fs-b-14 text-muted">
                          {state.broker.brokerType}
                        </p>
                      </div>
                    </div>
                    <button
                      className="btnLightBrown p-2 px-4"
                      onClick={showModal}
                    >
                      Setup account{" "}
                    </button>
                  </div>
                  {/* <Divider /> */}
                  <div className="row m-0 p-0 mt-3">
                    <div className="col border">
                      <div className="p-2">
                        <p className="fs-b-14 mb-0 fw-bold">Standard MT4/MT5</p>
                        <p className="fs-b-14 text-muted">
                          {state.broker?.Standard_MT4_MT5}
                        </p>
                      </div>
                    </div>
                    <div className="col border">
                      <div className="p-2">
                        <p className="fs-b-14 mb-0 fw-bold">Raw Spread</p>
                        <p className="fs-b-14 text-muted">
                          {state.broker?.Raw_Spead}
                        </p>
                      </div>
                    </div>
                    <div className="col border">
                      <div className="p-2">
                        <p className="fs-b-14 mb-0 fw-bold">cTrader</p>
                        <p className="fs-b-14 text-muted">
                          {state.broker?.CTrader}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3  gap-5 d-flex">
                    <p>
                      <EmailIcon /> {state.broker.BrokerEmail}
                    </p>
                    <p>
                      <LocalPhoneIcon /> {state.broker.BrokerPhone}
                    </p>
                  </div>
                </div>
                <div className="whiteCard mt-3">
                  <div className="p-3">
                    <p className="fs-b-20">Rebates / Cashback</p>
                    <p className="fs-b-14 text-muted">
                      Rebates for Raw Spread accounts are based on 37.5% out of
                      commissions paid.
                    </p>
                  </div>
                  <div className="">
                    <table>
                      <tr>
                        <th>Account type</th>
                        <th>Instrument</th>
                        <th>Per Lot</th>
                      </tr>

                      <tr>
                        <td rowspan="2" className="fs-b-14">
                          Standard MT4/MT5
                        </td>
                        <td className="text-muted fs-b-14">
                          FX Majors, Minors & Metals
                        </td>
                        <td className="text-muted fs-b-14">Indices & Crypto</td>
                      </tr>
                      <tr>
                        <td className="text-muted fs-b-14">Up to 0.409 Pips</td>
                        <td className="text-muted fs-b-14">Up to $1.70</td>
                      </tr>

                      <tr>
                        <td rowspan="2" className="fs-b-14">
                          Raw Spread (ECN) MT4/MT5
                        </td>
                        <td className="text-muted fs-b-14">Majors & Minors</td>
                        <td className="text-muted fs-b-14">Indices & Crypto</td>
                      </tr>
                      <tr>
                        <td className="text-muted fs-b-14">Up to 0.409 Pips</td>
                        <td className="text-muted fs-b-14">Up to $1.70</td>
                      </tr>

                      <tr>
                        <td rowspan="2" className="fs-b-14">
                          cTrader
                        </td>
                        <td className="text-muted fs-b-14">FX</td>
                        <td className="text-muted fs-b-14">$4.09/Million</td>
                      </tr>
                      <tr>
                        <td className="text-muted fs-b-14">Indices & Crypto</td>
                        <td className="text-muted fs-b-14">Up to $1.70</td>
                      </tr>
                      <tr>
                        <td className="fs-b-14" colspan={3}>
                          For the full rebate schedule, please refer here.
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="">
                  <Collapse
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
                        <p className="fs-b-18 fw-weight-600">
                          General Information
                        </p>
                      }
                      key="1"
                    >
                      <div className="d-flex justify-content-between border-bottom py-2">
                        <p className="fs-b-14 fw-weight-600">Broker</p>
                        <p className="fs-b-14 text-muted text-start">
                          {state.broker.brokerName}
                        </p>
                      </div>
                      <div className="d-flex justify-content-between border-bottom py-2">
                        <p className="fs-b-14 fw-weight-600">Broker type</p>
                        <p className="fs-b-14 text-muted text-start">
                          {state.broker.brokerType}
                        </p>
                      </div>
                      <div className="d-flex justify-content-between border-bottom py-2">
                        <p className="fs-b-14 fw-weight-600">Country</p>
                        <p className="fs-b-14 text-muted text-start">
                          {state.broker.brokerCountry}
                        </p>
                      </div>
                      <div className="d-flex justify-content-between border-bottom py-2">
                        <p className="fs-b-14 fw-weight-600">
                          Operating since year
                        </p>
                        <p className="fs-b-14 text-muted text-start">
                          {" "}
                          {state.broker.operating_Since_Year}
                        </p>
                      </div>
                      <div className="d-flex justify-content-between border-bottom py-2">
                        <p className="fs-b-14 fw-weight-600">
                          International offices
                        </p>
                        <p className="fs-b-14 text-muted text-start">
                          {state.broker.International_Offices}
                        </p>
                      </div>
                      <div className="d-flex justify-content-between border-bottom py-2">
                        <p className="fs-b-14 fw-weight-600">Regulation</p>
                        <p className="fs-b-14 text-muted text-start">
                          {state.broker.Regulation}
                        </p>
                      </div>
                      <div className="d-flex justify-content-between border-bottom py-2">
                        <p className="fs-b-14 fw-weight-600">Address</p>
                        <p className="fs-b-14 text-muted text-start">
                          {state.broker.address}
                        </p>
                      </div>
                      <div className="d-flex justify-content-between border-bottom py-2">
                        <p className="fs-b-14 fw-weight-600">Broker status</p>
                        <p className="fs-b-14 text-muted text-start">
                          {state.broker.brokerStatus}
                        </p>
                      </div>
                      <div className="d-flex justify-content-between border-bottom py-2">
                        <p className="fs-b-14 fw-weight-600">
                          Accepting US clients?
                        </p>
                        <p className="fs-b-14 text-muted text-start">
                          {state.broker.Accepting_US_clients}
                        </p>
                      </div>
                    </Panel>

                    <Panel
                      style={{ borderRadius: "12px" }}
                      className="whiteCard p-2 mb-3 border"
                      header={
                        <p className="fs-b-18 fw-weight-600">Account Options</p>
                      }
                      key="2"
                    >
                      <div className="d-flex justify-content-between border-bottom  py-2">
                        <p className="fs-b-14 fw-weight-600">
                          Account currency
                        </p>
                        <p className="fs-b-14 text-muted text-start">
                          {state.broker.accountCurrency}
                        </p>
                      </div>
                      <div className="d-flex justify-content-between border-bottom  py-2">
                        <p className="fs-b-14 fw-weight-600">
                          Funding/Withdrawal methods
                        </p>
                        <p className="fs-b-14 text-muted text-start">
                          {state.broker.Funding_Withdrawal_methods}
                        </p>
                      </div>
                      <div className="d-flex justify-content-between border-bottom  py-2">
                        <p className="fs-b-14 fw-weight-600">
                          Swap free accounts
                        </p>
                        <p className="fs-b-14 text-muted text-start">
                          {state.broker.Swap_free_accounts}
                        </p>
                      </div>
                      <div className="d-flex justify-content-between border-bottom  py-2">
                        <p className="fs-b-14 fw-weight-600">
                          Segregated accounts
                        </p>
                        <p className="fs-b-14 text-muted text-start">
                          {state.broker.segregated_Accounts}
                        </p>
                      </div>{" "}
                      <div className="d-flex justify-content-between border-bottom  py-2">
                        <p className="fs-b-14 fw-weight-600">
                          Interest on margin
                        </p>
                        <p className="fs-b-14 text-muted text-start">
                          {state.broker.Interest_on_margin}
                        </p>
                      </div>
                      <div className="d-flex justify-content-between border-bottom  py-2">
                        <p className="fs-b-14 fw-weight-600">
                          Managed accounts
                        </p>
                        <p className="fs-b-14 text-muted text-start">
                          {state.broker.Managed_accounts}
                        </p>
                      </div>
                      <div className="d-flex justify-content-between border-bottom  py-2">
                        <p className="fs-b-14 fw-weight-600">
                          Accounts for money managers (MAM, PAMM)
                        </p>
                        <p className="fs-b-14 text-muted text-start">
                          {state.broker.Accounts_for_money_managers}
                        </p>
                      </div>
                    </Panel>
                    <Panel
                      style={{ borderRadius: "12px" }}
                      className="whiteCard p-2 mb-3 border"
                      header={
                        <p className="fs-b-18 fw-weight-600">
                          Customer Service
                        </p>
                      }
                      key="3"
                    >
                      <div className="d-flex justify-content-between border-bottom  py-2">
                        <p className="fs-b-14 fw-weight-600">Phone</p>
                        <p className="fs-b-14 text-muted text-start">
                          {state.broker.customerPhone}
                        </p>
                      </div>
                      <div className="d-flex justify-content-between border-bottom  py-2">
                        <p className="fs-b-14 fw-weight-600">Fax</p>
                        <p className="fs-b-14 text-muted text-start">
                          {state.broker.customerFax}
                        </p>
                      </div>
                      <div className="d-flex justify-content-between border-bottom  py-2">
                        <p className="fs-b-14 fw-weight-600">Email</p>
                        <p className="fs-b-14 text-muted text-start">
                          {state.broker.customerRmail}
                        </p>
                      </div>
                      <div className="d-flex justify-content-between border-bottom  py-2">
                        <p className="fs-b-14 fw-weight-600">Languages</p>
                        <p className="fs-b-14 text-muted text-start">
                          {state.broker.customerLanguages}
                        </p>
                      </div>{" "}
                      <div className="d-flex justify-content-between border-bottom  py-2">
                        <p className="fs-b-14 fw-weight-600">Availability</p>
                        <p className="fs-b-14 text-muted text-start">
                          {state.broker.customerAvailability}
                        </p>
                      </div>
                    </Panel>
                    <Panel
                      style={{ borderRadius: "12px" }}
                      className="whiteCard p-2 mb-3 border"
                      header={<p className="fs-b-18 fw-weight-600">Trading</p>}
                      key="4"
                    >
                      <div className="d-flex justify-content-between border-bottom  py-2">
                        <p className="fs-b-14 fw-weight-600">
                          Trading Platforms
                        </p>
                        <p className="fs-b-14 text-muted text-start">
                          {state.broker.TradingPlatforms}
                        </p>
                      </div>
                      <div className="d-flex justify-content-between border-bottom  py-2">
                        <p className="fs-b-14 fw-weight-600">
                          Trading platform(s) timezone
                        </p>
                        <p className="fs-b-14 text-muted text-start">
                          {state.broker.Trading_platform_timezone}
                        </p>
                      </div>
                      <div className="d-flex justify-content-between border-bottom  py-2">
                        <p className="fs-b-14 fw-weight-600">Demo Account</p>
                        <p className="fs-b-14 text-muted text-start">
                          {state.broker.Demo_Account}
                        </p>
                      </div>
                      <div className="d-flex justify-content-between border-bottom  py-2">
                        <p className="fs-b-14 fw-weight-600">Mobile trading</p>
                        <p className="fs-b-14 text-muted text-start">
                          {state.broker.Mobile_trading}
                        </p>
                      </div>{" "}
                      <div className="d-flex justify-content-between border-bottom  py-2">
                        <p className="fs-b-14 fw-weight-600">
                          Web based trading
                        </p>
                        <p className="fs-b-14 text-muted text-start">
                          {state.broker.Web_based_trading}
                        </p>
                      </div>
                      <div className="d-flex justify-content-between border-bottom  py-2">
                        <p className="fs-b-14 fw-weight-600">API</p>
                        <p className="fs-b-14 text-muted text-start">
                          {state.broker.API}
                        </p>
                      </div>
                      <div className="d-flex justify-content-between border-bottom  py-2">
                        <p className="fs-b-14 fw-weight-600">OCO orders</p>
                        <p className="fs-b-14 text-muted text-start">
                          {state.broker.OCO_orders}
                        </p>
                      </div>
                      <div className="d-flex justify-content-between border-bottom  py-2">
                        <p className="fs-b-14 fw-weight-600">
                          Trading over the phone
                        </p>
                        <p className="fs-b-14 text-muted text-start">
                          {state.broker.Trading_over_the_phone}
                        </p>
                      </div>
                      <div className="d-flex justify-content-between border-bottom  py-2">
                        <p className="fs-b-14 fw-weight-600">Hedging allowed</p>
                        <p className="fs-b-14 text-muted text-start">
                          {state.broker.Hedging_allowed}
                        </p>
                      </div>
                      <div className="d-flex justify-content-between border-bottom  py-2">
                        <p className="fs-b-14 fw-weight-600">Trailing stops</p>
                        <p className="fs-b-14 text-muted text-start">
                          {state.broker.Trailing_stops}
                        </p>
                      </div>
                      <div className="d-flex justify-content-between border-bottom  py-2">
                        <p className="fs-b-14 fw-weight-600">
                          One click trading
                        </p>
                        <p className="fs-b-14 text-muted text-start">
                          {state.broker.One_click_trading}
                        </p>
                      </div>
                      <div className="d-flex justify-content-between border-bottom  py-2">
                        <p className="fs-b-14 fw-weight-600">Contests</p>
                        <p className="fs-b-14 text-muted text-start">
                          {state.broker.Contests}
                        </p>
                      </div>
                      <div className="d-flex justify-content-between border-bottom  py-2">
                        <p className="fs-b-14 fw-weight-600">
                          Other trading instruments
                        </p>
                        <p className="fs-b-14 text-muted text-start">
                          {state.broker.Other_trading_instruments}
                        </p>
                      </div>
                    </Panel>
                    <Panel
                      style={{ borderRadius: "12px" }}
                      className="whiteCard p-2 mb-3 border"
                      header={<p className="fs-b-18 fw-weight-600">Account</p>}
                      key="5"
                    >
                      <div className="d-flex justify-content-between border-bottom  py-2">
                        <p className="fs-b-14 fw-weight-600">
                          Minimum deposit($)
                        </p>
                        <p className="fs-b-14 text-muted text-start">
                          {state.broker.Minimum_deposit}
                        </p>
                      </div>
                      <div className="d-flex justify-content-between border-bottom  py-2">
                        <p className="fs-b-14 fw-weight-600">
                          Maximal leverage(1:?)
                        </p>
                        <p className="fs-b-14 text-muted text-start">
                          {state.broker.Maximal_leverage}
                        </p>
                      </div>
                      <div className="d-flex justify-content-between border-bottom  py-2">
                        <p className="fs-b-14 fw-weight-600">
                          Minimum lot Size
                        </p>
                        <p className="fs-b-14 text-muted text-start">
                          {state.broker.Minimum_lot_Size}
                        </p>
                      </div>
                      <div className="d-flex justify-content-between border-bottom  py-2">
                        <p className="fs-b-14 fw-weight-600">
                          Maximum lot Size
                        </p>
                        <p className="fs-b-14 text-muted text-start">
                          {state.broker.Maximum_lot_Size}
                        </p>
                      </div>{" "}
                      <div className="d-flex justify-content-between border-bottom  py-2">
                        <p className="fs-b-14 fw-weight-600">Commission</p>
                        <p className="fs-b-14 text-muted text-start">
                          {state.broker.Commission}
                        </p>
                      </div>
                      <div className="d-flex justify-content-between border-bottom  py-2">
                        <p className="fs-b-14 fw-weight-600">Spread</p>
                        <p className="fs-b-14 text-muted text-start">
                          {state.broker.Spread}
                        </p>
                      </div>
                      <div className="d-flex justify-content-between border-bottom  py-2">
                        <p className="fs-b-14 fw-weight-600">Decimals</p>
                        <p className="fs-b-14 text-muted text-start">
                          {state.broker.decimals}
                        </p>
                      </div>
                      <div className="d-flex justify-content-between border-bottom  py-2">
                        <p className="fs-b-14 fw-weight-600">
                          Scalping allowed
                        </p>
                        <p className="fs-b-14 text-muted text-start">
                          {state.broker.Scalping_allowed}
                        </p>
                      </div>
                    </Panel>
                    <Panel
                      style={{ borderRadius: "12px" }}
                      className="whiteCard p-2 mb-3 border"
                      header={
                        <p className="fs-b-18 fw-weight-600">
                          General Information
                        </p>
                      }
                      key="6"
                    >
                      <p className="fs-b-14 ">
                        {state.broker.General_Information}
                      </p>
                    </Panel>
                  </Collapse>
                </div>
              </div>
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

export default ProkerProfile;
