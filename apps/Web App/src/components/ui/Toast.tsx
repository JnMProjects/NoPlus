"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      richColors
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-l-bg group-[.toaster]:dark:bg-d-bg  group-[.toaster]:text-l-txt group-[.toaster]:dark:text-d-txt group-[.toaster]:border-l-acc group-[.toaster]:dark:border-d-acc group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-l-txt-500 group-[.toast]:dark:text-d-txt-800",
          actionButton:
            "group-[.toast]:bg-l-prim group-[.toast]:dark:bg-d-prim group-[.toast]:text-l-txt group-[.toast]:dark:text-d-txt",
          cancelButton:
            "group-[.toast]:bg-l-bg group-[.toast]:dark:bg-d-bg group-[.toast]:text-l-txt group-[.toast]:dark:text-d-txt",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
