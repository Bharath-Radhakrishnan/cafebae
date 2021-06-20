/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { useStateValue } from "../../StateProvider";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

import { Disclosure, Menu } from "@headlessui/react";
import { BellIcon } from "@heroicons/react/outline";
export default function HeaderTailwind() {
  const [{ user }] = useStateValue();
  return header2();
  //   return (
  //     <Popover className="relative bg-blue-100">
  //       {({ open }) => (
  //         <>
  //           <div className="max-w-7xl mx-auto px-4 sm:px-6">
  //             <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
  //               {/* Logo */}
  //               <div className="flex justify-start lg:w-0 lg:flex-1">
  //                 <a href="/">
  //                   <span className="sr-only">Workflow</span>
  //                   <img
  //                     className="h-8 w-auto sm:h-10"
  //                     src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
  //                     alt=""
  //                   />
  //                 </a>
  //               </div>
  //               {/* Logo Ends */}
  //               <div className="-mr-2 -my-2 md:hidden">
  //                 <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
  //                   <span className="sr-only">Open menu</span>
  //                   <MenuIcon className="h-6 w-6" aria-hidden="true" />
  //                 </Popover.Button>
  //               </div>
  //               <Popover.Group as="nav" className="hidden md:flex space-x-10">
  //                 <Link
  //                   to="/"
  //                   className="text-base font-medium text-gray-500 hover:text-gray-900"
  //                 >
  //                   Home
  //                 </Link>{" "}
  //                 <Link
  //                   to="/about"
  //                   className="text-base font-medium text-gray-500 hover:text-gray-900"
  //                 >
  //                   About us
  //                 </Link>{" "}
  //                 {user?.currentUser && (
  //                   <Link
  //                     to="/dashboard"
  //                     className="text-base font-medium text-gray-900 hover:text-gray-700"
  //                   >
  //                     {user?.currentUser?.displayName}
  //                   </Link>
  //                 )}
  //               </Popover.Group>

  //               <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
  //                 {user?.currentUser ? (
  //                   <div
  //                     className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
  //                     onClick={() => auth.signOut()}
  //                   >
  //                     SIGN OUT
  //                   </div>
  //                 ) : (
  //                   <Link
  //                     to="/login"
  //                     className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
  //                   >
  //                     Sign In
  //                   </Link>
  //                 )}
  //               </div>
  //             </div>
  //           </div>

  //           {/*----------- Mobile-View------ */}
  //           <Transition
  //             show={open}
  //             as={Fragment}
  //             enter="duration-200 ease-out"
  //             enterFrom="opacity-0 scale-95"
  //             enterTo="opacity-100 scale-100"
  //             leave="duration-100 ease-in"
  //             leaveFrom="opacity-100 scale-100"
  //             leaveTo="opacity-0 scale-95"
  //           >
  //             <Popover.Panel
  //               focus
  //               static
  //               className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
  //             >
  //               <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
  //                 <div className="pt-5 pb-6 px-5">
  //                   <div className="flex items-center justify-between">
  //                     <div>
  //                       <img
  //                         className="h-8 w-auto"
  //                         src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
  //                         alt="Workflow"
  //                       />
  //                     </div>
  //                     <div className="-mr-2">
  //                       <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
  //                         <span className="sr-only">Close menu</span>
  //                         <XIcon className="h-6 w-6" aria-hidden="true" />
  //                       </Popover.Button>
  //                     </div>
  //                   </div>
  //                 </div>
  //                 <div className="py-6 px-5 space-y-6">
  //                   <div className="grid grid-cols-2 gap-y-4 gap-x-8">
  //                     <Link
  //                       href="/"
  //                       className="text-base font-medium text-gray-900 hover:text-gray-700"
  //                     >
  //                       Home
  //                     </Link>

  //                     <Link
  //                       href="/about"
  //                       className="text-base font-medium text-gray-900 hover:text-gray-700"
  //                     >
  //                       About
  //                     </Link>
  //                     {user?.currentUser && (
  //                       <Link
  //                         to="/dashboard"
  //                         className="text-base font-medium text-gray-900 hover:text-gray-700"
  //                       >
  //                         {user?.currentUser?.displayName}
  //                       </Link>
  //                     )}
  //                     {user?.currentUser ? (
  //                       <div className="options" onClick={() => auth.signOut()}>
  //                         SIGN OUT
  //                       </div>
  //                     ) : (
  //                       <Link to="/login" className="options">
  //                         SIGN IN
  //                       </Link>
  //                     )}
  //                   </div>
  //                   <div>
  //                     <a
  //                       href="/"
  //                       className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
  //                     >
  //                       Sign up
  //                     </a>
  //                     {/* <p className="mt-6 text-center text-base font-medium text-gray-500">
  //                       Existing customer?{" "}
  //                       <a
  //                         href="/"
  //                         className="text-indigo-600 hover:text-indigo-500"
  //                       >
  //                         Sign in
  //                       </a>
  //                     </p> */}
  //                   </div>
  //                 </div>
  //               </div>
  //             </Popover.Panel>
  //           </Transition>
  //         </>
  //       )}
  //     </Popover>
  //   );
}

const header2 = () => {
  /* This example requires Tailwind CSS v2.0+ */

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const navigation = [
    { name: "Home", href: "/", current: true },
    { name: "About", href: "/", current: false },
    { name: "Projects", href: "/", current: false },
    { name: "Calendar", href: "/", current: false },
  ];

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                {/* ---------Logo-Goes-Here--------------- */}
                <div className="flex-shrink-0 flex items-center">
                  <Link className="text-base font-medium text-gray-500 hover:text-gray-900">
                    Bae Area Club
                  </Link>
                  {/* <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  /> */}
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        // aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  {({ open }) => (
                    <>
                      <div>
                        <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items
                          static
                          className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                        >
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Your Profile
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Sign out
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
