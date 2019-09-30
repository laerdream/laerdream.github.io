---
layout     : post
title      : "[ Ionic ] ios 빌드 실패 Cannot read property 'toLowerCase' of undefined"
date       : 2019-09-30 11:40:00 +0900
categories : article Solve
cover      : https://s3.ap-northeast-2.amazonaws.com/laerdream.github.io/cover/ionicV4.jpg
tags       : [Web,Seo,Blog]
---


## 증상
ionic cordova build ios 빌드 시 문제
Cannot read property 'toLowerCase' of undefined


## 원인
Cordova ios platform 버전과 xcode 새 버전이 출돌됨

```javascript
Cordova Platforms : ios 4.5.5

You are running cordova-ios 4.5.5, this is fixed in cordova-ios 5.0.x.
```

## 해결
cordova-ios 5점대 이상을 설치해야 함

```javascript
npm install cordova-ios@latest
```

## 결과

package.json

```javascript
cordova-ios": "^5.0.1"
```

## 참조

https://github.com/apache/cordova-ios/issues/647

https://github.com/apache/cordova-ios/issues/427