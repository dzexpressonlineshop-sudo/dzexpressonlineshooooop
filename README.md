# DZ Express Online Shop

متجر إلكتروني بسيط لبيع المنتجات مع توصيل لجميع ولايات الجزائر.

## 🚀 نشر على Vercel

1. ارفع المجلد على GitHub (repo جديد)
2. ادخل على [vercel.com](https://vercel.com) وربط الـ repo
3. Vercel يكتشف تلقائياً أنه static site ويرفعه

## ✏️ إضافة منتجات

افتح `app.js` وعدّل مصفوفة `products`:

```js
const products = [
  {
    id: 1,
    name: "اسم المنتج",
    description: "وصف المنتج",
    price: 2500,          // السعر بالدينار
    image: "public/my-product.jpg",  // أو رابط خارجي
  },
  // أضف منتجات أخرى هنا...
];
```

## 📋 Google Sheet

الطلبيات تُرسل تلقائياً عبر SheetDB إلى Google Sheet الخاص بك.
تأكد أن الـ Sheet يحتوي على هذه الأعمدة بالترتيب:
`التاريخ | الاسم | الهاتف | الولاية | المنتج | سعر المنتج | نوع التوصيل | سعر التوصيل | المجموع`
