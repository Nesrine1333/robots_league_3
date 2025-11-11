"use client";
import { useState, useEffect, ReactNode } from "react";
import LoadingPage from "./loading";

type Props = {
  children: ReactNode;
};

export default function LoadingWrapper({ children }: Props) {
    const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };
  useEffect(() => {
    // simulate loading or wait for actual resources
    const timer = setTimeout(() => setIsLoading(false), 1000); // 1s delay
    return () => clearTimeout(timer);
  }, []);

  return <>{isLoading ?<LoadingPage onLoadingComplete={handleLoadingComplete} /> : children}</>;
}
