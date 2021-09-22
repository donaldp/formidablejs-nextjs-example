# Formidablejs with Next.js

This is a [Formidablejs](https://formidablejs.org) and [Next.js](https://nextjs.org/) project.
## Getting Started

First, clone the repo:

```bash
git clone https://github.com/donaldp/formidablejs-nextjs-example
```

Get the project ready:

```bash
cd formidablejs-nextjs-example
npm i
cp .env.example .env
npx craftsman key
npx craftsman cache
```

Build the project:

```bash
npx craftsman build
```

Finally, run the development server:

```bash
npm run start:dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `resources/js/pages/index.js`. The page auto-updates as you edit the file.

API routes can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `routes/api.imba`.

Any endpoint added under `routes/api.imba` will be available at [http://localhost:3000/api/:endpoint](http://localhost:3000/api/:endpoint).

To add a new Next.js route, add a new endpoint under `routes/web.imba`:

```py
Route.get '/about', do(request, reply\FastifyReply)
	reply.nextRender('/about')
```

`reply.nextRender('/about')` assumes that the page is located at `resources/js/pages/about.js`.

## Learn More

To learn more about Formidablejs and Next.js, take a look at the following resources:

- [Formidablejs Documentation](https://formidablejs.org/docs) - Learn about Formidablejs and how to use it.
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.
