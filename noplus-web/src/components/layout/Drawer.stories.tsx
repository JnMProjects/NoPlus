import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "./Drawer";
  
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Drawer> = {
    title: "Layout/Drawer",
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default = () => {
    return (
        <Drawer>
            <DrawerTrigger>Open</DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>This is a Drawer</DrawerTitle>
                    <DrawerDescription>Well Obviously.</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                <div>Footer</div>
                <DrawerClose>
                    Close
                </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>

    )
}