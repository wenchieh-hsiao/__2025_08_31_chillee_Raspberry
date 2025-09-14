# Gemini 啟動說明

本文檔介紹了幾種啟動和使用 Google Gemini 的常見方式。

## 1. Google AI Studio (網頁版)

最簡單的入門方式是使用 Google AI Studio。這是一個網頁介面，可讓您直接與 Gemini 模型進行互動，無需編寫任何程式碼。

- **網址:** [https://aistudio.google.com/](https://aistudio.google.com/)
- **優點:**
    - 無需設定或安裝。
    - 直觀的圖形使用者介面。
    - 適合快速測試和原型設計。
- **啟動方式:**
    1. 打開網頁瀏覽器。
    2. 前往 [https://aistudio.google.com/](https://aistudio.google.com/)。
    3. 使用您的 Google 帳戶登入。

## 2. 使用 API (程式設計方式)

對於開發者來說，可以透過 API 將 Gemini 的功能整合到自己的應用程式中。您需要先取得 API 金鑰。

- **適用語言:** Python, Node.js, Go, Dart (Flutter) 等。
- **優點:**
    - 高度客製化和整合能力。
    - 可用於建構複雜的應用程式。
- **啟動步驟 (以 Python 為例):**
    1. **安裝 SDK:**
       ```bash
       pip install -q -U google-generativeai
       ```
    2. **設定 API 金鑰:**
       在您的程式碼中設定從 Google AI Studio 取得的 API 金鑰。
       ```python
       import google.generativeai as genai
       import os

       genai.configure(api_key="YOUR_API_KEY")
       ```
    3. **與模型互動:**
       ```python
       model = genai.GenerativeModel('gemini-pro')
       response = model.generate_content("請給我一些關於樹懶的有趣知識。")
       print(response.text)
       ```

## 3. 使用 CLI (命令列介面)

您也可以透過命令列工具與 Gemini 互動。這對於自動化腳本和快速查詢非常有用。

- **常見工具:** `gcloud` (Google Cloud SDK) 或社群開發的 CLI 工具。
- **優點:**
    - 易於整合到腳本和工作流程中。
    - 資源佔用少。
- **啟動步驟 (以 `gcloud` 為例):**
    1. **安裝 Google Cloud SDK:**
       請參考 [官方安裝指南](https://cloud.google.com/sdk/docs/install)。
    2. **驗證並設定專案:**
       ```bash
       gcloud auth login
       gcloud config set project YOUR_PROJECT_ID
       ```
    3. **發送請求:**
       ```bash
       gcloud ai models predict gemini-pro --project=YOUR_PROJECT_ID --region=us-central1 --json-request='{"instances": [{"prompt": "寫一首關於宇宙的短詩"}]}'
       ```

---

請根據您的具體需求和技術背景選擇最適合您的啟動方式。
