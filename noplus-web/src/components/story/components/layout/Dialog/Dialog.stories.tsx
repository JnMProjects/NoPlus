import { Meta, StoryObj } from "@storybook/react";
import { AlertDialog, AlertDialogWrapper, Dialog, DialogWrapper } from "@layout/.";
import { Badge } from "@ui/.";


const meta: Meta = {
    title: "Components/Layout/Dialog",
}

export default meta;

export const Alert = () => {
    return (<>
        <AlertDialogWrapper>
            <AlertDialog trigger="Open" title="Title" description="Description"/>
        </AlertDialogWrapper>
    </>
    )
}

export const Dialogs = () => {
    return (
        <DialogWrapper trigger="Open" >
            <Dialog title="Title" description="Description">
                <Badge type="info" shadow="md" size="md">Any Element</Badge>
            </Dialog>
        </DialogWrapper>
    )
}