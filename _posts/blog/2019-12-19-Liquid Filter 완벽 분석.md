---
layout     : post
toc        : true
title      : "[ Liquid ] Liquid Filter 완벽 분석"
date       : 2019-12-19 11:40:00 +0900
categories : article liquid
cover      : https://s3.ap-northeast-2.amazonaws.com/laerdream.github.io/cover/liquid.jpg
tags       : [Liquid,jekyll,Blog]
---


## Liquid 소개

liqud 는 jekyll 에서 사용하고 있는 표현언어이고 공식 도큐먼트 페이지는 다음과 같다.
https://shopify.github.io/liquid/


shopify 도메인이 연관되 있는것 보니 트위터와 부트스트랩의 관계처럼 내부 엔진을 공개한 케이스인것 같다.

공식문서에는 shopify 와 jekyll 이 liqud 문법을 선택했다고 나와있다.


## 필터 분석

마치 Angular Pipe와 같은 형태로 사용된다.

공식문서는 알파벳 순으로 정렬되어있기 때문에 간단한 한글 설명을 적고 이를 속성별로 재배열 하였다.

언젠가는 공식 문서가 바뀔 수도 있을 것 같지만 지금 이대로 기록을 남기는 것도 유의미하다고 판단되었다.

### 연산관련

#### plus | minus | times | divided_by

plus : 더하기
{% raw %}
```{{ 4 | plus: 2 }}``` -> ```6```
{% endraw %}

minus : 빼기
{% raw %}
```{{ 4 | minus: 2 }}``` -> ```2```
{% endraw %}

times : 곱하기
{% raw %}
```{{ 4 | times: 2 }}``` -> ```8```
{% endraw %}

divided_by : 나누기
{% raw %}
```{{ 4 | divided_by: 2 }}``` -> ```2```
{% endraw %}


### 숫자 관련

#### abs | ceil | floor | round | modulo

abs : 절대값을 표현해준다.
{% raw %}
```{{ -17 | abs }}``` -> ```17```
{% endraw %}

ceil : 올림 (정수 기준)
{% raw %}
```{{ 1.2 | ceil }}``` -> ```2```
{% endraw %}

floor : 내림
{% raw %}
```{{ 1.2 | floor }}``` -> ```1```
{% endraw %}

round : 반올림
{% raw %}
```{{ 1.2 | round }}``` -> ```1```<br>
```{{ 1.7 | round }}``` -> ```2```<br>
```{{ 183.357 | round: 2 }}``` -> ```183.36```
{% endraw %}

modulo : 몫
{% raw %}
```{{ 3 | modulo: 2 }}``` -> ```1```
{% endraw %}


### 표현관련

#### default | at_least | at_most

default : 기본 값을 지정한다.
{% raw %}
```{{ someThing | default: 2.99 }}``` -> ```2.99```
{% endraw %}

at_least : 최소값을 지정한다. 지정값보다 입력값이 크면 입력값을 그대로 노출하고<br>반대의 경우 최소값을 노출한다.
{% raw %}
```{{ 4 | at_least: 5 }}``` -> ```5```
{% endraw %}

at_most : 최댓값을 지정한다. 최소값의 반대 개념
{% raw %}
```{{ 4 | at_least: 3 }}``` -> ```4```
{% endraw %}



### 날짜 관련

#### date

data : 날짜 moment 와 비슷한 역할을 수행한다.
{% raw %}
```{{ "now" | date: "%Y-%m-%d %H:%M" }}``` -> ```2019-09-19 17:48```
{% endraw %}

### 배열 관련

#### concat | compact | first | last | join | map | reverse | size | split | uniq

예제 생략

concat : 배열 합체

compact : 빈배열 삭제

first : 배열의 첫번째 값을 가져온다. / 표현식에 메소드형태로도 사용가능

last : 배열의 마지막 값을 가져온다.

join : 배열 split 구분자에 문자를 추가하여 다시 더한다.

map : 새로운 배열로 매핑한다. 사용빈도가 매우 높을 것으로 판단된다.

reverse : 배열을 역순으로 다시 반환해준다.

size : 배열 수를 반환한다. 매우 많은 빈도로 사용될 것 같다.

split : 배열을 나눈다.

uniq : 배열에서 중복 항목을 제외시킨다. SQL에서 distinct 와 역할이 같다. 다만 프론트에서 처리할뿐


### 정렬관련

#### sort | sort_natural | where

예제 생략

sort : 대문자가 우선하고 알파벳 순 정렬

sort_natural : 알파벳 순 정렬

where : 배열에 필터를 건다. 매우 유용할 것 같다.

### 문자 관련

#### append | prepend
문자열 뒤로 새로운 문자를 더한다.<br>jQuery 에서의 사용과는 다르게 DOM 요소가 아닌 string 만 가능하다.
{% raw %}
```{{ "바나나" | append: "우유" }}``` -> ```바나나우유```
{% endraw %}

문자열 앞으로 새로운 문자를 더한다.<br>append의 반대 속성이다.
{% raw %}
```{{ "오렌지" | prepend: "환타" }}``` -> ```환타오렌지```
{% endraw %}

#### capitalize | downcase | upcase
첫글자를 대문자로 변환한다.
{% raw %}
```{{ "title" | capitalize }}``` -> ```Title```
{% endraw %}

모든 문자열을 소문자로 변환한다.
{% raw %}
```{{ "WORLD" | downcase }}``` -> ```world```
{% endraw %}

모든 문자열을 대문자로 변환한다.
{% raw %}
```{{ "world" | upcase }}``` -> ```WORLD```
{% endraw %}

#### lstrip | rstrip | strip | strip_html | strip_newlines

trim 역할을 한다.

왼쪽 공백을 제거한다.
{% raw %}
```{{ "    blank    " | lstrip }}``` -> ```blank    ```
{% endraw %}

오른쪽 공백을 제거한다.
{% raw %}
```{{ "    blank    " | lstrip }}``` -> ```    blank```
{% endraw %}

양쪽 공백을 제거한다.
{% raw %}
```{{ "    blank    " | strip }}``` -> ```blank```
{% endraw %}

html 요소를 제거한다.
{% raw %}
```{{ "<h1>안녕</h1>" | strip_html }}``` -> ```안녕```
{% endraw %}

개행문자를 제거한다.
{% raw %}
```{{ "<h1>안녕\n하세요</h1>" | strip_html }}``` -> ```안녕하세요```
{% endraw %}

#### remove | remove_first | replace | replace_first

remove : 문자열 조회 후 제거 (substring) full match 상태가 아니어도 제거됨

remove_first : 첫 대상만 제거

replace : 교체하기, 작동기전은 remove 와 동일

replace_first : 첫글자만 교체됨

#### slice | truncate | truncatewords

slice : 잘려진 값을 반환한다.

truncate : 특정 길이 수 이상 문자를 자른다. ( 말줄임 표시나 기타 언어로 대체가 가능하다 )

truncatewords : 단어수로 자른다. word-wrap 이 유효한 상태가 된다.

#### url_decode | url_encode

url_decode : url decode를 수행해서 문자열을 파싱한다.

url_encode : 문자열을 인코드한다.

### 태그 관련

#### escape | escape_once | newline_to_br

escape : 대체 문구 표현 대표적으로 & 을 &amp;

escape_once : escape의 역이다

newline_to_br : 개행문자에 br 태그를 추가해준다.

### 느낀점

전체적으로는 최근 유행하는 node나 ruby 등과 같이 메소드명이 일치하고 명칭자체가 간단하고 직접적이었기 때문에

처음 사용함에도 불구하고 매우 쉽게 이해할 수 있었다.