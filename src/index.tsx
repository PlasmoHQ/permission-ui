import React, { useReducer } from "react"

export function StorageToggle() {
  const [isEnable, enable] = useReducer(() => true, false)
  return (
    <div>
      Hello world
      <input type="checkbox" checked={isEnable} onChange={() => enable()} />
    </div>
  )
}
