import React, {useState} from "react";
import {Button} from "antd";
import { PageHeader } from '@ant-design/pro-layout';
import MenuButton from "../buttons/MenuButton";
import RechartsPage from "./recharts/RechartsPage";

export default function DashbordsPage({onChange}) {
  let [state, setState] = useState({activeTabKey: "1", update: 0});

  return (
    <>
      <PageHeader
        title="Дашборды"
      />
      <div style={{marginBottom: 16}}>
        <MenuButton className="card" value = "Графики созданные с помощью recharts" statusBtn={state.activeTabKey === "1"} onClick={() => {setState({...state, activeTabKey: "1", update: state.update + 1}); onChange([]);}}/>
        {/* <MenuButton className="card" value = "Динамика" statusBtn={state.activeTabKey === "2"} onClick={() => {setState({...state, activeTabKey: "2", update: state.update + 1}); onChange([]);}}/>
        <MenuButton className="card" value = "Расходы" statusBtn={state.activeTabKey === "3"} onClick={() => {setState({...state, activeTabKey: "3", update: state.update + 1}); onChange([]);}}/>
        <MenuButton className="card" value = "Бюджет" statusBtn={state.activeTabKey === "4"} onClick={() => {setState({...state, activeTabKey: "4", update: state.update + 1}); onChange([]);}}/> */}
      </div>
      {state.activeTabKey === "1" && (
        <RechartsPage/>
      )}
    </>
  );
}