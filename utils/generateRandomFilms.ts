export const generateRandomFilms = (count: number) => {
  const films = [];
  for (let i = 0; i < count; i++) {
    films.push({
      id: `film-${i}`,
      title: Math.random().toString(36).substring(7),
      description: Math.random().toString(36).substring(7),
      imageUrl: `https://picsum.photos/200/300?random=${i}`,
    });
  }
  return films;
};
