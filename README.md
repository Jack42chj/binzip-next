# BinZip
**유투브 국내 드라마 결말까지 몰아보기를 모아놓은 웹/앱 서비스**<br/>

![blog_logo](https://github.com/Jack42chj/binzip-next/assets/86552441/81dd8587-f6f0-4f97-8c4b-95f1c4da3b8c)


## ⚙️ 요구 사항(Requirements)
**- Node.js 20.11.1**
**- yarn 1.22.21**


## 💡 실행 방법(Installation)
```bash
$ cd binzip-next
$ yarn
$ yan dev
```


## 🖥️ 서비스 소개(Introduction)
**결말이 포함된 국내 드라마 요약 유투브를 모아놓은 영상 스트리밍 서비스입니다.**

![intro](https://github.com/Jack42chj/binzip-next/assets/86552441/5913a58f-cc77-48d6-8321-819748146454)


## 📖 블로그(Blog)
[드라마 결말 포함 스트리밍 서비스](https://velog.io/@hojinch99/series/%EB%93%9C%EB%9D%BC%EB%A7%88-%EA%B2%B0%EB%A7%90-%ED%8F%AC%ED%95%A8-%EC%8A%A4%ED%8A%B8%EB%A6%AC%EB%B0%8D-%EC%84%9C%EB%B9%84%EC%8A%A4)


## 🗓️ 개발 기간(Development Period)
**2024.03.30 ~ 2024.04.20**


## 🙋‍♂️ 멤버 구성(Member)
**1인 기획, 디자인, 개발**


## 📚 기술 스택(Stacks)
### 🛣️ 개발 환경(Environment)
<div>
  <img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
</div>

### 💫 Config
<img src="https://img.shields.io/badge/yarn-2C8EBB?style=for-the-badge&logo=git&logoColor=white">


### 🛠️ 개발 기술(Development)
<div>
  <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">
  <img src="https://img.shields.io/badge/nextdotjs-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">
  <img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">
  <img src="https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white">
  <img src="https://img.shields.io/badge/supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white">
  <img src="https://img.shields.io/badge/zustand-696969?style=for-the-badge&logo=react&logoColor=white">
</div>


### 🪄 디자인(Design)
<img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">


## 🌟 주요 기능(Specification)
#### ▶️ 선택 영상 유튜브 스트리밍(Player)
- 유튜브 영상 중 국내 드라마 결말포함 몰아보기 영상 제공
- 지속적으로 몰아보기 영상 추가 업로드 예정

#### 🔑 로그인/회원가입(Auth)
- Supabase Google OAuth2 로그인/회원가입
- 회원가입 시 자동으로 회원 고유 ID값 Supabase table에 저장
- 구글 로그인을 통한 이전에 보던 유튜브 영상 이어보기 가능

#### ❤️ 찜(Favorite)
- 로그인에 성공한 회원들에게만 제공하는 찜 서비스
- 영상에 좋아요/찜을 눌러 찜 목록 관리
- 찜 목록에서 바로 영상 시청 화면으로 이동 가능

#### 🔍 검색 기능(Search)
- 입력 받은 검색어를 기반으로 DB에서 결과 조회
- 이전 검색어와 같거나 비어 있으면 검색 요청 안함

#### 📱 카테고리(Category)
- 영상마다 카테고리를 설정하여 총 8개의 카테고리로 정리
- 사용자에게 카테고리 별로 영상 제공

#### 🔥 인기순, 조회순, 등록순 영상 제공(Filtering)
- 인기순, 조회순, 등록순으로 영상들을 필터링을 하여 메인 화면에서 사용자에게 영상 추천

#### 🔗 바로가기 탭(Navigation Tab Bar)
- 메인 화면, 검색 화면, 카테고리 화면, 마이페이지 화면을 언제든지 바로 이동할 수 있는 탭
