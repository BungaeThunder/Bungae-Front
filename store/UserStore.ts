import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

class UserStore {
  constructor() {
    this.id = null;
    this.name = null;

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

  setName(name: string) {
    this.name = name;
  }

  setBirthday(birthday: string) {
    this.birthday = birthday;
  }

  id: string | null = null;
  name: string | null = null;
  birthday: string | null = null;
}

export default new UserStore();
