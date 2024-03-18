import { Meta, StoryObj } from "@storybook/react";
import { Calendar, CalendarPopup } from "@ui/.";
import * as React from "react";

export default {
  title: "Components/UI/Calendar",
  component: Calendar,
} as Meta;

export const Default = () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
        <CalendarPopup /> // WICHTIG ICH MUSS NOCH DIE GANZEN PROPS HINZUFÜGEN
    )

}