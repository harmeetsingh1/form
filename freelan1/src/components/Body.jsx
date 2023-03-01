import React from "react";

function Body() {
  return (
    <>
      <div class="flex space-x-4 mt-1">
        <img
          class="rounded-full w-40 h-40  max-w-lg mx-auto"
          src="/images/profile-picture-2.jpg"
          alt="profile img"
        />
      </div>

      <div class="flex mt-1">
        <div class="flex space-x-4 h-auto max-w-lg mx-auto">
          <h6>Tommy Blake</h6>
        </div>
      </div>

      <div class="flex">
        <div class="flex space-x-1 h-auto max-w-lg mx-auto">
          <svg
            class="w-4 mt-1 h-auto  fill-slate-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M1 8a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 018.07 3h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0016.07 6H17a2 2 0 012 2v7a2 2 0 01-2 2H3a2 2 0 01-2-2V8zm13.5 3a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM10 14a3 3 0 100-6 3 3 0 000 6z"
            ></path>
          </svg>

          <a
            href="#"
            class="text-m text-violet-700 dark:text-blue-500 hover:underline h-auto mt-1 "
          >
            Edit Profile Picture
          </a>
        </div>
      </div>
    </>
  );
}

export default Body;
