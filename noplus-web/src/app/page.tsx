"use client"

import { Popup, Item } from '@layout/.';
import { Button } from '@ui/index';
import { toast } from 'sonner';
import * as feather from 'react-feather';
import { ThemeToggleCircle } from '@components/Theme';

export default function Home() {
  return (
    <div className='b bg-l-bg dark:bg-d-bg flex items-center justify-center h-screen'>
      <Popup trigger="Press Me">
        <Item errored >
          <Button variant='secondary' onClick={() => {
            toast('Toasted! 🍞');
          }}>
            <feather.Code />
            <span>Toast</span>
          </Button>
        </Item>
      </Popup>
      <ThemeToggleCircle className=' invisible'/>
    </div>
  );
}
