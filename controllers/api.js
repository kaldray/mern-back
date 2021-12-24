export const controller =
  ("/",
  (req, res) => {
    res.json(
      {
        firstName: "John",
        lastName: "Doe",
      },
      { firstName: "Jojo", lastName: "Dodo" }
    );

    res.status(200).json(ok);
  });
