function render(data) {
    const root = document.querySelector("#root");
    root.innerHTML = "";

    // 导航栏
    let navHtml = `<div class="nav">`;
    data.nav.forEach(item=>{
        navHtml += `<a href="${item.href}" ${item.active ? "class='active'" : ""}>${item.name}</a>`
    })
    navHtml += `</div>`;

    // 顶部文字
    let topHtml = `<h1>${data.h1Text}</h1>`;
    data.paragraphsTop.forEach(p=>{
        topHtml += `<p>${p}</p>`
    })

    // 暂别公告区块
    let noticeHtml = `
    <div style="
        text-align: center;
        margin: 50px 0;
        padding: 30px 0;
        border-top: 1px solid #2a2f4a;
        border-bottom: 1px solid #2a2f4a;
    ">
        <div style="
            font-size: 3.2rem;
            font-style: italic;
            font-weight: 900;
            background: linear-gradient(120deg, #fdf084, #ffd966);
            display: inline-block;
            padding: 0.2em 0.7em;
            border-radius: 20px;
            color: #1a1a1a;
            box-shadow: 0 0 40px rgba(253, 208, 84, 0.4);
            line-height: 1.3;
            letter-spacing: 2px;
        ">${data.noticeText}</div>
        <div style="margin-top: 30px;">
            <img 
                src="${data.noticeImg}" 
                alt="暂别" 
                style="
                    max-width: 100%;
                    height: auto;
                    max-height: 400px;
                    border-radius: 20px;
                    box-shadow: 0 12px 30px rgba(0,0,0,0.6);
                    display: block;
                    margin: 0 auto;
                    object-fit: cover;
                "
            >
        </div>
        <p style="
            color: #8888aa;
            margin-top: 18px;
            font-size: 1rem;
            letter-spacing: 3px;
        ">${data.noticeFooter}</p>
    </div>
    `;

    // 单张大图
    let singleImgHtml = `
    <hr style="border-color: #2a2f4a; margin: 40px 0;">
    <div style="display: flex; flex-direction: column; align-items: center; gap: 30px; margin: 30px 0;">
        <img src="${data.singleImg}" 
             alt="图片1" 
             loading="lazy" 
             style="width: 100%; max-width: 600px; height: auto; border-radius: 16px; box-shadow: 0 4px 16px rgba(0,0,0,0.3);">
    </div>
    `;

    // 正文段落
    let articleHtml = "";
    data.articleText.forEach(t=>{
        articleHtml += `<p>${t}</p>`
    })

    // 三张并排小图
    let threeImgHtml = `
    <hr style="border-color: #2a2f4a; margin: 40px 0;">
    <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; margin: 30px 0;">
    `;
    data.galleryThree.forEach(img=>{
        threeImgHtml += `
        <div style="width: 200px; text-align: center;">
            <img src="${img.src}" 
                 alt="${img.alt}" 
                 loading="lazy" 
                 style="width: 100%; height: 150px; object-fit: cover; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.3);">
            <p style="color: #aaa; font-size: 14px; margin-top: 8px;">${img.caption}</p>
        </div>
        `
    })
    threeImgHtml += `</div>`;

    // ios、安卓、apk下载
    let downloadHtml = `
        <p>${data.iosTip}</p>
        <hr style="border-color: #2a2f4a; margin: 40px 0;">
        <p>${data.androidTip}</p>
        <p>${data.apkText}</p>
        <a href="${data.apkHref}" download style="color: #00d4ff; text-decoration: underline; font-size: 16px; cursor: pointer; transition: 0.2s;" onmouseover="this.style.color='#ffcc00'" onmouseout="this.style.color='#00d4ff'">
            点击下载安卓设备适配apk安装包以安装至桌面
        </a>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 30px; margin: 30px 0;">
    `;
    for(let i=0;i<data.bigImgs.length;i++){
        downloadHtml += `
        <img src="${data.bigImgs[i].src}" 
             alt="${data.bigImgs[i].alt}" 
             loading="lazy" 
             style="width: 100%; max-width: 600px; height: auto; border-radius: 16px; box-shadow: 0 4px 16px rgba(0,0,0,0.3);">
        <p>${data.bigImgText[i]}</p>
        `
    }
    downloadHtml += `</div>`;

    // 文件按钮，游戏按钮
    let btnHtml = `
    <a href="${data.docHref}" target="_blank" style="display: inline-block; background: #ffcc00; color: #333; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 16px; border: 1px solid #e6b800; box-shadow: 0 2px 4px rgba(0,0,0,0.2); transition: 0.3s;">
        ${data.docText}
    </a>
    <div style="text-align: center; margin: 30px 0;">
        <a href="${data.game1}" style="display: inline-block; background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 15px 40px; border-radius: 50px; text-decoration: none; font-size: 20px; font-weight: bold; box-shadow: 0 5px 15px rgba(0,0,0,0.2); margin:8px;">
            game1
        </a>
        <a href="${data.game2}" style="display: inline-block; background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 15px 40px; border-radius: 50px; text-decoration: none; font-size: 20px; font-weight: bold; box-shadow: 0 5px 15px rgba(0,0,0,0.2); margin:8px;">
            game2
        </a>
    </div>
    <hr style="border-color: #2a2f4a; margin: 40px 0;">
    `;

    // 歌词区块
    let lyricHtml = `
    <div style="
        margin: 30px auto;
        padding: 20px 25px;
        max-width: 600px;
        background: rgba(26, 31, 58, 0.5);
        border-left: 3px solid #00d4ff;
        border-radius: 12px;
        backdrop-filter: blur(4px);
    ">
        <p style="
            font-style: italic;
            font-size: 0.95rem;
            color: #b0b0d0;
            line-height: 1.8;
            text-align: center;
            letter-spacing: 0.5px;
            margin: 0;
            white-space: pre-line;
        ">${data.lyric}</p>
        <p style="
            text-align: center;
            font-size: 0.75rem;
            color: #666688;
            margin-top: 10px;
            font-style: italic;
            letter-spacing: 2px;
        ">${data.lyricFooter}</p>
    </div>
    <hr>
    <p>${data.copyright}</p>
    `;

    root.innerHTML = navHtml + topHtml + noticeHtml + singleImgHtml + articleHtml + threeImgHtml + downloadHtml + btnHtml + lyricHtml;
}

render(pageData);
