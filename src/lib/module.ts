import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AmFlexboxDirective } from "./flexbox";
import { AmFlexboxItemDirective } from "./flexbox-item";

@NgModule({
  imports: [CommonModule],
  declarations: [AmFlexboxDirective, AmFlexboxItemDirective],
  exports: [AmFlexboxDirective, AmFlexboxItemDirective]
})
export class Iwe7FlexBoxModule {}
