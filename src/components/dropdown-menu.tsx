"use client"

import * as React from "react"

export function DropdownMenu({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="relative inline-block text-left">
      {React.Children.map(children, child =>
        React.isValidElement(child)
          ? React.cloneElement(child as any, { open, setOpen })
          : child
      )}
    </div>
  )
}

export function DropdownMenuTrigger({ 
  asChild, 
  children, 
  open, 
  setOpen 
}: { 
  asChild?: boolean
  children: React.ReactNode
  open?: boolean
  setOpen?: (open: boolean) => void
}) {
  const handleClick = () => setOpen?.(!open)

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as any, { onClick: handleClick })
  }

  return (
    <button onClick={handleClick}>
      {children}
    </button>
  )
}

export function DropdownMenuContent({ 
  align = "center", 
  children, 
  open 
}: { 
  align?: "start" | "center" | "end"
  children: React.ReactNode
  open?: boolean
}) {
  if (!open) return null

  const alignmentClasses = {
    start: "left-0",
    center: "left-1/2 -translate-x-1/2",
    end: "right-0"
  }

  return (
    <div className={`absolute top-full mt-1 ${alignmentClasses[align]} min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md z-50`}>
      {children}
    </div>
  )
}

export function DropdownMenuItem({ 
  children, 
  onClick 
}: { 
  children: React.ReactNode
  onClick?: () => void
}) {
  return (
    <div
      className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
      onClick={onClick}
    >
      {children}
    </div>
  )
}