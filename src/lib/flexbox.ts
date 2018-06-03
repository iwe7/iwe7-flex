import {
  Directive,
  OnInit,
  Input,
  HostBinding,
  Injector,
  Component,
  SimpleChanges,
  ViewEncapsulation,
  Injectable
} from "@angular/core";
import { Iwe7BaseComponent } from "iwe7-base";
import { from } from "rxjs";
import { filter, map, tap } from "rxjs/operators";
import { Iwe7IcssService } from "iwe7-icss";

export type AmFlexType = "flex" | "inline-flex";
export type AmFlexDirectionType =
  "row"
  | "row-reverse"
  | "column"
  | "column-reverse";
export type AmFlexWrapType = "nowrap" | "wrap" | "wrap-reverse";
export type AmFlexJustify =
  "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around";
export type AmFlexAlignType =
  "flex-start"
  | "flex-end"
  | "center"
  | "baseline"
  | "stretch";
export type AmFlexAlignContentType =
  "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "stretch";
export interface AmFlexInputs {
  flex: AmFlexType;
  direction: AmFlexDirectionType;
  wrap: AmFlexWrapType;
  justify: AmFlexJustify;
  align: AmFlexAlignType;
  alignContent: AmFlexAlignContentType;
}

@Injectable({
  providedIn: "root"
})
export class AmFlexInputsDefault implements AmFlexInputs {
  flex: AmFlexType = "flex";
  direction: AmFlexDirectionType = "row";
  wrap: AmFlexWrapType = "nowrap";
  justify: AmFlexJustify = "flex-start";
  align: AmFlexAlignType = "stretch";
  alignContent: AmFlexAlignContentType = "stretch";
}

export class AmFlexboxRef extends Iwe7BaseComponent {
  @Input() flex: AmFlexType;
  @Input() direction: AmFlexDirectionType;
  @Input() wrap: AmFlexWrapType;
  @Input() justify: AmFlexJustify;
  @Input() align: AmFlexAlignType;
  @Input() alignContent: AmFlexAlignContentType;

  @Input()
  set left(val: any) { }

  @Input()
  set center(val: any) { }

  @Input()
  set right(val: any) { }

  @Input()
  set top(val: any) { }

  @Input()
  set bottom(val: any) { }

  @Input()
  set middle(val: any) { }

  constructor(injector: Injector, public _default: AmFlexInputsDefault) {
    super(injector, "");
    Object.assign(this, this._default);
    this.setStyleInputs([
      "flex",
      "direction",
      "wrap",
      "justify",
      "align",
      "alignContent"
    ]);
  }
}

@Component({
  selector: "iwe7-flex,am-flex,flex",
  template: `<ng-content></ng-content>`,
  styleUrls: ["./flexbox.scss"],
  providers: [Iwe7IcssService],
  encapsulation: ViewEncapsulation.None
})
export class AmFlexComponent extends AmFlexboxRef {
  constructor(injector: Injector, _default: AmFlexInputsDefault) {
    super(injector, _default);
  }
}

@Directive({
  selector: "[iwe7Flex],[amFlex],[flex]",
  providers: [Iwe7IcssService]
})
export class AmFlexDirective extends AmFlexboxRef {
  constructor(injector: Injector, _default: AmFlexInputsDefault) {
    super(injector, _default);
  }
}
