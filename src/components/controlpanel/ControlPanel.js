import React, {useState} from "react";
import {isMobile} from 'react-device-detect';
import {Link, Redirect, Route, Switch, useRouteMatch, useHistory} from "react-router-dom";
import {Layout, Menu, message, Divider, Tooltip, Dropdown, Typography, ConfigProvider} from 'antd';
import './ControlPanel.css'
import {LogoutOutlined, BarChartOutlined, RightOutlined, LeftOutlined, UnorderedListOutlined} from "@ant-design/icons";
import DashbordsPage from "../dashboards/DashboardsPage";
import DragAndDropPage from "../draganddrop/DragAndDropPage";
import DragList from "../draganddrop/DragList";

const {Header, Sider, Content, Footer} = Layout;
const {Text} = Typography;

export default function ControlPanel(props) {
  let [collapsed, setCollapsed] = useState(false);
  let [activeRouteKey, setActiveRouteKey] = useState("dashboards");
  let [notification, setNotification] = useState([]);

  const history = useHistory();

  let {path, url} = useRouteMatch();

  const onMenuClick = (item) => {
    if (item.key !== "100" && item.key !== "collapsed") {
      setActiveRouteKey(item.key);
    }
    if (item.key === '100') {
      
    } else if(item.key === "collapsed") {
      setCollapsed(!collapsed);
    }
  };

  const systemMenu = () => {
    return (
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              colorItemBgSelected: 'rgba(205, 214, 219, 0.5)',
              colorItemBgHover: 'rgba(205, 214, 219, 0.3)',
            },
          },
        }}
      >
        <Menu style={{marginTop: "150px"}} className="menu-background" onClick={onMenuClick}  defaultSelectedKeys={['1']} mode="inline">
          {
              collapsed ? <Menu.Item key="collapsed" style={{color: "white"}} icon={<RightOutlined/>}/>
              : <Menu.Item key="collapsed" style={{paddingLeft: "45%", color: "white"}} icon={<LeftOutlined/>}/>
          }
          <Menu.Item style={{color: "white"}} key="dashboards" icon={<BarChartOutlined />}>
            <Link to={`${url}/dashboards`}>Дашборды</Link>
          </Menu.Item>
          <Menu.Item style={{color: "white"}} key="drag_and_drop" icon={<UnorderedListOutlined />}>
            <Link to={`${url}/drag_and_drop`}>Списки</Link>
          </Menu.Item>
          {/* <Menu.Item className="menu-background" key="ads" icon={<UnorderedListOutlined />}>
            <Link to={`${url}/ads`}>Объявления</Link>
          </Menu.Item>
          <Menu.Item className="menu-background" key="scheduled_services" icon={<BookOutlined />}>
            <Link to={`${url}/scheduled_services`}>Услуги</Link>
          </Menu.Item>
          <Menu.Item className="menu-background" key="settings" icon={<SettingOutlined />}>
            <Link to={`${url}/personal_cabinets`}>Настройки</Link>
          </Menu.Item> */}
          <Menu.Divider/>
          <Menu.Item key="100" style={{color: "white"}} title="Выход" icon={<LogoutOutlined/>}>
              Выход
          </Menu.Item>
        </Menu>
      </ConfigProvider>
    )
  };

  const systemRoute = () => {
    if(activeRouteKey === "dashboards") {
      return (
        <Route path={`${path}/dashboards`} key="dashboards">
          <DashbordsPage/>
        </Route>
      )
    } else if(activeRouteKey === "drag_and_drop") {
      return (
        <Route path={`${path}/dashboards`} key="drag_and_drop">
          <DragAndDropPage/>
        </Route>
      )
    }
  };

  const defaultRoute = () => {
    if(activeRouteKey === "dashboards") {
      return (
        <Redirect to={`${path}/dashboards`}/>
      )
    } else if(activeRouteKey === "drag_and_drop") {
      return (
        <Redirect to={`${path}/drag_and_drop`}/>
      )
    }
  };

//   const handleNotified = (data, notificationType) => {
//     let ids = notificationType === "ads" ? data.map((s) => s.avito_id) : data.map((s) => s.id);
//     apiClient.setNotified(ids.toString().replaceAll(',',';'), notificationType)
//       .then(res => {
//         message.success("Оповещения отмечены как просмотренные!");
//         if (notificationType === "services") {
//           apiClient.getPlannedServices()
//             .then(res => {
//               let notAppliedServices = res.filter((s) => s.not_applied_user_notified === false);
//               setNotAppliedServices({...notAppliedServices, ...{
//                 services: notAppliedServices,
//                 count: notAppliedServices ? notAppliedServices.length : 0
//               }});
//             })
//             .catch(err => message.error(err));
//         }
//         if (notificationType === "ads") {
//           apiClient.getAds()
//             .then(res => {
//               let notEffectiveAds = res.filter((s) => s.low_efficiency_user_notified === false);
//               setNotEffectiveAds({...notEffectiveAds, ...{
//                 ads: notEffectiveAds,
//                 count: notEffectiveAds ? notEffectiveAds.length : 0
//               }});
//             })
//             .catch(err => message.error(err));
//         }
//         if (notificationType === "budget") {
//           apiClient.getBudget()
//             .then(res => {
//               let exceededBudget = res.filter((s) => s.user_notified === false && s.spent_budget > s.money_restriction);
//               setExceededBudget({...exceededBudget, ...{
//                 budget: exceededBudget,
//                 count: exceededBudget ? exceededBudget.length : 0
//               }});
//             })
//             .catch(err => message.error(err));
//         }
//       })
//       .catch(err => message.error(err));
//   };

  return (
    <div>
      <Layout style={{minHeight: '100vh'}}>
        <Layout>
          <Sider style={{backgroundColor: "#b300ad"}} width={210} collapsed={collapsed}>
            {
              systemMenu()
            }
          </Sider>
          <Layout className="site-layout" style={isMobile ? {width: "1600px"} : {}}>
            <Header style={isMobile ? {width: "1600px", backgroundColor: "white"} : {width: "100%", backgroundColor: "white"}}>
                  
            </Header>
            <Divider style={{marginTop: '0px'}}/>
            <Content style={isMobile ? {margin: '10px', width: "1600px"} : {margin: '10px'}}>
              <Switch>
                {
                  systemRoute()
                }
                {
                  defaultRoute()
                }
              </Switch>
            </Content>
            <Footer style={isMobile ? {textAlign: 'right', fontSize: '0.8em', width: "1600px"} : {textAlign: 'right', fontSize: '0.8em'}}>Тестовый сайт</Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}