# 打造 AI Agent 學習型工程團隊

[English](README.md) | 繁體中文

**網站：[agentic-system-lab.github.io/agent-learning-organization](https://agentic-system-lab.github.io/agent-learning-organization/?lang=zh)**（繁體中文與英文，頁面右上角可以切換語言）

**把「不知道」快速變成團隊共同能力。** 對 3–4 位工程師的小團隊，不必做大型知識管理。重點是建立一個短迴路：從真實工作發現問題，用小實驗驗證，再把結果沉澱成可重用的工程資產。

> 學習型組織 ≠ 大家一直上課；而是團隊能持續把未知轉化成經過驗證的共同知識。

這份 README 整理了網站的重點。網站是 [Agentic System Lab](https://github.com/Agentic-System-Lab) 的一頁式做法說明。

## 什麼是「學習型組織」？

學習型組織不是「大家常上課」或「公司有很多分享會」，而是：團隊能持續發現問題、產生新知、分享知識，並真的改變後續的決策與工作方式。

判斷標準：

- **能暴露未知**：知道自己還不知道什麼
- **能快速驗證**：用實驗與證據取代直覺爭論
- **能跨人傳遞**：知識不只停留在個人
- **能形成改變**：學到的東西會進入流程、程式碼與決策

## 這個 Agent Engineering Lab 與學習型組織的關係

Agent Engineering Lab 是「學習型組織」的實作載體：讓學習不只發生在人的腦中，而是進入團隊流程與工程系統。

1. **真實工作產生問題。** 不從課本選題，而是從產品、agent failure、效能瓶頸與開發流程中找到真正的未知。
2. **Lab 把問題變成共同學習。** 透過 hypothesis、baseline、experiment、trace 與討論，把個人經驗轉成團隊可驗證的知識。
3. **學習回到 production。** 將結論沉澱成 eval、test、pattern、tool、ADR 或 guardrail，真正改變下一次工程實作。

## 五個核心能力

| | 能力 | 說明 |
|---|---|---|
| 1 | **Sense** | 主動發現「我們其實不知道什麼」 |
| 2 | **Experiment** | 用小實驗取代憑感覺爭論 |
| 3 | **Reflect** | 從成功與失敗的 trace 找出原因 |
| 4 | **Codify** | 把經驗變成 eval、pattern、decision |
| 5 | **Transfer** | 讓個人學習真正改變團隊工作方式 |

## 學習循環

真實工作 → 發現未知 → 提出假設 → 最小實驗 → 看結果 → 取得證據 → 團隊討論 → 沉澱規則 → 回到真實工作

## 不要建立「主題池」，改成建立「問題池」

少一點「MCP、Memory、Multi-Agent、RAG……」，改成蒐集問題：

- Subagent 什麼情況真的比 single-agent 好？
- Context 多到什麼程度開始降低表現？
- 哪些 failure 是 model，而不是 tool、retrieval 或 harness？
- 什麼任務根本不值得使用 agent？

把「我不知道」變成資產：鼓勵工程師把 uncertainty 公開化，不要求立即有答案。可以這樣問：

> 這兩週你遇到最值得團隊搞清楚的一個「我不知道」是什麼？

## 最小制度：小團隊就做這 6 件事

| 機制 | 節奏 | 目的 |
|---|---|---|
| `#agent-radar` | 隨時 | 蒐集值得驗證的新資訊與問題 |
| Question Backlog | 持續 | 管理 Unknown → Hypothesis → Experiment → Decision |
| Agent Engineering Lab | 每兩週 75 分鐘 | 一次只回答一個真實工程問題 |
| Failure → Eval | 工作中持續 | 把 bug、failure 轉成 regression case |
| Owner + Shadow | 每季輪替 | 避免知識只存在單一工程師身上 |
| Learning Review | 每季一次 | 檢查哪些新知真的改變了 production |

## Agent Lab 每次只做一件事：回答一個問題

- **會議前**：定義問題與 hypothesis、準備 baseline、帶一個成功 trace 和一個失敗 trace。
- **會議中**：拆解 failure、做一個小型 ablation、形成 Adopt / Experiment / Reject / Revisit 決策。

## 知識要一路壓縮成「可執行資產」

**資訊**（文章、paper、GitHub、AI summary）→ **團隊知識**（Insight、Pattern、Decision、Failure Taxonomy）→ **Executable Knowledge**（Eval、Test、Reusable Tool、CI Guardrail、Reference Implementation）

最理想的分享產物不是 PPT，而是下一位工程師能直接重用或系統能自動執行的東西。

## Leader 的角色

不是成為「最懂 AI 的人」，而是：

- 提出好問題
- 要求證據與 baseline
- 鼓勵反例與失敗案例
- 確保學習被沉澱與擴散

## 季度 Learning Review

- 三個月前不知道、現在知道什麼？
- 哪些 assumption 被推翻？
- 哪些實驗真的改變 production？
- 有哪些知識仍只存在個人腦中？

## 最終成功指標

當團隊遇到一個沒有人知道答案的新 AI／Agent 工程問題時，是否能自己快速把它變成一個可靠、可重現、可共享的答案？

## 關於這個 repo

網站是一個靜態頁面，由 GitHub Pages 直接發布 `main`，不需要建置：

| 檔案 | 內容 |
|---|---|
| `index.html` | 頁面本身、樣式與語言切換 |
| `i18n.js` | 頁面上所有文字，有繁體中文（`zh-Hant`）和英文（`en`）兩份 |
| `tests/` | 檢查兩種語言的 key 一致、頁面用到的 key 都有翻譯、語言切換正常、手機版版面正確，以及兩份 README 對得上、連到網站 |

頁面預設是繁體中文。網址加上 `?lang=en` 會開英文版，加上 `?lang=zh` 會開中文版；之後瀏覽器會記住頁面上次顯示的語言，不論是從連結來的還是按切換鈕選的。跑測試（需要 Node.js 18 以上）與本機預覽：

```bash
node --test tests/*.test.mjs
python3 -m http.server 8000   # 會持續執行；打開 http://localhost:8000/
```

## 授權

採用 [MIT 授權](LICENSE) 釋出。© 2026 Agentic System Lab。
