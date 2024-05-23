import { Meta, StoryObj } from "@storybook/react";
import { ModalDialog, ModalDialogWrapper, Dialog, DialogWrapper } from "@layout/.";
import { Badge } from "@ui/.";


const meta: Meta = {
    title: "Components/Layout/Dialog",
}

export default meta;

export const Modal = () => {
    return (<>
        <ModalDialogWrapper>
            <ModalDialog trigger="Open" title="Title" description="Description"/>
        </ModalDialogWrapper>
    </>
    )
}

export const NonModal = () => {
    return (
        <DialogWrapper trigger="Open" >
            <Dialog title="Title" description="Description">
                <Badge type="accent" shadow="md" size="sm">Any Element</Badge>
            </Dialog>
        </DialogWrapper>
    )
}