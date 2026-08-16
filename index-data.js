// index-data.js
// 首页 - 完整内容数据（文字 + 图片）
window.indexData = {
    // ============================================================
    // 1. 公告区（大号文字 + 图片 + 脚标）
    // ============================================================
    farewell: {
        text: '再见了家人们，站长我决定后面不再维护与更新本站了，也感谢大家的支持😔。不要忘了本网站及相关内容禁止外传哟。让cdfz.de5.net成为历史并再次伟大吧！！！',
        image: 'https://res.cloudinary.com/dc6yzsom9/image/upload/q_auto,f_auto/IMG_1295_m9vl1t',
        footer: '再见了，我的朋友。2026年08月11日 星期二 00:52:20'
    },

    // ============================================================
    // 2. 介绍文字（三个段落）
    // ============================================================
    intro: [
        {
            title: '一、名稱由來',
            content: '「川大附中地獄網」（縮寫CDFZ），是專屬四川大學附屬中學（成都第十二中學）師生，由本校學生獨立開發搭建的個人校園工具網站；「地獄網」為趣味暱稱，對應校內緊張的學業節奏、高強度的學習氛圍，是學生間自嘲式的親切叫法，域名對應。'
        },
        {
            title: '二、網站定位與開發背景',
            content: '本網站基於技術搭建並封裝後，可直接新增至iOS、安卓系統設備桌面，擁有獨立CDFZ藍色漸層專屬圖標，脫離瀏覽器獨立運行，形式上等同專屬校園App。全站以服務川大附中在校生為核心，摒棄繁雜商業內容，只聚焦高中生日常學習場景，屬於純自用、小範圍校內分享的非營利工具站點。'
        },
        {
            title: '三、本站網域',
            content: '常規網域：cdfz.de5.net 國際網路加速版：fast.cdfz.de5.net<br>補充說明：本站設置兩組存取位址，常規域名適用國內網路環境，存取穩定、載入流暢；國際網路加速版本透過專屬節點優化跨網路連線，適合境外網路或是國內網路延遲偏高時使用，兩個網域指向同一套網站內容，資料完全同步。'
        }
    ],

    // ============================================================
    // 3. 横幅大图（公告下方）
    // ============================================================
    banner: {
        src: 'https://res.cloudinary.com/dc6yzsom9/image/upload/q_auto,f_auto/9204017F-8121-43F3-80E8-9ED36704B010_lhpgz7',
        alt: '横幅图片'
    },

    // ============================================================
    // 4. 三张小图（并排）
    // ============================================================
    thumbnails: [
        { src: 'https://res.cloudinary.com/dc6yzsom9/image/upload/q_auto,f_auto/IMG_1317_kupb5p', caption: '图1' },
        { src: 'https://res.cloudinary.com/dc6yzsom9/image/upload/q_auto,f_auto/IMG_1318_omrnwg', caption: '图2' },
        { src: 'https://res.cloudinary.com/dc6yzsom9/image/upload/q_auto,f_auto/IMG_1319_gf19go', caption: '图3' }
    ],

    // ============================================================
    // 5. 正文插图（大图 + 说明文字）
    // ============================================================
    contentImages: [
        {
            src: 'https://res.cloudinary.com/dc6yzsom9/image/upload/q_auto,f_auto/IMG_1287_ewlkua',
            alt: '学校图片',
            caption: 'The high school department of Sichuan University Affiliated Middle School (Chengdu No. 12 Middle School) is located in Wangjiang District, Wuhou District, adjacent to the Wangjiang Campus of Sichuan University. It was founded in 1908. It was a first-class model general high school in Sichuan University and a national model general high school for the implementation of new courses and new textbooks in Sichuan Province.'
        },
        {
            src: 'https://res.cloudinary.com/dc6yzsom9/image/upload/q_auto,f_auto/IMG_1290_idankc',
            alt: '校长致敬',
            caption: 'Salute to our respected principal!'
        }
    ],

    // ============================================================
    // 6. iOS 教学图片（可选，如无图片可删或留空）
    // ============================================================
    iosTutorial: {
        src: '',  // 如果有图请填地址，没有就留空
        alt: 'iOS 添加到主屏幕教程'
    },

    // ============================================================
    // 7. 歌词（放在最后）
    // ============================================================
    lyrics: {
        title: '情憑誰來定錯對  — 谭咏麟',
        lines: [
            '情憑誰來定錯對 我始終不想去追',
            '寂寞路上遇癡心 相戀也有過痛苦一堆',
            '如能從頭遇見你 我始終不會後退',
            '將傷心收於記憶中 仍沒法去剪碎',
            '',
            '濃情蜜意盡過去 凍好比一杯冷水',
            '獨自默默望蒼天 心底裡滿載往昔唏噓',
            '迷霧已漸漸散退 過去的經已逝去',
            '前路漫漫顯得崎嶇 還是要我去面對',
            '',
            '回憶起當天的歡笑 是光陰沖洗不去',
            '在這一生中 這一生中沉醉',
            '',
            '寂寞憔悴 這世界可有誰',
            '逝去了的愛情 陪孤單寄居',
            '寂寞憔悴 人痛心因你別去',
            '我已不懂得哭笑 望著你身影遠去',
            '',
            '難得當天的相愛 是你我都傾出所有',
            '令這一生中 這一生中無悔',
            '',
            '但寂寞憔悴 這世界可有誰',
            '逝去了的愛情 陪孤單寄居',
            '寂寞憔悴 人痛心因你別去',
            '我已不懂得哭笑 就讓我消失告退',
            '我已不懂得哭笑 就讓我消失告退',
            '我已不懂得哭笑 就讓我風中告退'
        ],
        footer: '—— 注:站长送给夕阳的礼物，敬未来……'
    }
};
