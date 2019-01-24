import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observer, useObservable } from 'mobx-react-lite';

import TodoView from './todo'


const App = observer((props) => {
  return (
    <div>
      <TodoView date="2019-01-25" />
    </div>
  )
})

ReactDOM.render(<App />, document.getElementById('root'));
