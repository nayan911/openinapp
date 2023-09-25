import React, { useState } from "react";
import "../styles/LayoutStyles.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Badge, message } from "antd";
import Chartgrapg from "../Pages/Chartgrapg";
import DonutChart from "../Pages/DonutChart";
import Poppup from "./Poppup";
import Sidebar from "./Sidebar";
import * as AiIcons from 'react-icons/ai';
import {data} from './Data.js'
import * as FaIconss from 'react-icons/fa';

const Layout = () => {

  const navigate = useNavigate();
//   const {user} = useSelector(state=>state.user)
  const location = useLocation();
  // homepage ko layout se wrap karo

  const handleLogout=()=>{
    localStorage.clear();
    message.success("logout success");
    navigate('/');
  }

  const SidebarMenu = [
    {
      name: "Dashboard",
      path: "/home",
      icon: "fa-solid fa-gauge-simple",
    },
    {
      name: "Transactions",
      path: "/appointments",
      icon: "fa-solid fa-coins",
    },
    {
      name: "Schedules",
      path: `/doctor/profile/`,
      icon: "fa-regular fa-calendar",
    },
    {
      name: "Users",
      path: `/user/profile`,
      icon: "fa-solid fa-user",
    },
    {
      name: "Settings",
      path: `/user/settings`,
      icon: "fa-solid fa-gear",
    },
  ];

  const [openpopup,setopenpopup] = useState(false);

  const [formvalue,setformvalue] = useState({
    name: "",
    email: "",
    phone: "",
    iid: "",
    yt: ""
  });

  return (
    <>
      <div className="main">
        <div className="layout">
          <div className="sidebar">
            <div className="logo">
              <h6>Board.</h6>
            </div>
            <div className="menu">
              {SidebarMenu.map((menu) => {
                const isActive = location.pathname === menu.path;
                return (
                  <>
                    <div className={`menu-item`}>
                      <i className={menu.icon}></i>
                      <Link to={menu.path}>{menu.name}</Link>
                    </div>
                  </>
                );
              })}
              <div className={`menu-item `} onClick={handleLogout}>
                <i className="fa-solid fa-right-from-bracket"></i>
                <Link to="/">Logout</Link>
              </div>
            </div>
          </div>
          <div className="content">
                <div className="headerup">
                    <div className="headerfirst" style={{fontSize: 20}}>
                      <span className='menu-icon'><Sidebar/></span>
                        <b className="menu-dashboard">DashBoard</b>
                    </div>
                    <div className="header-content" style={{cursor: "pointer"}}>
                        <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                        <span className="input-group-text border-0" id="search-addon">
                          <i className="fas fa-search"></i>
                        </span>
                        <Badge onClick={()=>{navigate('/notification')}}>
                        <i className="fa-solid fa-bell"></i>
                        </Badge>
                        <Link to="/profile">Nayan</Link>
                    </div>
                </div>
                <div className="header">
                    <div className="headerbox1 headerbox">
                        <div>
                            <i className="fa-solid fa-money-bill" style={{fontSize: 30,color: 'green'}}></i><br></br>
                            <span>Total Revenues</span>
                        </div>
                        <div className="revenuePercent">
                            <span style={{fontSize: 30}}><b>$2,129,430</b></span>
                            <span className="revenueStyle">+2.5%</span>
                        </div>
                    </div>
                    <div className="headerbox2 headerbox">
                        <div>
                            <i className="fa-solid fa-coins" style={{fontSize: 30,color: '#DEBF85'}}></i><br></br>
                            <span>Total Transactions</span>
                        </div>
                        <div className="revenuePercent">
                            <span style={{fontSize: 30}}><b>1,520</b></span>
                            <span className="revenueStyle">+1.7%</span>
                        </div>
                    </div>
                    <div className="headerbox3 headerbox">
                        <div>
                            <i className="fa-solid fa-thumbs-up" style={{fontSize: 30,color: '#EE8484'}}></i><br></br>
                            <span>Total Likes</span>
                        </div>
                        <div className="revenuePercent">
                            <span style={{fontSize: 30}}><b>9,721</b></span>
                            <span className="revenueStyle">+1.4%</span>
                        </div>
                    </div>
                    <div className="headerbox4 headerbox">
                        <div>
                            <i className="fa-solid fa-users" style={{fontSize: 30,color: '#A9B0E5'}}></i><br></br>
                            <span>Total Users</span>
                        </div>
                        <div className="revenuePercent">
                            <span style={{fontSize: 30}}><b>9,721</b></span>
                            <span className="revenueStyle">+4.2%</span>
                        </div>
                    </div>
                </div>
                <div className="chartbox">
                    <span style={{margin: 20,padding: 20, fontSize: 20}}><b>Activities</b></span><br></br>
                    <span style={{margin: 20,padding: 20, fontSize: 20}}>May - June 2021</span>
                    <Chartgrapg />
                </div>
                <div className="bodyheader">
                    <div className="body1 headerbox">
                          <div className="body1-tag"><h3>Top Products</h3></div>
                          <div className="donutchart-header">
                            <div className="donutchart">
                              <DonutChart/>
                            </div>
                            <div className="donutchart-data">
                              <div className="donutchart-data-style">
                              {data.map((entry, index) => (
                                <div key={index}>
                                  <span style={{ fontWeight: 'bold' }}><FaIconss.FaRegCircle style={{margin: 10,backgroundColor: `${entry.color}`,color: `${entry.color}`,borderRadius: '30px'}}/>{entry.name}</span>
                                  <br />
                                  <span className="value-style" style={{ fontWeight: 'lighter' }}>{(entry.value / 12).toFixed(2)}%</span>
                                </div>
                              ))}
                              </div>
                            </div>
                          </div>
                      </div>
                    <div className="body2 headerbox">
                        {formvalue.name ? (
                          <div className="body2-style" style={{padding: 10}}>
                              <div>
                                <h1>{formvalue.name}</h1>
                              </div>
                              <div className="formname">
                                      <div>
                                          <i className="fa-brands fa-whatsapp" style={{color: '#3CC952'}}></i>
                                          <span>{" "}{formvalue.phone}</span>
                                      </div>
                                      <div>
                                          <i className="fa-brands fa-instagram" style={{color: '#FF4E64'}}></i>
                                          <span>{" "}{formvalue.iid}</span>
                                      </div>
                              </div>
                              <div className="formname formname1">
                                      <div>
                                            <i className="fa-regular fa-envelope" style={{color: '#FF4E64'}}></i>
                                            <span>{" "}{formvalue.email}</span>
                                      </div>
                                      <div>
                                          <i className="fa-brands fa-square-youtube" style={{color: '#FF4E64', backgroundColor: '#FFE9EC'}}></i>
                                          <span>{" "}{formvalue.yt}</span>
                                      </div>
                              </div>
                          </div>
                        ) : (
                          <div className="button-style">
                              <button className="button-border" onClick={() => setopenpopup(true)}>
                                <AiIcons.AiOutlinePlus style={{fontSize: '50px'}}/>
                              </button>
                          </div>
                        )}
                    </div>
                </div>
          </div>
        </div>
      </div>
      <Poppup openpopup={openpopup} setopenpopup={setopenpopup} formvalue={formvalue} setformvalue={setformvalue}>
      </Poppup>
      {/* <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/> */}
    </>
  );
};

export default Layout;