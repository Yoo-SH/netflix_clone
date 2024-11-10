# [넥플릭스 클론 코딩](https://yoo-sh.github.io/netflix_clone/#/)

## Project 기본정보
* **[영상](https://youtu.be/edG9g7rg_2Y)**
    - TMDB API를 받아 비밀번호로 가입하여야 합니다.
    - 영상에 노출된 API키는 더 이상 유효하지 않습니다.
    - 데이터는 pinna 혹은 로컬스토리지를 통해 관리됩니다.
    - 로컬스토리지 데이터
        - 최근 검색어 
        - 즐겨찾기 영화목록
        - 로그인한 사용자 정보
        - 기억되는 사용자 정보
        - 유효한 사용자 정보


## 기술 스택 명시
    -   "axios": "^1.7.7", (API 통신)
        "gh-pages": "^6.2.0", (깃허브 페이지 배포)
        "pinia": "^2.2.6", (유저 정보 관리)
        "vue": "^3.2.13", (프론트엔드 페이지 프레임워크)

## 설치 및 실행 가이드

1. npm install

2. npm run serve (localhost)

## Project (폴더) 구조 설명
```
## Structure

📦 project-root
├── 📂 public
│   └── 📄 index.html
├── 📂 src
│   ├── 📂 assets
│   ├── 📂 components
│   │   ├── 📄 footer.vue
│   │   ├── 📄 navbar.vue
│   │   ├── 📄 poster.vue
│   │   ├── 📄 signin.vue
│   │   └── 📄 signup.vue
│   ├── 📂 views
│   │   ├── 📄 homeView.vue (navbar+ poster + footer)
│   │   ├── 📄 PopularView.vue (navbar + footer)
│   │   ├── 📄 SearchView.vue (navbar + footer)
│   │   ├── 📄 SingView.vue (navbar + signin+ signup+ footer)
│   │   ├── 📄 TableView.vue (navbar + footer)
│   │   └── 📄 WishlistView.vue (navbar + footer)
│   ├── 📂 router
│   ├── 📂 store
│   ├── 📂 styles
│   ├── 📂 utils
│   ├── 📄 App.vue
│   └── 📄 main.ts
└── 📄 package.json

```

## 개발 가이드


### 브랜치 워크플로우
* main: 출시 준비 브랜치
* develop: 개발 브랜치
* feature: 기능 개발 브랜치
* hotfix: 긴급 수정 브랜치
* gh-pages: 출시 브랜치

* Production Deployment
    -   main 브랜치로 PR 승인되거나, push될 때 자동 빌드 및 배포
* Auto Build on Commit
    -  develop, feature/, hotfix/, 브랜치에 push될 때 자동 빌드


