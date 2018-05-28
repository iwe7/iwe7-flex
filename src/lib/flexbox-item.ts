import {
  Directive,
  Injector,
  Input,
  SimpleChanges,
  Injectable,
  Component
} from "@angular/core";
import { Iwe7BaseDirective } from "iwe7-base";
import { Iwe7IcssService } from "iwe7-icss";
export type AmFlexItemSelf =
  | "auto"
  | "flex-start"
  | "flex-end"
  | "center"
  | "baseline"
  | "stretch";
export interface AmFlexboxItemInputs {
  order: number;
  grow: number;
  shrink: number;
  basis: string;
  self: AmFlexItemSelf;
}

@Injectable({
  providedIn: "root"
})
export class AmFlexboxItemInputsDefault implements AmFlexboxItemInputs {
  order: number = 0;
  grow: number = 1;
  shrink: number = 1;
  basis: string = "auto";
  self: AmFlexItemSelf = "auto";
}
@Component({
  selector: "iwe7-flex-item,am-flex-item,flex-item",
  template: `<ng-content></ng-content>`,
  providers: [Iwe7IcssService]
})
@Directive({
  selector: "[iwe7FlexItem],[amFlexItem],[flexItem]",
  providers: [Iwe7IcssService]
})
export class AmFlexboxItem extends Iwe7BaseDirective {
  @Input() order: number;
  @Input() grow: number;
  @Input() shrink: number;
  @Input() basis: string;
  @Input() self: AmFlexItemSelf;
  constructor(injector: Injector, public _default: AmFlexboxItemInputsDefault) {
    super(injector, "");
    Object.assign(this, this._default);
    this.setStyleInputs(["order", "grow", "shrink", "basis", "self"]);
  }
}
