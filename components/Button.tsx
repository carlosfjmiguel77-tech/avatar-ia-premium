import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', className = '', ...props }, ref) => {
    const baseStyles = 'px-6 py-3 rounded-lg font-bold transition-all duration-200 inline-block'
    const variants = {
      primary: 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:opacity-90',
      secondary: 'bg-dark-800 text-white border border-dark-300 hover:bg-dark-700'
    }

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'
