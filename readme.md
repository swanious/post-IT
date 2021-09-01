# IT트렌드 보고서 "post-IT"

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
  * ["일일 컨텐츠 탭" 개발 내용](#일일-컨텐츠-탭-개발-내용)

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

![image](https://user-images.githubusercontent.com/52116767/131613447-053d816e-1619-45e3-9072-00ac885d3384.png)

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


------

## "일일 컨텐츠 탭" 개발 내용

- 페이지 레이아웃

![image](https://user-images.githubusercontent.com/52116767/128600189-597f8b76-50df-45ec-a1b0-aa5b709a9045.png)


# 📌자료

**프로토타입**

https://www.figma.com/embed?embed_host=notion&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FXE0ORrPHD84UKeRM0FIowM%2FPost-IT%3Fnode-id%3D122%3A2

**발표 자료**

[post-IT 발표자료.pptx](https://drive.google.com/file/d/1UHJGzvyILlb2KRcOSpumSP-zB9MdgLJe/view?usp=drivesdk)
