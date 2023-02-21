import React, {useState} from "react";
import { PageHeader } from '@ant-design/pro-layout';
import MenuButton from "../buttons/MenuButton";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Card } from "antd";

export default function DragAndDropPage() {
  let [state, setState] = useState({activeTabKey: "1", update: 0});

  const data = [
    { id: 'C1', value: 100, value2: 50 },
    { id: 'C2', value: 20, value2: 200 },
    { id: 'C3', value: 300, value2: 30 },
    { id: 'C4', value: 90, value2: 70 },
  ];

  return (
    <>
      <PageHeader
        title="Списки"
      />
        <DragDropContext>  
            <Droppable key="droppable" droppableId="droppable" >  
                {(provided, snapshot) => (  
                    <div  
                        {...provided.droppableProps}  
                        ref={provided.innerRef}  
                        style={{backgroundColor: "green"}}
                    >  
                        {data.map((item, idx) => (  
                            <Draggable key={item.id} index={idx} draggableId={item.id}>  
                                {(provided, snapshot) => (  
                                   <div  
                                      ref={provided.innerRef}  
                                      {...provided.draggableProps}  
                                      {...provided.dragHandleProps}
                                      style={{backgroundColor: "red"}}
                                   >
                                    {item.id}
                                   </div>  
                                )}  
                            </Draggable>  
                        ))}  
                    </div>  
                )}  
            </Droppable>  
        </DragDropContext>
    </>
  );
}