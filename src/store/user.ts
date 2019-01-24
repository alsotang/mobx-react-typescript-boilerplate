import {observable, computed} from 'mobx'
import {AppStore} from './app'

export class UserStore {
  @observable
  baseName = 'alsotang_'

  @observable
  count = 0;

  appStore: AppStore;

  constructor(appStore: AppStore) {
    this.appStore = appStore;
  }

  @computed
  get name() {
    return this.baseName + this.count
  }

  updateName() {
    this.count++;
  }
}