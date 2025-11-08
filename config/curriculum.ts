export interface Course {
  id: string;
  title: string;
  description: string;
  link: string;
}

/**
 * Stable/Legacy curriculum configuration based on freeCodeCamp's archived courses
 * @see {@link https://github.com/freeCodeCamp/freeCodeCamp/blob/94c53c6144a6fa264801aeff9724c52b082b3461/shared/config/curriculum.ts}
 */
export const stableCourses: Course[] = [
  {
    id: 'responsive-web-design-22',
    title: '响应式网页设计',
    description:
      '在响应式网页设计课程中，你将学习开发人员用来编写网页的语言：HTML（超文本标记语言）用于创建内容，CSS（级联样式表）用于样式设计。',
    link: 'https://www.freecodecamp.org/chinese/learn/2022/responsive-web-design/',
  },
  {
    id: 'javascript-algorithms-and-data-structures-v8',
    title: 'JavaScript 算法和数据结构',
    description:
      '在 JavaScript 算法和数据结构课程中，你将学习 JavaScript 的基础知识，包括变量、数组、对象、循环和函数。',
    link: 'https://www.freecodecamp.org/chinese/learn/javascript-algorithms-and-data-structures-v8/',
  },
  {
    id: 'front-end-development-libraries',
    title: '前端开发库',
    description:
      '现在你已经熟悉了 HTML、CSS 和 JavaScript，可以通过学习一些业界最流行的前端库来提升你的技能了。',
    link: 'https://www.freecodecamp.org/chinese/learn/front-end-development-libraries/',
  },
  {
    id: 'data-visualization',
    title: '数据可视化',
    description:
      '数据无处不在。但如果它只是在数据库里，它就没有多大意义。在数据可视化课程中，你将使用 D3.js 库构建图表、图形和地图，以展示不同的数据。',
    link: 'https://www.freecodecamp.org/chinese/learn/data-visualization/',
  },
  {
    id: 'relational-database',
    title: '关系数据库',
    description:
      '对于这些课程，你将使用真正的开发工具和软件，包括 VS Code、PostgreSQL 和 Linux / Unix 命令行来完成交互式教程并构建项目。',
    link: 'https://www.freecodecamp.org/chinese/learn/relational-database/',
  },
  {
    id: 'back-end-development-and-apis',
    title: '后端开发和 API',
    description:
      '到目前为止，你只在浏览器中使用 JavaScript。但 JavaScript 也可以用于后端或服务器。在后端开发和 API 课程中，你将学习如何使用 Node.js 和 npm（Node Package Manager）编写后端应用。',
    link: 'https://www.freecodecamp.org/chinese/learn/back-end-development-and-apis/',
  },
  {
    id: 'quality-assurance',
    title: '质量保证',
    description:
      '随着你的程序或网络应用程序变得更加复杂，你需要测试它们以确保新的更改不会破坏其原有功能。在质量保证课程中，你将学习如何使用 Chai 编写测试来确保你的应用程序按预期工作。',
    link: 'https://www.freecodecamp.org/chinese/learn/quality-assurance/',
  },
  {
    id: 'scientific-computing-with-python',
    title: 'Python 科学计算',
    description:
      'Python 是目前最流行、最灵活的编程语言之一。你可以使用它做任何事情，从基础的脚本到机器学习。在 Python 科学计算课程中，你将学习 Python 基础知识。',
    link: 'https://www.freecodecamp.org/chinese/learn/scientific-computing-with-python/',
  },
  {
    id: 'data-analysis-with-python',
    title: 'Python 数据分析',
    description:
      '数据分析已经存在了很长时间。但直到几年前，开发人员还在使用昂贵的闭源工具（如 Tableau）。但随着 Python、SQL 和其他开源库的发展，数据分析变得更加容易。在 Python 数据分析课程中，你将学习数据分析的基础知识。',
    link: 'https://www.freecodecamp.org/chinese/learn/data-analysis-with-python/',
  },
  {
    id: 'information-security',
    title: '信息安全',
    description:
      '通过我们的信息安全课程，你将学习如何保护自己和他人免受在线威胁。你将学习信息安全的基础知识，包括如何安全地存储密码、如何使用加密以及如何保护你的网站免受常见威胁。',
    link: 'https://www.freecodecamp.org/chinese/learn/information-security/',
  },
  {
    id: 'machine-learning-with-python',
    title: 'Python 机器学习',
    description:
      '机器学习有许多实际应用。通过 Python 机器学习课程，你将学习使用 TensorFlow 框架构建几个神经网络，并探索更高级的技术，如自然语言处理和强化学习。',
    link: 'https://www.freecodecamp.org/chinese/learn/machine-learning-with-python/',
  },
  {
    id: 'college-algebra-with-python',
    title: 'Python 大学代数',
    description:
      '在这个 Python 大学代数课程中，你将学习从图形到评估函数，从解方程组到因式分解，从复合函数到相似三角形的所有内容。',
    link: 'https://www.freecodecamp.org/chinese/learn/college-algebra-with-python/',
  },
  {
    id: 'responsive-web-design',
    title: '响应式网页设计（旧版）',
    description:
      '在响应式网页设计课程中，你将学习开发人员用来编写网页的语言：HTML（超文本标记语言）用于创建内容，CSS（级联样式表）用于样式设计。',
    link: 'https://www.freecodecamp.org/chinese/learn/responsive-web-design/',
  },
  {
    id: 'javascript-algorithms-and-data-structures',
    title: 'JavaScript 算法和数据结构（旧版）',
    description:
      '在 JavaScript 算法和数据结构课程中，你将学习 JavaScript 的基础知识，包括变量、数组、对象、循环和函数。',
    link: 'https://www.freecodecamp.org/chinese/learn/javascript-algorithms-and-data-structures/',
  },
  {
    id: 'python-for-everybody',
    title: 'Python for Everybody',
    description:
      '这个课程是密歇根大学查尔斯·塞维伦斯博士为 freeCodeCamp.org 创建的。Python for Everybody 探索了 Python 3 编程语言的基础知识。',
    link: 'https://www.freecodecamp.org/chinese/learn/python-for-everybody/',
  },
];
