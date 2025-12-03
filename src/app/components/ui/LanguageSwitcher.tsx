"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Link, useRoute } from "next-globe-gen"
import { PiGlobe } from "react-icons/pi"

export const LanguageSwitcher = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false)
  const route = useRoute()
  const wrapperRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!wrapperRef.current) return
      if (!wrapperRef.current.contains(e.target as Node)) {
        setDropDownOpen(false)
      }
    }

    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setDropDownOpen(false)
    }

    if (dropDownOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("keydown", handleEsc)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEsc)
    }
  }, [dropDownOpen])

  return (
    <div ref={wrapperRef} className="fixed bottom-20 right-4 z-20 flex items-end">
      <AnimatePresence>
        {dropDownOpen && (
          <motion.ul
            initial={{ opacity: 0, scale: 0.95, y: 6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 6 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="mb-2 mr-2 w-44 origin-bottom-right rounded-xl bg-white/95 py-2 shadow-2xl backdrop-blur-sm dark:bg-gray-800/90"
          >
            <li>
              <Link
                href={route}
                locale="en"
                className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-700"
                onClick={() => setDropDownOpen(false)}
              >
                <span className="text-lg">🇺🇸</span>
                <span>English</span>
              </Link>
            </li>
            <li>
              <Link
                href={route}
                locale="id"
                className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-700"
                onClick={() => setDropDownOpen(false)}
              >
                <span className="text-lg">🇮🇩</span>
                <span>Bahasa</span>
              </Link>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
      <button
        aria-expanded={dropDownOpen}
        aria-label="Switch language"
        onClick={() => setDropDownOpen((s) => !s)}
        className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 p-2 shadow-lg ring-1 ring-indigo-200 transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:from-indigo-600 dark:to-purple-700"
      >
        <span className="sr-only">Bahasa</span>
        <PiGlobe className="text-2xl text-white" />
        <span className="pointer-events-none absolute -top-10 rounded-md bg-black/70 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
          Language
        </span>
      </button>
    </div>
  )
}
