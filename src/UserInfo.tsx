import * as React from 'react'


interface IProps {
  username: string;
}
export default React.memo(({username}: IProps) => {
  console.log('UserInfo render')
  return (
    <div>
      <p>username: {username}</p>
    </div>
  )
})