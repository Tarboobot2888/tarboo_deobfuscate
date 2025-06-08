# TARBOO Deobfuscate

مشروع لفك تشفير أكواد Node.js المشفرة باستخدام خوارزميات WebCrack محليًا.

## كيفية التشغيل محليًا

1. ثبت الحزم:

```
npm install
```

2. شغل المشروع:

```
npm run dev
```

ثم افتح المتصفح على `http://localhost:3000`

## النشر على Vercel

- اربط المستودع بـ Vercel.
- اضغط Deploy.

## أدوات إضافية

يحتوي المجلد `scripts` على سكربت `api_deobfuscator.lua` المقتبس من [api-deobfuscator](https://github.com/push0ebp/api-deobfuscator). هذا السكربت مخصص لاستخدامه مع برنامج **Cheat Engine** لفك تشفير توجيه API في البرامج المحمية بـ *Themida*.

لتشغيله:

1. افتح Cheat Engine واختر **Memory View**.
2. من القائمة اختر **Lua Engine** أو اضغط `Ctrl+L`.
3. انسخ محتوى الملف `scripts/api_deobfuscator.lua` والصقه في المحرر ثم اضغط **Execute**.

هذا السكربت غير مرتبط بتشغيل المشروع نفسه، لكنه متوفر لمن يرغب في تجربته.
