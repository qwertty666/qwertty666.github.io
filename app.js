// ============================================================
// HELL OF CDFZ - 动态渲染脚本
// 说明：所有页面内容由 JavaScript 动态生成，修改数据只需编辑下方 siteData 对象
// ============================================================

// ============================================================
// 1. 数据定义（所有可变内容集中在这里）
// ============================================================
const siteData = {
    // 导航链接
    navLinks: [
        { href: '/', text: '首页' },
        { href: '/about.html', text: '关于' },
        { href: '/contact.html', text: '联系我们' },
        { href: '/publish.html', text: '近期发布' },
        { href: '/niutijin.html', text: 'QYH专栏' },
        { href: '/mystery.html', text: '神秘图片' }
    ],
    // 主标题
    mainTitle: 'HELL OF CDFZ    (导航栏↑ ↑ ↑ )',
    // 顶部介绍文字
    introTexts: [
        'Hello! I am a network security agent and web developer Lesile.',
        'In order to prevent domain name pollution, the new domain name cdfz.de5.net is now used.',
        'Tips: Reprinting of the content on this site is prohibited. Violators shall bear the corresponding responsibility.'
    ],
    // 公告部分
    announcement: {
        bigText: '再见了家人们，站长我决定后面不再维护与更新本站了，也感谢大家的支持😔。不要忘了本网站及相关内容禁止外传哟。让cdfz.de5.net成为历史并再次伟大吧！！！',
        imageUrl: 'https://res.cloudinary.com/dc6yzsom9/image/upload/q_auto,f_auto/IMG_1295_m9vl1t',
        footerText: '再见了，我的朋友。2026年08月11日 星期二 00:52:20'
    },
    // 大图
    mainImage: {
        url: 'https://res.cloudinary.com/dc6yzsom9/image/upload/q_auto,f_auto/9204017F-8121-43F3-80E8-9ED36704B010_lhpgz7',
        alt: '图片1'
    },
    // 文本段落（按顺序渲染为 <p>）
    paragraphs: [
        '一、名稱由來',
        '「川大附中地獄網」（縮寫CDFZ），是專屬四川大學附屬中學（成都第十二中學）師生，由本校學生獨立開發搭建的個人校園工具網站；「地獄網」為趣味暱稱，對應校內緊張的學業節奏、高強度的學習氛圍，是學生間自嘲式的親切叫法，域名對應。',
        '二、網站定位與開發背景',
        '本網站基於技術搭建並封裝後，可直接新增至iOS、安卓系統設備桌面，擁有獨立CDFZ藍色漸層專屬圖標，脫離瀏覽器獨立運行，形式上等同專屬校園App。全站以服務川大附中在校生為核心，摒棄繁雜商業內容，只聚焦高中生日常學習場景，屬於純自用、小範圍校內分享的非營利工具站點。',
        '三、本站網域',
        '常規網域：cdfz.de5.net 國際網路加速版：fast.cdfz.de5.net',
        '補充說明：本站設置兩組存取位址，常規域名適用國內網路環境，存取穩定、載入流暢；國際網路加速版本透過專屬節點優化跨網路連線，適合境外網路或是國內網路延遲偏高時使用，兩個網域指向同一套網站內容，資料完全同步。'
    ],
    // 三张小图（动态循环渲染）
    smallImages: [
        { url: 'https://res.cloudinary.com/dc6yzsom9/image/upload/q_auto,f_auto/IMG_1317_kupb5p', alt: '小图1', caption: '图1' },
        { url: 'https://res.cloudinary.com/dc6yzsom9/image/upload/q_auto,f_auto/IMG_1318_omrnwg', alt: '小图2', caption: '图2' },
        { url: 'https://res.cloudinary.com/dc6yzsom9/image/upload/q_auto,f_auto/IMG_1319_gf19go', alt: '小图3', caption: '图3' }
    ],
    // APK下载按钮
    apkButton: {
        href: '/cdfz.apk',
        text: '点击下载安卓设备适配apk安装包以安装至桌面'
    },
    // 学校介绍部分的图片
    otherImages: [
        { url: 'https://res.cloudinary.com/dc6yzsom9/image/upload/q_auto,f_auto/IMG_1287_ewlkua', alt: '图片3' },
        { url: 'https://res.cloudinary.com/dc6yzsom9/image/upload/q_auto,f_auto/IMG_1290_idankc', alt: '图片4' }
    ],
    // 学校介绍英文段落
    schoolEnglishText: 'The high school department of Sichuan University Affiliated Middle School (Chengdu No. 12 Middle School) is located in Wangjiang District, Wuhou District, adjacent to the Wangjiang Campus of Sichuan University. It was founded in 1908. It was a first-class model general high school in Sichuan University and a national model general high school for the implementation of new courses and new textbooks in Sichuan Province.',
    saluteText: 'Salute to our respected principal!',
    // 档案按钮
    archiveButton: {
        href: '/姓名.docx',
        text: '肛の档案'
    },
    // 游戏按钮
    gameButtons: [
        { href: '/game.html', text: 'game1' },
        { href: '/game2.html', text: 'game2' }
    ],
    // 歌词
    lyrics: `情憑誰來定錯對 我始終不想去追
寂寞路上遇癡心 相戀也有過痛苦一堆
如能從頭遇見你 我始終不會後退
將傷心收於記憶中 仍沒法去剪碎

濃情蜜意盡過去 凍好比一杯冷水
獨自默默望蒼天 心底裡滿載往昔唏噓
迷霧已漸漸散退 過去的經已逝去
前路漫漫顯得崎嶇 還是要我去面對

回憶起當天的歡笑 是光陰沖洗不去
在這一生中 這一生中沉醉

寂寞憔悴 這世界可有誰
逝去了的愛情 陪孤單寄居
寂寞憔悴 人痛心因你別去
我已不懂得哭笑 望著你身影遠去

難得當天的相愛 是你我都傾出所有
令這一生中 這一生中無悔

但寂寞憔悴 這世界可有誰
逝去了的愛情 陪孤單寄居
寂寞憔悴 人痛心因你別去
我已不懂得哭笑 就讓我消失告退
我已不懂得哭笑 就讓我消失告退
我已不懂得哭笑 就讓我風中告退`,
    lyricsNote: '—— 注:站长送给夕阳的礼物，敬未来……',
    // 音乐配置
    music: {
        url: 'https://res.cloudinary.com/dc6yzsom9/video/upload/f_mp3/情凭谁来定错对-谭咏麟_knkb6s.flac'
    }
};

// ============================================================
// 2. 渲染函数
// ============================================================
function renderPage() {
    const app = document.getElementById('app');
    if (!app) {
        console.error('找不到 #app 容器，请检查 HTML 结构');
        return;
    }

    // 生成导航栏
    const navHTML = `
        <div class="nav">
            ${siteData.navLinks.map(link =>
                `<a href="${link.href}" style="color: white;">${link.text}</a>`
            ).join('')}
        </div>
    `;

    // 生成顶部介绍文字
    const introHTML = siteData.introTexts.map(text => `<p>${text}</p>`).join('');

    // 生成公告部分
    const announcementHTML = `
        <div style="text-align: center; margin: 50px 0; padding: 30px 0; border-top: 1px solid #2a2f4a; border-bottom: 1px solid #2a2f4a;">
            <div style="font-size: 3.2rem; font-style: italic; font-weight: 900; background: linear-gradient(120deg, #fdf084, #ffd966); display: inline-block; padding: 0.2em 0.7em; border-radius: 20px; color: #1a1a1a; box-shadow: 0 0 40px rgba(253, 208, 84, 0.4); line-height: 1.3; letter-spacing: 2px;">
                ${siteData.announcement.bigText}
            </div>
            <div style="margin-top: 30px;">
                <img src="${siteData.announcement.imageUrl}" alt="暂别" style="max-width: 100%; height: auto; max-height: 400px; border-radius: 20px; box-shadow: 0 12px 30px rgba(0,0,0,0.6); display: block; margin: 0 auto; object-fit: cover;">
            </div>
            <p style="color: #8888aa; margin-top: 18px; font-size: 1rem; letter-spacing: 3px;">
                ${siteData.announcement.footerText}
            </p>
        </div>
    `;

    // 生成大图
    const mainImageHTML = `
        <hr style="border-color: #2a2f4a; margin: 40px 0;">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 30px; margin: 30px 0;">
            <img src="${siteData.mainImage.url}" alt="${siteData.mainImage.alt}" loading="lazy" style="width: 100%; max-width: 600px; height: auto; border-radius: 16px; box-shadow: 0 4px 16px rgba(0,0,0,0.3);">
        </div>
    `;

    // 生成文本段落
    const paragraphsHTML = siteData.paragraphs.map(p => `<p>${p}</p>`).join('');

    // 生成三张小图
    const smallImagesHTML = `
        <hr style="border-color: #2a2f4a; margin: 40px 0;">
        <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; margin: 30px 0;">
            ${siteData.smallImages.map(img => `
                <div style="width: 200px; text-align: center;">
                    <img src="${img.url}" alt="${img.alt}" loading="lazy" style="width: 100%; height: 150px; object-fit: cover; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.3);">
                    <p style="color: #aaa; font-size: 14px; margin-top: 8px;">${img.caption}</p>
                </div>
            `).join('')}
        </div>
        <p>iOS端移至裝置主畫面教學見上(長按)</p>
    `;

    // 生成 APK 下载部分
    const apkHTML = `
        <hr style="border-color: #2a2f4a; margin: 40px 0;">
        <p> Android端</p>
        <p>下载 apk</p>
        <a href="${siteData.apkButton.href}" download style="color: #00d4ff; text-decoration: underline; font-size: 16px; cursor: pointer; transition: 0.2s;" onmouseover="this.style.color='#ffcc00'" onmouseout="this.style.color='#00d4ff'">
            ${siteData.apkButton.text}
        </a>
    `;

    // 生成学校介绍部分（图片 + 英文段落）
    const schoolImagesHTML = siteData.otherImages.map(img => `
        <img src="${img.url}" alt="${img.alt}" loading="lazy" style="width: 100%; max-width: 600px; height: auto; border-radius: 16px; box-shadow: 0 4px 16px rgba(0,0,0,0.3);">
    `).join('');

    const schoolSectionHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; gap: 30px; margin: 30px 0;">
            ${schoolImagesHTML}
            <p>${siteData.schoolEnglishText}</p>
            <p>${siteData.saluteText}</p>
        </div>
    `;

    // 生成档案按钮
    const archiveButtonHTML = `
        <a href="${siteData.archiveButton.href}" target="_blank" style="display: inline-block; background: #ffcc00; color: #333; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 16px; border: 1px solid #e6b800; box-shadow: 0 2px 4px rgba(0,0,0,0.2); transition: 0.3s;">
            ${siteData.archiveButton.text}
        </a>
    `;

    // 生成游戏按钮
    const gameButtonsHTML = `
        <div style="text-align: center; margin: 30px 0;">
            ${siteData.gameButtons.map(btn => `
                <a href="${btn.href}" style="display: inline-block; background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 15px 40px; border-radius: 50px; text-decoration: none; font-size: 20px; font-weight: bold; box-shadow: 0 5px 15px rgba(0,0,0,0.2);">
                    ${btn.text}
                </a>
            `).join('')}
        </div>
    `;

    // 生成音乐控制器 HTML 结构（事件在 initMusicPlayer 中绑定）
    const musicControllerHTML = `
        <div id="music-controller">
            <button id="music-toggle" title="播放/暂停">▶</button>
            <input type="range" id="music-volume" min="0" max="1" step="0.05" value="0.5">
            <span id="music-status">加载中</span>
        </div>
    `;

    // 生成歌词部分
    const lyricsHTML = `
        <div style="margin: 30px auto; padding: 20px 25px; max-width: 600px; background: rgba(26, 31, 58, 0.5); border-left: 3px solid #00d4ff; border-radius: 12px; backdrop-filter: blur(4px);">
            <p style="font-style: italic; font-size: 0.95rem; color: #b0b0d0; line-height: 1.8; text-align: center; letter-spacing: 0.5px; margin: 0; white-space: pre-line;">
                ${siteData.lyrics}
            </p>
            <p style="text-align: center; font-size: 0.75rem; color: #666688; margin-top: 10px; font-style: italic; letter-spacing: 2px;">
                ${siteData.lyricsNote}
            </p>
        </div>
    `;

    // 组合所有内容
    const fullHTML = `
        ${navHTML}
        <h1>${siteData.mainTitle}</h1>
        ${introHTML}
        ${announcementHTML}
        ${mainImageHTML}
        ${paragraphsHTML}
        ${smallImagesHTML}
        ${apkHTML}
        ${schoolSectionHTML}
        ${archiveButtonHTML}
        ${gameButtonsHTML}
        <hr style="border-color: #2a2f4a; margin: 40px 0;">
        ${musicControllerHTML}
        ${lyricsHTML}
        <hr>
        <p>©2026 HELL OF CDFZ</p>
    `;

    app.innerHTML = fullHTML;

    // 初始化音乐播放器
    initMusicPlayer(siteData.music.url);
}

// ============================================================
// 3. 音乐播放器逻辑
// ============================================================
function initMusicPlayer(musicUrl) {
    const audio = new Audio(musicUrl);
    audio.loop = true;
    audio.volume = 0.5;

    const toggleBtn = document.getElementById('music-toggle');
    const volumeSlider = document.getElementById('music-volume');
    const statusEl = document.getElementById('music-status');

    if (!toggleBtn || !volumeSlider || !statusEl) {
        console.error('音乐控制器元素缺失');
        return;
    }

    let isPlaying = false;
    let userInteracted = false;

    function playMusic() {
        audio.play().then(() => {
            isPlaying = true;
            toggleBtn.textContent = '⏸';
            statusEl.textContent = '播放中';
            statusEl.style.color = '#00d4ff';
        }).catch(err => {
            console.log('⏳ 自动播放被拦截，等待用户交互...');
            statusEl.textContent = '点击任意处';
            statusEl.style.color = '#ffcc00';
            if (!userInteracted) {
                const resumeOnClick = function() {
                    audio.play().then(() => {
                        isPlaying = true;
                        toggleBtn.textContent = '⏸';
                        statusEl.textContent = '播放中';
                        statusEl.style.color = '#00d4ff';
                        userInteracted = true;
                    }).catch(e => console.warn('播放失败:', e));
                    document.removeEventListener('click', resumeOnClick);
                    document.removeEventListener('touchstart', resumeOnClick);
                };
                document.addEventListener('click', resumeOnClick);
                document.addEventListener('touchstart', resumeOnClick);
                userInteracted = true;
            }
        });
    }

    // 页面加载完成后自动尝试播放
    window.addEventListener('load', function() {
        statusEl.textContent = '加载中...';
        audio.load();
        setTimeout(playMusic, 300);
    });

    // 播放/暂停按钮
    toggleBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (isPlaying) {
            audio.pause();
            isPlaying = false;
            toggleBtn.textContent = '▶';
            statusEl.textContent = '已暂停';
            statusEl.style.color = '#8888aa';
        } else {
            playMusic();
        }
    });

    // 音量控制
    volumeSlider.addEventListener('input', function() {
        audio.volume = parseFloat(this.value);
    });

    // 错误处理
    audio.addEventListener('error', function() {
        statusEl.textContent = '🎵 加载失败';
        statusEl.style.color = '#ff6b6b';
        toggleBtn.textContent = '▶';
        console.error('❌ 音乐文件加载失败，请检查 MUSIC_URL 是否正确');
    });

    // 加载完成状态更新
    audio.addEventListener('canplay', function() {
        if (statusEl.textContent === '加载中...') {
            statusEl.textContent = '准备就绪';
        }
    });

    // 可选：页面隐藏时暂停（注释掉则后台继续播放）
    document.addEventListener('visibilitychange', function() {
        if (document.hidden && isPlaying) {
            // 如果希望切后台暂停，取消下面三行注释
            // audio.pause();
            // isPlaying = false;
            // toggleBtn.textContent = '▶';
            // statusEl.textContent = '后台暂停';
            // statusEl.style.color = '#8888aa';
        }
    });
}

// ============================================================
// 4. 启动渲染（由于脚本使用 defer，DOM 已就绪）
// ============================================================
renderPage();
