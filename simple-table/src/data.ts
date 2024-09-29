export type TableData = {
    key: string;
    title: string;
    author: string;
    date: string;
    contents: string;
    tags: string[];
    viewCount: string;
};

export type TableDataList = {
    list: TableData[];
};

function isTableData(obj: any): obj is TableData {
    return typeof obj.key === 'string' &&
        typeof obj.title === 'string' &&
        typeof obj.author === 'string' &&
        typeof obj.date === 'string' &&
        typeof obj.contents === 'string' &&
        typeof obj.viewCount === 'string';
}

export let data = JSON.parse(`{
    "list": [
        {
            "key": "550e8400-e29b-41d4-a716-446655440000",
            "title": "Redux의 기초",
            "author": "김리덕스",
            "date": "2024-09-01",
            "contents": "Redux의 기본 개념과 사용법에 대해 알아봅시다.",
            "tags": ["Redux", "JavaScript", "State Management"],
            "viewCount": "1200"
        },
        {
            "key": "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
            "title": "React와 Redux 통합하기",
            "author": "박리액트",
            "date": "2024-09-03",
            "contents": "React 애플리케이션에 Redux를 효과적으로 통합하는 방법을 살펴봅니다.",
            "tags": ["React", "Redux", "Integration"],
            "viewCount": "980"
        },
        {
            "key": "6ba7b811-9dad-11d1-80b4-00c04fd430c8",
            "title": "Redux Middleware 이해하기",
            "author": "이미들웨어",
            "date": "2024-09-05",
            "contents": "Redux middleware의 개념과 사용 사례에 대해 자세히 알아봅니다.",
            "tags": ["Redux", "Middleware", "Advanced"],
            "viewCount": "750"
        },
        {
            "key": "6ba7b812-9dad-11d1-80b4-00c04fd430c8",
            "title": "Redux Toolkit 소개",
            "author": "최툴킷",
            "date": "2024-09-07",
            "contents": "Redux Toolkit의 주요 기능과 장점을 소개합니다.",
            "tags": ["Redux Toolkit", "State Management", "Simplification"],
            "viewCount": "1500"
        },
        {
            "key": "6ba7b813-9dad-11d1-80b4-00c04fd430c8",
            "title": "비동기 작업과 Redux",
            "author": "정비동기",
            "date": "2024-09-09",
            "contents": "Redux에서 비동기 작업을 처리하는 다양한 방법에 대해 알아봅니다.",
            "tags": ["Redux", "Asynchronous", "Thunk"],
            "viewCount": "820"
        },
        {
            "key": "6ba7b814-9dad-11d1-80b4-00c04fd430c8",
            "title": "Redux 성능 최적화",
            "author": "강성능",
            "date": "2024-09-11",
            "contents": "대규모 애플리케이션에서 Redux의 성능을 최적화하는 방법을 다룹니다.",
            "tags": ["Redux", "Performance", "Optimization"],
            "viewCount": "1100"
        },
        {
            "key": "6ba7b815-9dad-11d1-80b4-00c04fd430c8",
            "title": "Redux와 타입스크립트",
            "author": "윤타입",
            "date": "2024-09-13",
            "contents": "Redux를 타입스크립트와 함께 사용하는 방법과 이점을 설명합니다.",
            "tags": ["Redux", "TypeScript", "Type Safety"],
            "viewCount": "950"
        },
        {
            "key": "6ba7b816-9dad-11d1-80b4-00c04fd430c8",
            "title": "Redux 디버깅 기술",
            "author": "조디버그",
            "date": "2024-09-15",
            "contents": "Redux 애플리케이션을 효과적으로 디버깅하는 도구와 기술을 소개합니다.",
            "tags": ["Redux", "Debugging", "Developer Tools"],
            "viewCount": "680"
        },
        {
            "key": "6ba7b817-9dad-11d1-80b4-00c04fd430c8",
            "title": "Redux와 불변성",
            "author": "한불변",
            "date": "2024-09-17",
            "contents": "Redux에서 불변성의 중요성과 이를 유지하는 방법에 대해 설명합니다.",
            "tags": ["Redux", "Immutability", "State Management"],
            "viewCount": "800"
        },
        {
            "key": "6ba7b818-9dad-11d1-80b4-00c04fd430c8",
            "title": "Redux Saga 심화",
            "author": "오사가",
            "date": "2024-09-19",
            "contents": "Redux Saga를 사용한 복잡한 비동기 흐름 관리에 대해 알아봅니다.",
            "tags": ["Redux", "Saga", "Asynchronous"],
            "viewCount": "720"
        },
        {
            "key": "6ba7b819-9dad-11d1-80b4-00c04fd430c8",
            "title": "Redux와 로컬 스토리지",
            "author": "임스토리지",
            "date": "2024-09-21",
            "contents": "Redux 상태를 로컬 스토리지에 저장하고 복원하는 방법을 다룹니다.",
            "tags": ["Redux", "Local Storage", "Persistence"],
            "viewCount": "850"
        },
        {
            "key": "6ba7b81a-9dad-11d1-80b4-00c04fd430c8",
            "title": "Redux 미들웨어 만들기",
            "author": "신미들웨어",
            "date": "2024-09-23",
            "contents": "커스텀 Redux 미들웨어를 작성하는 방법과 사용 사례를 설명합니다.",
            "tags": ["Redux", "Middleware", "Custom Development"],
            "viewCount": "600"
        },
        {
            "key": "6ba7b81b-9dad-11d1-80b4-00c04fd430c8",
            "title": "Redux와 폼 상태 관리",
            "author": "권폼",
            "date": "2024-09-25",
            "contents": "Redux를 사용하여 복잡한 폼의 상태를 효과적으로 관리하는 방법을 소개합니다.",
            "tags": ["Redux", "Form Management", "User Input"],
            "viewCount": "920"
        },
        {
            "key": "6ba7b81c-9dad-11d1-80b4-00c04fd430c8",
            "title": "Redux와 서버 상태 동기화",
            "author": "서동기",
            "date": "2024-09-27",
            "contents": "Redux 상태를 서버와 효과적으로 동기화하는 전략에 대해 알아봅니다.",
            "tags": ["Redux", "Server Sync", "Real-time"],
            "viewCount": "780"
        },
        {
            "key": "6ba7b81d-9dad-11d1-80b4-00c04fd430c8",
            "title": "Redux와 라우팅",
            "author": "남라우터",
            "date": "2024-09-29",
            "contents": "Redux와 라우팅 라이브러리를 통합하여 상태 기반 네비게이션을 구현합니다.",
            "tags": ["Redux", "Routing", "Navigation"],
            "viewCount": "700"
        },
        {
            "key": "6ba7b81e-9dad-11d1-80b4-00c04fd430c8",
            "title": "Redux 보안 고려사항",
            "author": "차보안",
            "date": "2024-10-01",
            "contents": "Redux 애플리케이션에서 고려해야 할 보안 사항과 모범 사례를 다룹니다.",
            "tags": ["Redux", "Security", "Best Practices"],
            "viewCount": "850"
        },
        {
            "key": "6ba7b81f-9dad-11d1-80b4-00c04fd430c8",
            "title": "Redux와 웹소켓",
            "author": "송웹소켓",
            "date": "2024-10-03",
            "contents": "Redux를 사용하여 웹소켓 연결을 관리하고 실시간 데이터를 처리하는 방법을 설명합니다.",
            "tags": ["Redux", "WebSocket", "Real-time Data"],
            "viewCount": "920"
        },
        {
            "key": "6ba7b820-9dad-11d1-80b4-00c04fd430c8",
            "title": "Redux와 코드 스플리팅",
            "author": "고스플리팅",
            "date": "2024-10-05",
            "contents": "대규모 Redux 애플리케이션에서 코드 스플리팅을 구현하는 방법을 다룹니다.",
            "tags": ["Redux", "Code Splitting", "Performance"],
            "viewCount": "680"
        },
        {
            "key": "6ba7b821-9dad-11d1-80b4-00c04fd430c8",
            "title": "Redux 상태 정규화",
            "author": "노정규화",
            "date": "2024-10-07",
            "contents": "복잡한 데이터 구조를 Redux 상태에서 효과적으로 정규화하는 방법을 설명합니다.",
            "tags": ["Redux", "Normalization", "Data Structure"],
            "viewCount": "750"
        },
        {
            "key": "6ba7b822-9dad-11d1-80b4-00c04fd430c8",
            "title": "Redux와 에러 처리",
            "author": "배에러",
            "date": "2024-10-09",
            "contents": "Redux 애플리케이션에서 에러를 효과적으로 처리하고 관리하는 전략을 소개합니다.",
            "tags": ["Redux", "Error Handling", "Robustness"],
            "viewCount": "820"
        },
        {
            "key": "6ba7b823-9dad-11d1-80b4-00c04fd430c8",
            "title": "Redux와 국제화",
            "author": "장국제화",
            "date": "2024-10-11",
            "contents": "Redux를 사용하여 다국어 지원과 지역화를 구현하는 방법을 알아봅니다.",
            "tags": ["Redux", "Internationalization", "Localization"],
            "viewCount": "700"
        },
        {
            "key": "6ba7b824-9dad-11d1-80b4-00c04fd430c8",
            "title": "Redux와 접근성",
            "author": "황접근성",
            "date": "2024-10-13",
            "contents": "Redux 기반 애플리케이션에서 웹 접근성을 개선하는 방법과 도구를 소개합니다.",
            "tags": ["Redux", "Accessibility", "Inclusive Design"],
            "viewCount": "600"
        },
        {
            "key": "6ba7b825-9dad-11d1-80b4-00c04fd430c8",
            "title": "Redux와 서버 사이드 렌더링",
            "author": "유SSR",
            "date": "2024-10-15",
            "contents": "Redux를 사용하는 애플리케이션에서 서버 사이드 렌더링을 구현하는 방법을 설명합니다.",
            "tags": ["Redux", "Server-Side Rendering", "Performance"],
            "viewCount": "880"
        },
        {
            "key": "6ba7b826-9dad-11d1-80b4-00c04fd430c8",
            "title": "Redux와 마이크로프론트엔드",
            "author": "곽마이크로",
            "date": "2024-10-17",
            "contents": "마이크로프론트엔드 아키텍처에서 Redux를 효과적으로 사용하는 방법을 다룹니다.",
            "tags": ["Redux", "Microfrontends", "Architecture"],
            "viewCount": "720"
        },
        {
            "key": "6ba7b827-9dad-11d1-80b4-00c04fd430c8",
            "title": "Redux 테스팅 전략",
            "author": "민테스트",
            "date": "2024-10-19",
            "contents": "Redux 애플리케이션의 다양한 구성 요소를 효과적으로 테스트하는 방법을 소개합니다.",
            "tags": ["Redux", "Testing", "Quality Assurance"],
            "viewCount": "790"
        },
        {
            "key": "6ba7b828-9dad-11d1-80b4-00c04fd430c8",
            "title": "Redux와 성능 모니터링",
            "author": "백모니터",
            "date": "2024-10-21",
            "contents": "Redux 애플리케이션의 성능을 모니터링하고 분석하는 도구와 기술을 설명합니다.",
            "tags": ["Redux", "Performance Monitoring", "Optimization"],
            "viewCount": "680"
        },
        {
            "key": "6ba7b829-9dad-11d1-80b4-00c04fd430c8",
            "title": "Redux와 함수형 프로그래밍",
            "author": "함수킴",
            "date": "2024-10-23",
            "contents": "Redux에서 함수형 프로그래밍 원칙을 적용하는 방법과 이점을 알아봅니다.",
            "tags": ["Redux", "Functional Programming", "Best Practices"],
            "viewCount": "850"
        }
    ]
}`) as TableDataList;

const isNotValid = isTableData(data) && data.list.length > 0;
export const defaultData: TableData = {
    key: 'noData',
    title: 'noData',
    author: 'noData',
    date: 'noData',
    contents: 'noData',
    tags: [],
    viewCount: 'noData'
};

export const emptyData: TableData = {
    key: '',
    title: '',
    author: '',
    date: '',
    contents: '',
    tags: [],
    viewCount: ''
};

if (isNotValid) {
    data.list = [defaultData];
}