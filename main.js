const destinations = [
    {
        name: "경복궁 & 북촌한옥마을",
        region: "서울",
        bestMonths: [3, 4, 5, 10, 11],
        emoji: "🏯",
        description: "조선 왕조의 정궁과 전통 한옥 골목이 어우러진 서울의 대표 명소. 봄 벚꽃과 가을 단풍 시즌에 특히 아름답습니다.",
        highlights: ["경복궁 야간개장", "북촌 한옥 골목 산책", "인사동 전통거리", "국립민속박물관"],
        tags: ["역사", "문화", "사진", "걷기"],
        gradient: "linear-gradient(135deg, #667eea, #764ba2)"
    },
    {
        name: "한강공원 & 여의도 벚꽃",
        region: "서울",
        bestMonths: [4, 5, 9, 10],
        emoji: "🌸",
        description: "여의도 벚꽃길, 반포 달빛무지개분수 등 계절마다 다른 매력을 지닌 서울의 대표 쉼터.",
        highlights: ["여의도 벚꽃길", "반포 달빛무지개분수", "한강 자전거 라이딩", "한강 편의점 피크닉"],
        tags: ["자연", "피크닉", "야경", "자전거"],
        gradient: "linear-gradient(135deg, #f77062, #fe5196)"
    },
    {
        name: "남산타워 & 명동",
        region: "서울",
        bestMonths: [12, 1, 2],
        emoji: "🗼",
        description: "겨울 야경과 크리스마스 분위기가 절정인 서울의 랜드마크. 케이블카에서 바라보는 야경이 압도적.",
        highlights: ["남산 케이블카 야경", "명동 겨울 거리", "N서울타워 자물쇠", "명동 먹거리 탐방"],
        tags: ["야경", "겨울", "쇼핑", "낭만"],
        gradient: "linear-gradient(135deg, #0f2027, #203a43)"
    },
    {
        name: "해운대 & 광안리",
        region: "부산",
        bestMonths: [7, 8],
        emoji: "🏖️",
        description: "한국 최대 해수욕장과 화려한 광안대교 야경. 여름 피서의 성지이자 부산 대표 관광지.",
        highlights: ["해운대 해수욕장", "광안대교 야경", "해운대 시장 먹거리", "동백섬 산책"],
        tags: ["해변", "여름", "야경", "피서"],
        gradient: "linear-gradient(135deg, #00c6ff, #0072ff)"
    },
    {
        name: "감천문화마을",
        region: "부산",
        bestMonths: [3, 4, 5, 10, 11],
        emoji: "🎨",
        description: "알록달록 색채의 집들이 산비탈을 따라 펼쳐지는 부산의 예술 마을. '한국의 마추픽추'로 불립니다.",
        highlights: ["벽화 골목 탐방", "전망 포인트", "어린왕자 포토존", "마을 카페 구경"],
        tags: ["예술", "사진", "문화", "골목"],
        gradient: "linear-gradient(135deg, #f093fb, #f5576c)"
    },
    {
        name: "성산일출봉",
        region: "제주도",
        bestMonths: [1, 2, 3, 11, 12],
        emoji: "🌋",
        description: "유네스코 세계자연유산. 일출 명소로 유명하며 성산 앞바다와 어우러진 절경이 압도적입니다.",
        highlights: ["일출 감상", "우도 당일치기", "성산 해녀 체험", "섭지코지 드라이브"],
        tags: ["자연", "일출", "세계유산", "트레킹"],
        gradient: "linear-gradient(135deg, #f7971e, #ffd200)"
    },
    {
        name: "협재 & 한림 해변",
        region: "제주도",
        bestMonths: [6, 7, 8, 9],
        emoji: "🏝️",
        description: "에메랄드빛 바다와 하얀 모래사장. 제주 서쪽의 아름다운 해변으로 스노클링 명소입니다.",
        highlights: ["협재 해수욕장", "비양도 전망", "한림공원 구경", "스노클링"],
        tags: ["해변", "여름", "스노클링", "사진"],
        gradient: "linear-gradient(135deg, #4facfe, #00f2fe)"
    },
    {
        name: "한라산",
        region: "제주도",
        bestMonths: [10, 11, 1, 2],
        emoji: "🏔️",
        description: "해발 1,947m 한국 최고봉. 단풍 시즌의 황홀한 풍경과 설경이 절경을 이루는 제주의 심장.",
        highlights: ["백록담 등반", "영실 단풍 코스", "어리목 코스", "겨울 설경 감상"],
        tags: ["등산", "자연", "단풍", "설경"],
        gradient: "linear-gradient(135deg, #43e97b, #38f9d7)"
    },
    {
        name: "설악산 국립공원",
        region: "강원도",
        bestMonths: [10, 11],
        emoji: "🍂",
        description: "한국에서 가장 아름다운 단풍 명소. 울산바위, 비룡폭포 등 수려한 자연경관이 펼쳐집니다.",
        highlights: ["울산바위 등반", "비룡폭포 트레킹", "설악산 케이블카", "백담사 방문"],
        tags: ["단풍", "등산", "자연", "가을"],
        gradient: "linear-gradient(135deg, #f7971e, #e06c00)"
    },
    {
        name: "강릉 경포대 & 안목해변",
        region: "강원도",
        bestMonths: [7, 8],
        emoji: "☕",
        description: "동해안 최대 해수욕장과 전국 최고의 카페 거리. 여름엔 피서, 사계절 내내 커피 한 잔의 낭만.",
        highlights: ["경포 해수욕장", "안목해변 카페거리", "오죽헌 관람", "강릉 중앙시장"],
        tags: ["해변", "카페", "역사", "커피"],
        gradient: "linear-gradient(135deg, #56ccf2, #2f80ed)"
    },
    {
        name: "평창 스키 & 눈꽃 축제",
        region: "강원도",
        bestMonths: [12, 1, 2],
        emoji: "⛷️",
        description: "2018 동계올림픽 개최지. 용평·알펜시아 스키장과 대관령 눈꽃 축제로 겨울 여행의 메카.",
        highlights: ["용평 스키장", "알펜시아 리조트", "대관령 눈꽃 축제", "대관령 양떼목장"],
        tags: ["스키", "겨울", "눈", "축제"],
        gradient: "linear-gradient(135deg, #e0eafc, #cfdef3)"
    },
    {
        name: "불국사 & 석굴암",
        region: "경주",
        bestMonths: [3, 4, 5, 10, 11],
        emoji: "🛕",
        description: "유네스코 세계문화유산인 신라 천년의 불교 유적. 봄 벚꽃과 가을 단풍이 어우러진 절경.",
        highlights: ["불국사 벚꽃길", "석굴암 일출", "토함산 트레킹", "경주 빵 맛집"],
        tags: ["역사", "세계유산", "사찰", "문화"],
        gradient: "linear-gradient(135deg, #b06ab3, #4568dc)"
    },
    {
        name: "동궁과 월지 (안압지)",
        region: "경주",
        bestMonths: [4, 5, 10, 11],
        emoji: "🌙",
        description: "신라 별궁 터의 연못. 야간 조명이 연못에 반사되어 환상적인 야경을 선사하는 경주 최고의 야경지.",
        highlights: ["야간 야경 감상", "첨성대 관람", "대릉원 고분", "황리단길 카페"],
        tags: ["야경", "역사", "사진", "카페"],
        gradient: "linear-gradient(135deg, #1a1a2e, #16213e)"
    },
    {
        name: "전주한옥마을",
        region: "전라도",
        bestMonths: [3, 4, 5, 9, 10, 11],
        emoji: "🏘️",
        description: "700여 채의 전통 한옥이 밀집한 한국 최대 한옥 마을. 한복 체험과 전통 음식의 천국.",
        highlights: ["한복 체험", "전주비빔밥 맛집", "막걸리 골목", "경기전 관람"],
        tags: ["한옥", "문화", "음식", "한복"],
        gradient: "linear-gradient(135deg, #f2994a, #f2c94c)"
    },
    {
        name: "여수 밤바다",
        region: "전라도",
        bestMonths: [7, 8, 9, 10],
        emoji: "🌊",
        description: "이순신 광장에서 바라보는 여수의 밤바다. 케이블카와 낭만 포차로 유명한 남해안의 보석.",
        highlights: ["돌산 케이블카", "이순신 광장", "낭만포차 거리", "오동도 산책"],
        tags: ["야경", "해산물", "케이블카", "낭만"],
        gradient: "linear-gradient(135deg, #0f3460, #16213e)"
    },
    {
        name: "순천만 국가정원",
        region: "전라도",
        bestMonths: [10, 11],
        emoji: "🌾",
        description: "드넓은 갈대밭과 습지가 펼쳐지는 생태 보고. 가을 갈대 물결과 철새 군무가 장관입니다.",
        highlights: ["갈대밭 산책", "용산전망대", "순천만 습지 탐조", "국가정원 꽃밭"],
        tags: ["자연", "생태", "가을", "사진"],
        gradient: "linear-gradient(135deg, #96b966, #6a9e3d)"
    },
    {
        name: "담양 죽녹원 & 메타세쿼이아길",
        region: "전라도",
        bestMonths: [5, 6, 10, 11],
        emoji: "🎋",
        description: "대나무 숲 사이를 걷는 죽녹원과 하늘을 찌르는 메타세쿼이아 가로수길. 사계절 다른 매력.",
        highlights: ["죽녹원 대나무 숲", "메타세쿼이아 가로수길", "관방제림 산책", "담양 떡갈비"],
        tags: ["자연", "사진", "걷기", "드라이브"],
        gradient: "linear-gradient(135deg, #1a6336, #2d8f52)"
    },
    {
        name: "남이섬",
        region: "경기도",
        bestMonths: [9, 10, 11, 12, 1],
        emoji: "🍁",
        description: "드라마 '겨울연가' 촬영지. 계절마다 다른 풍경이 펼쳐지는 낭만 섬. 단풍과 설경이 절경.",
        highlights: ["은행나무 가로수길", "메타세쿼이아길", "자전거 라이딩", "짚라인 체험"],
        tags: ["단풍", "낭만", "드라이브", "사진"],
        gradient: "linear-gradient(135deg, #e96c1c, #c85000)"
    },
    {
        name: "수원화성",
        region: "경기도",
        bestMonths: [3, 4, 5, 10, 11],
        emoji: "🏰",
        description: "조선 정조 시대 계획도시의 성곽. 유네스코 세계문화유산으로 야간 조명 투어도 인기.",
        highlights: ["성곽 트레킹", "화성행궁 관람", "행리단길 카페 거리", "야간 조명 투어"],
        tags: ["역사", "세계유산", "걷기", "야경"],
        gradient: "linear-gradient(135deg, #614385, #516395)"
    },
    {
        name: "통영 & 한려수도",
        region: "경상도",
        bestMonths: [4, 5, 10, 11],
        emoji: "⛵",
        description: "'동양의 나폴리'로 불리는 통영. 케이블카와 다도해 절경, 꿀빵으로 유명한 남해의 보석.",
        highlights: ["통영 케이블카", "스카이라인 루지", "통영 꿀빵", "연화도 트레킹"],
        tags: ["해안", "케이블카", "음식", "절경"],
        gradient: "linear-gradient(135deg, #009fff, #ec2f4b)"
    },
    {
        name: "남해 독일마을 & 바래길",
        region: "경상도",
        bestMonths: [4, 5, 10, 11],
        emoji: "🌻",
        description: "유럽풍 건축과 남해안의 아름다운 풍경이 어우러진 이색 관광지. 봄 유채꽃이 절경.",
        highlights: ["독일마을 구경", "바래길 트레킹", "원예예술촌", "남해 마늘 요리"],
        tags: ["이색", "드라이브", "자연", "봄꽃"],
        gradient: "linear-gradient(135deg, #f8b500, #e07b00)"
    },
    {
        name: "공주 & 부여 백제 유적",
        region: "충청도",
        bestMonths: [4, 5, 10, 11],
        emoji: "🏛️",
        description: "백제의 옛 도읍지. 공산성, 무령왕릉 등 유네스코 세계문화유산이 집결한 역사 여행지.",
        highlights: ["공산성 성곽 산책", "무령왕릉 관람", "부소산성", "정림사지 5층 석탑"],
        tags: ["역사", "세계유산", "문화", "유적"],
        gradient: "linear-gradient(135deg, #8e6b3e, #c9935a)"
    },
    {
        name: "태안 해안국립공원",
        region: "충청도",
        bestMonths: [6, 7, 8],
        emoji: "🌅",
        description: "서해안의 아름다운 해안선과 낙조. 꽃지 해수욕장의 할미바위 일몰이 한국 최고의 낙조.",
        highlights: ["꽃지 해수욕장 낙조", "안면도 수목원", "천리포 수목원", "서해 해산물"],
        tags: ["낙조", "해변", "여름", "자연"],
        gradient: "linear-gradient(135deg, #f7971e, #e04b00)"
    },
    {
        name: "인천 차이나타운 & 개항장",
        region: "인천",
        bestMonths: [4, 5, 9, 10],
        emoji: "🏮",
        description: "근대 개항의 역사가 살아 숨쉬는 인천. 차이나타운, 일본식 거리, 갈매기 빵까지 이색 문화 체험.",
        highlights: ["차이나타운 짜장면 거리", "개항장 근대 건축", "송월동 동화마을", "인천 앞바다 월미도"],
        tags: ["역사", "문화", "음식", "이색"],
        gradient: "linear-gradient(135deg, #c0392b, #8e0000)"
    }
];

const regionColors = {
    "서울": "linear-gradient(135deg, #667eea, #764ba2)",
    "부산": "linear-gradient(135deg, #f093fb, #f5576c)",
    "제주도": "linear-gradient(135deg, #4facfe, #00f2fe)",
    "강원도": "linear-gradient(135deg, #43e97b, #38f9d7)",
    "경주": "linear-gradient(135deg, #fa709a, #fee140)",
    "전라도": "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
    "경기도": "linear-gradient(135deg, #fccb90, #d57eeb)",
    "경상도": "linear-gradient(135deg, #fddb92, #d1fdff)",
    "충청도": "linear-gradient(135deg, #84fab0, #8fd3f4)",
    "인천": "linear-gradient(135deg, #f5af19, #f12711)"
};

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
            <div class="card-emoji-wrap" style="background: ${d.gradient}">
                <span>${d.emoji}</span>
            </div>
            <div class="card-body">
                <div class="card-top">
                    <h3 class="card-name">${d.name}</h3>
                    <span class="region-badge">${d.region}</span>
                </div>
                <p class="card-desc">${d.description}</p>
                <div class="card-tags">
                    ${d.tags.map(t => `<span class="tag">#${t}</span>`).join("")}
                </div>
                <ul class="card-highlights">
                    ${d.highlights.map(h => `<li>${h}</li>`).join("")}
                </ul>
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
