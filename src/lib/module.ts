import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AmFlexbox } from "./flexbox";
import { AmFlexboxItem } from "./flexbox-item";

@NgModule({
  imports: [CommonModule],
  declarations: [AmFlexbox, AmFlexboxItem],
  exports: [AmFlexbox, AmFlexboxItem]
})
export class Iwe7FlexBoxModule {}
