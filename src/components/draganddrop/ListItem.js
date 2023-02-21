import { Draggable } from "react-beautiful-dnd";
import React from "react";
import styled, { css } from "styled-components";
import "./DragList.css";

const CardHeader = styled.div`
  font-weight: 500;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
`;
const CardFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ListItem = ({ key, index, item }) => {

  return (
    <Draggable key={item.id} index={index} draggableId={item.id}>
      {(provided, snapshot) => {
        return (
          <div
            className="drag-item"
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <CardHeader>Header</CardHeader>
            <span>Content</span>
            <CardFooter>
              <span>{item.content}</span>
              <Author>
                {item.id}
              </Author>
            </CardFooter>
          </div>
        );
      }}
    </Draggable>
  );
};

export default ListItem;
