A Complete Guide to Flexbox
https://css-tricks.com/almanac/properties/f/flex-wrap/

#part1. background
<img src="https://miro.medium.com/max/1084/1*laHoMAZew18HbsnsOeFRkg.webp" />
flex layout : 아이템의 높이, 너비가 가장 적당한 사이즈로 바뀔수 있도록 컨테이너를 제공한다.
flex container: 여유공간을 채울수 있도록 아이템을 넓히거나, 혹은 overflow를 막기위해 줄어든다.

중요 : flexbox layout은 direction-agnostic이 일단 레이아웃과 반대된다.

주의 : flexbox layout은 어플리케이션 컴포넌트, 스케일이 작은 레이아웃에 적합한 반면, grid는 스케일이 더 큰 레이아웃에 적합하다.

## basic and terminology (기본과 용어)

<img src="https://css-tricks.com/wp-content/uploads/2018/11/00-basic-terminology.svg" />

- flex container: 부모 요소
- flex item: 자식 요소
- main axis: from main-start to main-end, 꼭 수평은 아니다. flex-direction에 따라 달라진다.
- main-start | main-end: 플렉스 요소(flex-item)은 main-start에서 시작해서 main-end에서 끝난다.
  -main-size: 플랙스요소의 너비나, 높이가 아이템의 main-size이다.
- cross axis: from cross-start to cross-end. main-axis의 수직. main axis의 방향에 따라 달라진다.
  -cross-start | cross-end: 플렉스 요소(flex-item)은 cross-start에서 시작해서 cross-end에서 끝난다.

## flexbox properties (플랙스박스 요소)

- display : flex container를 정의한다. children요소에 플렉스를 주게된다.

```css
display: flex; /* or inline-flex */
```

- flex-direction: main-axis를 만들어준다. flex items들을 수평이나 수직으로 레이아웃시킨다.

```css
flex-direction: row | row-reverse | column | column-reverse;
```

- flex-wrap: 디폴트로, flex item들을 모두 한줄에 맞춘다.

```css
flex-wrap: nowrap | wrap | wrap-reverse;
/* nowrap: 한줄
wrap:여러줄
wrap-reverse: 여러줄을 아래에서 위 방향으로 */
```

- flex-flow: flex-direction과 flex-wrap을 합친것. flex container의 main,cross 축을 정의한다. default는 row nowrap

```
  flex-flow: column wrap;
```

- justify-content: main axis에 따른 align을 정의한다.
- gap : flex items 사이의 간격 (grid의 gutter와 비슷)/ 추가적으로 grid에서도 작동함.

```css
.container {
  display: flex;
  ...
  gap: 10px;
  gap: 10px 20px; /* row-gap column gap */
  row-gap: 10px;
  column-gap: 20px;
}
```

- flex-grow: 모든 아이템이 1로 Flez-grow가 지정되면, container의 남은 공간은 모든 자식들에게 동일하게 지정된다. 만약 자식 중 한개가 2로 지정된다면 그 자식은 다른 자식들보다 2배의 공간을 갖게 된다. 단 -는 없다.

```css
.item {
  flex-grow: 4; /* default 0 */
}
```

- flex-shrink: flex item이 줄어드는 것을 정의한다. 가능하다면,

```css
.item {
  flex-shrink: 3; /* default 1 */
}
```

- flex-basis: item의 디폴트사이즈를 정의한다.(남는 공강이 생기기 전에)--> 길이 혹은 키워드 ex ) 20%, 5rem, auto,max-content, min-content, fit-content
- flex: flex-grow와 flex-shrink, flex-basis의 줄임말. 두번째, 세번째 파라미터는 옵션이다. 기본은 0 1 aut0/ 개별적으로 사용하는 것보다. flex를 사용하는것을 추천한다.

```css
.item {
  flex: none | [ < "flex-grow" > < "flex-shrink" >? || < "flex-basis" > ];
}
```

- align-self //align items:
  order

## prifixing flexbox

\*\*\*주로 사용하는 속성

1. flex : 1 16%
2. flex-grow : 1
