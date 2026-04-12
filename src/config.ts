export const SITE = {
  website: "https://ahmadasgf.my.id/", // replace this with your deployed domain
  author: "Ahmad",
  profile: "https://github.com/ahmaddassegaff",
  desc: "Backend developer sharing about some Backend stuff and devops",
  title: "Ahmad Dev Paper",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit on GitHub",
    url: "https://github.com/ahmaddassegaff/my-paper/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Jakarta", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
