# [넥플릭스 클론 코딩 - v2.1.2](https://yoo-sh.github.io/netflix_clone/)
![Image](https://github.com/user-attachments/assets/f4f5df8c-cfea-4c9c-9ea6-313a04fcbfba)
[![시연 영상 썸네일](https://github.com/user-attachments/assets/00895e63-1861-4523-8b0b-84ee8a922a8a)](https://github.com/user-attachments/assets/41d7c322-377e-48c8-9ac1-5907ddf51a73)


## 버전 업데이트 내용(v.2.0.0 -> v.2.1.2)
- ### **[v.1.0.0](https://github.com/Yoo-SH/netflix_clone/blob/develop/docs/1.0.0.README.md)**

- ### **[v.2.0.0](https://github.com/Yoo-SH/netflix_clone/blob/develop/docs/2.0.0.README.md)**

- ### **v.2.1.2 업데이트 내용**

        1. 카카오 oauth 기능 추가
        2. gh-page webhashhistory -> webhistory로 변경
        3. gh-page webhistory로 동작시 발생하는 문제, sessionStorage를 이용하여 수정
        4. 404 page, 회원가입 축하 페이지 추가


## `**Project 기본정보**`
* ### **[동작 동영상](https://www.youtube.com/watch?v=z5HD7PneSzI)**
- 데이터는 pinna 또는 로컬스토리지를 통해 관리됩니다.
- 로컬스토리지 데이터
    - 최근 검색어 
    - 즐겨찾기 영화목록
    - 회원가입한 사용자 정보
    - 사용자 로그인상태 정보
    - 사용자 kakao oauth 토큰 및 아이디 정보

## `기술 스택 명시`
    -   "axios": "^1.7.7", (API 통신)
        "gh-pages": "^6.2.0", (깃허브 페이지 배포)
        "pinia": "^2.2.6", (유저 정보 관리)
        "vue": "^3.2.13", (프론트엔드 페이지 프레임워크)

## `설치 및 실행 가이드`

1. npm install

2. npm run serve (localhost)

3. npm run build:production (배포용 빌드)

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
│   │   ├── 📄 NotFoundView.vue
│   │   ├── 📄 SignConfraturation.vue
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

**Production Deployment**
```
main 브랜치로 PR 승인되거나, push될 때 자동 빌드 및 배포
```
**Auto Build on Commit**
```
develop, feature/, hotfix/, 브랜치에 push될 때 자동 빌드
```

## `kakao oauth`
**1. 카카오 로그인을 위한 oauth 설정**

    카카오 개발자 페이지에서 앱을 생성하고, 클라이언트 ID를 발급받기.
**2. 카카오 로그인을 위한 설정**

    카카오 로그인을 위한 설정은 다음과 같습니다.
       - 로그인 버튼 클릭 시, 카카오 로그인 페이지로 이동
       - 카카오 로그인 페이지에서 로그인 후, 사용자 정보를 받아옴
       - 받은 사용자 정보를 이용하여 로그인 처리
       - 사용자 정보가 저장되어 있는 상태에서는 자동 로그인, 저장되지 않은 상태에서는 가입 축하페이지로 redirect

**3. 카카오 로그인을 위한 코드**        

**kakao oauth 로직**
```javascript
async getKaKaoOauthCode() {
        const params = new URLSearchParams(window.location.search);
        const code = params.get("code");
  
        if (code) {
          console.log("Authorization Code:", code);
          const accessToken = await this.getAccessToken(code); // Access Token 요청
          const userInfo = await this.getUserInfo(accessToken); // 사용자 정보 요청
          this.userInfo = userInfo; // 사용자 정보를 Vue data에 저장

          const existingCredentials = JSON.parse(localStorage.getItem('userCredentials')) || [];
          const userExists = existingCredentials.some(cred => cred.kakao_account_id === userInfo.id);

          if (userExists) // 이미 가입한 사용자인 경우
          {
            const authStore = useAuthStore(); 
            authStore.login({ access_token: accessToken, userInfo : this.userInfo }); // access token과 사용자 정보를 저장
            this.$router.push('/');
          } else // 신규 사용자인 경우
          {
            const authStore = useAuthStore(); 
            authStore.login({ access_token: accessToken, userInfo : this.userInfo }); // access token과 사용자 정보를 저장
            
            const userCredentials = {
            kakao_account_id: userInfo.id
            };
            existingCredentials.push(userCredentials);
            localStorage.setItem('userCredentials', JSON.stringify(existingCredentials));
          }
        } else {
          console.warn("No Authorization Code found in URL.");
        }
      },
```
**access token을 요청**
```javascript
      async getAccessToken(code) {
        console.log("Requesting Access Token...");
        const appKey = process.env.VUE_APP_KAKAO_REST_API_KEY; // REST API 키
        const redirectUri = process.env.VUE_APP_KAKAO_REDIRECT_URI; // 리다이렉트 URI
  
        try {
          const response = await fetch("https://kauth.kakao.com/oauth/token", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            },
            body: new URLSearchParams({
              grant_type: "authorization_code",
              client_id: appKey,
              redirect_uri: redirectUri,
              code: code,
            }),
          });
  
          const data = await response.json();
          if (data.access_token) {
            console.log("Access Token:", data.access_token);
            return data.access_token;            
          } else {
            console.error("Failed to fetch access token:", data);
          }
        } catch (error) {
          console.error("Error fetching access token:", error);
        }
      },
```
**access token을 이용하여 사용자 정보를 요청**
```javascript
      async getUserInfo(accessToken) {
        console.log("Requesting User Info...");
        try {
          const response = await fetch("https://kapi.kakao.com/v2/user/me", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
  
          const userInfo = await response.json();
          console.log("User Info:", userInfo);
          return userInfo;
          
        } catch (error) {
          console.error("Error fetching user info:", error);
        }
      },

```

**api key github action에 등록**
```yaml
- name: Set API Key
        run: |
          echo "VUE_APP_TMDB_API_KEY=${{ matrix.environment == 'production' && secrets.PRODUCTION_TMDB_API_KEY || secrets.DEVELOPMENT_TMDB_API_KEY }}" >> $GITHUB_ENV
          echo "VUE_APP_KAKAO_JS_KEY=${{ matrix.environment == 'production' && secrets.PRODUCTION_KAKAO_JS_KEY || secrets.DEVELOPMENT_KAKAO_JS_KEY }}" >> $GITHUB_ENV
          echo "VUE_APP_KAKAO_REST_API_KEY=${{ matrix.environment == 'production' && secrets.PRODUCTION_KAKAO_REST_API_KEY || secrets.DEVELOPMENT_KAKAO_REST_API_KEY }}" >> $GITHUB_ENV
          echo "VUE_APP_KAKAO_REDIRECT_URI=${{ matrix.environment == 'production' && secrets.PRODUCTION_KAKAO_REDIRECT_URI || secrets.DEVELOPMENT_KAKAO_REDIRECT_URI }}" >> $GITHUB_ENV
          echo "VUE_APP_BASE_URL=${{ matrix.environment == 'production' && secrets.PRODUCTION_BASE_URL || secrets.DEVELOPMENT_BASE_URL }}" >> $GITHUB_ENV

```


# reference
- [TMDB API 문서](https://www.themoviedb.org/documentation/api)
- [TMDB API 예제 코드](https://developer.themoviedb.org/reference/intro/getting-started)
- [Kakao oauth 이해하기](https://developers.kakao.com/docs/latest/ko/kakaologin/common)
- [kakao oauth rest api](https://developers.kakao.com/docs/latest/ko/kakaologin/rest-api)
- [kakao oauth javascript](https://developers.kakao.com/docs/latest/ko/kakaologin/js)
- [gh-pages 배포 시 URL 새로고침/직접 입력 문제](https://velog.io/@eunji9128/gh-pages-%EB%B0%B0%ED%8F%AC-%EC%8B%9C-URL-%EC%83%88%EB%A1%9C%EA%B3%A0%EC%B9%A8%EC%A7%81%EC%A0%91-%EC%9E%85%EB%A0%A5-%EB%AC%B8%EC%A0%9C )
