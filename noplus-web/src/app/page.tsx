import { Popup, Item } from '@layout/.';
import * as feather from 'react-feather';
import { ThemeToggleCircle } from '@components/Theme';

export default function Home() {
  return (
    <div className='b bg-l-bg dark:bg-d-bg flex items-center justify-center h-screen'>
      <Popup trigger="Press Me">
        <Item errored ><feather.Code /></Item>
      </Popup>
      <ThemeToggleCircle className=' invisible'/>
    </div>
  );
}
