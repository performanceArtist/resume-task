import { Level } from '../src/generated/prisma/enums';

export const skillsByName: Record<string, Level> = {
  // Languages
  TypeScript: Level.HIGH,
  JavaScript: Level.HIGH,
  Haskell: Level.MEDIUM,
  Python: Level.LOW,
  Purescript: Level.LOW,

  // Backend
  NestJS: Level.HIGH,
  Express: Level.MEDIUM,
  Prisma: Level.HIGH,
  TypeORM: Level.HIGH,
  PostgreSQL: Level.HIGH,
  RabbitMQ: Level.MEDIUM,
  Redis: Level.MEDIUM,
  Docker: Level.MEDIUM,

  // Frontend
  React: Level.HIGH,
  'Next.js': Level.HIGH,
  Redux: Level.HIGH,
  'Redux Toolkit': Level.MEDIUM,
  'Redux-Saga': Level.MEDIUM,
  'React Query': Level.MEDIUM,
  Zustand: Level.LOW,
  Tailwind: Level.MEDIUM,
  Sass: Level.LOW,

  // Blockchain / Smart contracts
  Plutus: Level.MEDIUM,
  Viem: Level.MEDIUM,

  // Other
  RxJS: Level.MEDIUM,
  'fp-ts': Level.MEDIUM,
};

export const createData = {
  name: 'Герасимов Вячеслав Андреевич',
  description: 'Fullstack веб-разработчик',
  experiences: {
    create: [
      {
        company: 'Metalamp',
        position: 'Fullstack веб-разработчик',
        startDate: new Date('2024-01-01'),
        endDate: new Date('2026-06-01'),
        projects: {
          create: [
            {
              name: 'Token Tactics',
              description:
                'Игра по имитации криптоторговли с интерфейсом telegram-mini-apps. Написание большей части бекенда — логика торговли, обновление цен активов, лимиты операций, оплата в ton, нотификации. Поддержка после запуска и масштабирование под множество инстансов (10000+ пользователей). Создание документации проекта.',
              link: null,
            },
            {
              name: 'Arkitekt dex',
              description:
                'Крипто-обменник. Добавление функционала торговли криптовалютой и логики к существующему фронтенду. Реализация логики авторизации, торговли, стейкинга и наград. Поддержка.',
              link: null,
            },
            {
              name: 'Arbata',
              description:
                'Проект для контроля пользования ии-чатботами внутри компании (создание фильтров тем и слов, отправка отчетов). Стартовал с проработки архитектуры и выбора стека, доведен до стадии MVP.',
              link: null,
            },
            {
              name: 'Adadao',
              description:
                'Stablecoin-протокол на цепи кардано. Поддержка, багфикс.',
              link: null,
            },
          ],
        },
      },
      {
        company: 'VTB',
        position: 'Frontend разработчик',
        startDate: new Date('2022-11-01'),
        endDate: new Date('2024-12-01'),
        projects: {
          create: [
            {
              name: 'Внутренний сервис с микрофронтенд-архитектурой',
              description:
                'Проект с около 9 командами по 2-3 разработчика. Завершил свою часть, затем взял ответственность за написание и поддержку фасада (главного приложения) и координацию подключения микрофронтендов. Помощь остальным командам с подготовкой проектов и технической консультацией.',
              link: null,
            },
          ],
        },
      },
      {
        company: 'Cardano (IOHK)',
        position: 'Разработчик smart-контрактов',
        startDate: new Date('2021-03-01'),
        endDate: new Date('2021-11-01'),
        projects: {
          create: [
            {
              name: 'Lending pool',
              description:
                'Займ криптовалюты с использованием иной криптовалюты в качестве залога. Приложение с использованием smart-контрактов на языке Plutus, включающее бекенд и фронтенд.',
              link: null,
            },
            {
              name: 'NFT marketplace',
              description:
                'Создание и продажа NFT. Приложение с использованием smart-контрактов на языке Plutus, включающее бекенд и фронтенд.',
              link: null,
            },
          ],
        },
      },
      {
        company: 'Juspay',
        position: 'Backend разработчик',
        startDate: new Date('2020-10-01'),
        endDate: new Date('2021-03-01'),
        projects: {
          create: [
            {
              name: 'Credit',
              description:
                'Платформа для упрощения получения кредитов для частных и юридических лиц. Создание фичей, рефакторинг.',
              link: null,
            },
          ],
        },
      },
      {
        company: 'Devexperts',
        position: 'Frontend разработчик',
        startDate: new Date('2019-12-01'),
        endDate: new Date('2020-10-01'),
        projects: {
          create: [
            {
              name: 'Finosoft',
              description:
                'Торговая платформа (биржа). Поддержка и интеграция фич.',
              link: null,
            },
            {
              name: 'Avatrade',
              description:
                'Аналогичный Finosoft проект. Создание новых фичей и изменений, затрагивающих архитектуру.',
              link: null,
            },
          ],
        },
      },
      {
        company: 'Metalamp',
        position: 'Frontend разработчик',
        startDate: new Date('2019-08-01'),
        endDate: new Date('2019-12-01'),
        projects: {
          create: [
            {
              name: 'Datalight',
              description:
                'Платформа для аналитики криптовалют (создание кастомных виджетов — графиков, таблиц, чартов). Поддержка и интеграция новых фич.',
              link: null,
            },
            {
              name: 'Rocket compute',
              description:
                'MVP для аренды компьютеров с целью проведения тяжелых вычислений на удаленной машине. Старт с использованием starter-кита и заложение основных фичей. Созданы две библиотеки: redux-unit (уменьшение boilerplate при работе с redux) и redux-saga-sockets (интеграция websocket с redux-saga).',
              link: 'https://github.com/performanceArtist/redux-unit',
            },
          ],
        },
      },
      {
        company: 'Elesy',
        position: 'Fullstack разработчик',
        startDate: new Date('2019-06-01'),
        endDate: new Date('2019-08-01'),
        projects: {
          create: [
            {
              name: 'Дорожное покрытие',
              description:
                'Проект со стеком react-redux-typescript + node-express + postgreSQL. Отображение данных о дорожном покрытии в реальном времени и режиме истории в виде графиков и маршрутов на карте, возможность создания заданий с маршрутами/количеством полос и прочими данными для водителей, отдельный интерфейс для выполнения и отмены этих заданий.',
              link: null,
            },
          ],
        },
      },
    ],
  },
  skills: {
    create: Object.entries(skillsByName).map(([name, level]) => ({
      skill: { connect: { name } },
      level,
    })),
  },
};
