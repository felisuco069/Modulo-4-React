export const getMembers = (org: string) => {
  return fetch(`https://api.github.com/orgs/${org}/members`).then((response) =>
    response.json()
  );
};

export const getCharacters = () => {
  return fetch(`https://rickandmortyapi.com/api/character`).then((response) =>
    response.json()
  );
};
