const next = {
    name : "next",
    data : [
        {
            number : 1,
            sections : "Frontend developer",
            tutorial : "Next.js",
            name : "مقدمة عن Next.js",
            description : "و هو إطار مبني بال React.js للإنتاج التطبيقات الفعالة و المبتكرة",
            link : "/tutorial/next/index"
        },
        {
            number : 2,
            sections : "Frontend developer",
            tutorial : "Next.js",
            name : "تنصيب Next.js",
            description : "طريقة تنصيب Next.js من أجل الحصول على مشروع جديد",
            link : "/tutorial/next/nextsetup"
        },
        {
            number : 3,
            sections : "Frontend developer",
            tutorial : "Next.js",
            name : "ملفات مشروع Next.js",
            description : "التعرف على ملفات مشروع Next.js",
            link : "/tutorial/next/nextfile"
        },
        {
            number : 4,
            sections : "Frontend developer",
            tutorial : "Next.js",
            name : "تعلم الصفحات Pages",
            description : "التعرف على Pages في مشروع Next.js",
            link : "/tutorial/next/nextpages"
        },
        {
            number : 5,
            sections : "Frontend developer",
            tutorial : "Next.js",
            name : "تعلم المسارات Routing",
            description : "التعرف على Routing في مشروع Next.js",
            link : "/tutorial/next/nextrouting"
        },
        {
            number : 6,
            sections : "Frontend developer",
            tutorial : "Next.js",
            name : "تعلم المسارات الديناميكية Dynamic Routes",
            description : "التعرف على Dynamic Routes في مشروع Next.js",
            link : "/tutorial/next/nextdynamicroutes"
        },
        {
            number : 7,
            sections : "Frontend developer",
            tutorial : "Next.js",
            name : "تعلم useRouter() next/router",
            description : "التعرف على useRouter() next/router في مشروع Next.js",
            link : "/tutorial/next/nextuserouter"
        }
    ],
    message : "Link fetched successfully"
};

const sass = {
    name : "Sass",
    data : [
        {
            number : 1,
            sections : "Frontend developer",
            tutorial : "Sass",
            name : "مقدمة عن Sass",
            description : "Sass و هو عبارة عن إضافة للغة CSS حيث يتم تحويل أكواد Sass عن طريق معالج إلى أكواد CSS",
            link : "/tutorial/sass/index"
        },
        {
            number : 2,
            sections : "Frontend developer",
            tutorial : "Sass",
            name : "تنصيب إضافات وبرامج لعمل Sass",
            description : "ماهي الإضافات و البرامج اللازمة لعمل Sass",
            link : "/tutorial/sass/sassextensions"
        }
    ],
    message : "Link fetched successfully"
};

const getTutorial = (title) => {

    let tutorial;
    if(title == 'next') {tutorial = next.data}
    if(title == 'sass') {tutorial = sass.data}

    return tutorial
}

export default getTutorial