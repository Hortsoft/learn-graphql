---
title: "Create Relationship"
metaTitle: "Create Relationship | Hasura GraphQL Tutorial"
metaDescription: "This part of the tutorial covers how to create a relationship between two tables using Hasura console"
---

Now that the foreign key constraint is created, Hasura Console automatically suggests relationships based on that.

Head over to `Relationships` tab under `todos` table and you should see a suggested relationship like below:

![Todos Relationships Page](https://graphql-engine-cdn.hasura.io/learn-hasura/assets/graphql-hasura/todos-relationship-page.png)

Click on `Add` in the suggested object relationship.

Enter the relationship name as `user` (already pre-filled) and click on `Save`.

![User Object Relationship](https://graphql-engine-cdn.hasura.io/learn-hasura/assets/graphql-hasura/todos-relationship-user.png)

A relationship has now been established between todos and users table.
