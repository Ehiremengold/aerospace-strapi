module.exports = {
  "rest-cache": {
    config: {
      provider: {
        name: "memory",
        options: {
          max: 32767,
          maxAge: 3,
          updateAgeOnGet: false,
        },
      },
      strategy: {
        debug: true,
        maxAge: 3600,
        updateAgeOnGet: false,
        contentTypes: [
          {
            contentType: "api::application.application",
            maxAge: 60 * 60 * 100,
          },
          { contentType: "api::blog-post.blog-post", maxAge: 60 * 60 * 100 },
          {
            contentType: "api::quarterly-report.quarterly-report",
            maxAge: 60 * 60 * 100,
          },
          {
            contentType: "api::contact-us.contact-us",
            maxAge: 60 * 60 * 100,
          },
          {
            contentType: "api::job.job",
            maxAge: 60 * 60 * 100,
          },
        ],
      },
    },
  },
};
