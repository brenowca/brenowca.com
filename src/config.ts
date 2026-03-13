export const SITE = {
  website: "http://brenowca.com", // replace this with your deployed domain
  author: "Breno W. Carvalho",
  profile: "https://github.com/brenowca",
  desc: "Researcher, builder and writer. I write about ai interpretability and making things.",
  title: "Breno W. Carvalho",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/brenowca/brenowca.com/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "America/Sao_Paulo", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
