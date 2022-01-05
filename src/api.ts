export const getMembers = (org: string) => {
  return fetch(`https://api.github.com/orgs/${org}/members`).then(
    (response) => {
      if (response.ok) {
        return response.json();
      } else {
        return [];
      }
    }
  );
};

export const getCharacters = () => {
  return fetch(`https://rickandmortyapi.com/api/character`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return [];
    }
  });
};
