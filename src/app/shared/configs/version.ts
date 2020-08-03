import { VERSION } from '@angular/material/core'

export const osmVersion = VERSION.full

/** Version information with title and redirect url */
export interface VersionInfo {
  url: string
  title: string
}
