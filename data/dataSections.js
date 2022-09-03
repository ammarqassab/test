const sections = {
    name : "sections",
    data : [
        {
            number : 1,
            name : "Frontend developer",
            description : "الواجهة الأمامية هي كل ما يراه المستخدم ويتفاعل معه في صفحة الموقع فهي الجزء المرئي من الموقع"
        }
    ],
    message : "Link fetched successfully"
};

const tutorialsections = {
    name : "tutorial",
    data : [
        {
            number : 1,
            sections : "Frontend developer",
            name : "Sass",
            description : "Sass و هو عبارة عن إضافة للغة CSS حيث يتم تحويل أكواد Sass عن طريق معالج إلى أكواد CSS",
            link : "/tutorial/sass/index"
        },
        {
            number : 2,
            sections : "Frontend developer",
            name : "Next.js",
            description : "Next.js و هو إطار مبني بال React.js للإنتاج التطبيقات الفعالة و المبتكرة",
            link : "/tutorial/next/index"
        }
    ],
    message : "Link fetched successfully"
}

const getTutorialSections = () => {
    return tutorialsections.data
}

const getSections = () => {
    return sections.data
}

export {getSections, getTutorialSections}