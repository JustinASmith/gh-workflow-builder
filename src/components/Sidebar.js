import React from "react";

const Sidebar = () => (
  <>
    <div class="flex flex-col max-h-screen bg-gray-900 shadow-lg">
      <div class="flex flex-col m-4 h-20 text-center h-auto">
        <h2 class="mb-4 text-left text-gray-200 font-sans text-xl font-bold tracking-wide">
          GitHub Workflow Builder
        </h2>
        <input
          type="search"
          name="q"
          class="pl-10 py-2 text-gray-700 focus:text-gray-900 text-sm bg-gray-300 focus:bg-white rounded-md focus:outline-none"
          placeholder="Search..."
          autocomplete="off"
        />
      </div>
      <div class="flex-grow overflow-x-hidden overflow-y-auto">
        <ul class="flex flex-col py-6 space-y-1">
          <li class="px-5">
            <div class="flex flex-row items-center h-8">
              <div class="flex flex-row items-center justify-between my-4 w-full text-gray-300 font-sans text-sm font-semibold uppercase">
                <p>Triggers</p>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                >
                  <title>power</title>
                  <path
                    fill="#dddd00"
                    d="M12 0l-12 16h12l-8 16 28-20h-16l12-12z"
                  ></path>
                </svg>
              </div>
            </div>
          </li>
          <li>
            <a
              href="#"
              class="relative flex flex-row items-center pr-6 h-11 hover:text-gray-200 text-gray-500 hover:bg-gray-700 border-l-4 hover:border-blue-500 border-transparent focus:outline-none"
            >
              <span class="ml-6 font-sans text-sm font-semibold tracking-wide truncate">
                Pull Request
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="relative flex flex-row items-center pr-6 h-11 hover:text-gray-200 text-gray-500 hover:bg-gray-700 border-l-4 hover:border-blue-500 border-transparent focus:outline-none"
            >
              <span class="ml-6 font-sans text-sm font-semibold tracking-wide truncate">
                Push
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="relative flex flex-row items-center pr-6 h-11 hover:text-gray-200 text-gray-500 hover:bg-gray-700 border-l-4 hover:border-blue-500 border-transparent focus:outline-none"
            >
              <span class="ml-6 font-sans text-sm font-semibold tracking-wide truncate">
                Release
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="relative flex flex-row items-center pr-6 h-11 hover:text-gray-200 text-gray-500 hover:bg-gray-700 border-l-4 hover:border-blue-500 border-transparent focus:outline-none"
            >
              <span class="ml-6 font-sans text-sm font-semibold tracking-wide truncate">
                Label
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="relative flex flex-row items-center pr-6 h-11 hover:text-gray-200 text-gray-500 hover:bg-gray-700 border-l-4 hover:border-blue-500 border-transparent focus:outline-none"
            >
              <span class="ml-6 font-sans text-sm font-semibold tracking-wide truncate">
                Schedule
              </span>
            </a>
          </li>
          <li class="px-5">
            <div class="flex flex-row items-center h-8">
              <div class="flex flex-row items-center justify-between my-4 w-full text-gray-300 font-sans text-sm font-semibold uppercase">
                Steps
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                >
                  <title>list-numbered</title>
                  <path
                    fill="#0099CC"
                    d="M12 26h20v4h-20zM12 14h20v4h-20zM12 2h20v4h-20zM6 0v8h-2v-6h-2v-2zM4 16.438v1.563h4v2h-6v-4.563l4-1.875v-1.563h-4v-2h6v4.563zM8 22v10h-6v-2h4v-2h-4v-2h4v-2h-4v-2z"
                  ></path>
                </svg>
              </div>
            </div>
          </li>
          <li>
            <a
              href="#"
              class="relative flex flex-row items-center pr-6 h-11 hover:text-gray-200 text-gray-500 hover:bg-gray-700 border-l-4 hover:border-blue-500 border-transparent focus:outline-none"
            >
              <span class="ml-6 font-sans text-sm font-semibold tracking-wide truncate">
                Checkout
              </span>
              <span class="px-2 py-0.5">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 32 32"
                >
                  <title>question</title>
                  <path
                    fill="#aaaaaa"
                    d="M14 22h4v4h-4zM22 8c1.105 0 2 0.895 2 2v6l-6 4h-4v-2l6-4v-2h-10v-4h12zM16 3c-3.472 0-6.737 1.352-9.192 3.808s-3.808 5.72-3.808 9.192c0 3.472 1.352 6.737 3.808 9.192s5.72 3.808 9.192 3.808c3.472 0 6.737-1.352 9.192-3.808s3.808-5.72 3.808-9.192c0-3.472-1.352-6.737-3.808-9.192s-5.72-3.808-9.192-3.808zM16 0v0c8.837 0 16 7.163 16 16s-7.163 16-16 16c-8.837 0-16-7.163-16-16s7.163-16 16-16z"
                  ></path>
                </svg>
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="relative flex flex-row items-center pr-6 h-11 hover:text-gray-200 text-gray-500 hover:bg-gray-700 border-l-4 hover:border-blue-500 border-transparent focus:outline-none"
            >
              <span class="ml-6 font-sans text-sm font-semibold tracking-wide truncate">
                Install
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="relative flex flex-row items-center pr-6 h-11 hover:text-gray-200 text-gray-500 hover:bg-gray-700 border-l-4 hover:border-blue-500 border-transparent focus:outline-none"
            >
              <span class="ml-6 font-sans text-sm font-semibold tracking-wide truncate">
                Lint
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="relative flex flex-row items-center pr-6 h-11 hover:text-gray-200 text-gray-500 hover:bg-gray-700 border-l-4 hover:border-blue-500 border-transparent focus:outline-none"
            >
              <span class="ml-6 font-sans text-sm font-semibold tracking-wide truncate">
                Test
              </span>
            </a>
          </li>
          <li class="px-5">
            <div class="flex flex-row items-center h-8">
              <div class="flex flex-row items-center justify-between my-4 w-full text-gray-300 font-sans text-sm font-semibold uppercase">
                Build
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                >
                  <title>cogs</title>
                  <path
                    fill="#ABB6F3"
                    d="M11.366 22.564l1.291-1.807-1.414-1.414-1.807 1.291c-0.335-0.187-0.694-0.337-1.071-0.444l-0.365-2.19h-2l-0.365 2.19c-0.377 0.107-0.736 0.256-1.071 0.444l-1.807-1.291-1.414 1.414 1.291 1.807c-0.187 0.335-0.337 0.694-0.443 1.071l-2.19 0.365v2l2.19 0.365c0.107 0.377 0.256 0.736 0.444 1.071l-1.291 1.807 1.414 1.414 1.807-1.291c0.335 0.187 0.694 0.337 1.071 0.444l0.365 2.19h2l0.365-2.19c0.377-0.107 0.736-0.256 1.071-0.444l1.807 1.291 1.414-1.414-1.291-1.807c0.187-0.335 0.337-0.694 0.444-1.071l2.19-0.365v-2l-2.19-0.365c-0.107-0.377-0.256-0.736-0.444-1.071zM7 27c-1.105 0-2-0.895-2-2s0.895-2 2-2 2 0.895 2 2-0.895 2-2 2zM32 12v-2l-2.106-0.383c-0.039-0.251-0.088-0.499-0.148-0.743l1.799-1.159-0.765-1.848-2.092 0.452c-0.132-0.216-0.273-0.426-0.422-0.629l1.219-1.761-1.414-1.414-1.761 1.219c-0.203-0.149-0.413-0.29-0.629-0.422l0.452-2.092-1.848-0.765-1.159 1.799c-0.244-0.059-0.492-0.109-0.743-0.148l-0.383-2.106h-2l-0.383 2.106c-0.251 0.039-0.499 0.088-0.743 0.148l-1.159-1.799-1.848 0.765 0.452 2.092c-0.216 0.132-0.426 0.273-0.629 0.422l-1.761-1.219-1.414 1.414 1.219 1.761c-0.149 0.203-0.29 0.413-0.422 0.629l-2.092-0.452-0.765 1.848 1.799 1.159c-0.059 0.244-0.109 0.492-0.148 0.743l-2.106 0.383v2l2.106 0.383c0.039 0.251 0.088 0.499 0.148 0.743l-1.799 1.159 0.765 1.848 2.092-0.452c0.132 0.216 0.273 0.426 0.422 0.629l-1.219 1.761 1.414 1.414 1.761-1.219c0.203 0.149 0.413 0.29 0.629 0.422l-0.452 2.092 1.848 0.765 1.159-1.799c0.244 0.059 0.492 0.109 0.743 0.148l0.383 2.106h2l0.383-2.106c0.251-0.039 0.499-0.088 0.743-0.148l1.159 1.799 1.848-0.765-0.452-2.092c0.216-0.132 0.426-0.273 0.629-0.422l1.761 1.219 1.414-1.414-1.219-1.761c0.149-0.203 0.29-0.413 0.422-0.629l2.092 0.452 0.765-1.848-1.799-1.159c0.059-0.244 0.109-0.492 0.148-0.743l2.106-0.383zM21 15.35c-2.402 0-4.35-1.948-4.35-4.35s1.948-4.35 4.35-4.35 4.35 1.948 4.35 4.35c0 2.402-1.948 4.35-4.35 4.35z"
                  ></path>
                </svg>
              </div>
            </div>
          </li>
          <li>
            <a
              href="#"
              class="relative flex flex-row items-center pr-6 h-11 hover:text-gray-200 text-gray-500 hover:bg-gray-700 border-l-4 hover:border-blue-500 border-transparent focus:outline-none"
            >
              <span class="ml-6 font-sans text-sm font-semibold tracking-wide truncate">
                Make
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="relative flex flex-row items-center pr-6 h-11 hover:text-gray-200 text-gray-500 hover:bg-gray-700 border-l-4 hover:border-blue-500 border-transparent focus:outline-none"
            >
              <span class="ml-6 font-sans text-sm font-semibold tracking-wide truncate">
                Node
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="relative flex flex-row items-center pr-6 h-11 hover:text-gray-200 text-gray-500 hover:bg-gray-700 border-l-4 hover:border-blue-500 border-transparent focus:outline-none"
            >
              <span class="ml-6 font-sans text-sm font-semibold tracking-wide truncate">
                Jekyll
              </span>
            </a>
          </li>
          <li class="px-5">
            <div class="flex flex-row items-center h-8">
              <div class="flex flex-row items-center justify-between my-4 w-full text-gray-300 font-sans text-sm font-semibold uppercase">
                <p>Deploy</p>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                >
                  <title>rocket</title>
                  <path
                    fill="#5DC245"
                    d="M22 2l-10 10h-6l-6 8c0 0 6.357-1.77 10.065-0.94l-10.065 12.94 13.184-10.255c1.839 4.208-1.184 10.255-1.184 10.255l8-6v-6l10-10 2-10-10 2z"
                  ></path>
                </svg>
              </div>
            </div>
          </li>
          <li>
            <a
              href="#"
              class="relative flex flex-row items-center pr-6 h-11 hover:text-gray-200 text-gray-500 hover:bg-gray-700 border-l-4 hover:border-blue-500 border-transparent focus:outline-none"
            >
              <span class="ml-6 font-sans text-sm font-semibold tracking-wide truncate">
                GitHub Pages
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="relative flex flex-row items-center pr-6 h-11 hover:text-gray-200 text-gray-500 hover:bg-gray-700 border-l-4 hover:border-blue-500 border-transparent focus:outline-none"
            >
              <span class="ml-6 font-sans text-sm font-semibold tracking-wide truncate">
                Firebase
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </>
);

export default Sidebar;
