// External Imports
// import dynamic from "next/dynamic";
// import React, { useState } from "react";
// import { DragDropContext } from "react-beautiful-dnd";

// // initialData
// const initialData = {
//     navItems: [
//         { id: 1, content: "Organizers", tabId: 0, },
//         { id: 2, content: "Speakers", tabId: 1, },
//         { id: 3, content: "Locations", tabId: 2, },
//         { id: 4, content: "Schedules", tabId: 3, },
//         { id: 5, content: "Sponsors", tabId: 4, },
//     ]
// };

// // TabItem without ssr
// const TabItem = dynamic(() => import("./TabItem"), { ssr: false });

// // reorderTasks
// const reorderTasks = (navItems, startIndex, endIndex) => {
//     const newTaskList = Array.from(navItems);
//     const [removed] = newTaskList.splice(startIndex, 1);
//     newTaskList.splice(endIndex, 0, removed);
//     return newTaskList;
// };

// export default function TabsNav() {
//     const queryAttr = "data-rbd-drag-handle-draggable-id";
//     const [state, setState] = useState(initialData);
//     const [placeholderProps, setPlaceholderProps] = useState({});

//     const getDraggedDom = (draggableId) => {
//         const domQuery = `[${queryAttr}='${draggableId}']`;
//         const draggedDOM = document.querySelector(domQuery);

//         return draggedDOM;
//     };

//     const onDragEnd = (result) => {
//         const { source, destination } = result;

//         // if the user drops outside of a droppable destination
//         if (!destination) return;

//         // If the user drags and drops back in the same position
//         if (
//             destination.droppableId === source.droppableId &&
//             destination.index === source.index
//         ) {
//             return;
//         }

//         // If the user drops in a different postion
//         const { navItems } = state;
//         const newTasks = reorderTasks(navItems, source.index, destination.index);

//         const newState = {
//             ...state,
//             navItems: newTasks,
//         };
//         setState(newState);
//     };

//     // onDragUpdate method
//     const onDragUpdate = (result) => {
//         const { source, destination, draggableId } = result;

//         if (!destination) return;

//         const draggedDOM = getDraggedDom(draggableId);

//         if (!draggedDOM.parentNode) return;

//         const { clientHeight, clientWidth } = draggedDOM;
//         const destinationIndex = destination.index;
//         const sourceIndex = source.index;

//         const childrenArray = draggedDOM.parentNode.children
//             ? [...draggedDOM.parentNode.children]
//             : [];

//         const movedItem = childrenArray[sourceIndex];
//         childrenArray.splice(sourceIndex, 1);

//         const updatedArray = [
//             ...childrenArray.splice(0, destinationIndex),
//             movedItem,
//             ...childrenArray.splice(destinationIndex + 1),
//         ];

//         const clientY =
//             parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingTop) +
//             updatedArray.splice(0, destinationIndex).reduce((total, current) => {
//                 const style = current.currentStyle || window.getComputedStyle(current);
//                 const marginBottom = parseFloat(style.marginBottom);
//                 return total + current.clientHeight + marginBottom;
//             }, 0);

//         setPlaceholderProps({
//             clientHeight,
//             clientWidth,
//             clientY,
//         });
//     };

//     // onDragStart method
//     const onDragStart = (result) => {
//         const { source, draggableId } = result;
//         const draggedDOM = getDraggedDom(draggableId);

//         if (!draggedDOM) return;

//         const { clientHeight, clientWidth } = draggedDOM;
//         const sourceIndex = source.index;

//         if (!draggedDOM.parentNode) return;

//         /**
//          * 1. Take all the items in the list as an array
//          * 2. Slice from the start to the where we are dropping the dragged item (i.e destinationIndex)
//          * 3. Accumulate and assign that to clientY
//          */
//         const clientY =
//             parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingTop) +
//             [...draggedDOM.parentNode.children]
//                 .slice(0, sourceIndex)
//                 .reduce((total, current) => {
//                     const style =
//                         current.currentStyle || window.getComputedStyle(current);
//                     const marginBottom = parseFloat(style.marginBottom);

//                     return total + current.clientHeight + marginBottom;
//                 }, 0);

//         setPlaceholderProps({
//             clientHeight,
//             clientWidth,
//             clientY,
//         });
//     };

//     return (
//         <DragDropContext
//             onDragStart={onDragStart}
//             onDragUpdate={onDragUpdate}
//             onDragEnd={onDragEnd}
//         >
//             <TabItem placeholderProps={placeholderProps} navItems={state.navItems} />
//         </DragDropContext>
//     );
// }

