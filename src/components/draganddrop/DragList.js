import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import DraggableElement from "./DraggableElement";
import { Button } from "antd";

const ListGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 8px`;

const getItems = (count, prefix) =>
  Array.from({ length: count }, (v, k) => k).map((k) => {
    const randomId = Math.floor(Math.random() * 1000);
    return {
      id: `item-${randomId}`,
      prefix: prefix,
      content: prefix === "inProgress" ? "В работе" : (prefix === "done" ? "Закончена" : (prefix === "todo" ? "Задача создана" : ""))
    };
  });

const removeFromList = (list, index) => {
  const result = Array.from(list);
  const [removed] = result.splice(index, 1);
  return [removed, result];
};

const addToList = (list, index, element) => {
  const result = Array.from(list);
  result.splice(index, 0, element);
  return result;
};

const lists = ["todo", "inProgress", "done"];

const generateLists = () =>
  lists.reduce(
    (acc, listKey) => ({ ...acc, [listKey]: getItems(10, listKey) }),
    {}
  );

function DragList() {
  const [elements, setElements] = useState(generateLists());

  // useEffect(() => {
  //   setElements(generateLists());
  // }, []);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const listCopy = { ...elements };

    const sourceList = listCopy[result.source.droppableId];
    let [removedElement, newSourceList] = removeFromList(
      sourceList,
      result.source.index
    );
    removedElement.content = result.destination.droppableId === "todo" ? "Задача создана"
    : result.destination.droppableId === "inProgress" ? "В работе"
    : result.destination.droppableId === "done" ? "Закончена" : "";
    listCopy[result.source.droppableId] = newSourceList;
    const destinationList = listCopy[result.destination.droppableId];
    listCopy[result.destination.droppableId] = addToList(
      destinationList,
      result.destination.index,
      removedElement
    );

    setElements(listCopy);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <ListGrid>
        {lists.map((listKey) => (
          <DraggableElement
            elements={elements[listKey]}
            key={listKey}
            prefix={listKey}
          />
        ))}
      </ListGrid>
    </DragDropContext>
  );
}

export default DragList;
