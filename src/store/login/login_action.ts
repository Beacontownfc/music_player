import { CHNAGELOGINSTATE } from './login_constant';

export default function createChangeLoginStateAction(data: any) {
  return { type: CHNAGELOGINSTATE, data };
}
