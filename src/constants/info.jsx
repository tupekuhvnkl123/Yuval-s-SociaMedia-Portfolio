import heroImage from "../assets/Hero.jpg";
import aboutImage from "../assets/AboutMe.jpg";
import whyImage from "../assets/Why.png";

export const heroInfo = {
  name: { english: "Yuval Cohen", hebrew: "יובל כהן" },
  profession: {
    english: "SOCIAL MEDIA MARKETING & CONTENT CREATOR",
    hebrew: "יוצרת תוכן ומנהלת סושיאל",
  },
  basedIn: { english: "Based in Israel, Tel Aviv", hebrew: "תל אביב, ישראל" },
  image: heroImage,
  instagramLink: "https://www.instagram.com/yuco_media",
};
export const aboutInfo = {
  image: aboutImage,
  name: { english: "Yuval Cohen", hebrew: "יובל כהן" },
  text: {
    hebrew: (
      <>
        אני יובל כהן בת 25 מרמת גן החלום שלי תמיד היה להרים עסקים שיש להם
        פוטנציאל ולהראות את היחודיות שלהם
        <br />
        <br />
        אני יוצרת תוכן ומנהלת סושיאל בכל התחומים אוכל, ביוטי, חיות, סירטוני
        אווירה, סירטוני תדמית, תוכן מבוסס משתמשים ועוד. בואו ביחד נרים את העסק
        ונגרום לכמה שיותר להגיע אליכם ושתהיו בפה של כולם
      </>
    ),
    english: (
      <>
        I&apos;m Yuval Cohen, 25, from Ramat Gan. My dream has always been to
        uplift businesses with potential and showcase their uniqueness.
        <br />
        <br />I create and manage content across various areas including food,
        beauty, animals, and more. From videos to user-generated content (UGC)
        and images, I aim to elevate businesses and maximize their reach.
        Let&apos;s work together to make your business known and talked about by
        everyone.
      </>
    ),
  },
};

export const whyInfo = {
  image: whyImage,
  text: {
    english: (
      <>
        My passion for social media marketing stems from my love for creativity
        and innovation. Social media provides a powerful platform to share
        unique stories and bring brands to life.
        <br />
        <br />
        I am captivated by the ever-evolving landscape of digital communication
        and the potential it holds for businesses to grow and thrive. By
        leveraging creative content and strategic marketing, I aim to help
        brands stand out and achieve their goals.
        <br />
        <br />
        My goal is to use my skills to elevate businesses, ensuring their voices
        are heard and their messages resonate with their target audiences.
      </>
    ),
    hebrew: (
      <>
        בחרתי בשיווק במדיה החברתית ויצירת תוכן בגלל החיבור שלי ליצירתיות,
        חדשנות, ויחודיות. המדיה החברתית מספקת פלטפורמה עוצמתית לשתף סיפורים
        ייחודיים ולהביא מותגים לחיים
        <br />
        <br />
        אני אוהבת לראות את ההתפתחות של התקשורת הדיגיטלית ואת הפוטנציאל שלה לגרום
        לעסקים לצמוח ולשגשג. עם ניצול נכון של תוכן ושיווק אסטרטגי אני שואפת
        לעזור למוצרים וחברות להתבלט ולהשיג את המטרות שלהם
        <br />
        <br />
        המטרה שלי היא להשתמש ביכולות שלי כדי להרים עסקים ולוודא שהם מתפרסמים
        בצורה נכונה ומגיעים לקהל היעד שלהם
      </>
    ),
  },
};

export const historyInfo = {
  cards: [
    {
      title: { english: "Army", hebrew: "צבא" },
      years: "2017-2019",
      text: {
        english:
          "I served as a 'Discipline Non-Commissioned Officer' at the 'HaKirya' military base. I was responsible for overseeing the behavior, ensuring compliance with regulations, and ensuring tasks were completed on time by the soldiers.",
        hebrew:
          "שירתתי בקרייה בתור משקית משמעת. הייתי אחראית על ניהול והבטחת עמידה בסטנדרטים של התנהגות, דיגום וביצוע משימות של החיילים. מילאתי תפקיד מרכזי בפיקוח וביצוע משימות שונות וככה שמרתי על סטנדרטים גבוהים ביחידה",
      },
    },
    {
      title: { english: "Today", hebrew: "היום" },
      years: "2024",
      text: {
        english:
          "I work independently in the Nails and Eyebrows Manicure field. In 2023, I started a PPC course at the 'Habetzefer' academy, and after 7 months, I transitioned to the Social Media Manager course. Today, I successfully created content for four companies.",
        hebrew:
          "אני עובדת עצמאית בתחום הציפורניים וגבות. ב2023 התחלתי קורס ניהול קמפיינים ממומנים ב'הבצפר' ולאחר 7 חודשים החלטתי לעבור לקורס ניהול תוכן ברשתות החברתיות. כיום אני עושה תוכן עצמאית לעסקים",
      },
    },
  ],
  languages: { english: ["Hebrew", "English"], hebrew: ["עברית", "אנגלית"] },
  skills: {
    english: [
      "Social Media Management",
      "Content Creation",
      "Videos Editing",
      "Photoshoot Days",
      "Trend Monitoring",
      "Content Strategy",
      "Audience Targeting",
      "Trend Awareness",
    ],
    hebrew: [
      "ניהול סושיאל",
      "יצירת תוכן",
      "עריכת סרטונים",
      "ימי צילום",
      "ניתוח מידע ודפוס",
      "תוכן אסטרטגי",
      "מיקוד קהל",
      "מודעות לטרנדים חדשים",
    ],
  },
};

export const examplesFirstSectionInfo = [
  {
    srcUrl:
      "https://res.cloudinary.com/dnxqlkwvr/video/upload/f_auto:video,q_auto/v1/Yuval's%20SocialMedia%20Portfolio/edj3dcmm9i6jymerfeq5",
    title: "Adiva Studio",
    poster:
      "https://res.cloudinary.com/dnxqlkwvr/image/upload/f_auto,q_auto/v1/Yuval's%20SocialMedia%20Portfolio/AdivaStudio",
  },
  {
    srcUrl:
      "https://res.cloudinary.com/dnxqlkwvr/video/upload/f_auto:video,q_auto/v1/Yuval's%20SocialMedia%20Portfolio/nm9jz3pr5r8upqkhaae8",
    title: "La Goffre",
    poster:
      "https://res.cloudinary.com/dnxqlkwvr/image/upload/f_auto,q_auto/v1/Yuval's%20SocialMedia%20Portfolio/laGoffre",
  },
  {
    srcUrl:
      "https://res.cloudinary.com/dnxqlkwvr/video/upload/f_auto:video,q_auto/v1/Yuval's%20SocialMedia%20Portfolio/jz9iep8bizj8op79alhv",
    title: "Wedding I",
    poster:
      "https://res.cloudinary.com/dnxqlkwvr/image/upload/f_auto,q_auto/v1/Yuval's%20SocialMedia%20Portfolio/wedding1",
  },
];
export const examplesSecondSectionInfo = [
  {
    srcUrl:
      "https://res.cloudinary.com/dnxqlkwvr/video/upload/f_auto:video,q_auto/v1/Yuval's%20SocialMedia%20Portfolio/tm5tn8ikb3plfhgxmapf",
    title: "Meat IL",
    poster:
      "https://res.cloudinary.com/dnxqlkwvr/image/upload/f_auto,q_auto/v1/Yuval's%20SocialMedia%20Portfolio/meatIL",
  },
  {
    srcUrl:
      "https://res.cloudinary.com/dnxqlkwvr/video/upload/f_auto:video,q_auto/v1/Yuval's%20SocialMedia%20Portfolio/eln7almhpqmgoxztodya",
    title: "Pet Store III",
    poster:
      "https://res.cloudinary.com/dnxqlkwvr/image/upload/f_auto,q_auto/v1/Yuval's%20SocialMedia%20Portfolio/animals3",
  },
  {
    srcUrl:
      "https://res.cloudinary.com/dnxqlkwvr/video/upload/f_auto:video,q_auto/v1/Yuval's%20SocialMedia%20Portfolio/uxgyes2eiizcigz8qd8p",
    title: "Book",
    poster:
      "https://res.cloudinary.com/dnxqlkwvr/image/upload/f_auto,q_auto/v1/Yuval's%20SocialMedia%20Portfolio/book",
  },
  {
    srcUrl:
      "https://res.cloudinary.com/dnxqlkwvr/video/upload/f_auto:video,q_auto/v1/Yuval's%20SocialMedia%20Portfolio/mgeasmybfec5ykaxugdh",
    title: "Pet Store I",
    poster:
      "https://res.cloudinary.com/dnxqlkwvr/image/upload/f_auto,q_auto/v1/Yuval's%20SocialMedia%20Portfolio/animals1",
  },
];

export const footerInfo = {
  phone: "050-443-3690",
  email: "yuvalke656@gmail.com",
  location: "Israel, Tel Aviv",
};

export const languagesInfo = {
  hebrew: "hebrew",
  english: "english",
};
