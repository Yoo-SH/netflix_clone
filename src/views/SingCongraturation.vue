<template>
    <div class="congratulations">
      <div class="box">
        <div v-if="userInfo">
        <h1>{{ userInfo.kakao_account.profile.nickname }}님 회원가입을 축하합니다!</h1>
        <p>넷플릭스 클론사이트에 오신 것을 환영합니다.</p>
          <div>
            <img
              v-if="userInfo.kakao_account.profile.profile_image_url"
              :src="userInfo.kakao_account.profile.profile_image_url"
              alt="프로필 이미지"
              style="width: 100px; height: 100px; border-radius: 50%;"
            />
            <p v-else>프로필 이미지가 없습니다.</p>
          </div>
        </div>
        <router-link to="/">서비스 이용하기</router-link>
      </div>
    </div>
    <FooterComponent />
  </template>
  
  <script>
import FooterComponent from '../components/Footer.vue';
import { useAuthStore } from '../store/auth';

  export default {
    name: "SignCongratulationsViewComponent",
    components: {
      FooterComponent,
    },

    data() {
      return {
        userInfo: null, // 사용자 정보 저장
      };
    },
    mounted() {
      this.getKaKaoOauthCode();
    },
    methods: {
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
            const authStore = useAuthStore(); // 전역변수로 사용할 authStore 객체 가져오기
            authStore.login({ access_token: accessToken, userInfo : this.userInfo }); // access token과 사용자 정보를 저장
            this.$router.push('/');
          } else // 신규 사용자인 경우
          {
            const authStore = useAuthStore(); // 전역변수로 사용할 authStore 객체 가져오기
            authStore.login({ access_token: accessToken, userInfo : this.userInfo }); // access token과 사용자 정보를 저장
            // 회원가입 성공 시 이메일과 비밀번호를 객체로 묶어서 localStorage의 배열에 저장
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
      async getAccessToken(code) {
        console.log("Requesting Access Token...");
        const appKey = process.env.VUE_APP_KAKAO_REST_API_KEY; // REST API 키
        const redirectUri = "http://localhost:8080/sign/congratulation"; // 리다이렉트 URI
  
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

    },
  };
  
  </script>
  
  <style scoped>
  .congratulations {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 50px;
  }
  
  .box {
    border: 2px solid #e50914;
    padding: 20px;
    display: inline-block;
  }
  
  h1 {
    color: #e50914;
  }
  
  p {
    color: #e50914;
    font-size: 18px;
    margin: 20px 0;
  }
  
  a {
    color: #e50914;
    text-decoration: none;
    font-weight: bold;
  }
  </style>
  