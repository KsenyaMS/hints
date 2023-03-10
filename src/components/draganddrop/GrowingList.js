import React, {useState} from "react";
import {DeleteOutlined} from '@ant-design/icons';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Button, Typography } from "antd";
import "./GrowingList.css"
import ConfirmationButtonAntd from "../buttons/ConfirmationButtonAntd";
import CreateElementDialog from "./CreateElementDialog";
const { Text } = Typography;

export default function GrowingList() {
  let [state, setState] = useState([
    { index: 0, id: "1", name: 'C1', value: 100, moneySpent: 50 },
    { index: 1, id: "2", name: 'C2', value: 20, moneySpent: 200 },
    { index: 2, id: "3", name: 'C3', value: 300, moneySpent: 30 },
    { index: 3, id: "4", name: 'C4', value: 90, moneySpent: 70 },
  ]);
  let [visible, setVisible] = useState(false);

  const onDragEnd = (result) => {
    let newItems = [...state];
    let [removed] = newItems.splice(result.source.index, 1);
    // console.log({result});
    // console.log({removed});
    newItems.splice(result.destination.index, 0, removed);
    // console.log({newItems});
    setState(newItems)
  };

  const onAddElement = (params, id) => {
    let items = [...state];
    let res = {
      index: Number(params.index),
      id: id.toString(),
      name: params.name,
      value: Number(params.value),
      moneySpent: Number(params.moneySpent)
    };
    items = [...items, res];
    // console.log({items});
    setState(items);
  };
  
  const deleteElement = (value) => {
    let items = [...state];
    let element = items.find((s) => s.id === value);
    items.splice(element.index, 1);
    console.log({items});
    setState(items);
  };

  return (
    <>
      <div class="flexbox-container">
        <div style={{width: '80%', float: 'left'}} >
          <Typography.Title level={5} style={{ margin: 10, marginBottom: 20 }}>
            Пополняемый список
          </Typography.Title>
        </div>
          <div style={{width: '20%', float: 'right'}}>
            <ConfirmationButtonAntd value="Добавить" onClick={() => {setVisible(true)}}/>
          </div>
      </div>
      <Text></Text>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="content-div">
          <div className="droppable-div">
            <Droppable key={"droppable"} droppableId={"droppable"} >  
              {(provided, snapshot) => (  
                <div {...provided.droppableProps} ref={provided.innerRef}>  
                  {state.map((item, idx) => (  
                    <Draggable key={item.id} index={idx} draggableId={item.id}>  
                      {(provided, snapshot) => (  
                        <div
                          className="drag-item"
                          ref={provided.innerRef}
                          snapshot={snapshot}
                          {...provided.draggableProps}  
                          {...provided.dragHandleProps}
                        >
                          <div style={{width: "100%"}}>
                            <div style={{float: "left", width: "90%"}}>
                              <span>{item.name}</span>
                            </div>
                            <div style={{float: "right", width: "10%"}}>
                              <span>
                                <Button
                                  icon={<DeleteOutlined style={{color: "#1b3fc2"}} />}
                                  onClick={() => { deleteElement(item.id) }}
                                  type="link"
                                />
                              </span>
                            </div>
                          </div>
                          <div style={{width: "100%"}}>
                            <div style={{float: "left", width: "50%"}}>
                              <span>На счету: {item.value} руб.</span>
                            </div>
                            <div style={{float: "right", width: "50%"}}>
                              <span>Потрачено: {item.moneySpent} руб.</span>
                            </div>
                          </div>
                        </div>  
                      )}  
                    </Draggable>  
                  ))}
                  {provided.placeholder}
                </div>  
              )}  
            </Droppable>
          </div>
        </div>
      </DragDropContext>
      <CreateElementDialog
        visible={visible}
        data={state}
        onOk={(params, id) => { setVisible(false); onAddElement(params, id); }}
        onCancel={() => { setVisible(false) }}
      />
    </>
  );
}