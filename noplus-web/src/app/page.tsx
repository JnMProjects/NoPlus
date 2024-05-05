"use client"

import { Popup, Item } from '@layout/.';
import { Button } from '@ui/index';
import { toast } from 'sonner';
import * as feather from 'react-feather';
import { ThemeToggleCircle } from '@components/Theme';
import WelcomeUser from '@pre/functions/welcomeUser';

export default function Home() {
  WelcomeUser()
  return (
    <main className='bg-l-bg dark:bg-d-bg text-l-txt dark:text-d-txt'>
      <section className='flex flex-col items-center justify-center w-screen h-screen'>
        <Popup trigger="Press Me">
          <Item className='items-center justify-center'>
            <Button variant='secondary' onClick={() => {
              toast('Toasted! 🍞');
            }}>
              <feather.Code />
              <span>Toast</span>
            </Button>
          </Item>
        </Popup>
      </section>
    </main>
  )
}