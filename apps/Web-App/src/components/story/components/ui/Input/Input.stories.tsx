import { Meta } from "@storybook/react";
import * as Inputs from "@ui/Input"

const meta: Meta = {
    title: "Components/UI/Input",
}


export default meta;

export const Input = () => {
    return <Inputs.Default />
}

export const PasswordInput = () => {
    return <Inputs.Password />
}

export const OneTimePasswordInput = () => {
    return (
        <Inputs.OTPWrapper maxLength={6} >
            <Inputs.OTPGroup>
                <Inputs.OTPSlot index={1} />
                <Inputs.OTPSlot index={2} />
                <Inputs.OTPSlot index={3} />
            </Inputs.OTPGroup>
            <Inputs.OTPSeperator />
            <Inputs.OTPGroup>
                <Inputs.OTPSlot index={4} />
                <Inputs.OTPSlot index={5} />
                <Inputs.OTPSlot index={6} />
            </Inputs.OTPGroup>
        </Inputs.OTPWrapper>
    )
}