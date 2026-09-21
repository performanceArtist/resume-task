### Запуск проекта

1. `npm install`

2. Создать свой `.env` или удалить `.example` из имени `.env.example`.

3. `docker compose up -d`

4. `npx prisma generate`

5. `npx prisma migrate deploy`

6. `npx prisma db seed`

7. `npm start`

8. http://localhost:3000/graphql

```
{
  profile {
    name
    description
    experiences {
      company
      position
      startDate
      endDate
      projects {
        name
        description
        link
      }
    }
    skills {
      name
      level
    }
  }
}
```