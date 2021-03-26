### < inlinecode > OR < /inlinecode>

The[`OR`](../../../ reference / api - reference / prisma - client - reference#or) < span class="api" > </span> operator states that one or more conditions must be true for the result to return any data. It is therefore logical to assume that using the `OR`
operator but supplying no filters, returns no results.

```js
prisma.myTable.findMany({
    where: {
        OR: [],
    },
});
```

    > This is the same as passing `null`, which maps to`null` in the database.

When supplying the operator with a single filter, that filter will be run and it's results returned. If multiple filters are supplied then `n` results will be returned dependant on the filters supplied.

    ```js
// Single filter
prisma.myTable.findMany({
    where: {
        OR: [{name: 'Emelie'}],
    },
});

// Multiple filters
prisma.myTable.findMany({
    where: {
        OR: [{
          name: 'Emelie',
          drivesCar: true
        }],
    },
});
```

### < inlinecode > AND < /inlinecode>

The[`AND`](../../../ reference / api - reference / prisma - client - reference#and) < span class="api" > </span> operator expects all conditions to be true, that is, all filters must return something for it to return anything if it is to return data.
As stated above, Prisma treats`null` values as having a value, where as `undefined` means do nothing.
To that end if the`AND` operator is used but no filters are supplied then it will return all items requested in the query because providing no filter is like providing no condition,
    which means that the query will return it's default data.

        ```js
// This has the same effect
prisma.myTable.findMany({
    where: {
        AND: [], // The same as passing null
    },
});

// As this
prisma.myTable.findMany(); // The same as passing undefined
```

Providing a single filter to the`AND` operator works the same way as the `OR` condition except that the filter ** must ** return true for it to return the filtered data.
The same applies for multiple filters, where all filters must return true for the query to return any data.

```js
// Single filter
prisma.myTable.findMany({
    where: {
        AND: [
          {
            name: {
              contains: 'Emelie'
            },
          }
        ],
    },
});

// Multiple filters
prisma.myTable.findMany({
    where: {
        AND: [
          {
            name: {
              contains: 'Emelie'
            },
          },
          {
            drivesCar: {
              equals: true
            },
          }
        ],
    },
});
```

### < inlinecode > NOT < /inlinecode>

The[`NOT`](../../../ reference / api - reference / prisma - client - reference#not) < span class="api" > </span> operator expects that all conditions are false before it will return any data. Much like the `AND` operator, `NOT` will return the queries default data if no filters are passed.

    ```js
// This has the same effect
prisma.myTable.findMany({
    where: {
        NOT: [], // The same as passing null
    },
});

// As this
prisma.myTable.findMany(); // The same as passing undefined
```

    `NOT` is most often used in conjunction with other operators to form fluid conditions from which the data should be filtered through.Using all three conditional operators:

```js
const result = await prisma.post.findMany({
  where: {
    OR: [
      {
        name: {
          contains: 'Emelie',
        },
      },
    ],
    AND: [
      {
        drivesCar: {
          equals: true
        },
      }
    ],
    NOT: {
      name: {
        contains: 'Mrs',
      },
    },
  },
})
```