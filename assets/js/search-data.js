// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Courses I am/have been the (head*) teaching assistant for.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-i-started-my-master-studies-in-computer-science-majoring-in-reliable-and-secure-systems-minoring-in-data-management-at-eth-zurich-direct-doctorate-in-computer-science-program",
          title: 'I started my master studies in computer science, majoring in reliable and secure...',
          description: "",
          section: "News",},{id: "news-i-successfully-defended-my-master-s-thesis-at-the-information-security-group-of-eth-zurich-titled-mechanized-data-consistency-models-for-distributed-database-transactions-with-a-perfect-score-6-6",
          title: 'I successfully defended my master’s thesis at the Information Security Group of ETH...',
          description: "",
          section: "News",},{id: "news-i-have-been-accepted-to-attend-the-international-summer-school-marktoberdorf-2023-organized-by-tu-munich-on-safety-and-security-through-formal-verification-i-will-be-attending-the-school-from-1st-to-12th-of-august-2023",
          title: 'I have been accepted to attend the International Summer School Marktoberdorf 2023, organized...',
          description: "",
          section: "News",},{id: "news-i-have-officially-started-my-phd-at-the-information-security-group-eth-zurich",
          title: 'I have officially started my PhD at the Information Security Group, ETH Zurich!...',
          description: "",
          section: "News",},{id: "news-i-was-invited-by-proofs-swiss-to-present-my-poster-on-my-current-research-the-veriso-framework-for-verification-of-isolation-guarantees-in-database-transactions-at-the-proof-systems-for-mathematics-and-verification-event-at-epfl",
          title: 'I was invited by proofs.swiss to present my poster on my current research...',
          description: "",
          section: "News",},{id: "news-our-paper-pushing-the-limit-verified-performance-optimal-causally-consistent-database-transactions-was-accepted-at-tacas-2025",
          title: 'Our paper “Pushing the Limit: Verified Performance-Optimal Causally-Consistent Database Transactions” was accepted at...',
          description: "",
          section: "News",},{id: "news-our-paper-veriso-verifiable-isolation-guarantees-for-database-transactions-was-accepted-at-vldb-2025",
          title: 'Our paper “VerIso: Verifiable Isolation Guarantees for Database Transactions” was accepted at VLDB...',
          description: "",
          section: "News",},{id: "news-i-presented-our-pushing-the-limit-paper-at-tacas-2025-in-hamilton-canada",
          title: 'I presented our “Pushing the Limit” paper at TACAS 2025, in Hamilton, Canada....',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
