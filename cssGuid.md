1. has selector :
   같은 디자인에 이미지만 없을경우 어떻게 해야할까?

```css
.card:has(.bg) {
}
.card:not(has(.bg)) {
}
```

2. cascade layers

```css
@layer base {
}
@layer utils {
} //most priority
```

3.sub-grid

4. comparison operators

5. 가상요소 선택자 ::before, ::after
   가상요소는 inline요소 --> display: block을 사용해야 한다. ex) ::before, ::after, ::first-line, ::first-letter

- 특정요소의 앞과 뒤에 콘텐츠를 추가. content=""라는 속성으로 정의

```css
li {
  list-style: none;
  float: left;
  padding: 0 15px;
}

li::after {
  content: "l";
  float: right;
  color: red;
  margin-right: -167px;
}

li:last-child::after {
  content: "";
}
```

## 가상 선택자(https://code.tutsplus.com/ko/tutorials/the-30-css-selectors-you-must-memorize--net-16048)

```css
a:link {
  color: red;
} // 클릭하기전 상태의 앵커태그 전체
a:visited {
  color: red;
} // 클릭했거나, 방문했던 페이지에 있는 앵커태그만

ul + p {
  color: red;
} //인접선택자로 부르는 선택자. 앞의 요소 바로 뒤에 있는 요소만 선택. ul 뒤에 오는 첫 번째 단락의 텍스트만 빨간색

a[title] {
  color: green;
} //속성 선택자 -> title속성이 있는 앵커태그만을 선택. title이 없는 a태그는 스타일이 적용되지 않는다.

a[href="https://net.tutsplus.com"]
{
  color: #1f6053; /* nettuts green */
} // 해당 링크로 연결된 앵커태그에 스타일을 적용.

a[href^="http"] {
  background: url(path/to/external/icon.png) no-repeat;
  padding-left: 10px;
} //웹사이트에서 외부로 연결된 링크 옆에 작은 아이콘을 보이게 할때.

a[href$=".jpg"] {
  color: red;
} // 이미지나 .jpg로 끝나는 링크가 걸린 앵커 전체

a[data-filetype="image"] {
  color: red;
} //file-type이 이미지인 전체
/* <a href="path/to/image.jpg" data-filetype="image"> Image Link </a> */

input[type="radio"]:checked {
  border: 1px solid black;
} //체크되는 요소에 사용

div:not(#container) {
  color: blue;
} //내가 모든 div를 선택하고 싶은데, 그중에서 id가 container인 것만 빼고 싶다.

p::first-line {
  font-weight: bold;
  font-size: 1.2em;
} //

li:nth-child(3n) {
  color: red;
}

ul li:first-child {
  border-top: none;
}
```
