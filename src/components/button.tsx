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
      default: "bg-teal-600 text-white hover:bg-teal-500 dark:bg-blue-600 dark:hover:bg-blue-700",
      outline: "border border-teal-700 bg-white hover:bg-teal-50 text-teal-900 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
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