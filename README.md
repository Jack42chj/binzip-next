# 🎬 BinZip - 국내 드라마 결말까지 몰아보기 웹/앱 서비스

![blog_logo](https://github.com/Jack42chj/binzip-next/assets/86552441/81dd8587-f6f0-4f97-8c4b-95f1c4da3b8c)

## ⚙️ 요구 사항(Requirements)

-   Node.js 20.11.1
-   yarn 1.22.21

## 💡 실행 방법(Installation)

```bash
$ cd binzip-next
$ yarn
$ yan dev
```

## 🖥️ 서비스 소개(Introduction)

![sample](https://github.com/Jack42chj/binzip-next/assets/86552441/2860cd29-de59-48e7-881d-53f7da491566)

-   결말이 포함된 국내 드라마 요약 유투브를 모아놓은 영상 스트리밍 서비스입니다.
-   구글 로그인을 제공하며 로그인한 사용자에게 찜 기능과 유튜브 영상 이어보기 기능을 제공합니다.
-   유튜브 임베드 영상을 가져와 유튜브 플레이어로 영상 스트리밍을 제공합니다.
-   검색을 통해 사용자가 원하는 영상을 검색하거나 관련 장르에 대한 검색 결과를 제공합니다.

## 📖 블로그(Blog)

[드라마 결말 포함 스트리밍 서비스](https://velog.io/@hojinch99/series/%EB%93%9C%EB%9D%BC%EB%A7%88-%EA%B2%B0%EB%A7%90-%ED%8F%AC%ED%95%A8-%EC%8A%A4%ED%8A%B8%EB%A6%AC%EB%B0%8D-%EC%84%9C%EB%B9%84%EC%8A%A4)

---

## 🗓️ 개발 기간(Development Period)

-   **전체 개발 기간 : 2024.04.07 ~ 2024.04.20**
-   **기획 및 디자인 : 2024.04.07 ~ 2024.04.11**
-   **UI 및 기능 구현 : 2024.04.12 ~ 2024.04.20**
-   **DB 구현 및 데이터 수집 : 2024.04.16 ~ 2024.04.20**

## 🙋‍♂️ 멤버 구성(Member)

**1인 기획, 디자인, 개발**

## 📚 기술 스택(Stacks)

### 🛣️ 개발 환경(Environment)

<div>
  <img src="https://img.shields.io/badge/VisualStudioCode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
  <img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white">
</div>

### 💫 Config

<img src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white">

### 🛠️ 개발 기술(Development)

<div>
  <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">
  <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">
  <img src="https://img.shields.io/badge/ReactQuery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white">
  <img src="https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white">
  <img src="https://img.shields.io/badge/Zustand-696969?style=for-the-badge&logo=react&logoColor=white">
</div>

### 🪄 디자인(Design)

<div>
  <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">
</div>

## 📂 디렉토리 구조

```bash
binzip
├─ .eslintrc.json
├─ .gitignore
├─ next.config.mjs
├─ package.json
├─ postcss.config.js
├─ public
│  ├─ svg
│  │  ├─ avatar.svg
│  │  ├─ cancle.svg
│  │  ├─ category.svg
│  │  ├─ chevron-left.svg
│  │  ├─ dislike.svg
│  │  ├─ google.svg
│  │  ├─ like.svg
│  │  ├─ link.svg
│  │  ├─ logo.svg
│  │  ├─ mail.svg
│  │  ├─ plus.svg
│  │  ├─ qa.svg
│  │  ├─ rocket.svg
│  │  ├─ search.svg
│  │  ├─ share.svg
│  │  └─ tv.svg
│  └─ webp
│     ├─ action.webp
│     ├─ bg.webp
│     ├─ comedy.webp
│     ├─ crime.webp
│     ├─ fantasy.webp
│     ├─ history.webp
│     ├─ mystery.webp
│     ├─ romance.webp
│     ├─ spinner.webp
│     ├─ sports.webp
│     └─ webg.webp
├─ README.md
├─ src
│  └─ app
│     ├─ (route)
│     │  ├─ category
│     │  │  ├─ page.tsx
│     │  │  ├─ [slug]
│     │  │  │  └─ page.tsx
│     │  │  └─ _components
│     │  │     ├─ category-list.tsx
│     │  │     ├─ category-result.tsx
│     │  │     └─ header.tsx
│     │  ├─ login
│     │  │  ├─ page.tsx
│     │  │  └─ _components
│     │  │     └─ auth-button.tsx
│     │  ├─ main
│     │  │  ├─ page.tsx
│     │  │  └─ _components
│     │  │     ├─ list-skeleton.tsx
│     │  │     ├─ list.tsx
│     │  │     ├─ mobile-bg.tsx
│     │  │     ├─ search-box.tsx
│     │  │     └─ web-bg.tsx
│     │  ├─ my-favorite
│     │  │  ├─ page.tsx
│     │  │  └─ _components
│     │  │     └─ favorite-list.tsx
│     │  ├─ mypage
│     │  │  ├─ page.tsx
│     │  │  └─ _components
│     │  │     ├─ logout-button.tsx
│     │  │     ├─ user-header.tsx
│     │  │     └─ user-item.tsx
│     │  ├─ play
│     │  │  ├─ [title]
│     │  │  │  └─ page.tsx
│     │  │  └─ _components
│     │  │     ├─ icon-button.tsx
│     │  │     ├─ video-player.tsx
│     │  │     ├─ video.tsx
│     │  │     └─ view-plus.tsx
│     │  ├─ search
│     │  │  ├─ page.tsx
│     │  │  ├─ [slug]
│     │  │  │  └─ page.tsx
│     │  │  └─ _components
│     │  │     ├─ header.tsx
│     │  │     ├─ input.tsx
│     │  │     ├─ result-header.tsx
│     │  │     ├─ result-list.tsx
│     │  │     ├─ search-bar.tsx
│     │  │     └─ tag.tsx
│     │  └─ top
│     │     ├─ [slug]
│     │     │  └─ page.tsx
│     │     └─ _components
│     │        └─ top-data.tsx
│     ├─ globals.css
│     ├─ icon.ico
│     ├─ layout.tsx
│     ├─ page.tsx
│     ├─ _apis
│     │  └─ supabase-api.ts
│     ├─ _components
│     │  ├─ header.tsx
│     │  ├─ spinner.tsx
│     │  └─ tab-bar.tsx
│     ├─ _interfaces
│     │  └─ keyword-interface.ts
│     ├─ _query
│     │  └─ provider.tsx
│     ├─ _stores
│     │  └─ auth-store.ts
│     └─ _utils
│        └─ supabase.ts
├─ tailwind.config.ts
├─ tsconfig.json
└─ yarn.lock
```

## ⚡ 웹 페이지 속도 측정(렌더링 속도)

![image](https://github.com/Jack42chj/binzip-next/assets/86552441/72186f1f-8133-416e-8fb2-ea2969e663d9)

https://tools.pingdom.com/

## 🌟 주요 기능(Specification)

#### ▶️ 선택 영상 유튜브 스트리밍(Player)

-   유튜브 영상 중 국내 드라마 결말포함 몰아보기 영상 제공
-   지속적으로 몰아보기 영상 추가 업로드 예정

#### 🔑 로그인/회원가입(Auth)

-   Supabase Google OAuth2 로그인/회원가입
-   회원가입 시 자동으로 회원 고유 ID값 Supabase table에 저장
-   구글 로그인을 통한 이전에 보던 유튜브 영상 이어보기 가능

#### ❤️ 찜(Favorite)

-   로그인에 성공한 회원들에게만 제공하는 찜 서비스
-   영상에 좋아요/찜을 눌러 찜 목록 관리
-   찜 목록에서 바로 영상 시청 화면으로 이동 가능

#### 🔍 검색 기능(Search)

-   입력 받은 검색어를 기반으로 DB에서 결과 조회
-   이전 검색어와 같거나 비어 있으면 검색 요청 안함

#### 📱 카테고리(Category)

-   영상마다 카테고리를 설정하여 총 8개의 카테고리로 정리
-   사용자에게 카테고리 별로 영상 제공

#### 🔥 인기순, 조회순, 등록순 영상 제공(Filtering)

-   인기순, 조회순, 등록순으로 영상들을 필터링을 하여 메인 화면에서 사용자에게 영상 추천

#### 🔗 바로가기 탭(Navigation Tab Bar)

-   메인 화면, 검색 화면, 카테고리 화면, 마이페이지 화면을 언제든지 바로 이동할 수 있는 탭

## 🔥 트러블 슈팅(Trouble Shooting)

#### 🖌️ Styled-components(CSS-in-JS) 스타일 기법 적용

문제: Next.js 13 App Router에서 Styled-components 사용이 가능하나 사용하는 모든 곳에 'use client'를 작성하는 문제가 발생했다. Next.js는 Server Components와 Client Components를 구분해서 사용한다. 이는 SSR의 장점인 Server Components를 활용한 서버 측 JS처리 및 초기 페이지 로드 속도를 향상시켜 완성된 페이지를 전달할 수 있기 때문이다. 그런데 Next.js 13 App Router에서는 Styled-components 사용을 하는 컴포넌트 최상단에 'use client'를 작성해야 한다는 것이다. 이는 'use client'가 작성된 컴포넌트는 모두 Client Component로 간주한다는 것이다. 이는 결국 Server Component를 사용하지 않은 게 되므로 SSR에 장점이 사라진다는 것이다.

해결: 기존에 사용하던 Styled-components인 CSS-in-JS 기법을 포기하고 Next.js에서 추천하는 CSS 모듈 또는 Tailwind CSS와 같은 스타일 기법을 적용하는 것이다. 비록 CSS-in-JS를 사용하는 것을 포기했지만 다른 스타일 기법을 적용하면서 동시에 익힐 수 있었다.

#### 💽 Next.js 13 데이터 패치 방식 변경

문제: 기존에 존재했던 getServerSideProps, getStaticProps, getStaticPaths API 사용을 지원하지 않는 문제가 있었다. 기존에 있던 자료를 참고하여 프로젝트를 진행하니 새로운 Next.js 13버전에서의 데이터 패칭이 바뀌었다는 것이다.

해결: 바뀐 Next.js 13버전의 데이터 패칭 방식인 fetch() 함수를 사용해 데이터 패칭 및 데이터 캐싱까지 진행하였다. 여기에 추가로 third-party 라이브러리 supabase를 사용해 데이터를 패칭하여 revalidate로 데이터 캐싱 기간을 설정하였다.

https://supabase.com/blog/fetching-and-caching-supabase-data-in-next-js-server-components

#### 🚨 React Query vs Fallback UI

기존에 React.js로 진행한 CSR 환경에서는 주로 React Quary(Tanstack Query)를 사용해서 서버 상태를 관리하였다. 그러나 SSR 방식인 Next.js에서는 이미 서버에서 데이터 패칭을 완료하고 클라이언트에 보내주기 때문에 Suspense를 적용하여 Fallback UI로 대체한다면 React Query의 isLoading 메서드를 대체 가능하다고 생각했다.

그래서 이번 프로젝트 Skeleton UI 구현은 React Query 라이브러리를 사용하지 않고 Suspense의 Fallback UI를 사용해 대체하였다. 이는 당연히 React Query에서 지원하는 모든 기능을 대체할 수는 없지만 내가 필요한 부분의 추가적인 라이브러리를 사용하지 않고 React 자체에서 지원하는 Suspense 기능으로 대체 가능하다면 상황에 맞춰 사용하는 것이 중요하다고 생각한다.

비록 추후에 좋아요 기능 및 조회수로 인한 데이터 변경에 따른 refetching 기능을 사용하기 위해 결국 React Query를 사용하였다...
