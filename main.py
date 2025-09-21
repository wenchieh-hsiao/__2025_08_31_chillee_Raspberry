from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    # 從 templates 資料夾中渲染 index.html
    return render_template('index.html')

if __name__ == '__main__':
    # 監聽所有網路介面，並開啟除錯模式 (自動重載)
    # 這樣您就可以從區域網路中的任何裝置連線到您的樹莓派
    app.run(host='0.0.0.0', port=5000, debug=True)
