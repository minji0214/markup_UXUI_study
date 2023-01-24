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
