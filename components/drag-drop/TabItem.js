/* eslint-disable @next/next/no-img-element */
// import React from "react";
// import { Draggable, Droppable } from "react-beautiful-dnd";

// const TabItem = ({ navItems, placeholderProps }) => {
//     return (
//         <>
//             <Droppable droppableId="col">
//                 {(droppableProvided) => (
//                     <div
//                         className="tab-nav"

//                         {...droppableProvided.droppableProps}
//                         ref={droppableProvided.innerRef}
//                     >
//                         {navItems.map((navItem, index) => (
//                             <Draggable
//                                 key={navItem.id}
//                                 draggableId={navItem.id.toString()}
//                                 index={index}
//                             >
//                                 {(draggableProvided, draggableSnapshot) => (
//                                     <div
//                                         {...draggableProvided.dragHandleProps}
//                                         {...draggableProvided.draggableProps}
//                                         ref={draggableProvided.innerRef}
//                                     >
//                                         <div className="tab-nav-item" data-tab-id={`${navItem.tabId}`}>
//                                             <span className="tabs-icon">
//                                                 <img src="/images/icons/icon-4.svg" alt="icon-4" />
//                                             </span>
//                                             <span className="tabs-text">{navItem.content}</span>
//                                         </div>
//                                     </div>
//                                 )}
//                             </Draggable>
//                         ))}
//                         {droppableProvided.placeholder}
//                     </div>
//                 )}
//             </Droppable>
//         </>
//     );
// };

// export default TabItem;
