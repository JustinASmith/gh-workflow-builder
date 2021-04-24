import React from "react";

const SidebarItem = ({ title, type, ghType, subtitle }) => {
  const onDragStart = (event, nodeType, ghType, subtitle) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("application/ghtype", ghType);
    event.dataTransfer.setData("application/title", title);
    event.dataTransfer.setData("application/subtitle", subtitle);
  };

  if (title && type && ghType && subtitle) {
    return (
      <li
        className={`dndnode ${type}`}
        onDragStart={(event) => onDragStart(event, type, ghType, subtitle)}
        draggable
      >
        <div className="relative flex flex-row items-center pr-6 h-11 hover:text-gray-200 text-gray-500 hover:bg-gray-700 hover:border-blue-600 border-transparent focus:outline-none border-l-2 border-blue-900 rounded-lg ml-4 cursor-move shadow-md">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="fill-current text-gray-400"
              d="M15.5 17C16.3284 17 17 17.6716 17 18.5C17 19.3284 16.3284 20 15.5 20C14.6716 20 14 19.3284 14 18.5C14 17.6716 14.6716 17 15.5 17ZM8.5 17C9.32843 17 10 17.6716 10 18.5C10 19.3284 9.32843 20 8.5 20C7.67157 20 7 19.3284 7 18.5C7 17.6716 7.67157 17 8.5 17ZM15.5 10C16.3284 10 17 10.6716 17 11.5C17 12.3284 16.3284 13 15.5 13C14.6716 13 14 12.3284 14 11.5C14 10.6716 14.6716 10 15.5 10ZM8.5 10C9.32843 10 10 10.6716 10 11.5C10 12.3284 9.32843 13 8.5 13C7.67157 13 7 12.3284 7 11.5C7 10.6716 7.67157 10 8.5 10ZM15.5 3C16.3284 3 17 3.67157 17 4.5C17 5.32843 16.3284 6 15.5 6C14.6716 6 14 5.32843 14 4.5C14 3.67157 14.6716 3 15.5 3ZM8.5 3C9.32843 3 10 3.67157 10 4.5C10 5.32843 9.32843 6 8.5 6C7.67157 6 7 5.32843 7 4.5C7 3.67157 7.67157 3 8.5 3Z"
            />
          </svg>
          <span className="ml-6 font-sans text-sm font-semibold tracking-wide truncate">
            {title}
          </span>
        </div>
      </li>
    );
  }
};

export default SidebarItem;
