import { Injectable } from '@angular/core'

@Injectable()
export class UniversalTools {
  _browser: boolean;
  constructor() {
    this._browser = typeof window === 'object'
      && typeof document === 'object'
      && document.nodeType === 9;
  }
  /** Checks to see if your app is running in browser or not */
  isBrowser(): boolean {
    return this._browser;
  }

  /** Checks to see if your app is running on the server */
  isServer(): boolean {
    return !this._browser
  }

  runOnlyInBrowser(cb: Function): any {
    if (this._browser) {
      return cb()
    }
  }

  runOnlyInServer(cb: Function): any {
    if (!this._browser) {
      return cb()
    }
  }
}
