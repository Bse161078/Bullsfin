import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { Checkbox, Divider, Form, Select } from "antd";
function ForexSearch({ searchData }) {
  const getPopupContainer = (triggerNode) => {
    return triggerNode.parentNode;
  };
  return (
    <Grid container>
      <Grid item xs={10}>
        <Card className="mb-3">
          <CardContent elevation={11}>
            <Typography variant="h6">Forex cashback search</Typography>
            <Typography variant="subtitle1">General Information</Typography>
          </CardContent>
          <div className="px-3 ">
            <div>
              <Select
                getPopupContainer={getPopupContainer}
                className="w-100 my-select-class mb-3"
                defaultValue="Select Broker type"
                style={{ width: 120 }}
                onChange={() => {}}
              >
                {searchData
                  .filter((el) => el.ForexCashbackSearch === "BrokerType")
                  .map((e) => {
                    return (
                      <Select.Option value={e.name}>{e.name}</Select.Option>
                    );
                  })}
              </Select>
            </div>

            <div>
              <Select
                getPopupContainer={getPopupContainer}
                className="w-100 my-select-class mb-3"
                defaultValue="Select  Country"
                style={{ width: 120 }}
              >
                {searchData
                  .filter((el) => el.ForexCashbackSearch === "Country")
                  .map((e) => {
                    return (
                      <Select.Option value={e.name}>{e.name}</Select.Option>
                    );
                  })}
              </Select>
            </div>
            <div>
              <Select
                getPopupContainer={getPopupContainer}
                className="w-100 my-select-class mb-3 "
                defaultValue="Select Office Country"
                style={{ width: 120 }}
              >
                {searchData
                  .filter((el) => el.ForexCashbackSearch === "OfficeCountry")
                  .map((e) => {
                    return (
                      <Select.Option value={e.name}>{e.name}</Select.Option>
                    );
                  })}
              </Select>
            </div>
            <div className="mb-3">
              <Select
                getPopupContainer={getPopupContainer}
                className="w-100 my-select-class mb-3"
                style={{ width: 120 }}
                defaultValue="Select Regulation"
              >
                {searchData
                  .filter((el) => el.ForexCashbackSearch === "Regulation")
                  .map((e) => {
                    return (
                      <Select.Option value={e.name}>{e.name}</Select.Option>
                    );
                  })}
              </Select>
            </div>

            <div>
              <Select
                getPopupContainer={getPopupContainer}
                className="w-100 my-select-class mb-3 mb-3"
                defaultValue="Account Option"
                style={{ width: 120 }}
              >
                {searchData
                  .filter((el) => el.ForexCashbackSearch === "AccountOption")
                  .map((e) => {
                    return (
                      <Select.Option value={e.name}>{e.name}</Select.Option>
                    );
                  })}
              </Select>
            </div>
            <div>
              <Select
                getPopupContainer={getPopupContainer}
                className="w-100 my-select-class mb-3 mb-3"
                defaultValue="Customer Service"
                style={{ width: 120 }}
              >
                {searchData
                  .filter((el) => el.ForexCashbackSearch === "CustomerService")
                  .map((e) => {
                    return (
                      <Select.Option value={e.name}>{e.name}</Select.Option>
                    );
                  })}
              </Select>
            </div>
            <div>
              <Select
                getPopupContainer={getPopupContainer}
                className="w-100 my-select-class mb-3 mb-3"
                defaultValue="Trading"
                style={{ width: 120 }}
              >
                {searchData
                  .filter((el) => el.ForexCashbackSearch === "Trading")
                  .map((e) => {
                    return (
                      <Select.Option value={e.name}>{e.name}</Select.Option>
                    );
                  })}
              </Select>
            </div>
            <div>
              <Select
                getPopupContainer={getPopupContainer}
                className="w-100 my-select-class mb-3 mb-3"
                defaultValue="Account"
                style={{ width: 120 }}
              >
                {searchData
                  .filter((el) => el.ForexCashbackSearch === "Account")
                  .map((e) => {
                    return (
                      <Select.Option value={e.name}>{e.name}</Select.Option>
                    );
                  })}
              </Select>
            </div>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
}

export default ForexSearch;
