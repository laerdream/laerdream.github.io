1 도메인 구입하기
구입하는 사이트는 여러군대가 있다. 무료도메인도 있다.

2 Route53 호스팅 영역 등록
구입한 도메인을 등록하고 할당받은 네임서버 주소를 확인한다

3 도메인 구입처로 돌아가서 네임서버를 변경한다

4 A 타입 레코트 세트를 생성한다
IP주소를 도메인으로 변환해 주는 역할
도메인을 입력하고 EC2 Public IP를 입력한다.

5 CNAME 레코드 세트를 생성한다 
www / api / admin 등 필요한 서브 도메인들 할당하기

http://makebct.net/aws-%EC%99%B8%EB%B6%80-%EB%8F%84%EB%A9%94%EC%9D%B8-%EC%97%B0%EA%B2%B0-%EB%B0%A9%EB%B2%95-1/?cat=989/
https://www.netmanias.com/ko/post/blog/5365/dns-network-protocol/three-types-of-dns-message-a-ns-and-cname
https://en.wikipedia.org/wiki/CNAME_record