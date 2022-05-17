import React, { useReducer } from "react"

export function StorageToggle() {
  const [isEnable, enable] = useReducer(() => true, false)
  return (
    <div>
      Hello world Option UI, do you hear me?
      <input type="checkbox" checked={isEnable} onChange={() => enable()} />
    </div>
  )
}
