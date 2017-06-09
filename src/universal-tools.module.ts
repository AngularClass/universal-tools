import { NgModule } from '@angular/core'
import { UniversalTools } from './universal-tools.service'
import { CommonModule } from '@angular/common'
console.log(UniversalTools)

@NgModule({
  imports: [CommonModule],
  providers: [UniversalTools]
})
export class UniversalToolsModule {}
