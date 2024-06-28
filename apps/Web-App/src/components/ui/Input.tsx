import * as React from "react"

import { cn } from "@components/twm"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex text-l-txt dark:text-d-txt h-10 w-full rounded-md border border-slate-700 dark:border-slate-400 bg-l-bg dark:bg-l-bg px-3 py-2 text-sm ring-offset-d-bg dark:ring-offset-l-bg file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-l-txt-500/70 dark:placeholder:text-d-txt-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-700 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

import { forwardRef, useState } from "react"
import { Eye, EyeOff } from "react-feather"
import { Button } from "@ui/Button"

const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
	({ className, ...props }, ref) => {
		const [showPassword, setShowPassword] = useState(false)
		const disabled = props.value === "" || props.value === undefined || props.disabled

		return (
			<div className="relative">
				<Input
					type={showPassword ? "text" : "password"}
					className={cn("hide-password-toggle pr-10", className)}
					ref={ref}
					{...props}
				/>
				<Button
					type="button"
					variant="ghost"
					size="sm"
					className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
					onClick={() => setShowPassword((prev) => !prev)}
					disabled={disabled}
				>
					{showPassword && !disabled ? (
						<Eye
							className="h-4 w-4"
							aria-hidden="true"
						/>
					) : (
						<EyeOff
							className="h-4 w-4"
							aria-hidden="true"
						/>
					)}
					<span className="sr-only">
						{showPassword ? "Hide password" : "Show password"}
					</span>
				</Button>

				{/* hides browsers password toggles */}
				<style>{`
					.hide-password-toggle::-ms-reveal,
					.hide-password-toggle::-ms-clear {
						visibility: hidden;
						pointer-events: none;
						display: none;
					}
				`}</style>
			</div>
		)
	},
)
PasswordInput.displayName = "PasswordInput"

import { OTPInput, OTPInputContext } from "input-otp"
import { Circle } from "react-feather"


const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(
      "flex items-center gap-2 has-[:disabled]:opacity-50",
      containerClassName
    )}
    className={cn("disabled:cursor-not-allowed", className)}
    {...props}
  />
))
InputOTP.displayName = "InputOTP"

const InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center", className)} {...props} />
))
InputOTPGroup.displayName = "InputOTPGroup"

const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-l-sec dark:border-d-sec text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-2 ring-ring ring-offset-d-bg dark:ring-offset-l-bg",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  )
})
InputOTPSlot.displayName = "InputOTPSlot"

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Circle />
  </div>
))
InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP as OTPWrapper, InputOTPGroup as OTPGroup, InputOTPSlot as OTPSlot, InputOTPSeparator as OTPSeperator }


export { Input as Default, PasswordInput as Password }
