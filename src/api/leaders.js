const topLeaderUrl = "https://wedev-api.sky.pro/api/leaderboard";

export const getLeaders = () => {
  return fetch(topLeaderUrl, {
    method: "GET",
  }).then(response => {
    if (!response.ok) {
      throw new Error("Что-то пошло не так");
    }
    if (response.status === 400) {
      throw new Error("Полученные данные не в формате JSON!");
    }
    return response.json();
  });
};

export const postLeaders = ({}) => {
  return fetch(topLeaderUrl, {
    method: "POST",
    body: JSON.stringify(),
  }).then(response => {
    if (!response.ok) {
      throw new Error("Что-то пошло не так");
    }
    if (response.status === 400) {
      throw new Error("Полученные данные не в формате JSON!");
    }
    return response.json();
  });
};
