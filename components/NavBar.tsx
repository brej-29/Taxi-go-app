"use client"
import Image from 'next/image'
import React from 'react'
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/clerk-react";
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react';
import { Sora } from 'next/font/google'
const sora = Sora({ subsets: ['latin'], weight: ['600','700'] })

function NavBar() {
  const { isSignedIn, user, isLoaded } = useUser();
  const { resolvedTheme, setTheme  } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    // 1) flip via next-themes
    
    const next = (document.documentElement.classList.contains("dark") || resolvedTheme === "dark")
      ? "light"
      : "dark"
    setTheme(next)

    // 2) also force the class on <html> (belt & suspenders)
    const root = document.documentElement
    if (next === "dark") root.classList.add("dark")
    else root.classList.remove("dark")
  }

  return (
    <div className="nav-bar">
      <div className="nav-left">
        <Image src='/logo.png' alt='logo' width={80} height={20} />
        <div className={`${sora.className} nav-links`}>
          <h2 className='nav-link'>Home</h2>
          <h2 className='nav-link'>History</h2>
          <h2 className='nav-link'>Help</h2>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        {/* Dark/Light Toggle */}
        {mounted && (
          <button
            onClick={toggleTheme}
            className="nav-theme-btn"
            aria-label="Toggle theme"
          >
            {resolvedTheme  === 'light' ? '☀️' : '🌙'}
          </button>
        )}
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  )
}
export default NavBar