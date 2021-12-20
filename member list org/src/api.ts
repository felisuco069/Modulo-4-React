export const getMembers = (org: string) => {
  return fetch(`https://api.github.com/orgs/${org}/members`).then((response) =>
    response.json()
  );
};
