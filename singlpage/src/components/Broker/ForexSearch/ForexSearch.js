import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { Checkbox, Divider, Form, Select } from "antd";
function ForexSearch() {
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
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                ]}
              />
            </div>

            <div>
              <Select
                getPopupContainer={getPopupContainer}
                className="w-100 my-select-class mb-3"
                defaultValue="Select  Country"
                style={{ width: 120 }}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                ]}
              />
            </div>
            <div>
              <Select
                getPopupContainer={getPopupContainer}
                className="w-100 my-select-class mb-3 "
                defaultValue="Select Office Country"
                style={{ width: 120 }}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                ]}
              />
            </div>
            <div className="mb-3">
              <Select
                getPopupContainer={getPopupContainer}
                className="w-100 my-select-class mb-3"
                style={{ width: 120 }}
                defaultValue="Select Regulation"
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                ]}
              />
            </div>

            <div>
              <Select
                getPopupContainer={getPopupContainer}
                className="w-100 my-select-class mb-3 mb-3"
                defaultValue="Account Option"
                style={{ width: 120 }}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                ]}
              />
            </div>
            <div>
              <Select
                getPopupContainer={getPopupContainer}
                className="w-100 my-select-class mb-3 mb-3"
                defaultValue="Customer Service"
                style={{ width: 120 }}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                ]}
              />
            </div>
            <div>
              <Select
                getPopupContainer={getPopupContainer}
                className="w-100 my-select-class mb-3 mb-3"
                defaultValue="Trading"
                style={{ width: 120 }}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                ]}
              />
            </div>
            <div>
              <Select
                getPopupContainer={getPopupContainer}
                className="w-100 my-select-class mb-3 mb-3"
                defaultValue="Account"
                style={{ width: 120 }}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                ]}
              />
            </div>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
}

export default ForexSearch;
