import Card from "../../atoms/card/card";
import Item from "../../molecules/items/items";
import "./main.scss";

export default function Main({
  userInfo,
  userSocial,
}) {
  let {name, date, bio, avatar_url, location, login} = userInfo;
  let {repos, followers, following, twitter_username, html_url, company} = userSocial;
  if (bio === null) {
    bio = `The user ${login} has not written a biography on his/her profile.`;
  }
  if (name === null) {
    name = "Not Assigned";
  }
  const dateParsed = date.toLocaleDateString('en-co', { year:"numeric", month:"short"});
  return (
    <>
      <Card>
        <div className="content">
          <section className="content__one">
            <img src={avatar_url} alt={name} />
            <div className="content__row">
              <div className="content__name">
                <h2>{name}</h2>
                <span className="content__user">@{login}</span>
              </div>
              <span className="content__join">Joined on {dateParsed}</span>
            </div>
          </section>
          <section className="content__two">
            <p className="content__bio">{bio}</p>
            <Card size="small">
              <div className="content__follow">
                <p>
                  Repos<b>{repos}</b>
                </p>
                <p>
                  Followers<b>{followers}</b>
                </p>
                <p>
                  Following<b>{following}</b>
                </p>
              </div>
            </Card>
          </section>
          <section className="content__three">
            <Item
              className
              icon="fa-solid fa-location-dot"
              description={location}
            />
            <Item icon="fa-brands fa-twitter" description={twitter_username} />
            <Item icon="fa-solid fa-building" description={company} />
            <a className="link_bio" href={html_url} target="_blank">
              <Item icon="fa-solid fa-link" description={html_url} />
            </a>
          </section>
        </div>
      </Card>
    </>
  );
}
