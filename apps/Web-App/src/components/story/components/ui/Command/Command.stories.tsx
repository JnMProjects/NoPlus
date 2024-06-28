import { Meta } from "@storybook/react";
import * as Command from "@ui/Command";
import {Calendar, Smile, PlusCircle, User, CreditCard, Settings, GitHub, Airplay} from "react-feather"

const meta: Meta = {
    title: "Components/UI/Command"
};

export default meta;

export const Example = () => {
    return (
        <>
            <Command.Base>
                <Command.Input placeholder="Placeholder Text"/>
                <Command.List>
                    <Command.Empty>This Text is Customizable</Command.Empty>
                    <Command.Group heading="First Group">
                        <Command.Item onSelect={() => {window.location.href = "https://github.com/jnmprojects/noplus"}}>
                          <GitHub className="mr-2 h-4 w-4"  />
                          <span>Open Github</span>
                          <Command.Shortcut>STRG + O</Command.Shortcut>
                        </Command.Item>
                        <Command.Item>
                          <User className="mr-2 h-4 w-4"  />
                          <span>Open User</span>
                          <Command.Shortcut>STRG + U</Command.Shortcut>
                        </Command.Item>
                    </Command.Group>
                    <Command.Separator />
                    <Command.Group heading="Second Group">
                      <Command.Item>
                        <Airplay className="mr-2 h-4 w-4"  />
                        <span>Test</span>
                      </Command.Item>
                    </Command.Group>
                </Command.List>
            </Command.Base>
        </>
    )
}


export const AsDefault = () => {
    return (
        <>
          <Command.Base className="rounded-lg border shadow-md">
            <Command.Input placeholder="Type a command or search..." />
            <Command.List>
              <Command.Empty>No results found.</Command.Empty>
              <Command.Group heading="Suggestions">
                <Command.Item>
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>Calendar</span>
                </Command.Item>
                <Command.Item>
                  <Smile className="mr-2 h-4 w-4" />
                  <span>Search Emoji</span>
                </Command.Item>
                <Command.Item>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  <span>Calculator</span>
                </Command.Item>
              </Command.Group>
              <Command.Separator />
              <Command.Group heading="Settings">
                <Command.Item>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                  <Command.Shortcut>⌘P</Command.Shortcut>
                </Command.Item>
                <Command.Item>
                  <CreditCard className="mr-2 h-4 w-4" />
                  <span>Billing</span>
                  <Command.Shortcut>⌘B</Command.Shortcut>
                </Command.Item>
                <Command.Item>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                  <Command.Shortcut>⌘S</Command.Shortcut>
                </Command.Item>
              </Command.Group>
            </Command.List>
        </Command.Base>
      </>
    )
}

export const AsDialog = () => {
  return (
    <Command.asDialog trigger="Trigger">
      <Command.Input placeholder="Type a command or search..." />
      <Command.List>
        <Command.Empty>No results found.</Command.Empty>
        <Command.Group heading="Suggestions">
          <Command.Item>
            <Calendar className="mr-2 h-4 w-4" />
            <span>Calendar</span>
          </Command.Item>
          <Command.Item>
            <Smile className="mr-2 h-4 w-4" />
            <span>Search Emoji</span>
          </Command.Item>
          <Command.Item>
            <PlusCircle className="mr-2 h-4 w-4" />
            <span>Calculator</span>
          </Command.Item>
        </Command.Group>
        <Command.Separator />
        <Command.Group heading="Settings">
          <Command.Item>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <Command.Shortcut>⌘P</Command.Shortcut>
          </Command.Item>
          <Command.Item>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <Command.Shortcut>⌘B</Command.Shortcut>
          </Command.Item>
          <Command.Item>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <Command.Shortcut>⌘S</Command.Shortcut>
          </Command.Item>
        </Command.Group>
      </Command.List>
    </Command.asDialog>
  )
}

export const AsPopup = () => {
  return (
    <Command.asPopup trigger="Trigger">
      <Command.Input placeholder="Type a command or search..." />
      <Command.List>
        <Command.Empty>No results found.</Command.Empty>
        <Command.Group heading="Suggestions">
          <Command.Item>
            <Calendar className="mr-2 h-4 w-4" />
            <span>Calendar</span>
          </Command.Item>
          <Command.Item>
            <Smile className="mr-2 h-4 w-4" />
            <span>Search Emoji</span>
          </Command.Item>
          <Command.Item>
            <PlusCircle className="mr-2 h-4 w-4" />
            <span>Calculator</span>
          </Command.Item>
        </Command.Group>
        <Command.Separator />
        <Command.Group heading="Settings">
          <Command.Item>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <Command.Shortcut>⌘P</Command.Shortcut>
          </Command.Item>
          <Command.Item>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <Command.Shortcut>⌘B</Command.Shortcut>
          </Command.Item>
          <Command.Item>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <Command.Shortcut>⌘S</Command.Shortcut>
          </Command.Item>
        </Command.Group>
      </Command.List>
    </Command.asPopup>
  )
}