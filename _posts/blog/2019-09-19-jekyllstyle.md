---
layout     : post
title      : "[ 블로그 만들기 - 1 ] Jekyll Theme 바꿔보기"
date       : 2019-09-19 11:23:00 +0900
categories : article Blog
cover      : https://s3.ap-northeast-2.amazonaws.com/laerdream.github.io/cover/jekyll.jpg
tags       : [web,jekyll,Blog]
---

## 도입

직접 Jekyll 테마를 변경해보고 싶다는 생각이 들었습니다.

![Jekyll Logo](https://s3.ap-northeast-2.amazonaws.com/laerdream.github.io/2019-09-19/2019-09-19-jekyll1.png)

## 로컬환경세팅

## jekyll 설치
`ruby -v`

루비버전을 확인해보았습니다.
2.6.3 버전이네요
rubyEnv등 다중환경 설정은 생략하겠습니다.

`gem install bundler jekyll`

Gem을 이용해서 jekyll 를 설치하였습니다.

![스크린샷](https://s3.ap-northeast-2.amazonaws.com/laerdream.github.io/2019-09-19/2019-09-19-jekyll0.png)

이제 정상적으로 jekyll 명령어를 사용할 수 있습니다.

## 기초 프로젝트 만들기

`jekyll new-theme jekyll-theme-awesome`

## 기본 테마 생성하기

`jekyll new my-awesome-site`

## jekyll 기본 구조

사이트의 구성 파일 들이
/assets
/_layouts
/_includes
/_sass

등에 들어있고
프로젝트의 각종 설정 파일들은 root의 _config.yml에 정의되어있습니다.

jekeyll 은 따로 세팅을 하지 않아도 sass를 사용할 수 있어서 구성에 좀 편리한 것 같습니다.

## jekyll 표현

**템플릿 문법**

Angular 처럼 중괄호 변수 형태의 expression 이 가능한 것 같습니다.

**MarkDown 표현사용**

_post 폴더에 있는 md파일이 빌드하면서 html로 변환되는 방식이기때문에

문서작성이 마크다운방식을 그대로 사용할 수 있습니다. 인터랙티브한 페이지를 구성할 수는 없지만 

Article 형태의 페이지를 작성하기는 정말 사용하기 간편합니다.

**문서삽입**

Php 에서 include 함수처럼 외부 파일을 아수 쉽게 삽입 할 수 있습니다.

페이지를 컴포넌트화 시켜서 분리관리 하기 편리한 것 같습니다.

**파일경로**
`/:categories/:year/:month/:day/:title:output_ext`

라우터 설정을 따로 해주지 않아도 폴더 기준으로 하나씩 파라미터 구분을 해줍니다.

편리하네요.

**플러그인**
`plugins:
  - jekyll-gist
  - jekyll-coffeescript
  - jekyll-assets
  - another-jekyll-plugin`

_config.yml 에 플러그인을 정의해서 추가 된 플러그인을 쉽게 관리 할 수 있습니다.
Node에서 package.json 과 같은 역할을 수행 할 수 있네요.

## 앞으로 할일

이제 틈틈히 새로운 디자인 시도를 하면서 블로그를 이쁘게 개선시켜나가야 겠습니다.

## 느낀점

처음 블로그를 만들때 어떤 형태로 만들지 고민을 하였습니다.

선택할 수 있는 옵션은 다음과 같았습니다.

- tistory 또는 naver 블로그등 형태
- wordpress나 foundation 을 이용하기
- React 나 Vue등을 사용해서 만들기
- GithubPage에 Jekyll을 사용해서 만들기

아무래도 기능을 계속 확장하면서 만들어 나가고 싶은 욕심이 있었기 때문에
직접구축 쪽으로 마음이 기울었지만 운영에 있어서 간편함 또한 가져가고 싶었습니다.

GithubPage도 사용해보고 싶었고 여기서 어느정도 까지 원하는 기능을 표현 할 수 있을지 살작 걱정도 들었지만
직접 체험 해보니 정말 간편하고 블로그에 정말 적합한 정적페이지 생성방식이라는 생각이 들었습니다.

jekyll이랑 궁합이 잘 맞는것 같습니다.

## 조금 더 자세한 정보

공식 도큐먼트에 설명이 잘 되어있습니다.

뭔가 톤이 HomeBrew 페이지 느낌도 나네요

[Jekyll Ofiicial Document](https://jekyllrb-ko.github.io/docs/home/)

Jekyll은 꽤나 매력적입니다. 처음 설치한지 몇시간이 되지 않아서 원하는 레이아웃을 구성할 수 있습니다.

러닝커브가 낮고 구동자체도 매우 가볍고 빨라서 좋은 것 같습니다.

처음에 낯설어서 약간 거부감이 들었는데 지금은 강추합니다.

