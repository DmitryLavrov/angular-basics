# [Курс Angular 9. (2020)](https://webformyself.com/node/?utm_medium=systema&utm_source=nashikursi&utm_campaign=node)

## Автор: Владилен Минин

### Технологии:

- [Фреймворк Angular](https://angular.io)
---
### Дополнительные ресурсы:
- [JSONPlaceholder](http://jsonplaceholder.typicode.com/)
```
https://jsonplaceholder.typicode.com/todos?_limit=2
  get-запрос на 2 фейковые записи из базы todos
```
### Установка проекта:

```
npm install -g @angular/cli
cd ~/Documents/VSCode
ng new angular-basics
cd angular-basics/
npm start
  получаем: Angular Live Development Server is listening on localhost:4200

Установить http-server (глобально) - для запуска продакшен  
npm i -g http-server

Запустить http-server (порт 8080) в папке продакшен
cd dist/angular-basics/
http-server -p 8080
```

---
### Команды Angular
```
Создать компонент (generate component)
ng g c post-form --skipTests
ng g c post --skipTests

Создать директиву (generate directive) в папке directives
ng g d directives/style3 --skipTests

Создать пайп (generate pipe) в папке pipes
ng g p pipes/ex-marks --skipTests

Создать сервис (generate srevice) в папке services
ng g s services/local-counter --skipTests

Превратить приложение в PWA (Прогрессивное web-приложение)
ng add @angular/pwa

Сгенерировать продакшен в папке dist
ng build --prod

Просмотр покрытия тестами (результат в папке coverage)
ng test --code-coverage
```
### Настройка git

```
git init
git add .
git commit -m "Первый комментарий"
git remote add origin git@github.com:DmitryLavrov/nodejs-express.git
git branch -M main
git push -u origin main
```

---
