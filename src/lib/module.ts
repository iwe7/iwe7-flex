import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AmFlexComponent, AmFlexDirective } from "./flexbox";
import { Iwe7FlexItemComponent, Iwe7FlexItemDirective } from "./flexbox-item";

@NgModule({
  imports: [CommonModule],
  declarations: [AmFlexComponent, AmFlexDirective, Iwe7FlexItemComponent, Iwe7FlexItemDirective],
  exports: [AmFlexComponent, AmFlexDirective, Iwe7FlexItemComponent, Iwe7FlexItemDirective]
})
export class Iwe7FlexBoxModule {}
