export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62d77775cd5e5e6230444981",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-n882xdwk",
                  apiId: "359b6b34-9505-4152-b78f-865c93d962de",
                },
                {
                  buildHookId: "62d77776b335a16417f85a8b",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-557x8rq3",
                  apiId: "bafbdb56-fc18-414f-a956-dc4ef0d3008a",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/WebMaster0405/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-557x8rq3.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
