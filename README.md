## about 프로젝트

프로젝트명 : 딥인터뷰

배포주소 :
<https://deepinterview.link>
- 배포 형태는 amazon EKS 를 통한 배포로 프로젝트 발표날 시연을 위해 배포할 예정


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
```
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.2.0/deploy/static/provider/cloud/deploy.yaml
```

- 아래 폴더에 `2-mongodb-secrets.yaml`, `interview-secret.yaml` 시크릿 파일들을 아래 경로에 붙여넣기(시크릿 파일들은 슬랙 본 프로젝트 업로드 란 댓글로 올림)
```
프로젝트 루트폴더/infra/local/base/
```

- clone한 프로젝트 루트에서 아래 명령어 실행
```sh
kubectl apply -f ./infra/local/base

# 아래 명령어로 mongodb-0이 생성되었는지 확인
kubectl get pods -n database
```

- clone한 프로젝트 루트에서 아래 명령어 실행 

```
skaffold dev --module local
``` 
- 크롬 브라우저에서 `https://deepinterview.local.com` 으로 접속 
- 크롬 브라우저에서 보안 관련 warning`연결이 비공개로 설정되어 있지 않습니다.`이 뜨면 뜬 상태에서 키보드로 `thisisunsafe` 타이핑

## 로컬 서비스 환경 깨끗이 정리하기

- 터미널 창에서 control + c로 빠져나오면 skaffold로 생성한 관련 리소스 자동 삭제 및 정리
- 아래 명령어로 skaffold로 생성하지 않은 리소스 제거
```
kubectl delete -f ./infra/local/base

```

- 맥에서는 `/etc/hosts` 윈도우에서는 `C:\Windows\System32\drivers\etc\hosts` 파일 아래 추가된 코드 삭제
```
127.0.0.1 deepinterview.local.com
```

- local ingress-nginx 삭제 및 정리
```
kubectl delete -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.2.0/deploy/static/provider/cloud/deploy.yaml
```
