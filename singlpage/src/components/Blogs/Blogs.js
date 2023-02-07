import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import MainNavbar from "../LandingPage/Navbar/MainNavbar";
import Sidebar from "../Sidebar/Sidebar";
import { notification } from "antd";
import { db, firebase } from "../../Firebase/config";
import { useNavigate } from "react-router-dom";
const Blogs = () => {
  const [api, contextHolder] = notification.useNotification();
  const [brokers, setBrokers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getBrokers = async () => {
      const arr = [];
      db.collection("blogPosts")
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            console.log(doc.id, "=>", doc.data());
            arr.push(doc.data());
          });
          setBrokers(arr);
        })
        .catch((error) => {
          console.error("Error getting documents: ", error);
        });
    };
    getBrokers();
  }, []);
  const userValid = () => {
    const user = firebase.auth().currentUser;
    if (user) {
      console.log("Token is valid. User:", user);
      return true;
    } else {
      return false;
    }
  };
  return (
    <div className="">
      {contextHolder}
      <div>
        <Grid item xs={12}>
          <MainNavbar />
        </Grid>
        <div className="row p-0 m-0 mb-3">
          <div className="col-2">{userValid() && <Sidebar />}</div>
          <div className="col-9">
            <div className="container-md container-fluid mt-3 mb-3 h-100 ">
              <h1>Blogs </h1>
              <div className="row">
                {brokers.map((broker) => {
                  return (
                    <div className="col-xs-6 col-sm-4 ">
                      <div className="card m-0">
                        <p className="img-card">
                          <img className="w-100" src={broker.image} />
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
                          <p className="overflowHide">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: broker.content,
                              }}
                            />
                            {broker.content}
                          </p>
                        </div>
                        <button
                          className="btn-green p-2 m-2"
                          onClick={() =>
                            navigate("/blog/" + broker.title, {
                              replace: true,
                              state: { broker: broker },
                            })
                          }
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
