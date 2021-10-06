# 📚 쓰담쓰담
쓰담쓰담은 책 속에서 기억하고 싶은 나만의 소중한 문장을 기록하는 웹 애플리케이션입니다.

<br>

## ✏️ 쓰담쓰담 기능
✔️ 책 등록 & 삭제
- 내가 읽었던 책 제목을 작성하여 책을 검색하고 등록하여 나만의 리스트에 추가 & 삭제할 수 있습니다.

✔️ 문장 등록 & 수정 & 삭제
- 내가 좋아하는 책속의 문장을 책 별로 등록 & 수정 & 삭제할 수 있습니다.


## ✏️ 프로젝트 소개
### Front-End
- 모바일 웹 애플리케이션 (~600px 반응형 구현)
- React.js를 사용한 client 개발
  - Router를 사용한 SPA 개발
- GraphQL을 사용한 서버와의 통신
- 오픈 소스(네이버 Book API) REST API를 이용한 데이터 사용
- CSS-in-JS/Styled-components를 사용한 UI 구현
- IntersectionObserver를 사용한 커스텀 Hook(useInfiniteScroll) 코드 구현 및 책, 문장 목록 별 무한 스크롤 기능 구현

### Back-End
- Node.js(Express + Apollo)로 CRUD 서버 구축

### Deploy
- Nginx를 이용한 React 배포
- pm2를 사용한 서버 작동
- AWS EC2 클라우드 서버 호스팅

<br>

## ✏️ 프로젝트 목적
쓰담쓰담은 혼자서 개발하는 풀스텍 토이프로젝트로 새롭게 학습한 기술 두가지를 추가하여 아래와 같은 학습 목표를 이루고자 합니다.

1. Node.js(express, apollo)를 사용한 간단한 CRUD 서버 환경 구축
2. GraphQL을 사용한 서버와의 통신
3. AWS EC2 클라우드를 사용한 React + Express 배포

<br>

## ✏️ 개발 도구
### Client
- TypeScript
- React.js
- **✨GraphQL**
- Styled-components

### Server
- **✨Node.js**
- **✨Express**
- **✨Apollo**
- **✨PM2**

### Librarys
- Axios

### Deploy
- **✨EC2**
- **✨NGINX**

<br>

## ✏️ Install
root 폴더 & client 폴더 & server 폴더
```
$ yarn install
```

root 폴더
```
$ yarn run client
$ yarn run server
```