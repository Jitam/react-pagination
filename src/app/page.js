"use client"

import Image from "next/image";
import { lazy, Suspense, useEffect } from "react";
import Hello from "./components/Hello/Hello";
import dynamic from "next/dynamic";
import Loading from "./components/Loading/page";
import axios from "axios";
import { Provider } from "react-redux";
import store from "./store/store";
import { fetchPosts } from "@/features/postSlice";

export default function Home() {
  // const ComponentA = dynamic(() => import("./components/Hello/Hello"))
  const LazyComponent = () => { return (<Hello />) }

  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Provider store={store}>
        <Suspense fallback={<Loading />}>
          {/* <ComponentA /> */}
          <LazyComponent />
        </Suspense>
      </Provider>
    </div>
  );
}
