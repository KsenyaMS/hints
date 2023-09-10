import React, {useState} from "react";
import {isMobile} from 'react-device-detect';
import {Link, Redirect, Route, Switch, useRouteMatch} from "react-router-dom";
import {Layout, Menu, Divider, Typography, ConfigProvider, Dropdown, Button} from 'antd';
import './ControlPanel.css'
import {LogoutOutlined, BarChartOutlined, RightOutlined, LeftOutlined, UnorderedListOutlined} from "@ant-design/icons";
import DashbordsPage from "../dashboards/DashboardsPage";
import DragAndDropPage from "../draganddrop/DragAndDropPage";
import { FormattedMessage } from "react-intl";
import { LOCALES } from "../../i18n/locales";

const {Header, Sider, Content, Footer} = Layout;
const {Text} = Typography;

export default function ControlPanel({onClick}) {
  let [collapsed, setCollapsed] = useState(false);
  let [activeRouteKey, setActiveRouteKey] = useState("dashboards");

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
            <Link to={`${url}/dashboards`}>{<FormattedMessage id="dashboard_text" />}</Link>
          </Menu.Item>
          <Menu.Item style={{color: "white"}} key="drag_and_drop" icon={<UnorderedListOutlined />}>
            <Link to={`${url}/drag_and_drop`}>{<FormattedMessage id="list_text" />}</Link>
          </Menu.Item>
          <Menu.Divider/>
          <Menu.Item key="100" style={{color: "white"}} title={<FormattedMessage id="exit_text" />} icon={<LogoutOutlined/>}>
            {<FormattedMessage id="exit_text" />}
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
        <Route path={`${path}/drag_and_drop`} key="drag_and_drop">
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

  return (
    <div>
      <Layout style={{minHeight: '100vh'}}>
          <Sider style={{backgroundColor: "#b300ad"}} width={210} collapsed={collapsed}>
            {
              systemMenu()
            }
          </Sider>
          <Layout className="site-layout" style={isMobile ? {width: "1600px"} : {}}>
            <Header style={isMobile ? {width: "1600px", backgroundColor: "white"} : {width: "100%", backgroundColor: "white"}}>
              <div style={{float: "right"}}>
                <Dropdown style={{width: "210px"}}
                  overlay={(
                    <Menu onClick={(e) => {onClick(e.key)}}>
                      <Menu.Item key={LOCALES.ENGLISH}>
                        <FormattedMessage id="english" />
                      </Menu.Item>
                      <Menu.Item key={LOCALES.JAPANESE}>
                        <FormattedMessage id="japanese" />
                      </Menu.Item>
                      <Menu.Item key={LOCALES.FRENCH}>
                        <FormattedMessage id="german" />
                      </Menu.Item>
                      <Menu.Item key={LOCALES.GERMAN}>
                        <FormattedMessage id="french" />
                      </Menu.Item>
                      <Menu.Item key={LOCALES.RUSSIAN}>
                        <FormattedMessage id="russian" />
                      </Menu.Item>
                    </Menu>
                  )}>
                  <Button style={{width: "190px", textAlign: "left", borderRadius: "15px"}}>
                    <FormattedMessage id="select_a_language" />
                  </Button>
                </Dropdown>
              </div>
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
            <Footer className="footer">Тестовый сайт</Footer>
          </Layout>
        </Layout>
    </div>
  );
}