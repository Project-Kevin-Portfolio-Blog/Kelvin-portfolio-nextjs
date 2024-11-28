'use client'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect } from 'react';
import { ThemeModeScript } from "flowbite-react";
import Navbar from '@/components/Navbar/Navbar'
import Loader from './Loader'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  // Prevent hydration issues
  if (!mounted) return null;

  if (isLoading) {
    return (
      <>
        <ThemeModeScript />
        <Loader />
      </>
    );
  }

  return (
    <>
      <ThemeModeScript />
      <Navbar />
      <main className="pt-16">
        {children}
      </main>
    </>
  );
} 