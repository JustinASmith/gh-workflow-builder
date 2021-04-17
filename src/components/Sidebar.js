import React from 'react';

const Sidebar = () => (
  <div class="flex flex-auto flex-col flex-shrink-0 min-h-screen text-gray-800 antialiased bg-gray-50">
    <div class="fixed left-0 top-0 flex flex-col h-full bg-gray-900 shadow-lg">
      <div class="flex flex-col m-4 h-20 text-center">
        <h2 class="mb-2 text-left text-gray-200 font-sans text-xl font-bold tracking-wide">
          Blocks
        </h2>
        <input
          type="search"
          name="q"
          class="mb-2 pl-10 py-2 text-gray-700 focus:text-gray-900 text-sm bg-gray-300 focus:bg-white rounded-md focus:outline-none"
          placeholder="Search..."
          autocomplete="off"
        />
      </div>
      <div class="flex-grow mx-4 border-t-2 border-gray-500 overflow-x-hidden overflow-y-auto">
        <ul class="flex flex-row items-center justify-center px-4 cursor-pointer">
          <li className="block px-6 py-4 hover:text-blue-500 text-blue-500 text-gray-600 font-medium border-b-2 border-blue-500 focus:outline-none">
            Triggers
          </li>
          <li className="block px-6 py-4 hover:text-blue-500 text-gray-600 focus:outline-none">
            Runners
          </li>
          <li className="block px-6 py-4 hover:text-blue-500 text-gray-600 focus:outline-none">
            Steps
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Sidebar;
