import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

class UserStore {
  constructor() {
    this.id = null;

    makeAutoObservable(this);
    makePersistable(this, {
      name: 'UserStore',
      properties: ['id'],
      debugMode: false,
      storage: typeof window !== 'undefined' ? window.localStorage : undefined,
    });
  }

  setId(id: string) {
    this.id = id;
  }

  id: string | null = null;
}

export default new UserStore();
