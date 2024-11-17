# [넥플릭스 클론 코딩](https://yoo-sh.github.io/netflix_clone/#/)
![image](https://github.com/user-attachments/assets/00895e63-1861-4523-8b0b-84ee8a922a8a)
## `**Project 기본정보**`
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


## `기술 스택 명시`
    -   "axios": "^1.7.7", (API 통신)
        "gh-pages": "^6.2.0", (깃허브 페이지 배포)
        "pinia": "^2.2.6", (유저 정보 관리)
        "vue": "^3.2.13", (프론트엔드 페이지 프레임워크)

## `설치 및 실행 가이드`

1. npm install

2. npm run serve (localhost)

## `Project (폴더) 구조 설명`
```
## Structure

## Project Structure

📦 project-root
├── 📂 .github
│   └── 📂 workflows
│       ├── 📄 commit-build.yml
│       └── 📄 deploy.yml
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
│   │   ├── 📄 homeView.vue (navbar + poster + footer)
│   │   ├── 📄 PopularView.vue (navbar + footer)
│   │   ├── 📄 SearchView.vue (navbar + footer)
│   │   ├── 📄 SingView.vue (navbar + signin + signup + footer)
│   │   ├── 📄 TableView.vue (navbar + footer)
│   │   └── 📄 WishlistView.vue (navbar + footer)
│   ├── 📂 router
│   ├── 📂 store
│   │   └── 📄 auth.ts(pinia)
│   ├── 📂 styles
│   ├── 📂 utils
│   ├── 📄 App.vue
│   └── 📄 main.ts
└── 📄 package.json

```

## `브랜치 워크플로우`
* main: 출시 준비 브랜치(protected branch)
* develop: 개발 브랜치
* feature: 기능 개발 브랜치
* hotfix: 긴급 수정 브랜치
* gh-pages: 출시 브랜치

* Production Deployment
    -   main 브랜치로 PR 승인되거나, push될 때 자동 빌드 및 배포
* Auto Build on Commit
    -  develop, feature/, hotfix/, 브랜치에 push될 때 자동 빌드


## `git commit 규칙`

|type|활용상황|예제|
|:---|:---|:---|
|feat|새로운 기능 추가|사용자 로그인 기능 추가|
|fix|버그 수정|잘못된 계산 로직 수정|
|docs|문서 수정|README 파일에 설치 방법 추가|
|style|코드 스타일 변경 (코드 포매팅, 세미콜론 누락 등)|코드에서 불필요한 세미콜론 제거|
|design|사용자 UI 디자인 변경 (CSS 등) 기능 추가|메인 페이지 버튼 스타일 변경|
|test|테스트 코드, 리팩토링 (Test Code)|로그인 기능에 대한 단위 테스트 추가|
|refactor|refactor|중복된 코드 함수로 리팩토링|
|build|빌드 파일 수정|Webpack 설정 파일 수정|
|ci|CI 설정 파일 수정|GitHub Actions 워크플로우 파일 수정|
|perf|성능 개선|API 응답 속도를 높이기 위한 쿼리 최적화|
|chore|자잘한 수정이나 빌드 업데이트|패키지 버전 업데이트|
|rename|파일 혹은 폴더명을 수정만 한 경우|login.js 파일명을 auth.js로 변경|
|remove|파일을 삭제만 한 경우|사용되지 않는 old_styles.css 파일 삭제|

