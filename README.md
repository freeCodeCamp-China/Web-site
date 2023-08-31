# freeCodeCamp 中文社区

欢迎来到 **freeCodeCamp 中文社区**！

我们是一群充满激情的编程爱好者，致力于为大家打造一个充满活力的学习和交流平台。

无论你是编程新手还是老鸟，我们都欢迎你加入我们的行列。在这里，你将发现来自全国各个城市的小伙伴们，他们和你一样热爱编程。北京、上海、杭州、广州、深圳、成都……每个城市都有独特的技术风景线等待你去探索！

我们不仅举办丰富多彩的线下技术活动，涵盖从编码到前沿技术的各个领域。还有那令人兴奋的【结对编程】活动，让你和其他小伙伴们面对面，共同攻克编程难关。

而网站上更是汇集了大量精彩的技术文章和学习资源。无论你对哪个领域感兴趣，都能在这里找到知识的宝藏。不管是想要掌握新技能，还是分享你的经验，这里都是你的舞台！

加入我们，和志同道合的小伙伴们一起，在编程的海洋里畅游。无论你是想要成为全职开发者，还是仅仅把编程当作一项有趣的业余爱好，这里都是你展翅高飞的起点。

快来 freeCodeCamp 中文社区，让我们一起编织梦想，点亮代码的星空！让技术的火花，在这里绽放无限可能！
## Next-Bootstrap.ts

该项目是使用 [`create-next-app`][6] 脚手架引导安装，基于 [TypeScript][2]、[Next.js][3]、[Bootstrap][4] 和 [Workbox][5] 的 [React][1] 项目。

<!--[![NPM Dependency](https://david-dm.org/idea2app/next-bootstrap-ts.svg)][7]-->
[![CI & CD](https://github.com/idea2app/Next-Bootstrap-ts/actions/workflows/main.yml/badge.svg)][8]

### 项目技术栈

- 编程语言: [TypeScript v5][2]
- 组件引擎: [Nextjs v13][3]
- 组件套件: [Bootstrap v5][4]
- PWA 框架: [Workbox v6][5]
- 状态管理: [MobX v6][9]
- CI / CD: [GitHub Actions][11] + [Vercel][12]

### 启动

第一步, 运行开发服务器:
```bash
npm i pnpm -g
pnpm dev
```

在浏览器中打开 http://localhost:3000 查看结果。

[API routes][13] 可以通过 http://localhost:3000/api/hello 访问，对应端点可以在 `pages/api/hello.ts` 中进行修改。

`pages/api` 目录映射为 `/api/*`。此目录中的文件被视为 [API routes][13] 而不是 React 页面。

- [Next.js Documentation][14] - 了解 Next.js 功能和 API
- [Learn Next.js][15] - 一个交互式 Next.js 教程

你可以查看 Next.js 的 [GitHub Repository][16] - 欢迎提供反馈和贡献！

### 部署

#### Vercel

- 部署 Next.js 应用程序的最简单方法是使用 Next.js 创建者 Vercel 提供的 [Vercel 平台][12]。

- 查看 [Next.js 部署文档][17] 了解更多详细信息。

#### Docker
```shell
pnpm pack-image
pnpm container
```

[1]: https://reactjs.org/
[2]: https://www.typescriptlang.org/
[3]: https://nextjs.org/
[4]: https://getbootstrap.com/
[5]: https://developers.google.com/web/tools/workbox
[6]: https://github.com/vercel/next.js/tree/canary/packages/create-next-app
[7]: https://david-dm.org/idea2app/next-bootstrap-ts
[8]: https://github.com/idea2app/Next-Bootstrap-ts/actions/workflows/main.yml
[9]: https://github.com/mobxjs/mobx/tree/mobx4and5/docs
[11]: https://github.com/features/actions
[12]: https://vercel.com/new?filter=next.js
[13]: https://nextjs.org/docs/api-routes/introduction
[14]: https://nextjs.org/docs
[15]: https://nextjs.org/learn
[16]: https://github.com/vercel/next.js/
[17]: https://nextjs.org/docs/deployment
