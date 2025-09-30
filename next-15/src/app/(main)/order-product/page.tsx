"use client";

import { useRouter } from "next/navigation";

const OrderProductPage: React.FC = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Order product</h1>
      <button
        type="button"
        className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold cursor-pointer shadow-lg shadow-indigo-500/20 hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 active:scale-[.98] transition duration-200"
        onClick={() => {
          console.log("Placing your order...");
          router.push("/");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-5"
          aria-hidden="true"
        >
          <path d="M2.25 3a.75.75 0 000 1.5h1.386c.22 0 .413.148.468.361l2.572 10.286A2.25 2.25 0 008.853 17.25h7.644a2.25 2.25 0 002.177-1.64l1.26-4.725A.75.75 0 0019.208 10.5H8.384l-.39-1.56h10.464a.75.75 0 000-1.5H7.61l-.46-1.837A2.25 2.25 0 004.886 3H2.25z" />
          <path d="M8.25 20.25a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm10.5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
        Place order
      </button>
    </div>
  );
};

export default OrderProductPage;
