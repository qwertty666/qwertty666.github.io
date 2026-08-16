// contact-data.js
// 联系我们 - 页面内容数据
window.contactData = {
    // ===== 页面标题 =====
    title: '联系我们',

    // ===== 页面描述 =====
    description: '有任何问题、建议、合作或投稿意向，欢迎填写下方表单，我们会尽快回复您。',

    // ===== 表单配置 =====
    form: {
        action: 'https://formsubmit.co/cmsdusdt@proton.me',
        method: 'POST',
        redirectUrl: 'https://xyz.abrdns.com',  // _next 跳转地址
        captcha: false,
        fields: [
            {
                id: 'name',
                label: '您的姓名',
                type: 'text',
                required: true,
                placeholder: '请输入您的姓名'
            },
            {
                id: 'email',
                label: '您的邮箱',
                type: 'email',
                required: true,
                placeholder: '请输入您的邮箱地址'
            },
            {
                id: 'message',
                label: '留言内容',
                type: 'textarea',
                required: true,
                rows: 5,
                placeholder: '请详细描述您的问题或建议...'
            }
        ],
        submitButton: '发送留言'
    },

    // ===== 彩蛋链接 =====
    easterEgg: {
        text: '（小彩蛋）',
        url: 'https://res.cloudinary.com/dc6yzsom9/image/upload/BA2202FD-231F-44FB-A1C2-9A476E3C1700_ilialx'
    },

    // ===== 页脚版权 =====
    footer: '© 2026 HELL OF CDFZ'
};
