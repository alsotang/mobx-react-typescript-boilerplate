import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useObserver, useObservable } from 'mobx-react-lite';

import TodoView from './todo'


const App = () => {
  console.log(`App render`)
  return useObserver(() =>
    <div>
      <TodoView date="2019-01-25" />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
