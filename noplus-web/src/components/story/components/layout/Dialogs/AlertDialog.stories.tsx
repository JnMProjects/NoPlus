import { Meta, StoryObj } from "@storybook/react";
import { AlertDialog, AlertDialogWrapper } from "@layout/.";

const meta: Meta = {
    title: "Components/Layout/Dialogs/Alert",
}

export default meta;

export const Default = () => {
    return (<>
        <AlertDialogWrapper>
            <AlertDialog trigger="Open" title="Title" description="Description"/>
        </AlertDialogWrapper>
    </>
    )
}