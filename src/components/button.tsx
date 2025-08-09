import * as React from "react"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline"
  size?: "default" | "icon"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors"
    
    const variants = {
      default: "bg-blue-500 text-white hover:bg-blue-600",
      outline: "border border-gray-300 bg-white hover:bg-gray-50"
    }
    
    const sizes = {
      default: "h-10 px-4 py-2",
      icon: "h-10 w-10"
    }
    
    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`
    
    return <button className={classes} ref={ref} {...props} />
  }
)

Button.displayName = "Button"