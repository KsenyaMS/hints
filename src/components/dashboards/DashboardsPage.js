import React, {useState} from "react";
import { PageHeader } from '@ant-design/pro-layout';
import MenuButton from "../buttons/MenuButton";
import RechartsPage from "./recharts/RechartsPage";
import { FormattedMessage } from "react-intl";

export default function DashbordsPage() {
  let [state, setState] = useState({activeTabKey: "1", update: 0});

  return (
    <>
      <PageHeader
        title={<FormattedMessage id="dashboard_text" />}
      />
      <div style={{marginBottom: 16}}>
        <MenuButton value={<FormattedMessage id="recharts_text" />} statusBtn={state.activeTabKey === "1"} onClick={() => {setState({...state, activeTabKey: "1", update: state.update + 1});}}/>
        {/* <MenuButton value = "Динамика" statusBtn={state.activeTabKey === "2"} onClick={() => {setState({...state, activeTabKey: "2", update: state.update + 1}); onChange([]);}}/>
        <MenuButton value = "Расходы" statusBtn={state.activeTabKey === "3"} onClick={() => {setState({...state, activeTabKey: "3", update: state.update + 1}); onChange([]);}}/>
        <MenuButton value = "Бюджет" statusBtn={state.activeTabKey === "4"} onClick={() => {setState({...state, activeTabKey: "4", update: state.update + 1}); onChange([]);}}/> */}
      </div>
      {state.activeTabKey === "1" && (
        <RechartsPage/>
      )}
    </>
  );
}