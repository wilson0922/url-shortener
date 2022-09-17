<h1>短網址產生器</h1>
<h3>功能介紹</h3>
<ul>
<li>
<p>完成功能如下：</p>
<ul>
<li>輸入相同網址時，產生一樣的縮址</li>
<li>若使用者沒有輸入內容，就按下了送出鈕，需要防止表單送出並提示使用者</li>
</ul>
</li>
<h3>實際截圖</h3>
<img src="https://github.com/wilson0922/url-shortener/blob/main/img/urlshortener.png" alt="image" style="max-width: 100%;">

<h3>開發工具</h3>
<li>Node.js@16.16.0</li>
<li>Express@4.16.4</li>
<li>Express-Handlebars@4.0.2</li>
<li>Bootstrap@5.1.3</li>
<li>body-parser@1.20.0</li>
<li>mongoose@5.9.7</li>

<br>
<h3>安裝流程</h3>

<li>請先確認有安裝 node.js 與 npm</li>
<li>將專案 clone 到本地</li>
<li>在本地開啟之後，透過終端機進入資料夾，輸入： <code>npm install</code></li>
<li>安裝npm及相關開發套件</li>
<li>設定環境變數 MONGODB_URI=mongodb+srv://<strong>&lt;Your MongoDB Account&gt;</strong>:<strong>&lt;Your MongoDB Password&gt;</strong>@cluster0.popacfe.mongodb.net/<strong>&lt;Your MongoDB Table&gt;</strong>?retryWrites=true&amp;w=majority
</li>
<li>終端機輸入： <code>npm run dev</code></li>
<li>若看見此行訊息則代表順利運行， <code>express is listening on localhost:3000</code></li>
<li>接下來就可以打開瀏覽器進入以下網址 <a href="http://localhost:3000" rel="nofollow">http://localhost:3000</a> 開始使用囉！</li>
<li>若欲暫停使用，按下 <code>ctrl + c</code> 即可</li>
