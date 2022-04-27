# Sanity Content Studio for Europratsya

Main repo is **Gatsby project** can be found here: https://github.com/dejanjacimovic/europratsya

To run your Sanity backend, execute the following command:

```
npm install -g @sanity/cli
sanity login
sanity start
```

then navigate to: http://localhost:3333

🚨 Keep in mind that using incorrect `.env` variables may push changes to production. 🚨

# Admin panel

https://europratsya.sanity.studio/desk

## Make code prettier?

```
prettier --write schema/*.jsx
```

Install precommit:

```
pre-commit install
```

## Delete unused assets

```
sanity exec deleteUnusedAssets.js --with-user-token
```

## Read more

Now you can do the following things:

- [Read “getting started” in the docs](https://www.sanity.io/docs/introduction/getting-started?utm_source=readme)
- Check out the example frontend: [React/Next.js](https://github.com/sanity-io/tutorial-sanity-blog-react-next)
- [Read the blog post about this template](https://www.sanity.io/blog/build-your-own-blog-with-sanity-and-next-js?utm_source=readme)
- [Join the community Slack](https://slack.sanity.io/?utm_source=readme)
- [Extend and build plugins](https://www.sanity.io/docs/content-studio/extending?utm_source=readme)
