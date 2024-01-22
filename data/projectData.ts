export const projectList = {
    projects: [
        {
            id: 'business-intelligence',
            title: "Business Intelligence website",
            skillsIcon: 'business_Intelligence.svg',
            intro: 'Team Collaboration with an External Designer, Employing a Tech Stack Featuring Gatsby, GraphQL, Figma, Contentful, Mailchimp, Netlify..',
            imageUrl: "business_Intelligence_01.png",
        },
        {
            id: 'library-api',
            title: "Library API (REST)",
            skillsIcon: 'library_api.svg',
            skillsIconText:'Open API',
            intro:'Backend app, designed for book borrowing services, was developed using TypeScript, Node.js, Express, and MongoDB as part of a full-stack training project.',
            imageUrl: "library_api_01.png",
        },
        {
            id: 'text-similarity-api',
            imageUrl: "text_similarity_api_01.png",
            title: "Text Similarity Api",
            skillsIcon: 'text_similarity_api.svg',
            skillsIconText: 'OpenAI | Google Auth',
            intro:' a full-stack app designed to determine the similarity between two texts, developed by NextJS 14, Prisma, OpenAI, Tailwind, Google Auth..'
        },
    ]
}

export const projectsData: ProjectType[] = [
    {
        id: 'business-intelligence',
        title: 'Business Intelligence Website',
        images: [
            'business_Intelligence_01.png',
            'business_Intelligence_02.png',
            'business_Intelligence_03.png',
            'business_Intelligence_04.png',
            'business_Intelligence_05.png'
        ],
        github: 'https://github.com/moscuet/Project-Business-consulting-intelligence',
        url: 'https://awesome-mahavira-48e62b.netlify.app/',
        techStack: ['Gatsby.js', 'GraphQL', 'Figma', 'Contentful', 'Mailchimp', 'Netlify'],
        story: "In this completed project for Pragmatic Intelligence Consulting, I worked alongside a team of developers and an external designer. My role was to design and develop key website components, specifically the Contact-card and Contact-form. Additionally, I was responsible for building the Contact page and enhancing the site's search engine optimization (SEO). Because of privacy reasons, we can't share the code publicly. The site demo was deployed on Netlify by removing the company's credentials. To explore the application's functionalities, kindly visit the deployed demo site.",
        roles: [
            'Design and Development - Engaged in conceptualizing and crafting the design, and developed key components such as the Contact-card and Contact-form',
            'Page Construction - Built the Contact page with attention to detail and user experience.',
            "SEO Implementation - Implemented search engine optimization to enhance the website's online visibility."
        ],
        developmentSteps: [
            { title: 'Idea Generation', date: '01.01.2023' },
            { title: 'Planning', date: '10.02.2023' },
            { title: 'Design', date: '05.03.2023' },
            { title: 'Development', date: '15.04.2023' },
            { title: 'Deployment', date: '30.05.2023' },
        ]
    },
    {
        id: 'library-api',
        title: 'Library API (REST)',
        images: [
            'library_api_01.png',
            'library_api_02.png',
            'library_api_03.png',
            'library_api_04.png',
        ],
        github: 'https://github.com/moscuet/library-server100',
        url: 'https://library-server100.up.railway.app/api',
        techStack: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'Jest', 'Supertest', 'JWT', 'Nodemon', 'ESLint'],
        story: "This backend application is designed to support book borrowing services for public libraries and is constructed using TypeScript, Node.js, Express, and MongoDB. The application features an open API and was developed from scratch, including the design of the data structure. It was created as part of a training project for the final full-stack assignment in 2021. To discover and test the endpoints of this Open API, please visit the GitHub repository.",
        roles: [
            'Database Design - Crafted the data architecture and optimized database operations for the application.',
            'Backend Development - complete backend cycle, from initial design to production deployment.',
            'API Development - Created a scalable open API, adhering to RESTful standards for book borrowing services.',
            'Deployment - Led the backend deployment'
        ],
        developmentSteps: [
            { title: 'Idea Generation', date: '01.01.2023' },
            { title: 'Planning', date: '10.02.2023' },
            { title: 'Design', date: '05.03.2023' },
            { title: 'Development', date: '15.04.2023' },
            { title: 'Deployment', date: '30.05.2023' },
        ]
    },
    {
        id: 'text-similarity-api',
        title: 'Library API (REST)',
        images: [
            'text_similarity_api_01.png',
            'text_similarity_api_02.png',
            'text_similarity_api_03.png',
            'text_similarity_api_04.png',
        ],
        github: 'https://github.com/moscuet/text-similarity',
        url: 'https://textsimilarityapi-eight.vercel.app/',
        techStack: ['NextJS 14', 'Tailwind CSS', 'OpenAI Integration', 'Prisma', 'Google Auth', 'Redis/Upstash'],
        story: "This application is a text similarity API, designed to analyze and compare two pieces of text, built as an open API using Next.js 14. To access this service, users can obtain an API key through a user-friendly frontend interface. The API leverages OpenAI's text embedding technology for accurate similarity assessments. The system is secured with Google authentication via NextAuth.js, and backend operations are efficiently managed with Prisma Client and a Planetscale database. Upstash Redis with rate limiting is used to ensure top-notch security. Developed as part of my advanced learning, this project effectively merges a straight-forward front-end for user interaction with a secure backend.",
        roles: [
            "Full-Stack Development - Led the development of both frontend and backend using Next.js 14, creating a seamless user experience for API key generation and integrating advanced text analysis features.",
            "API Integration and Security - Implemented and secured the API using OpenAI's text embedding technology, with Google authentication through NextAuth.js for secure access and Upstash Redis for rate limiting.",
            "Database and Backend Management - Managed backend operations with Prisma Client, utilizing a Planetscale database to ensure efficient performance and data integrity."
        ]
        ,
        developmentSteps: [
            { title: 'Idea Generation', date: '01.01.2023' },
            { title: 'Planning', date: '10.02.2023' },
            { title: 'Design', date: '05.03.2023' },
            { title: 'Development', date: '15.04.2023' },
            { title: 'Deployment', date: '30.05.2023' },
        ]
    },
]