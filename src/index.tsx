import * as React from 'react';
import * as ReactDOM from 'react-dom';

import TodoView from './TodoView'


const App = () => {
  console.log(`App render`)
  return (
    <div>
      <TodoView date="2019-01-25" />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
