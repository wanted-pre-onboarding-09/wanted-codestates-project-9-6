# 케어닥

## 1. 프로젝트 소개

- 간병인 신청하기 모바일 웹 페이지 구현
- 기간: 22.02.22~22.02.23

## 2. 배포 링크

https://caredoc.netlify.app/

## 3. 팀원 소개

|  이름  |    Role     |
| :----: | :---------: |
| 손영산 | Team Leader |
| 서한석 | Team Member |
| 유송현 | Team member |
| 윤솔비 | Team member |
| 이지수 | Team member |
| 조영제 | Team member |


손영산

- 무엇을 구현했나?
    - 주소 검색 API를 사용해 데이터 페칭 구현
    - 서버 API에 보내야할 주소 관련 schema 구조를 redux store를 통한 상태 관리
- 무엇이 어려웠나?
    - `SbumitAddress` 컴포넌트의 input의 value와 `AddressModal` 컴포넌트의 input의 value를 redux에서 관리를 해야할 필요가 느껴졌는데, 각각 독립적인 컴포넌트의 input이라 하나의 form으로 관리할 수 있을지 확신이 서지 않아 리액트 훅으로 따로 관리하게 됨
    - 빠르게 기능을 적용하려고 잦은 props dlling으로 데이터 흐름을 이해하는데 어려움이 있었기 때문에 리덕스를 활용해 리팩터링이 필요하다고 재고됨

서한석

- 돌봄 스케줄 예약 캘린더 기능 구현

유송현

- 메인 페이지
- 돌봄 유형 설정 페이지
- footer 버튼 영역 

윤솔비

- header 구현
- 신청 완료 페이지 구현
- 신청 완료 API POST 전송

이지수

- 입력 정보 확인 페이지
- 입력한 전화번호를 redux 통한 상태관리

조영제

- 시간 예약 페이지 
  - 페이지 레이아웃 구현

## 4. 기술 스택

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-6236FF?style=for-the-badge&logo=axios&logoColor=white)
<br/>

## 5.디렉토리 구조

```bash
├── assets
│   ├── Fill.svg
│   ├── clock.png
│   └── sun.png
├── components
│   ├── icons
│   │   ├── Arrow.png
│   │   ├── ArrowLfet.png
│   │   └── Calendar.png
│   ├── modal
│   │   ├── AddressItem.js
│   │   ├── AddressList.js
│   │   ├── AddressModal.js
│   │   └── ModalPortal.js
│   ├── Calendar.js
│   ├── Care.js
│   ├── Category.js
│   ├── Confirm.js
│   ├── DoneMessage.js
│   ├── Footer.js
│   ├── Header.js
│   ├── Home.js
│   ├── Information.js
│   ├── Schedule.js
│   ├── SubmitAddress.js
│   └── Title.js
├── css
│   ├── AddressItem.module.css
│   ├── AddressList.module.css
│   ├── AddressModal.module.css
│   ├── Care.module.css
│   ├── Category.module.css
│   ├── DoneMessage.module.css
│   ├── Footer1.module.css
│   ├── Header.module.css
│   ├── Home.module.css
│   ├── Schedule.module.css
│   ├── SubmitAddress.module.css
│   ├── Title.module.css
│   ├── Header.module.css
│   ├── confirm.module.css
│   └── information.module.css
├── store
│   ├── addressSlice.js
│   ├── careType.js
│   ├── pageStep.js
│   └── phoneNumber.js
├── App.css
├── App.js
├── index.css
└── index.js

```

## 5. 실행 방법

```
npm start
```

## 6. 커밋 컨벤션

|          | 사용 예시        |
| -------- | ---------------- |
| Feat     | 새로운 기능 추가 |
| Design   | CSS 스타일링     |
| Fix      | 버그 수정        |
| Refactor | 리팩토링         |
| Deploy   | 배포             |
| Remove   | 파일 삭제        |

|
