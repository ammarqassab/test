import React from 'react'
import PageTutorial from '../../../src/components/PageTutorial/PageTutorial'

const Nextsetup = () => {

    return (
        <>
            <PageTutorial apiLocalUrl='next'>
                <div className='mdx'>
                    <h1>طريقة تنصيب الديناميكية لمشروع <code>Next.js</code> :</h1>
                    <p>نوصي عند تنصيب مشروع جديد استخدام طريقة <code>create-next-app</code> الذي يقوم بإعداد كل شيء تلقائيًا من أجلك .</p>
                    <pre>
                        <code>
                        npx create-next-app@latest<br/>
                        # or<br/>
                        yarn create next-app<br/>
                        # or<br/>
                        pnpm create next-app<br/>
                        </code>
                    </pre>
                    <p>أذا كنت تريد استخدام <code>TypeScript</code> في المشروع جديد</p>
                    <pre>
                        <code>
                        npx create-next-app@latest --typescript<br/>
                        # or<br/>
                        yarn create next-app --typescript<br/>
                        # or<br/>
                        pnpm create next-app --typescript<br/>
                        </code>
                    </pre>
                    <h1>بعد اكتمال تثبيت المشروع <code>Next.js</code> إتبع الخطوات التالية لتشغيل المشروع :</h1>
                    <ul>
                        <li>أدخل الأمر في محرر الأوامر مثل <code>git bash</code> و أدخل الأمر التالي<code>npm run dev or yarn dev or pnpm dev</code> لبدء تشغيل خادم التطوير </li>
                        <li>و يتم فتح المشروع على الرابط <code>http://localhost:3000</code></li>
                        <li>عندها يتم فتح الصفحة الرئيسية التي موجودة في المجلد <code>pages/index.js</code></li>
                    </ul>
                </div>
            </PageTutorial>
        </>
    )
}

export default Nextsetup