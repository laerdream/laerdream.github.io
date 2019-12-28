---
layout     : post
toc        : true
title      : "[ Javascript ] jQuery를 사용한 페이지 Progress Bar"
date       : 2019-09-30 02:45:00 +0900
categories : article Javascript
cover      : https://s3.ap-northeast-2.amazonaws.com/laerdream.github.io/cover/jquery.jpg
tags       : [Javascript, CSS Animation]
---


## Progress Bar란 무엇인가요?

페이지의 진행률을 막대형태로 표현한 구성을 의미합니다.

Brunch나 Medium 등 글 작성 플랫폼에서 많이 보여지고

포털중에서는 다음 뉴스에도 해당 막대기를 사용한 것을 볼 수 있습니다.

![프로그래스바](https://s3.ap-northeast-2.amazonaws.com/laerdream.github.io/2019-09-30/2019-09-30-pace0.png)
![프로그래스바](https://s3.ap-northeast-2.amazonaws.com/laerdream.github.io/2019-09-30/2019-09-30-pace1.png)

## 플러그인은 없나요?

물론 매우 많은 라이브러리들이 존재합니다.

[Loading.io (https://loading.io/progress)](https://loading.io/progress/){:target="_blank"}

[ProgressBar.js (https://progressbarjs.readthedocs.io)](https://progressbarjs.readthedocs.io/en/latest/){:target="_blank"}

[PACE (https://github.hubspot.com/pace/docs/welcome)](https://github.hubspot.com/pace/docs/welcome/){:target="_blank"}

## jQuery를 통한 구현

하지만 단순한 형태는 JQuery 를 사용하면 매우 간단하게 구현할 수 있기 때문에

만들어 보도록 하겠습니다.

## HTML

```html
<div class="top">
    <div class="progress"></div>
</div>
```

progress 라는 이름의 div를 생성하였습니다.

## CSS
```css
.progress {
  position: absolute;
  bottom: 0px;
  left: 0px;
  height: 3px;
  background-color: #565a6d;
}
```

progress 라는 요소는 기본적으로 absoulte 포지션을 사용해

부모 요소인 top DIV의 하단 좌측에 위치하게 하였습니다.

현재 기본 배경색이 부여되어있고 높이는 3px를 지정받았지만 아직 너비값은 없는 상태입니다.

이 너비를 스크롤 이벤트에 따라 jQuery 메소드를 통해 동적으로 조정하고자 합니다.

## SCRIPT

```javascript
$(window).scroll(function() {
    // 문서 높이
    var documentHeight = $(".page-content").height();
    // 스크롤 높이
    var scrollHeight = $(window).scrollTop();
    // 조절된 너비값
    var adjustedWidth = scrollHeight / documentHeight * 100;

    $(".progress").css('width', adjustedWidth + '%');
});
```
.height() 메소드를 사용해서 대상 문서 페이지의 높이를 가져오고

.scrollTop() 메소드를 이용해 window 으로부터 스크롤 높이 를 가져옵니다.

현재 문서 대비 어느정도 스크롤이 되었는지를 기록해서 progress DIV의 너비로 부여합니다.

## 결과

![프로그래스바](https://s3.ap-northeast-2.amazonaws.com/laerdream.github.io/2019-09-30/2019-09-30-pace2.png)

적용이 완료되었습니다.