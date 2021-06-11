# IT트렌드 보고서 "post-IT"

> 삼성 소프트웨어 아카데미(이하 SSAFY)에서 특화 프로젝트로 '빅데이터' 분석 모델을 활용한 팀 프로젝트를 소개합니다.
>
> 프로젝트 기간: 21.03.08 - 04.09

- [📌프로젝트 소개](#프로젝트-소개)
  * [기획배경](#기획배경)
  * [기대효과](#기대효과)
- [📌기술스택 및 역할](#기술스택-및-역할)
    + [**내가 한 일(개발)**](#내가-한-일개발)
    + [**개발 이외**](#개발-이외)
- [📌개발](#개발)
  * ["헤더" 개발 내용](#헤더-개발-내용)
  * ["IT 보고서 탭" 개발 내용](#it-보고서-탭-개발-내용)
    + [**주차별 보고서 선택 탭**](#주차별-보고서-선택-탭)
    + [**공통 보고서(section1)**](#공통-보고서section1)
    + [**카테고리별 보고서(section2)**](#카테고리별-보고서section2)
    + [전체 구성도](#전체-구성도)
    + [**카테고리 분류**](#카테고리-분류)
  * ["일일 컨텐츠 탭" 개발 내용](#일일-컨텐츠-탭-개발-내용)
- [📌프로젝트 회고](#프로젝트-회고)
    + [개발환경구축](#개발환경구축)
    + [왜 Vue가 아닌 React를 선택했는가 ?](#왜-vue가-아닌-react를-선택했는가)
    + [왜 styled-component ?](#왜-styledcomponent)
    + [프로젝트 진행 중 어려움](#프로젝트-진행-중-어려움)
    + [느낀점](#느낀점)
- [📌자료](#자료)

# 📌 프로젝트 소개

## 기획배경

![img](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F31024abf-0297-4d73-94be-d55a217f49aa%2FUntitled.png?table=block&id=af20ab1f-ee50-4a20-ad34-275ba0937b95&spaceId=21f8304b-a655-4262-b272-7225e873f61f&width=1430&userId=03f86028-b32c-4b4f-8b72-f34f5cfbc0ec&cache=v2)

→ **보고서 한장** 으로 파악하는 개발 트렌드, 기술 블로그/유튜브를 한곳에 모아 볼 수 있는 **데일리 컨텐츠** 제공 서비스

## 기대효과

![img](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2341ff45-6182-4143-b8ca-d837f06198b4%2FUntitled.png?table=block&id=f59654e4-d310-4893-8531-f69dd80173aa&spaceId=21f8304b-a655-4262-b272-7225e873f61f&width=1570&userId=03f86028-b32c-4b4f-8b72-f34f5cfbc0ec&cache=v2)

------

# 📌 기술스택 및 역할

- 개발환경

![img](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9c866277-5b21-495c-b4ba-f933fcff768c%2FUntitled.png?table=block&id=f0c71f5d-9c6a-4f1d-8f3b-cd443e3b767d&spaceId=21f8304b-a655-4262-b272-7225e873f61f&width=1560&userId=03f86028-b32c-4b4f-8b72-f34f5cfbc0ec&cache=v2)

- 아키텍처 구성

![img](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F575c7a79-e1af-45cc-8efe-8efd75ab32b5%2FUntitled.png?table=block&id=7772fbf3-2955-4005-97ef-e332efd26626&spaceId=21f8304b-a655-4262-b272-7225e873f61f&width=1650&userId=03f86028-b32c-4b4f-8b72-f34f5cfbc0ec&cache=v2)

- 인프라 구성

![img](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7b24c203-77f5-466f-828f-a1b41bf03563%2FUntitled.png?table=block&id=413b41c5-dd7a-45d3-8900-52810cae4c23&spaceId=21f8304b-a655-4262-b272-7225e873f61f&width=1850&userId=03f86028-b32c-4b4f-8b72-f34f5cfbc0ec&cache=v2)

### **내가 한 일(개발)**

- 프론트엔드 개발환경 구축 (Typrscript, react.js)
- 페이지 레이아웃
- Axios 백엔드 데이터 연동
- 데이터 시각화(amchart.js)

### **개발 이외**

- 프로토타입 제작
- 30초 영상 제작(프리미어 프로/애프터 이펙트)

------

# 📌 개발

## "헤더" 개발 내용

- 600px 이상

![img](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fef7f1689-db58-4e0c-8f70-81527d494ca4%2FUntitled.png?table=block&id=8f2d7a06-f9e0-4fa8-9b0c-3201ec4c92a0&spaceId=21f8304b-a655-4262-b272-7225e873f61f&width=1340&userId=03f86028-b32c-4b4f-8b72-f34f5cfbc0ec&cache=v2)

- 600px 미만
  - 미디어 쿼리를 활용하여 `600px이하일 경우 드롭다운 메뉴`로 변경(모바일 환경 지원)
  - 마우스 오버 시 focus된 탭의 스타일 변경

![img](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fec39c364-0714-4a20-bdb7-9c5370582112%2FUntitled.png?table=block&id=2547d5d5-f4a1-4fb1-816a-d83aa4db0444&spaceId=21f8304b-a655-4262-b272-7225e873f61f&width=1060&userId=03f86028-b32c-4b4f-8b72-f34f5cfbc0ec&cache=v2)

- `react-router-dom`의 `NavLink` 의 isActive, activeStyles 속성 적용

![img](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3b04fd9e-876b-42c0-89f0-6466b60baec2%2FUntitled.png?table=block&id=2308aff8-e8f0-497b-ad2f-be8ae1845961&spaceId=21f8304b-a655-4262-b272-7225e873f61f&width=860&userId=03f86028-b32c-4b4f-8b72-f34f5cfbc0ec&cache=v2)

- 로그인 모달 제작(컴포넌트를 children 받아 재사용성을 높임)

![img](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b052fbf7-9ee0-42f6-bfdd-52d1bc9a0c20/login_modal.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210609T033209Z&X-Amz-Expires=86400&X-Amz-Signature=c09651656266afd9badcc78402cf6d905ec9520be1815e27149fd99252f9788e&X-Amz-SignedHeaders=host)

------

## "IT 보고서 탭" 개발 내용

### **주차별 보고서 선택 탭**

- Select 태그 사용하여 주차별 옵션을 주어 선택가능
- 클릭 시 각 주차별 보고서 데이터를 받아옴

![img](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F59a2d423-b97a-4835-a566-796c7bf7a560%2FUntitled.png?table=block&id=e684d5f0-c2ac-4d80-ae42-5ced81a2143c&spaceId=21f8304b-a655-4262-b272-7225e873f61f&width=920&userId=03f86028-b32c-4b4f-8b72-f34f5cfbc0ec&cache=v2)

### **공통 보고서(section1)**

- stackoverflow에서 추출한 vote수가 가장 많은 TOP 10 제공
- 각 게시물 클릭 시 해당 stackoverflow 게시물로 이동

![img](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3cbf868b-f3c0-442b-89c4-d9671feb856a%2FUntitled.png?table=block&id=02166940-997a-4d46-b77f-0eeaf815e45a&spaceId=21f8304b-a655-4262-b272-7225e873f61f&width=2230&userId=03f86028-b32c-4b4f-8b72-f34f5cfbc0ec&cache=v2)

![img](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4b1de4d1-a2e1-40c9-9068-8cac50660995%2FUntitled.png?table=block&id=3e203eed-9a4a-4045-bafa-09d6f9ba1c64&spaceId=21f8304b-a655-4262-b272-7225e873f61f&width=2500&userId=03f86028-b32c-4b4f-8b72-f34f5cfbc0ec&cache=v2)



### **카테고리별 보고서(section2)**

### 전체 구성도

- 주간 인기 키워드 - 카테고리 별로 주간 인기 키워드를 빈도수 기준으로 뽑아줍니다.
- 워드 클라우드 - 인기 키워드를 워드 클라우드 형태로 시각화(클릭 시 스택오버플로우 해당 태그의 링크로 이동)
- 네트워크 맵 - 키워드의 연관성을 분석하여 네트워크 맵 형태로 시각화
- 에러 TOP10  - 해당 카테고리의 에러 게시물(stackoverflow) 조회수 상위 10개를 가져옴

![img](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F80018889-2cfb-49a7-98ab-b93c04d390b5%2FUntitled.png?table=block&id=be9fc917-0bae-4cf0-85a4-4d19a667f542&spaceId=21f8304b-a655-4262-b272-7225e873f61f&width=1250&userId=03f86028-b32c-4b4f-8b72-f34f5cfbc0ec&cache=v2)

### **카테고리 분류**

- 카테고리 클릭 시 해당 카테고리의 분석 보고서를 불러옵니다.

![img](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/792c18b8-ccc1-41dd-ab3c-fb6395c26166/category_report.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210609T033210Z&X-Amz-Expires=86400&X-Amz-Signature=a9db6112c1045f655ebfbb6c810cac98f54e6800803e40bfcccd7c7338590fdd&X-Amz-SignedHeaders=host)

- lazy-loading 라이브러리의 once 속성을 사용하여 컴포넌트가 한 번만 로드되도록 최적화하여, 카테고리별 분석 보고서가 랜더링될 때 공통 보고서가 리 렌더링되지 않습니다.

  ![img](https://www.notion.so/IT-post-IT-ad2b7e1e8aeb47d09aef658af2233e91#ec5ea2f80b4f4a8d9292e649473b3277)


------

## "일일 컨텐츠 탭" 개발 내용

- 페이지 레이아웃
  - 사용자 편의성을 위해 focus한 곳에 애니메이션을 추가했습니다.

![img](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a448cd91-5811-4fc5-b293-b991979fee25/daily_contents.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210609T033210Z&X-Amz-Expires=86400&X-Amz-Signature=14eaaf83488e6cf52a2da31551a8ad015e7c42f98b542cadfddbcb0324e93ff4&X-Amz-SignedHeaders=host)

------

# 📌 프로젝트 회고

### 개발환경구축

팀에서 개발환경 세팅을 담당했기에 React 개발환경에 대해 찾아보며했던 고민들을 기록으로 남겨놨다. (https://velog.io/@swanious/리액트-개발-시작하기)


### 왜 Vue가 아닌 React를 선택했는가 ?

이전 프로젝트에 Vue.js를 사용했었다. 본인이 경험하지 못했던 IT기술에 관심을 갖고 꾸준히 학습하는게 프론트엔드 개발자를 꿈꾸는 예비개발자로서의 덕목이라고 생각했다. 3명의 프론트 팀원과 상의 끝에 `React.js`, `Typescript` 의 새로운 기술스택의 조합으로 개발환경을 구성했다.


### 왜 styled-component ?

`styled-componentst` vs `tailwindCSS` 둘 중에서 고민을 했지만, 다음과 같은 이유로 `styled-components`를 선택했다.

- 컴포넌트 형식으로 `props` 를 내려줘서 조건에 따른 속성을 적용할 수 있다.
- className을 고민하지 않아도 된다.
- tailwindCSS와 비교하여 보기 편하다. (tailwind CSS는 bootstrap과 비슷한 느낌으로 className에 속성을 직접 적용하여 className이 비대해진다.)

위의 이유중 5명과의 팀 프로젝트이기에 협업 관점에서 `보기 편한` 것이 가장 중요하다는 생각을 했다.


### 프로젝트 진행 중 어려움

1. 데이터 처리에서 발생한 어려움

   ![img](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F22cfe83f-cc5f-4e30-bcbd-64e00d730298%2FUntitled.png?table=block&id=e37190a5-de67-4a7a-9b87-fe4b2ce15c42&spaceId=21f8304b-a655-4262-b272-7225e873f61f&width=1340&userId=03f86028-b32c-4b4f-8b72-f34f5cfbc0ec&cache=v2)

   **Report Page**에 접근하면 `useEffect`를 통해 백엔드에 요청하여 모든 보고서 데이터를 가져온다. 이후 받아온 데이터를 각 컴포넌트에 또 컴포넌트는 다시 각 차트컴포넌트에 데이터를 뿌려주게 되는 구조이다.

   **Report Page** 에서 props로 각 데이터를 보내주고, 각 컴포넌트는 받은 데이터를 다시 각 차트에  보내주는데, 데이터가 undefined인 상태에서 각 컴포넌트로 데이터를 내려주게 문제였다.

   구글링 + 코드 리뷰를 통해 해답을 찾아가기 시작했다. 결과적으로 react 공식문서에서 조건부 렌더링을 찾아서 다음과 같은 코드를 통해 해결했다.

   - 컴포넌트

   ```jsx
   if (
       props.data['category'] === undefined ||
       props.data[category].data1 === undefined ||
       props.data[category].data2 === undefined
     ) {
       return (
         <>
           <CircularProgress />; // 로딩화면
         </>
       );
     } else {
       return (  
   			...
         <Chart data={props.data}></Chart>
   			<Chart data={props.data}></Chart>
   			<Chart data={props.data}></Chart>
   )
   ```

2. 느린 로딩속도

차트는 `amchart.js` 라는 라이브러리를 이용했다. 라이브러리 자체에 애니메이션이 적용되어있었고, 보고서페이지로 이동했을때 한 번에 수많은 차트를 불러오는게 속도저하의 문제라고 판단했다.

보이지 않는 부분의 차트를 굳이 로드할 필요가 있을까? 라는 생각에 구글링을 통해 `lazy-loading` 을 알게됐고, 보이지 않는 부분은 loading하지 않는 방식으로 적용해서 속도저하 문제를 해결할 수 있었다.


### 느낀점

위의 어려움 외에도 수많은 어려움에 처했다. 하지만 프로젝트를 진행하면서 발생하는 오류에 대해 '발생 원인', '해결방법'을 markdown으로 정리했고, 팀원과 코드 리뷰를 진행했으며, 구글링의 힘을 빌려 해결하면서 개발에 자신감이 붙었다.

리액트, 뷰, 다음 프로젝트는 앱으로 진행할 예정이라 리액트 네이티브를 사용한다. 하지만 프레임워크, 라이브러리를 사용하면서 느끼는것은 `기본이 중요하다` 는 사실이다. vue, react를 잘사용한다고 javascript를 잘한다는 보장은 없지만, 그 반대는 가능하다. 기본을 익히고, 구조를 파악하는 과정이 필요할 것으로 보인다.

이번 프로젝트에서 느꼈던 부족함을 채우기 위한 목표 설정을 했다.

- typescript 강의 수강 및 실습
- react 함수형 컴포넌트, hook에 대한 학습 지속
- 백엔드 지식 쌓기(node.js, graphQL활용 프로젝트 실습 등)


# 📌자료

**프로토타입**

https://www.figma.com/embed?embed_host=notion&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FXE0ORrPHD84UKeRM0FIowM%2FPost-IT%3Fnode-id%3D122%3A2

**발표 자료**

[post-IT 발표자료.pptx](https://drive.google.com/file/d/1UHJGzvyILlb2KRcOSpumSP-zB9MdgLJe/view?usp=drivesdk)
