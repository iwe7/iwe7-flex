## `step1` install

```sh
yarn add iwe7-flex
```

## `step2` imports module

```ts
import { Iwe7FlexBoxModule } from 'iwe7-flex';

@NgModule({
  imports:[Iwe7FlexBoxModule]
})
```

## `step3`: use

```html
<flex>
  <flex-item><flex-item>
</flex>
```

## `docs`

* `flex docs`

```ts
@Input() flex: string;
@Input() direction: string;
@Input() wrap: string;
@Input() justify: string;
@Input() align: string;
@Input() alignContent: string;
```

* `flex-item docs`

```ts
@Input() order: number;
@Input() grow: number;
@Input() shrink: number;
@Input() basis: string;
@Input() self: AmFlexItemSelf;
```
