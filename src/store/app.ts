import * as React from 'react';
import {UserStore} from './user'

export class AppStore {
  userStore: UserStore;

  constructor() {
    this.userStore = new UserStore(this);
  }
}


export const AppStoreContext = React.createContext(new AppStore())
