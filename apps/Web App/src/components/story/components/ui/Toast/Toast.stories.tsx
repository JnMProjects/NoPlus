import { Meta, StoryObj } from "@storybook/react";
import { Toaster } from "@/components/ui/Toast";
import { toast } from "sonner";
import { Button } from "@/components/ui";

const meta: Meta = {
    title: "Components/UI/Toast",
    component: Toaster,
}

export default meta;

export const Default = () => {
    return (
        <>
        <Toaster/>
        <div>
          <Button onClick={() => toast("Default Toast")}>Toast</Button>  
        </div>
        </>
    )
}

export const Success = () => {
    return (
        <>
        <Toaster/>
        <div>
          <Button onClick={() => toast.success("Successfull Toast")}>Toast</Button>  
        </div>
        </>
    )
}