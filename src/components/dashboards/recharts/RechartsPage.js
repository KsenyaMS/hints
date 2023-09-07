import React, {useState} from "react";
import { FormattedMessage } from "react-intl";
import MenuButton from "../../buttons/MenuButton";
import "../recharts/RechartsPage.css"
import DinamicGraphs from "./DinamicGraphs";
import SimpleGraphs from "./SimpleGraphs";

export default function RechartsPage() {
  let [state, setState] = useState({activeTabKey: "1", update: 0});

  return (
    <>
      <div className="scrolling-wrapper-flexbox" style={{marginBottom: 16}}>
        <MenuButton value={<FormattedMessage id="simple_charts_text" />} statusBtn={state.activeTabKey === "1"} onClick={() => {setState({...state, activeTabKey: "1", update: state.update + 1});}}/>
        <MenuButton value={<FormattedMessage id="dinamic_charts_text" />} statusBtn={state.activeTabKey === "2"} onClick={() => {setState({...state, activeTabKey: "2", update: state.update + 1});}}/>
      </div>
      {state.activeTabKey === "1" && (
        <SimpleGraphs/>
      )}
      {state.activeTabKey === "2" && (
        <DinamicGraphs/>
      )}
    </>
  );
}