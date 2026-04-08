// 作品數據 - 易於擴展
const projectsData = [
    {
        id: 1,
        title: "記帳小助手",
        tag: "AI 工具",
        tagColor: "green",
        emoji: "💰",
        description: "一個智能記帳 Bot，透過 Telegram 快速記錄日常支出。採用 Google Gemini 模型進行語意理解，識別消費類別。支援自動容錯切換、錯誤監控，確保穩定運作。",
        link: "#",
        details: {
            tech: [
                { name: "Telegram Bot API", desc: "前端入口 - 提供跨平台、零門檻的交互介面" },
                { name: "Google Gemini 2.5 / 3.1 Flash Lite", desc: "智能引擎 - 進行語意理解、邏輯判斷和內容分類" },
                { name: "Google Apps Script", desc: "後端邏輯 - 自動化流程控制，無需維護實體伺服器" },
                { name: "Google Sheets", desc: "資料庫 - 實時同步和視覺化報表" }
            ],
            features: [
                "智慧分類 - 输入像『唱歌』會自動理解成娛樂，『高麗菜』就知道是生鮮",
                "自動容錯 - 主要用的 AI 模型流量滿了，會自動換備用模型繼續跑",
                "自動同步 - 每筆消費都會自動存進 Google Sheets",
                "零維護成本 - 完全跑在 Google Apps Script 上面，我不用自己開伺服器",
                "圖片 - 可以上傳收據或出貨單，儲存多筆資料"
            ],
            future: ["週報/月報自動生成與分析", "分類超支預警提醒", "多輪對話財務諮詢"],
            screenshots: [
                { title: "Telegram 聊天介面", desc: "用戶在 Telegram 上輸入記帳訊息", image: "./picture/tool_A_0.jfif" },
                { title: "Google Sheets 資料", desc: "自動同步至 Google Sheets", image: "./picture/tool_A_1.jfif" },
                { title: "多筆新增圖片", desc: "一次新增多筆收據或出貨單至 Google Sheets", image: "./picture/tool_A_2.jfif" }
            ]
        }
    },
    {
        id: 2,
        title: "AI Agent",
        tag: "我的第一隻小龍蝦",
        tagColor: "purple",
        emoji: "🤖",
        description: "部署在 Oracle Cloud 上的個人 AI 助理。透過 Telegram 即時互動，使用 OpenRouter 免費模型自動選擇。這是我第一個 Agent 實踐，第一次養開始養龍蝦。",
        link: "#",
        details: {
            tech: [
                { name: "Telegram Bot API", desc: "前端入口 - 提供跨平台即時對話介面" },
                { name: "Oracle Cloud Always Free", desc: "基礎架構 - 4 ARM CPU 核心、24GB 記憶體、200GB 儲存，永久免費" },
                { name: "Ubuntu 24.04 Minimal (ARM)", desc: "作業系統 - 極簡化架構，啟動快速且攻擊面最小" },
                { name: "OpenClaw 代理人框架", desc: "核心引擎 - 運行為背景服務，系統重啟自動恢復" },
                { name: "OpenRouter (Free Models)", desc: "AI 大腦 - 自動選擇免費開源模型，支援基礎對話與文本處理" }
            ],
            architecture: [
                {
                    title: "成本效益",
                    items: [
                        "選用 Oracle Cloud Always Free 方案，相比 AWS 或 GCP 的時限免費層，甲骨文提供真正永久免費",
                        "4 個 ARM CPU 核心 + 24GB 記憶體 > AWS 1GB，資源更豐富",
                        "全年無休執行，零服務費用"
                    ]
                },
                {
                    title: "硬體效能",
                    items: [
                        "ARM 架構的 Ubuntu 24.04 Minimal，啟動迅速、資源消耗低",
                        "24GB 記憶體足以執行工作負載且不會過度消耗",
                        "200GB 儲存空間預留未來擴展空間"
                    ]
                },
                {
                    title: "安全防護",
                    items: [
                        "環境隔離：獨立雲端實例，與個人電腦、公司內網完全隔離",
                        "網關加密：閘道器限制在本地迴路 (127.0.0.1)，啟用 Token 認證機制",
                        "身份核准：Telegram 配對機制，只有核准帳號可對話",
                        "定期審計：Security Audit 報告顯示 0 Critical 漏洞，網路暴露與檔案權限已加固"
                    ]
                }
            ],
            features: [
                "24小時在線 - 放在雲端上跑著，隨時都可以問",
                "用免費 AI 模型 - OpenRouter 的免費模型，可以聊天問問題",
                "用手機就能聊 - 透過 Telegram 隨時隨地跟 Agent 互動",
                "簡單好用 - 基礎的聊天功能，我第一個 Agent 的實踐",
                "安全防護 - 有 Token 驗證，只有我核准的帳號才能用",
                "天氣提醒 - 每天早上自動發送內湖的天氣和穿衣建議",
                "自動化機票查詢 - 自動查詢機票價格，低於 5000 元時通知我"
            ],
            future: ["未來可能會使用高階模型 (Claude 3, GPT-4) 以支援更複雜推理", "建立持久化記憶系統與個人知識庫"],
            screenshots: [
                { title: "天氣提醒", desc: "每天上午７：３０提醒我內湖天氣", image: "./picture/tool_B_1.jfif" },
                { title: "自動化機票查詢", desc: "自動查詢機票價格，低於 5000 元時通知", image: "./picture/tool_B_2.jfif" }
            ]
        }
    }
];

// 初始化項目展示
function initializeProjects() {
    const projectsGrid = document.getElementById('projectsGrid');

    projectsData.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
}

// 創建項目卡片
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';

    card.innerHTML = `
        <div class="project-image">
            ${project.emoji}
        </div>
        <div class="project-info">
            <span class="project-tag ${project.tagColor}">${project.tag}</span>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <button onclick="openModal(${project.id})" class="project-link">了解更多</button>
        </div>
    `;

    return card;
}

// 打開 Modal
function openModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;

    const modalBody = document.getElementById('modalBody');

    // 構建技術棧 HTML
    let techHtml = '';
    if (project.details.tech) {
        techHtml = `
            <div class="tech-grid">
                ${project.details.tech.map(t => `
                    <div class="tech-item">
                        <div class="tech-name">${t.name}</div>
                        <div class="tech-desc">${t.desc}</div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // 構建功能特性 HTML
    let featuresHtml = '';
    if (project.details.features) {
        featuresHtml = `
            <ul class="features-list">
                ${project.details.features.map(f => `<li>${f}</li>`).join('')}
            </ul>
        `;
    }

    // 構建未來展望 HTML
    let futureHtml = '';
    if (project.details.future) {
        futureHtml = `
            <div class="future-items">
                ${project.details.future.map(f => `<div class="future-item">🚀 ${f}</div>`).join('')}
            </div>
        `;
    }

    // 構建實際畫面 HTML
    let screenshotsHtml = '';
    if (project.details.screenshots && project.details.screenshots.length > 0) {
        screenshotsHtml = `
            <div class="screenshots-container">
                ${project.details.screenshots.map(ss => `
                    <div class="screenshot-item">
                        <div class="screenshot-title">${ss.title}</div>
                        <img src="${ss.image}" alt="${ss.title}" class="screenshot-image" onclick="openImageModal('${ss.image}')" style="cursor: pointer;">
                        <p class="screenshot-desc">${ss.desc}</p>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // 構建架構設計 HTML
    let architectureHtml = '';
    if (project.details.architecture && project.details.architecture.length > 0) {
        const topArchs = project.details.architecture.slice(0, -1);
        const bottomArch = project.details.architecture.slice(-1);

        architectureHtml = `
            <div class="architecture-sections">
                <div class="architecture-row">
                    ${topArchs.map(arch => `
                        <div class="architecture-card">
                            <div class="architecture-title">${arch.title}</div>
                            <ul class="architecture-list">
                                ${arch.items.map(item => `<li>${item}</li>`).join('')}
                            </ul>
                        </div>
                    `).join('')}
                </div>
                <div class="architecture-row full-width">
                    ${bottomArch.map(arch => `
                        <div class="architecture-card">
                            <div class="architecture-title">${arch.title}</div>
                            <ul class="architecture-list">
                                ${arch.items.map(item => `<li>${item}</li>`).join('')}
                            </ul>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    modalBody.innerHTML = `
        <h2 class="modal-title">${project.title}</h2>
        
        <div class="modal-section">
            <h3>技術棧</h3>
            ${techHtml}
        </div>
        
        ${architectureHtml ? `
        <div class="modal-section">
            <h3>架構設計與安全防護</h3>
            ${architectureHtml}
        </div>
        ` : ''}
        
        <div class="modal-section">
            <h3>核心功能</h3>
            ${featuresHtml}
        </div>
        
        <div class="modal-section">
            <h3>未來展望</h3>
            ${futureHtml}
        </div>
        
        <div class="modal-section">
            <h3>實際畫面</h3>
            ${screenshotsHtml}
        </div>
    `;

    // 顯示 Modal
    document.getElementById('projectModal').classList.add('show');
    document.body.style.overflow = 'hidden'; // 防止背景滾動
}

// 關閉 Modal
function closeModal() {
    document.getElementById('projectModal').classList.remove('show');
    document.body.style.overflow = 'auto'; // 恢復滾動
}

// 打開圖片放大 Modal
function openImageModal(imageSrc) {
    document.getElementById('enlargedImage').src = imageSrc;
    document.getElementById('imageModal').classList.add('show');
    document.body.style.overflow = 'hidden';
}

// 關閉圖片放大 Modal
function closeImageModal() {
    document.getElementById('imageModal').classList.remove('show');
    document.body.style.overflow = 'auto';
}

// 點擊 Modal 外部區域關閉
window.onclick = function (event) {
    const projectModal = document.getElementById('projectModal');
    const imageModal = document.getElementById('imageModal');

    if (event.target === projectModal) {
        closeModal();
    }
    if (event.target === imageModal) {
        closeImageModal();
    }
}

// 頁面加載完成後初始化
document.addEventListener('DOMContentLoaded', function () {
    initializeProjects();
});

// 平滑滾動優化
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
