## about 프로젝트

프로젝트명 : 딥인터뷰

배포주소 :
<https://deepinterview.link>

개발 문서 링크 : 
<https://wary-aerosteon-0b1.notion.site/caa708e696554418aaf4b0d573cc8e3b>

## about branch
- main : Github action을 통해 aws EKS로 자동 배포 되는 브랜치
- local : 로컬에서 Skaffold와 데스크탑용 도커/쿠버네티스를 이용한 테스트용 브랜치
- feature-[github issue 번호] : 기능 추가, local 브랜치로 merge
- bugfix-[github issue 번호] : bugfix, local 브랜치로 merge

## 로컬 실행 방법
링크 : 
<https://www.notion.so/f6529c1151b74a8d9b636f8c0c602b10>
- local 브랜치  clone
- 로컬 테스트 환경으로 [데스크탑용 도커/쿠버네티스](https://www.docker.com/products/docker-desktop/)와 [Skaffold](https://skaffold.dev/docs/install/) 가 설치
- 맥에서는 `/etc/hosts` 윈도우에서는 `C:\Windows\System32\drivers\etc\hosts` 파일 아래 코드 추가(배포된 서비스를 확인할 시에는 아래  삭제 또는 주석처리)

```
127.0.0.1 deepinterview.link
```

- [로컬 쿠버네티스 환경에 NGINX Ingress Controller 설치](https://kubernetes.github.io/ingress-nginx/deploy/#quick-start)

## 서비스 배포 현황
