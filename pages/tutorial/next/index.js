import React from 'react'
import PageTutorial from '../../../src/components/PageTutorial/PageTutorial'

const Next = () => {

    return (
        <>
            <PageTutorial apiLocalUrl='next'>
                <div className='mdx'>
                    <h1>لنتعرف على <code>Next.js</code> :</h1>
                    <p><code>Next.js </code> هو إطار مبني بمكتبة   <code>React.js</code>  لإنتاج تطبيقات فعالة و مرنة</p>
                    <h1>من ميزات <code>Next.js</code> :</h1>
                    <ul>
                        <li>يدعم <code>TypeScript</code></li>
                        <li><code>SSG / SSR :</code> يدعم تحويل الصفحات إلى <code>Html</code> بشكل ثابت أو يقوم بتوليد الصفحات <code>Html</code> بشكل ديناميكي في الوقت الفعلي لطلب المستخدم أو بوقت سابق قبل طلب المستخدم</li>
                        <li><code>route pre-fetching :</code> جلب مسبق لمسارات الصفحات قبل طلب المستخدم مما يجعل التطبيق فائق السرعة</li>
                        <li><code>pages :</code> يحتوي على نظام توجيه قائم على نظام الملفات مبني على مفهوم الصفحات حيث يتم بناء الصفحات بناء على الملفات الموجودة في ملف <code>pages</code> في التطبيق</li>
                        <li><code>Image Optimization :</code> يحتوي على مكون <code>&lt;Image&gt;</code> الذي يحسن أداء الموقع من خلال منع الصور من التحميل مع بداية تحميل الصفحة مما يحسن الأداء و له ميزات أخرى ...</li>
                        <li>يدعم <code>CSS Modules :</code> حيث يتم تجزيء ملفات <code>CSS</code> إلى أجزاء صغيرة للكل صفحة على حدا</li>
                        <li><code>Middleware :</code> مثل نظام حماية لصفحات من الأشخاص غير مصرح بهم حيث يسمح لك بتشغيل التعليمات البرمجية قبل إكتمال طلب جلب الصفحة</li>
                        <li><code>Internationalized Routing :</code> يسمح بالنطاقات الفرعية عندما يكون للموقع أكثر من لغة</li>
                        <li>و هناك ميزات كثيرة إخرى ....</li>
                    </ul>
                    <h1>متطلبات تعلم  <code>Next.js :</code></h1>
                    <ul>
                        <li>معرفة قوية ب <code>Html</code></li>
                        <li>معرفة قوية بلغة <code>Javascript</code></li>
                        <li>معرفة قوية بمكتبة <code>React.js</code></li>
                    </ul>
                </div>
            </PageTutorial>
        </>
    )
}

export default Next