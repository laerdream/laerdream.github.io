https://blog.naver.com/windi97/220976620976


만약에 homebrew가 없으면 아래와 같이 Homebrew를 설치합니다.

ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
Homebrew를 이용하여 putty를 설치합니다.

brew install putty
puttygen을 이용하여 ppk 파일을 pem 파일로 변환합니다.

puttygen from_key.ppk -O private-openssh -o to_key.pem
새로운 키에 퍼미션 등록합니다.

chmod 600 key.pem


pem 키를 이용하여 ssh로 접속 합니다.

ssh -i key.pem root@boxname
[출처] Mac OS에서 ssh 접속을 위한 ppk --> pem 변환방법|작성자 windi97