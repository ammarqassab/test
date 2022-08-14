import React from 'react'
import PageTutorial from '../../../src/components/PageTutorial/PageTutorial'

const Nextfile = () => {
    return (
        <>
            <PageTutorial apiLocalUrl='next'>
                <div className='mdx'>
                    <h1>يحتوي مشروع <code>Next.js</code> على عدة ملفات وهي :</h1>
                    <ul>
                        <li><code>pages</code> : و هو ملف يحتوي على صفحات التي سوف تظهر في التطبيق</li>
                        <li><code>public</code> : و هو ملف يحتوي على الملفات أو الصور العامة التي يمكن الوصول إليها من كل التطبيق</li>
                        <li><code>styles</code> : و هو الملف يحتوي على ملفات <code>CSS</code> لتطبيق</li>
                        <li><code>next.config.js</code> : و هو ملف يحتوي على إعدادت التطبيق من متغيرات أو إعدادات التكوين للتطبيق</li>
                        <li><code>package.json</code> : و هو ملف يحتوي على مكتبات التطبيق و أوامر التشغيل لتطبيق</li>
                    </ul>
                </div>
            </PageTutorial>
        </>
    );
}

export default Nextfile