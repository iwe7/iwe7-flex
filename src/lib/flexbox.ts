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
  | "row"
  | "row-reverse"
  | "column"
  | "column-reverse";
export type AmFlexWrapType = "nowrap" | "wrap" | "wrap-reverse";
export type AmFlexJustify =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around";
export type AmFlexAlignType =
  | "flex-start"
  | "flex-end"
  | "center"
  | "baseline"
  | "stretch";
export type AmFlexAlignContentType =
  | "flex-start"
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

@Component({
  selector: "iwe7-flex,am-flex,flex",
  template: `<ng-content></ng-content>`,
  styleUrls: ["./flexbox.scss"],
  providers: [Iwe7IcssService],
  encapsulation: ViewEncapsulation.None
})
@Directive({
  selector: "[iwe7Flex],[amFlex],[flex]",
  providers: [Iwe7IcssService]
})
export class AmFlexbox extends Iwe7BaseComponent {
  @Input() flex: string;
  @Input() direction: string;
  @Input() wrap: string;
  @Input() justify: string;
  @Input() align: string;
  @Input() alignContent: string;
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
