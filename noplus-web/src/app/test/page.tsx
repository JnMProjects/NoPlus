import {
    Item,
    ItemTitle,
    ItemDescription,
    Drawer,
    DrawerTrigger,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerDescription,
    DrawerClose,
    DrawerFooter
} from "@layout/."

import * as Feather from "react-feather";

export default function test() {
    return (<>
        <Drawer>
        <Item >
            <Feather.Edit />
            <ItemTitle>Normal Item</ItemTitle>
            <ItemDescription>This is a Normal Item</ItemDescription>
        </Item>
        <DrawerTrigger>
            Press Me
        </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Test Drawer</DrawerTitle>
                    <DrawerDescription>Drawer Description</DrawerDescription>
                    <Item errored>
                        <Feather.AlertTriangle />
                        <ItemTitle>Item Title</ItemTitle>
                        <ItemDescription>Item Description</ItemDescription>
                    </Item>
                    <DrawerClose><Feather.X/></DrawerClose>
                </DrawerHeader>
                <DrawerFooter>
                    <Feather.Cloud/>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
        </>
    );
}