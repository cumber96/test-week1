const destinations = [
    {
        name: "경복궁 & 북촌한옥마을",
        region: "서울",
        bestMonths: [3, 4, 5, 10, 11],
        emoji: "🏯",
        description: "조선 왕조의 정궁과 전통 한옥 골목. 봄 벚꽃·가을 단풍과 어우러진 서울의 대표 역사 명소.",
        seasonal_food: ["냉이 된장국 (봄)", "두릅 나물 (봄)", "쑥 떡 (봄)", "국화전 (가을)"],
        festivals: ["경복궁 봄 야간개장 (4-5월)", "서울 봄 페스타 (4월)", "경복궁 가을 야간개장 (10-11월)"],
        accommodations: ["조선 팰리스 서울", "라한 셀렉트 인사동", "북촌 한옥 게스트하우스"],
        cafes: ["삼청동 카페거리", "블루보틀 삼청점", "북촌 전통 찻집"],
        gradient: "linear-gradient(135deg, #667eea, #764ba2)"
    },
    {
        name: "한강공원 & 여의도 벚꽃",
        region: "서울",
        bestMonths: [4, 5, 9, 10],
        emoji: "🌸",
        description: "여의도 벚꽃길과 반포 달빛무지개분수. 서울 시민의 봄·가을 대표 피크닉 명소.",
        seasonal_food: ["봄나물 도시락 (봄)", "파전 & 막걸리", "한강 라볶이", "계절 과일 모듬 (가을)"],
        festivals: ["여의도 봄꽃 축제 (4월)", "서울 세계불꽃 축제 (10월)", "한강 달빛 야시장 (9-10월)"],
        accommodations: ["파크 하얏트 서울", "The Shilla Seoul", "여의도 한강뷰 호텔"],
        cafes: ["카페 어니언 한남", "앤트러사이트 한강점", "망원 한강뷰 카페들"],
        gradient: "linear-gradient(135deg, #f77062, #fe5196)"
    },
    {
        name: "남산타워 & 명동",
        region: "서울",
        bestMonths: [12, 1, 2],
        emoji: "🗼",
        description: "서울 야경의 상징 남산타워와 크리스마스 분위기가 절정인 명동. 겨울 낭만 여행의 중심.",
        seasonal_food: ["명동 칼국수", "군밤 & 군고구마", "어묵 꼬치", "겨울 굴국밥"],
        festivals: ["서울 빛초롱 축제 (11-1월)", "명동 크리스마스 마켓 (12월)", "광화문 새해맞이 (1월)"],
        accommodations: ["포시즌스 서울 (광화문)", "롯데호텔 명동", "신라호텔 서울"],
        cafes: ["스타벅스 리저브 명동", "남산 루프탑 바", "명동 디저트 카페거리"],
        gradient: "linear-gradient(135deg, #141E30, #243B55)"
    },
    {
        name: "해운대 & 광안리",
        region: "부산",
        bestMonths: [7, 8],
        emoji: "🏖️",
        description: "한국 최대 해수욕장과 화려한 광안대교 야경. 여름 피서의 성지이자 부산의 대표 관광지.",
        seasonal_food: ["민어회 (여름 제철)", "삼계탕", "수박 빙수", "해운대 암소 갈비"],
        festivals: ["부산 바다 축제 (8월)", "부산 국제록 페스티벌 (8월)", "광안리 불꽃쇼 (10월)"],
        accommodations: ["파라다이스 호텔 부산", "웨스틴 조선 부산", "해운대 그랜드 호텔"],
        cafes: ["모모스 커피 해운대점", "블루에디션 카페", "오션뷰 루프탑 카페들"],
        gradient: "linear-gradient(135deg, #00c6ff, #0072ff)"
    },
    {
        name: "감천문화마을",
        region: "부산",
        bestMonths: [3, 4, 5, 10, 11],
        emoji: "🎨",
        description: "알록달록 벽화와 좁은 골목이 매력인 '한국의 마추픽추'. 부산 서구의 예술 마을.",
        seasonal_food: ["돼지국밥 (부산 명물)", "씨앗호떡", "밀면 (부산식 냉면)", "어묵 꼬치"],
        festivals: ["감천문화마을 공공미술 축제 (5월)", "부산 국제영화제 BIFF (10월)", "부산 불꽃 축제 (10월)"],
        accommodations: ["남포동 게스트하우스", "부산역 근처 호텔들", "서구 부티크 숙소"],
        cafes: ["감천마을 뷰 카페들", "보수동 책방골목 카페", "남포동 카페거리"],
        gradient: "linear-gradient(135deg, #f093fb, #f5576c)"
    },
    {
        name: "성산일출봉 & 우도",
        region: "제주도",
        bestMonths: [1, 2, 3, 11, 12],
        emoji: "🌋",
        description: "유네스코 세계자연유산 성산일출봉과 배로 10분 거리 우도. 제주 겨울·봄 일출의 성지.",
        seasonal_food: ["한라봉 & 천혜향 (1-3월)", "전복죽", "옥돔 구이", "제주 빙떡"],
        festivals: ["성산일출제 (1월 1일)", "제주 유채꽃 축제 (3-4월)", "우도 유채꽃 피크닉 (3월)"],
        accommodations: ["성산 오션뷰 펜션", "제주 스테이 인 성산", "우도 민박"],
        cafes: ["우도 땅콩 아이스크림 카페", "성산 오션뷰 카페 스퀴즈", "섭지코지 카페 아마시"],
        gradient: "linear-gradient(135deg, #f7971e, #ffd200)"
    },
    {
        name: "협재 & 에메랄드 해변",
        region: "제주도",
        bestMonths: [6, 7, 8, 9],
        emoji: "🏝️",
        description: "제주 서쪽의 에메랄드빛 해변. 비양도를 조망하며 즐기는 스노클링과 여름 피서 명소.",
        seasonal_food: ["성게 미역국 (여름 제철)", "갈치 조림", "흑돼지 구이", "제주 수박"],
        festivals: ["제주 여름 버스킹 시즌 (7-8월)", "한림 수산물 축제 (8월)", "제주 드림팝 페스티벌"],
        accommodations: ["협재 비치 리조트", "한림읍 펜션 단지", "제주 풀빌라 (서제주)"],
        cafes: ["카페 그린티로드", "협재 오션뷰 카페 세화", "스타브레인 서제주점"],
        gradient: "linear-gradient(135deg, #4facfe, #00f2fe)"
    },
    {
        name: "한라산 단풍 & 설경",
        region: "제주도",
        bestMonths: [10, 11, 1, 2],
        emoji: "🏔️",
        description: "해발 1,947m 한국 최고봉. 10-11월 단풍과 1-2월 설경이 절경을 이루는 제주의 심장.",
        seasonal_food: ["한라봉 막걸리", "고사리 육개장 (가을)", "제주 오메기떡", "제주 흑돼지 수육"],
        festivals: ["한라산 눈꽃 등반 시즌 (1-2월)", "제주 단풍 트레킹 시즌 (10-11월)", "제주 들불 축제 (3월)"],
        accommodations: ["제주시 한옥 스테이", "서귀포 오션뷰 호텔", "한라산 청소년 수련원"],
        cafes: ["1100고지 휴게소 카페", "서귀포 감귤 카페", "돈내코 계곡 카페"],
        gradient: "linear-gradient(135deg, #43e97b, #38f9d7)"
    },
    {
        name: "설악산 단풍 트레킹",
        region: "강원도",
        bestMonths: [10, 11],
        emoji: "🍂",
        description: "한국 최고의 단풍 명소. 울산바위·비룡폭포의 수려한 경관과 케이블카 전망이 압도적.",
        seasonal_food: ["황태 해장국 (속초 명물)", "닭강정 (속초 중앙시장)", "오징어 순대", "감자전"],
        festivals: ["설악 문화제 (10월)", "속초 대포항 오징어 축제 (10월)", "인제 단풍 트레킹 대회 (10월)"],
        accommodations: ["한화리조트 설악산", "켄싱턴 리조트 설악", "속초 해파랑 게스트하우스"],
        cafes: ["속초 커피공장 (속초 명물)", "아바이마을 카페거리", "대포항 오션뷰 카페"],
        gradient: "linear-gradient(135deg, #c94b4b, #4b134f)"
    },
    {
        name: "강릉 경포대 & 커피거리",
        region: "강원도",
        bestMonths: [7, 8],
        emoji: "☕",
        description: "동해안 최대 해수욕장과 전국 최고의 카페거리 안목해변. 여름 피서와 커피 낭만의 조합.",
        seasonal_food: ["초당 순두부 (강릉 명물)", "오징어회 & 물회", "강릉식 짬뽕", "메밀 막국수"],
        festivals: ["강릉 단오제 (5-6월, 유네스코)", "강릉 커피 축제 (10월)", "강릉 국제영화제 (10월)"],
        accommodations: ["세인트존스 호텔 강릉", "라카이 샌드파인 리조트", "경포 해수욕장 펜션"],
        cafes: ["테라로사 강릉 본점 (필수)", "보헤미안 커피", "안목해변 카페거리 전체"],
        gradient: "linear-gradient(135deg, #56ccf2, #2f80ed)"
    },
    {
        name: "평창 스키 & 눈꽃 축제",
        region: "강원도",
        bestMonths: [12, 1, 2],
        emoji: "⛷️",
        description: "2018 동계올림픽 개최지. 용평·알펜시아 스키장과 대관령 눈꽃·송어 축제로 겨울 여행의 메카.",
        seasonal_food: ["황태찜 (대관령 명물)", "메밀 전병", "더덕 구이", "평창 한우 구이"],
        festivals: ["대관령 눈꽃 축제 (1-2월)", "평창 송어 축제 (1-2월)", "보름달 소원 빌기 (정월대보름)"],
        accommodations: ["알펜시아 리조트", "용평 리조트", "대관령 양떼목장 근처 펜션"],
        cafes: ["알펜시아 카페 테라스", "용평 리조트 스키 바", "대관령 목장 카페"],
        gradient: "linear-gradient(135deg, #a8edea, #8ec5fc)"
    },
    {
        name: "불국사 & 석굴암",
        region: "경주",
        bestMonths: [3, 4, 5, 10, 11],
        emoji: "🛕",
        description: "유네스코 세계문화유산. 신라 천년의 불교 유적과 봄 벚꽃·가을 단풍이 어우러진 절경.",
        seasonal_food: ["경주빵 & 황남빵 (경주 명물)", "쌈밥 정식", "한우 불고기", "경주 교동 법주"],
        festivals: ["경주 벚꽃 축제 (4월)", "신라 문화제 (10월)", "경주 보문 호수 빛 축제 (11-12월)"],
        accommodations: ["힐튼 경주", "경주 코모도 호텔", "불국사 근처 한옥 스테이"],
        cafes: ["황리단길 카페거리", "카페 첨성대", "교촌마을 전통 찻집"],
        gradient: "linear-gradient(135deg, #b06ab3, #4568dc)"
    },
    {
        name: "동궁과 월지 & 황리단길",
        region: "경주",
        bestMonths: [4, 5, 10, 11],
        emoji: "🌙",
        description: "신라 별궁 연못의 환상적인 야경과 경주의 힙한 거리 황리단길. 낮과 밤 모두 즐거운 코스.",
        seasonal_food: ["찰보리빵 (황리단길 명물)", "꽃빵 & 경주 전통과자", "한우 육회", "경주 쌀엿"],
        festivals: ["경주 야간개장 달빛기행 (상시)", "경주 세계문화엑스포 (10월)", "경주 빛의 거리 (10-12월)"],
        accommodations: ["라한 셀렉트 경주", "경주 티모텔", "황리단길 감성 게스트하우스"],
        cafes: ["황리단길 감성 카페 다수", "카페 스페이스 경주", "안압지 뷰 카페"],
        gradient: "linear-gradient(135deg, #1a1a2e, #457fca)"
    },
    {
        name: "전주한옥마을",
        region: "전라도",
        bestMonths: [3, 4, 5, 9, 10, 11],
        emoji: "🏘️",
        description: "700여 채의 전통 한옥이 밀집한 한국 최대 한옥 마을. 한복 체험과 전통 음식의 천국.",
        seasonal_food: ["전주비빔밥 (필수)", "콩나물 국밥", "피순대 볶음", "전주 막걸리 & 모주"],
        festivals: ["전주 국제영화제 (4-5월)", "전주 비빔밥 축제 (10월)", "전주 한지 문화제 (5월)"],
        accommodations: ["학인당 한옥 스테이", "전주 호텔 리베라", "한옥마을 내 게스트하우스"],
        cafes: ["전동성당 앞 카페거리", "동문거리 카페들", "학인당 다실 (전통)"],
        gradient: "linear-gradient(135deg, #f2994a, #f2c94c)"
    },
    {
        name: "여수 밤바다",
        region: "전라도",
        bestMonths: [7, 8, 9, 10],
        emoji: "🌊",
        description: "이순신 광장에서 바라보는 여수의 밤바다와 낭만 포차. 케이블카에서 내려다보는 야경이 환상적.",
        seasonal_food: ["여수 돌게장 (여름 제철)", "서대회 & 삼치회", "갓김치 & 게살 국수", "여수 낙지 연포탕"],
        festivals: ["여수 거북선 축제 (5월)", "여수 밤바다 낭만 페스티벌 (8월)", "진남 문화제 (5월)"],
        accommodations: ["디오션 리조트 여수", "여수 엠블 호텔", "돌산도 오션뷰 펜션"],
        cafes: ["이순신 광장 뷰 카페들", "여수 낭만버스 카페", "오동도 입구 카페"],
        gradient: "linear-gradient(135deg, #0f3460, #533483)"
    },
    {
        name: "순천만 국가정원 & 갈대밭",
        region: "전라도",
        bestMonths: [10, 11],
        emoji: "🌾",
        description: "드넓은 갈대밭이 황금빛으로 물드는 생태 보고. 용산 전망대에서 바라보는 철새 군무가 압도적.",
        seasonal_food: ["꼬막 요리 (10-12월 제철)", "짱뚱어탕", "순천 낙지볶음", "순천 된장 삼겹살"],
        festivals: ["순천만 갈대 축제 (10-11월)", "순천 정원 박람회 (상시)", "전남 생태 관광 축제 (10월)"],
        accommodations: ["순천만 근처 생태 펜션", "순천 마로니에 호텔", "낙안읍성 민박"],
        cafes: ["순천만 뷰 카페 '갈대'", "원도심 카페거리 (순천역 근처)", "낙안읍성 전통 찻집"],
        gradient: "linear-gradient(135deg, #96b966, #5a8a2a)"
    },
    {
        name: "담양 죽녹원 & 메타세쿼이아길",
        region: "전라도",
        bestMonths: [5, 6, 10, 11],
        emoji: "🎋",
        description: "대나무 숲 죽녹원과 하늘로 뻗은 메타세쿼이아 가로수길. 사계절 다른 매력을 지닌 자연 명소.",
        seasonal_food: ["떡갈비 (담양 명물)", "죽순 요리 (봄·여름 제철)", "대통밥", "담양 한과 & 다과"],
        festivals: ["담양 대나무 축제 (5월)", "메타세쿼이아 단풍 시즌 (11월)", "담양 슬로시티 마켓 (상시)"],
        accommodations: ["죽녹원 인근 펜션", "담양 리조트 스파", "가마골 생태 캠핑"],
        cafes: ["메타세쿼이아길 카페거리", "죽녹원 내 대나무 카페", "관방제림 뷰 카페"],
        gradient: "linear-gradient(135deg, #1a6336, #2d8f52)"
    },
    {
        name: "남이섬 & 가평",
        region: "경기도",
        bestMonths: [9, 10, 11, 12],
        emoji: "🍁",
        description: "드라마 '겨울연가' 촬영지. 단풍과 설경이 아름다운 낭만 섬과 가평 카페거리의 조합.",
        seasonal_food: ["가평 잣 요리", "옥수수 & 감자 (가을)", "강원 막국수", "겨울 군밤"],
        festivals: ["남이섬 단풍 축제 (10-11월)", "남이섬 겨울 페스티벌 (12-1월)", "가평 자라섬 재즈 페스티벌 (10월)"],
        accommodations: ["남이섬 글램핑", "가평 통나무 펜션", "자라섬 캠핑장"],
        cafes: ["가평 자라섬 카페거리", "북한강 뷰 카페들", "남이섬 내 커피숍"],
        gradient: "linear-gradient(135deg, #e96c1c, #c85000)"
    },
    {
        name: "수원화성",
        region: "경기도",
        bestMonths: [3, 4, 5, 10, 11],
        emoji: "🏰",
        description: "정조대왕이 축성한 유네스코 세계문화유산. 성곽 트레킹과 야간 조명 투어, 행리단길 카페가 인기.",
        seasonal_food: ["수원 왕갈비 (수원 명물)", "수원 갈비탕", "팔달문 통닭골목 치킨", "순대 국밥"],
        festivals: ["수원화성 문화제 (10월)", "정조대왕 능행차 (10월)", "수원 야간 성곽 투어 (상시)"],
        accommodations: ["노보텔 앰배서더 수원", "라마다 수원", "행리단길 부티크 호텔"],
        cafes: ["행리단길 카페거리", "팔달문 근처 독립 카페들", "화성행궁 앞 전통 찻집"],
        gradient: "linear-gradient(135deg, #614385, #516395)"
    },
    {
        name: "통영 & 한려수도",
        region: "경상도",
        bestMonths: [4, 5, 10, 11],
        emoji: "⛵",
        description: "'동양의 나폴리'로 불리는 통영. 케이블카에서 내려다보는 한려수도 다도해 절경이 압도적.",
        seasonal_food: ["통영 굴 요리 (11-3월 제철)", "충무 김밥 (명물)", "멍게비빔밥", "통영 꿀빵"],
        festivals: ["통영 국제음악제 (3-4월)", "한산대첩 축제 (8월)", "통영 비엔날레 (격년)"],
        accommodations: ["통영 마리나 리조트", "뉴파크 호텔 통영", "강구안 근처 펜션"],
        cafes: ["강구안 루프탑 카페들", "동피랑 벽화마을 카페", "통영 스카이라인 루지 카페"],
        gradient: "linear-gradient(135deg, #009fff, #ec2f4b)"
    },
    {
        name: "남해 독일마을 & 바래길",
        region: "경상도",
        bestMonths: [4, 5, 10, 11],
        emoji: "🌻",
        description: "유럽풍 건축이 남해 바다와 어우러진 이색 마을. 봄 유채꽃과 가을 억새 트레킹이 절경.",
        seasonal_food: ["유자 요리 (남해 특산)", "멸치 쌈밥", "남해 마늘 한우", "미조항 방어회 (겨울)"],
        festivals: ["남해 마늘 축제 (6월)", "남해 독일마을 맥주 축제 (10월)", "남해 유채꽃 페스티벌 (4월)"],
        accommodations: ["독일마을 게스트하우스", "가천 다랭이마을 펜션", "물건방조어부림 숙소"],
        cafes: ["독일마을 뷰 카페 '더 베르크'", "남해 바래길 카페", "상주해수욕장 카페들"],
        gradient: "linear-gradient(135deg, #f8b500, #e07b00)"
    },
    {
        name: "태안 해안 & 꽃지 낙조",
        region: "충청도",
        bestMonths: [6, 7, 8],
        emoji: "🌅",
        description: "한국 최고의 낙조 명소 꽃지 해수욕장과 서해안 아름다운 해안선. 봄 꽃 박람회도 유명.",
        seasonal_food: ["서해 꽃게찜 (봄·가을 제철)", "바지락 칼국수 (태안 명물)", "새조개 샤부샤부", "우럭 매운탕"],
        festivals: ["태안 꽃 박람회 (4-5월)", "안면도 국제꽃박람회 (격년)", "태안 서머 해수욕장 페스티벌 (8월)"],
        accommodations: ["안면도 자연휴양림", "꽃지 해수욕장 리조트", "태안 캐러반 파크"],
        cafes: ["안면도 카페거리", "꽃지 오션뷰 카페들", "천리포 해변 카페"],
        gradient: "linear-gradient(135deg, #f7971e, #e04b00)"
    },
    {
        name: "인천 차이나타운 & 개항장",
        region: "인천",
        bestMonths: [4, 5, 9, 10],
        emoji: "🏮",
        description: "근대 개항의 역사와 이국적 문화가 공존하는 인천. 짜장면 발상지부터 송도 신도시까지 다양한 매력.",
        seasonal_food: ["짜장면 (인천 차이나타운 원조)", "인천 꽃게찜", "강화 순무 김치", "월미도 조개구이"],
        festivals: ["인천 차이나타운 춘절 (1-2월)", "인천 펜타포트 락 페스티벌 (8월)", "개항장 문화 축제 (10월)"],
        accommodations: ["파라다이스 시티 인천", "인천 하버파크 호텔", "송도 센트럴파크 호텔들"],
        cafes: ["개항로 카페거리", "배다리 헌책방 골목 카페", "송도 센트럴파크 카페들"],
        gradient: "linear-gradient(135deg, #c0392b, #8e0000)"
    }
];

const monthNames = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
const regions = ["전체", ...new Set(destinations.map(d => d.region))];

let selectedMonth = new Date().getMonth() + 1;
let selectedRegion = "전체";

function renderMonthTabs() {
    const container = document.getElementById("month-tabs");
    container.innerHTML = monthNames.map((name, i) => {
        const m = i + 1;
        return `<button class="month-tab ${m === selectedMonth ? "active" : ""}" data-month="${m}">${name}</button>`;
    }).join("");

    container.querySelectorAll(".month-tab").forEach(btn => {
        btn.addEventListener("click", () => {
            selectedMonth = parseInt(btn.dataset.month);
            renderMonthTabs();
            renderCards();
        });
    });
}

function renderRegionButtons() {
    const container = document.getElementById("region-buttons");
    container.innerHTML = regions.map(r =>
        `<button class="region-btn ${r === selectedRegion ? "active" : ""}" data-region="${r}">${r}</button>`
    ).join("");

    container.querySelectorAll(".region-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            selectedRegion = btn.dataset.region;
            renderRegionButtons();
            renderCards();
        });
    });
}

function renderCards() {
    const filtered = destinations.filter(d => {
        const monthOk = d.bestMonths.includes(selectedMonth);
        const regionOk = selectedRegion === "전체" || d.region === selectedRegion;
        return monthOk && regionOk;
    });

    const grid = document.getElementById("cards-grid");
    const empty = document.getElementById("empty-state");
    const summary = document.getElementById("results-summary");
    const regionLabel = selectedRegion !== "전체" ? `<span>${selectedRegion}</span> ` : "";

    summary.innerHTML = `<span>${monthNames[selectedMonth - 1]}</span> ${regionLabel}추천 여행지 <span>${filtered.length}곳</span>`;

    if (filtered.length === 0) {
        grid.style.display = "none";
        empty.style.display = "flex";
        return;
    }

    grid.style.display = "grid";
    empty.style.display = "none";

    grid.innerHTML = filtered.map(d => `
        <div class="card">
            <div class="card-hero" style="background: ${d.gradient}">
                <span class="card-emoji">${d.emoji}</span>
            </div>
            <div class="card-body">
                <div class="card-top">
                    <h3 class="card-name">${d.name}</h3>
                    <span class="region-badge">${d.region}</span>
                </div>
                <p class="card-desc">${d.description}</p>
                <div class="info-grid">
                    <div class="info-section">
                        <div class="info-label"><span class="info-icon">🍽️</span> 제철음식</div>
                        <ul class="info-list">${d.seasonal_food.map(f => `<li>${f}</li>`).join("")}</ul>
                    </div>
                    <div class="info-section">
                        <div class="info-label"><span class="info-icon">🎉</span> 축제</div>
                        <ul class="info-list">${d.festivals.map(f => `<li>${f}</li>`).join("")}</ul>
                    </div>
                    <div class="info-section">
                        <div class="info-label"><span class="info-icon">🏨</span> 숙소</div>
                        <ul class="info-list">${d.accommodations.map(a => `<li>${a}</li>`).join("")}</ul>
                    </div>
                    <div class="info-section">
                        <div class="info-label"><span class="info-icon">☕</span> 카페</div>
                        <ul class="info-list">${d.cafes.map(c => `<li>${c}</li>`).join("")}</ul>
                    </div>
                </div>
            </div>
        </div>
    `).join("");
}

// 테마 복원
const savedTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", savedTheme);
document.getElementById("theme-toggle").textContent = savedTheme === "dark" ? "☀️" : "🌙";

document.getElementById("theme-toggle").addEventListener("click", () => {
    const html = document.documentElement;
    const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    document.getElementById("theme-toggle").textContent = next === "dark" ? "☀️" : "🌙";
    localStorage.setItem("theme", next);
});

renderMonthTabs();
renderRegionButtons();
renderCards();
