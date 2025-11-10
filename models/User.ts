import { HTTPClient } from 'koajax';
import { SupabaseListModel } from 'mobx-supabase';

import { Base } from './Base';

export enum Gender {
  Female = 0,
  Male = 1,
  Other = 2,
}

export interface User extends Base {
  email: string;
  gender?: Gender;
  birthday?: string;
}

export class UserModel extends SupabaseListModel<User> {
  baseURI = 'user';
  client = new HTTPClient();
}
