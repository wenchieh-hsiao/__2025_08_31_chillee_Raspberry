// 當DOM內容完全載入後執行
document.addEventListener('DOMContentLoaded', function () {

    // 獲取需要操作的DOM元素
    const tempValueElement = document.getElementById('temp-value');
    const humidityValueElement = document.getElementById('humidity-value');
    const lightSwitchElement = document.getElementById('light-switch');
    const lightStatusElement = document.getElementById('light-status');

    // --- 功能1: 模擬感測器數據更新 ---
    function updateSensorData() {
        // 生成一個介於 20.0 到 28.0 之間的隨機溫度
        const randomTemp = (Math.random() * 8 + 20).toFixed(1);
        
        // 生成一個介於 50 到 75 之間的隨機濕度
        const randomHumidity = Math.floor(Math.random() * 26) + 50;

        // 更新網頁上的數值
        if(tempValueElement) {
            tempValueElement.textContent = randomTemp;
        }
        if(humidityValueElement) {
            humidityValueElement.textContent = randomHumidity;
        }
    }

    // 每3秒鐘更新一次感測器數據
    setInterval(updateSensorData, 3000);

    // --- 功能2: 電燈開關的邏輯 ---
    if (lightSwitchElement && lightStatusElement) {
        lightSwitchElement.addEventListener('change', function() {
            // 根據開關是否被選中來更新狀態文字
            if (this.checked) {
                lightStatusElement.textContent = '已開啟';
                // 在這裡可以添加發送指令到後端的程式碼
                console.log('指令: 開啟客廳燈');
            } else {
                lightStatusElement.textContent = '已關閉';
                // 在這裡可以添加發送指令到後端的程式碼
                console.log('指令: 關閉客廳燈');
            }
        });
    }

    // 頁面載入時先執行一次，避免初始看到空白
    updateSensorData();
});
