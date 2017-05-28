import { Injectable } from '@angular/core'

@Injectable()
export class UniversalTools {
  /** Checks to see if your app is running in browser or not */
  isBrowser(): boolean {
    return typeof window === 'object'
      && typeof document === 'object'
      && document.nodeType === 9
  }

  /** Checks to see if your app is running on the server */
  isServer(): boolean {
    return !this.isBrowser()
  }

  runOnlyInBrowser(cb: Function): any {
    if (this.isBrowser()) {
      return cb()
    }
  }

  runOnlyInServer(cb: Function): any {
    if (this.isServer()) {
      return cb()
    }
  }
}
