exports.handler = async (evennt, context) => {
  const guides = [
    { title: "Beat all Zelda Bosses Lika a Boss", author: "mario" },
    { title: "Mario Kart Shortcuts You Never New Existed", author: "lugi" },
    { title: "Ultimate Street Fighter Guide", author: "chun-li" },
  ];

  if (context.clientContext.user) {
    return {
      statusCode: 200,
      body: JSON.stringify(guides),
    };
  }

  return {
    statusCode: 401,
    body: JSON.stringify({ message: "You must be logged in to see this!" }),
  };
};
