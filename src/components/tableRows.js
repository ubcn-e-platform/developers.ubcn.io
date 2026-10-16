// API 문서의 <Table> 컴포넌트에 전달할 headers / bodys 생성 헬퍼.
// Table 셀은 set:html 로 렌더링되므로 `값` 표기를 <code>값</code> 으로 변환한다.

export const md = (text) => String(text).replace(/`([^`]+)`/g, "<code>$1</code>");

// Response Schema: 필드명 / 상세필드명 / 필수 / 타입 / 설명 / 비고
export const headers = [{"title": "필드명"}, {"subTitle": "상세필드명"}, {"notNull": "필수"},
    {"argsType": "타입"}, {"desc": "설명"}, {"etc": "비고"}];

export const row = (title, subTitle, notNull, argsType, desc, etc) => [
    {"title": title}, {"subTitle": subTitle}, {"notNull": notNull},
    {"argsType": argsType}, {"desc": md(desc)}, {"etc": md(etc)},
];

// Request Schema: 필드명 / 필수 / 타입 / 설명 / 비고
export const reqHeaders = [{"title": "필드명"}, {"notNull": "필수"}, {"argsType": "타입"},
    {"desc": "설명"}, {"etc": "비고"}];

export const reqRow = (title, notNull, argsType, desc, etc) => [
    {"title": title}, {"notNull": notNull}, {"argsType": argsType}, {"desc": md(desc)}, {"etc": md(etc)},
];

// 임의 컬럼 표. 첫 번째 셀은 Table 의 rowspan 기준(title)으로 사용된다.
export const cells = (...values) => values.map((value, i) => ({[i === 0 ? "title" : `c${i}`]: md(value)}));
