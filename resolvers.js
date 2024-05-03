const data = {
  authors: [
    { id: "101", name: "Akash", booksId: ["101", "102"] },
    { id: "102", name: "Anushika", booksId: ["103"] },
    { id: "103", name: "Shobhit", booksId: ["104", "105"] },
  ],
  books: [
    { id: "101", title: "FE desing", publishedYear: 2020, auhthorID: "101" },
    { id: "102", title: "BE desing", publishedYear: 2018, auhthorID: "101" },
    {
      id: "103",
      title: "React desing patterns",
      publishedYear: 2024,
      auhthorID: "102",
    },
    {
      id: "104",
      title: "Angular desing patterns",
      publishedYear: 2018,
      auhthorID: "103",
    },
    {
      id: "105",
      title: "Vue desing patterns",
      publishedYear: 2020,
      auhthorID: "103",
    },
  ],
};
export const resolvers = {
  Author: {
    books: (parent, args, context, info) =>
      data.books.filter((book) => parent.booksId.includes(book.id)),
  },
  Book: {
    author: (parent, args, context, info) =>
      data.authors.find((author) => author.id === parent.auhthorID),
  },
  Query: {
    authors: (parent, args, context, info) => data.authors,

    books: (parent, args, context, info) => data.books,
  },
  Mutation: {
    addBook: (parent, args, context, info) => {
      const newBook = { ...args, id: data.books.length + 1 };
      data.books.push(newBook);
      return newBook;
    },
  },
};
