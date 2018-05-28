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

## `step3` add scss style

```scss
am-flex,
iwe7-flex,
flex,
[amFlex],
[iwe7Flex],
[flex] {
  display: flex;
  overflow: hidden;
  align-items: var(--align);
  align-content: var(--alignContent);
  justify-content: var(--justify);
  flex-direction: var(--direction);
  flex-wrap: var(--wrap);
  am-flex-item,
  flex-item,
  iwe7-flex-item,
  [amFlexItem],
  [iwe7FlexItem],
  [flexItem] {
    box-sizing: border-box;
    align-self: var(--self);
    flex-basis: var(--basis);
    flex-shrink: var(--shrink);
    flex-grow: var(--grow);
    &:first-child {
      margin-left: 0;
    }
  }
}
```

## `step4`: use

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
