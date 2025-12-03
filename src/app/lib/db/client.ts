"use client"

import { getApps, initializeApp, getApp } from "firebase/app"
import { Database, getDatabase } from "firebase/database"
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASEURL,
}

// Initialize Firebase'
let app: ReturnType<typeof getApp> | null = null
let db: Database | null = null

export const getDatabaseClient = () => {
  if (typeof window === "undefined") return null
  if (!app) app = getApps().length ? getApp() : initializeApp(firebaseConfig)

  if (!db) {
    try {
      db = getDatabase(app!, process.env.NEXT_PUBLIC_FIREBASE_DATABASEURL)
    } catch (error) {
      console.error("Gagal init Firebase Realtime Database:", error, {
        databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASEURL,
      })
      return null
    }
  }

  return db
}
