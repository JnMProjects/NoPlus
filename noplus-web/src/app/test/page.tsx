import {
    Item,
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
        <Item title="Item" errored pre={<Feather.Codepen/>}>
            HEHEHEHA
        </Item>
        <DrawerTrigger>
            Press Me
        </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Test Drawer</DrawerTitle>
                    <DrawerDescription>Drawer Description</DrawerDescription>
                    <Item title="Test">
                        <Feather.Cloud/>
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