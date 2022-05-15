## about 프로젝트

프로젝트명 : 딥인터뷰

배포주소 :
<https://deepinterview.link>


## about branch
- main : Github action을 통해 aws EKS로 자동 배포 되는 브랜치
- local : 로컬에서 Skaffold와 데스크탑용 도커/쿠버네티스를 이용한 테스트용 브랜치
- feature-[github issue 번호] : 기능 추가, local 브랜치로 merge
- bugfix-[github issue 번호] : bugfix, local 브랜치로 merge

## 로컬 실행 방법
- local 브랜치  clone
- 로컬 테스트 환경으로 [데스크탑용 도커/쿠버네티스](https://www.docker.com/products/docker-desktop/)와 (설정에서 Enable kubernetes 설치) [Skaffold](https://skaffold.dev/docs/install/) 가 설치
- 맥에서는 `/etc/hosts` 윈도우에서는 `C:\Windows\System32\drivers\etc\hosts` 파일 아래 코드 추가

```
127.0.0.1 deepinterview.local.com
```

- [로컬 쿠버네티스 환경에 NGINX Ingress Controller 설치](https://kubernetes.github.io/ingress-nginx/deploy/#quick-start)


- clone한 프로젝트 루트에서 명령어 `skaffold dev` 실행
- 크롬 브라우저에서 `https://deepinterview.local.com` 으로 접속 
- 크롬 브라우저에서 보안 관련 warning`연결이 비공개로 설정되어 있지 않습니다.`이 뜨면 뜬 상태에서 키보드로 `thisisunsafe` 타이핑

## 서비스 배포 현황
