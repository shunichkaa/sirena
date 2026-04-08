# Sirena Landing

Лендинг и страница документов автошколы «Сирена» на React + Vite.

## Скрипты

- `npm run dev` — локальная разработка
- `npm run build` — production-сборка
- `npm run preview` — предпросмотр сборки
- `npm run lint` — проверка ESLint
- `npm run test` — запуск unit-тестов (Vitest)

## Деплой

Сайт публикуется на GitHub Pages из ветки `main` через workflow `.github/workflows/deploy-pages.yml`.

После сборки запускается prerender-скрипт `scripts/prerender.mjs`, который добавляет статический HTML-контент для маршрутов `/` и `/documents` в `dist`.
