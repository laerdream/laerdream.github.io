---
layout: post
title:  "OSX Catalina Beta 업데이트"
date:   2019-09-14 03:40:00 +0900
categories: article ios
---

# 설치준비
SwiftUI를 조금 더 빨리 접해보고 싶어서 베타버전인 Xcode 11을 설치하기로 하였다.

계정에 로그인 하고 [애플개발자다운로드 페이지](https://developer.apple.com/download/)를 살펴보았는데 

Xcode 11이 macOS Catalina 버전을 요구하고 있음을 알게되었다.

따라서 OS업데이트를 선행하였고 베타버전 엑스코드의 설치를 진행하였다.

![카탈리나 다운로드 이미지](https://s3.ap-northeast-2.amazonaws.com/laerdream.github.io/2019-09-14/0914image01.png)
![엑스코드 다운로드 이미지](https://s3.ap-northeast-2.amazonaws.com/laerdream.github.io/2019-09-14/0914image02.png)

# 설치시작

`상당한 시간을 요구하므로 여유있는 시간에 진행하기를 권한다` 

통신환경에 따른 시간 차이는 존재하겠지만 우선 엑스코드의 경우 약 7.5GB의 용량을 다운로드하는데 현재일기준 25분 가량이 소요되었다.

OSX의 경우 설치를 위한 패키지 번들만 다운로드하고  구동 후 개별 요소를 다운로드 하는 방식으로 올라와있었다.

OS업데이트 시간은 약 20분 정도 소요되었던 것 같다.

다운로드 및 업데이트와 몇차례의 재부팅을 포함하여 넉넉하게 1~2시간정도 마음의 준비를 하고 진행하는 편이 낫다.

![카탈리나 다운로드 이미지](https://s3.ap-northeast-2.amazonaws.com/laerdream.github.io/2019-09-14/0914image03.png)
![카탈리나 다운로드 이미지](https://s3.ap-northeast-2.amazonaws.com/laerdream.github.io/2019-09-14/0914image04.png)
![카탈리나 다운로드 이미지](https://s3.ap-northeast-2.amazonaws.com/laerdream.github.io/2019-09-14/0914image05.png)

# 베타버전 엑스코드 구동

설치를 모두 마치면 BETA라는 라벨이 붙은 새로운 Xcode 응용프로그램이 생성되어있다.

실행을 해보면 User Interface 선택 영역에 SwiftUI가 추가 된 것을 확인할 수 있다.

![카탈리나 다운로드 이미지](https://s3.ap-northeast-2.amazonaws.com/laerdream.github.io/2019-09-14/0914image06.png)
![카탈리나 다운로드 이미지](https://s3.ap-northeast-2.amazonaws.com/laerdream.github.io/2019-09-14/0914image07.png)
![카탈리나 다운로드 이미지](https://s3.ap-northeast-2.amazonaws.com/laerdream.github.io/2019-09-14/0914image08.png)

# 완료

SwiftUI를 선택하고 테스트 프로젝트를 생성해보았다.

이제 SwitftUI 문법이 사용가능해진다.

테스트 프로젝트명을 swiftui라고 지정하니 SwiftUI를 Import 할때 경로를 못찾는 문제가 발생하였다.

대소문자가 다름에도 클래스명이 중복되는 현상이 발생하는 것 같다.

예약어라고 생각하고 프로젝트명이나 클래스에 해당이름을 사용안하는 편이 안전할 것 같다.

우측영역에 시뮬레이터 형태의 프리뷰 페이지가 생성된다.

단순한 레이아웃은 반영사항을 바로바로 확인할 수 있어서 매우 빠른 작업이 가능해질것 같다.

SwiftUI를 연습하면서 관련 글도 계속해서 올리고자 한다.