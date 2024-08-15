"use client";

import { useState } from "react";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <div className="absolute top-0 left-0 bg-gradient-to-b from-[#320035] via-[#320035] to-[#c700d4] bottom-0 leading-5 h-full w-full overflow-hidden">
      <div className="relative min-h-screen sm:flex sm:flex-row justify-center bg-transparent rounded-3xl shadow-xl">
        <div className="flex-col flex self-center lg:px-14 sm:max-w-4xl xl:max-w-md z-10">
          <div className="self-start hidden lg:flex flex-col text-gray-300">
            <h1 className="my-3 font-semibold text-4xl">Welcome back</h1>
            <p className="pr-3 text-sm opacity-75">
              This a example text for Digpatho App
            </p>
          </div>
        </div>
        <div className="flex justify-center self-center z-10  ">
          <div className="p-12 bg-gray-100 mx-auto rounded-3xl w-96 shadow-xl">
            <div className="mb-7">
              <h3 className="font-semibold text-2xl text-gray-800">Sign In</h3>
              <p className="text-gray-400">
                Don't have an account?{" "}
                <a
                  href="#"
                  className="text-sm text-purple-700 hover:text-purple-700"
                >
                  Sign Up
                </a>
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <input
                  className="w-full text-sm px-4 py-3 text-black focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="relative">
                <input
                  placeholder="Password"
                  type={showPassword ? "password" : "text"}
                  className="text-sm text-black px-4 py-3 rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-purple-400"
                />
                <div className="flex items-center absolute inset-y-0 right-0 mr-3 text-sm leading-5">
                  {showPassword ? (
                    <svg
                      onClick={() => setShowPassword(!showPassword)}
                      className="h-4 text-purple-700"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                      />
                    </svg>
                  ) : (
                    <svg
                      onClick={() => setShowPassword(!showPassword)}
                      className="h-4 text-purple-700"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path
                        fill="currentColor"
                        d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zM416 256a94.75 94.75 0 0 0-41.31 9.6L157.68 3.37A308.15 308.15 0 0 1 320 64c123.93 0 231.29 71.64 285.52 177.41a32.35 32.35 0 0 1 0 29.19C551.68 312.39 443.93 384 320 384c-26.91 0-52.87-4-77.89-10.46l66.1 51.76a144.13 144.13 0 0 0 77.89 10.46c50.93 0 99.36-19.29 135.3-54.72zM416 256a94.75 94.75 0 0 0-41.31 9.6L156.88 3.37A308.15 308.15 0 0 1 320 64c123.93 0 231.29 71.64 285.52 177.41a32.35 32.35 0 0 1 0 29.19C551.68 312.39 443.93 384 320 384c-26.91 0-52.87-4-77.89-10.46l66.1 51.76a144.13 144.13 0 0 0 77.89 10.46c50.93 0 99.36-19.29 135.3-54.72zM320 128a144 144 0 0 1 144 144c0 22.23-5.38 43.26-14.97 62.46l-30.08-23.3A94.75 94.75 0 0 0 320 128zM320 128a94.75 94.75 0 0 0-41.31 9.6L157.68 3.37A308.15 308.15 0 0 1 320 64c123.93 0 231.29 71.64 285.52 177.41a32.35 32.35 0 0 1 0 29.19C551.68 312.39 443.93 384 320 384c-26.91 0-52.87-4-77.89-10.46l66.1 51.76a144.13 144.13 0 0 0 77.89 10.46c50.93 0 99.36-19.29 135.3-54.72zM320 128a94.75 94.75 0 0 0-41.31 9.6L157.68 3.37A308.15 308.15 0 0 1 320 64c123.93 0 231.29 71.64 285.52 177.41a32.35 32.35 0 0 1 0 29.19C551.68 312.39 443.93 384 320 384c-26.91 0-52.87-4-77.89-10.46l66.1 51.76a144.13 144.13 0 0 0 77.89 10.46c50.93 0 99.36-19.29 135.3-54.72zM416 256a94.75 94.75 0 0 0-41.31 9.6L157.68 3.37A308.15 308.15 0 0 1 320 64c123.93 0 231.29 71.64 285.52 177.41a32.35 32.35 0 0 1 0 29.19C551.68 312.39 443.93 384 320 384c-26.91 0-52.87-4-77.89-10.46l66.1 51.76a144.13 144.13 0 0 0 77.89 10.46c50.93 0 99.36-19.29 135.3-54.72zM416 256a94.75 94.75 0 0 0-41.31 9.6L157.68 3.37A308.15 308.15 0 0 1 320 64c123.93 0 231.29 71.64 285.52 177.41a32.35 32.35 0 0 1 0 29.19C551.68 312.39 443.93 384 320 384c-26.91 0-52.87-4-77.89-10.46l66.1 51.76a144.13 144.13 0 0 0 77.89 10.46c50.93 0 99.36-19.29 135.3-54.72zM320 128a144 144 0 0 1 144 144c0 22.23-5.38 43.26-14.97 62.46l-30.08-23.3A94.75 94.75 0 0 0 320 128zM320 128a94.75 94.75 0 0 0-41.31 9.6L157.68 3.37A308.15 308.15 0 0 1 320 64c123.93 0 231.29 71.64 285.52 177.41a32.35 32.35 0 0 1 0 29.19C551.68 312.39 443.93 384 320 384c-26.91 0-52.87-4-77.89-10.46l66.1 51.76a144.13 144.13 0 0 0 77.89 10.46c50.93 0 99.36-19.29 135.3-54.72zM320 128a144 144 0 0 1 144 144c0 22.23-5.38 43.26-14.97 62.46l-30.08-23.3A94.75 94.75 0 0 0 320 128z"
                      />
                    </svg>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm ml-auto">
                  <a href="#" className="text-purple-700 hover:text-purple-700">
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div>
                  <a href="/desktop-page" className="text-purple-700 hover:text-purple-700">
                <button className="w-full flex justify-center bg-purple-700 hover:bg-purple-800 text-gray-100 p-3 rounded-lg tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500">
                    Sign in
                </button>
                  </a>
              </div>
            </div>
            <div className="mt-7 text-center text-gray-400 text-xs">
              <span>
                Copyright © 2021-2024{" "}
                <a href="#" className="text-purple-700 hover:text-purple-700">
                  Vertebrar
                </a>
                . All Rights Reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
