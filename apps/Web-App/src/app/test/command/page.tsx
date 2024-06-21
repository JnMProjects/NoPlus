import * as Command from "@ui/Command";
import {Calendar, Smile, PlusCircle, User, CreditCard, Settings} from "react-feather"

export default function Comand() {
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
        </>
    )
}