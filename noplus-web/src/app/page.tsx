import { Popup, Item } from '@layout/.';
import * as feather from 'react-feather';

export default function Home() {
  return (
    <div className='b bg-l-bg dark:bg-d-bg flex items-center justify-center h-screen'>
      <Popup trigger="Press Me">
        <Item errored ><feather.Code /></Item>
      </Popup>
    </div>
  );
}
