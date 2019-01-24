import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observer, useObservable } from 'mobx-react-lite';

const TimerView = observer((props) => {
  const timer = useObservable({
    value: 0,
    reset() {
      timer.value = 0
    }
  })

  React.useEffect(() => {
    setInterval(() => {
      timer.value++;
    }, 1000)
  }, [])

  return (
    <div>
      <button onClick={() => timer.reset()}>
        Seconds passed: {timer.value}
      </button>
    </div>
  )
})

ReactDOM.render(<TimerView />, document.getElementById('root'));
