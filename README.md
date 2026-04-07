# Riley - 個人作品集網站

一個簡潔優雅的個人作品展示網站，用來介紹我的 AI Agent 和開發工具。

## 特點

- 🎨 淡色風格設計（水藍、湖水綠、淡紫色）
- 📱 完全響應式設計，適配所有裝置
- ⚡ 純 HTML/CSS/JavaScript，無需編譯
- 🔧 易於擴展的項目管理系統
- 🎯 簡潔清爽的用戶界面

## 項目結構

```
portfolio/
├── index.html          # 主頁面
├── styles.css         # 樣式表
├── script.js          # 交互邏輯
└── README.md          # 說明文件
```

## 如何使用

### 1. 本地查看
直接在瀏覽器中打開 `index.html` 即可查看。

### 2. 添加新作品
在 `script.js` 中的 `projectsData` 陣列添加新項目：

```javascript
{
    id: 3,
    title: "項目名稱",
    tag: "標籤",
    tagColor: "green",  // 或 "purple"
    emoji: "🎯",
    description: "項目描述文字",
    link: "#"  // 項目連結
}
```

### 3. 自訂顏色
編輯 `styles.css` 中的 `:root` 顏色變量：

```css
:root {
    --primary-light: #b3e5fc;      /* 淡水藍 */
    --primary-mid: #80deea;        /* 水藍 */
    /* ... 其他顏色 */
}
```

## 部署

### GitHub Pages
1. 創建 GitHub 倉庫名為 `username.github.io`
2. 將文件推送到倉庫
3. 訪問 `https://username.github.io`

### 其他靜態主機
- Vercel
- Netlify
- Firebase Hosting
- Cloudflare Pages

只需上傳三個文件即可！

## 自訂建議

- 更新導航欄的 `logo` 為你的名字或品牌
- 添加個人聯絡方式（email、社群媒體連結）
- 為每個作品添加具體的連結和圖片
- 更新「關於我」部分的自我介紹

## 未來改進方向

- [ ] 添加暗色主題選項
- [ ] 集成聯絡表單
- [ ] 添加項目篩選功能
- [ ] 接入動態後端管理項目
- [ ] 添加動畫效果

---

祝你面試順利！🚀
