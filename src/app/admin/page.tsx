'use client'

import { useRef } from 'react'
import { useMap } from '../../hooks/useMap'
// import { io } from 'socket.io-client'

export default function AdminPage() {
  const mapContainerRef = useRef<HTMLDivElement>(null)
  useMap(mapContainerRef)

  // const socket = io()

  return <div className="h-full w-full" ref={mapContainerRef} />
}
