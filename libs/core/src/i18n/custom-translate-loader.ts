// import * as en from '../../assets/jsons/en.json';
// import * as fa from '../../assets/jsons/fa.json';
// import * as cn from '../../assets/jsons/cn.json';

import { TranslateLoader } from '@ngx-translate/core';
import { of } from 'rxjs';

export class CustomTranslateLoader implements TranslateLoader {
  public getTranslation(lang: string) {
    // if (lang === 'fa') {
    //   return of(fa);
    // }
    // if (lang === 'en') {
    //   return of(en);
    // }
    // if (lang === 'cn') {
    //   return of(cn);
    // }
    // return of(en);
    return of({})
  }
}
