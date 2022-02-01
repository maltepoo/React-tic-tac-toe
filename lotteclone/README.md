# Lotte Department Store UI Clone

🎯 리액트로 component 구조, UI CSS 연습하기 (1/31 ~ 2/1: 2일)

## 어려웠던 점 💦
> react scroll event (상단 Nav, 본문)
map으로 render한 component들 개별 event 부여
CSS의 float 관련 - 코드가 많아지다 보니 clear를 했는지 알아보기 힘들었다..
깔끔한 component 구조 짜기
react, CSS등 모든 방면에서의 `클린코딩`...!

## 주요 UI Interaction
* 일정 height 이상 스크롤 시 Navbar dropdown하여 표시
* GNB 클릭시 Lnb 토글
* 메인 GNB 클릭시 li 스타일
* 스크롤 이벤트
* Top 버튼 클릭시 맨 처음 화면으로 자동스크롤e

## 알게된 점 🛴
* classnames 라이브러리로 vue의 scoped와 같은 기능이 가능하다(특정 컴포넌트 한정 css)
* 컴포넌트를 분리하기 전에는 스타일보다 로직을 먼저 고려할 것
* 컴포넌트는 재 사용성을 위해 분리하는 것으로 각각의 역할이 다른 것들은 굳이 컴포넌트 화 할 필요가 없다
* 컴포넌트의 최우선 목적은 개발의 편리성