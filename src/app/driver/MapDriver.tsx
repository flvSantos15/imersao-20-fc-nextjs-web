'use client'

import { useEffect, useRef } from 'react'
import { useMap } from '@/hooks/useMap'
import { socket } from '@/utils/socket.io'

type MapDriverProps = {
  route_id: string | null
}

export function MapDriver(props: MapDriverProps) {
  const { route_id } = props
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const map = useMap(mapContainerRef)

  useEffect(() => {
    if (!map || !route_id) return

    // if (socket.disconnected) {
    //   socket.connect()
    // } else {
    //   socket.offAny()
    // }
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    socket.disconnected ? socket.connect() : socket.offAny()

    socket.on('connect', () => {
      console.log('connected')
    })

    socket.on(`server:new-points/${route_id}:list`, (data) => {})
  }, [route_id, map])

  return <div className="w-2/3 h-full" ref={mapContainerRef} />
}
