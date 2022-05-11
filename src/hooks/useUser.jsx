import { useEffect, useState } from "react";
import getUser from "../services/getUser";

export default function useUser(keyword) {
  const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchUser = async () => {
    const data = await getUser({ keyword });
    console.log(data);
      if (data.error) {
        console.log("Oooopsssss")
        setUser(null);
      } else {
        const userInfo = {
          name: data.name,
          date: new Date(data.created_at),
          bio: data.bio,
          avatar_url: data.avatar_url,
          location: data.location,
          login: data.login,
        };
        const userSocial = {
          repos: data.public_repos,
          followers: data.followers,
          following: data.following,
          twitter_username: data.twitter_username,
          html_url: data.html_url,
          company: data.company,
        };
        setUser({ userInfo, userSocial });
      }
      setLoading(false);
    };
    fetchUser();
  }, [keyword]);

  return {
      user,loading
  }
}
