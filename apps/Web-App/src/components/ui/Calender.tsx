"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "react-feather"
import { DayPicker } from "react-day-picker"

import { cn } from "../twm"
import { buttonVariants } from "@ui/Button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

/**
 * Renders a calendar component.
 *
 * @param className - The CSS class name for the calendar component.
 * @param classNames - Additional CSS class names for the calendar component.
 * @param showOutsideDays - Determines whether to show days outside the current month.
 * @param props - Additional props to pass to the underlying DayPicker component.
 * @returns The rendered calendar component.
 */
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm text-l-txt dark:text-d-txt font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline"}),
          "h-7 w-7 p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-none space-y-1",
        head_row: "flex",
        head_cell:
          "text-l-txt-300 dark:text-d-txt-800 rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-l-txt dark:text-d-txt text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-l-accent/50 dark:[&:has([aria-selected].day-outside)]:bg-d-accent/50 [&:has([aria-selected])]:bg-l-accent dark:[&:has([aria-selected])]:bg-d-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-l-primary text-l-txt hover:bg-l-primary-600 focus:bg-l-primary focus:text-l-txt",
        day_today: "bg-accent text-l-sec dark:text-d-sec",
        day_outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

import { Popup } from "../layout"

/**
 * Renders a calendar wrapped in a popup.
 * @returns The CalendarPopup component.
 */
const CalendarPopup = () => {
  return (
    <Popup trigger="Show Calendar">
      <Calendar />
    </Popup>
  )
}

export { Calendar, CalendarPopup }
