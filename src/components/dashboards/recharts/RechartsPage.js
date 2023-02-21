import React, {useState} from "react";
import MenuButton from "../../buttons/MenuButton";
import "../recharts/RechartsPage.css"
import DinamicGraphs from "./DinamicGraphs";
import SimpleGraphs from "./SimpleGraphs";

export default function RechartsPage() {
  let [state, setState] = useState({activeTabKey: "1", update: 0});

  return (
    <>
      <div className="scrolling-wrapper-flexbox" style={{marginBottom: 16}}>
        <MenuButton value = "Простые графики" statusBtn={state.activeTabKey === "1"} onClick={() => {setState({...state, activeTabKey: "1", update: state.update + 1});}}/>
        <MenuButton value = "Динамические графики" statusBtn={state.activeTabKey === "2"} onClick={() => {setState({...state, activeTabKey: "2", update: state.update + 1});}}/>
        {/* <MenuButton value = "Расходы" statusBtn={state.activeTabKey === "3"} onClick={() => {setState({...state, activeTabKey: "3", update: state.update + 1}); onChange([]);}}/>
        <MenuButton value = "Бюджет" statusBtn={state.activeTabKey === "4"} onClick={() => {setState({...state, activeTabKey: "4", update: state.update + 1}); onChange([]);}}/> */}
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