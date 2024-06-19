import {
    ModalDialog,
    ModalDialogWrapper
} from "@layout/."

import {
    Button
} from "@ui/."

import Loader from "@/components/ui/loaders/Loader";

import * as Feather from "react-feather";
import { toast } from "sonner";

export default function test() {
    return (<>
            <ModalDialogWrapper>
                <ModalDialog className="text-l-txt dark:text-d-txt" title="" trigger="1" close="hide*" closevariant="text" action="hide*" actionvariant="text"  />
            </ModalDialogWrapper>
            <Button onClick={() => {toast("Test")}} />
        </>
    );
}