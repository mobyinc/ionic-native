/**
 * TODO:
 * - Remove any imports that you are not using
 * - Remove this note
 */
import { Plugin, Cordova } from './plugin';
import { Observable } from 'rxjs/Observable';

export interface MicrData {
  auxiliary: string;
  routing: string;
  account: string;
  checkNumber: string;
  amount: string;
}

/**
 * @name MicrOcr
 * @description
 * This plugin reads MICR codes on checks using OCR
 *
 * @usage
 * ```
 * import { MicrOcr } from 'ionic-native';
 *
 * MicrOcr.startLiveCapture()
 *   .then((results: any) => doSomething(results))
 *   .catch((error: any) => console.log(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'MicrOcr',
  plugin: 'cordova-plugin-microcr',
  pluginRef: 'navigator.microcr',
  repo: 'https://github.com/mobyinc/cordova-plugin-microcr.git',
  install: ''
})
export class MicrOcr {

  @Cordova({
    callbackOrder: 'reverse',
    observable: true,
    clearFunction: 'stopLiveCapture'
  })
  static startLiveCapture(): Observable<MicrData> {
    return;
  }

  @Cordova()
  static stopLiveCapture(): Observable<any> {
    return;
  }

}
