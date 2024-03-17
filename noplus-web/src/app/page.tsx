import { Container } from '@layout/.';
import * as feather from 'react-feather';

export default function Home() {
  return (
    <div className='b bg-l-bg dark:bg-d-bg flex items-center justify-center h-screen'>
      <h1 className='b text-l-txt dark:text-d-txt text-xl'>Test</h1>
      <a href="#" className='justify-center bg-system-highlight-light dark:bg-system-highlight-dark ring-4 rounded-md ring-system-highlight-light-purple dark:ring-system-highlight-dark-purple'>
        <feather.GitHub size={60}/>
      </a>
    </div>
  );
}
