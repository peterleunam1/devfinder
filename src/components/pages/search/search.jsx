import { useState, useEffect } from "react";
import Main from "../../organisms/main/main";
import Header from "../../organisms/header/header";
import Skeleton from "../../organisms/skeleton/skeleton";
import Card from "../../atoms/card/card";
import Image from "../../../assets/no-connection.png";
import "./search.scss";
import useUser from "../../../hooks/useUser";

export default function Searched({ params }) {
  const { keyword } = params;

  const { user, loading } = useUser(keyword);

  const notFound = () => {
    return (
      <Card>
        <img src={Image} alt="notfound" className="notFound" />
        <h3>User Not Found</h3>
      </Card>
    );
  };
  return (
    <div className="search">
      <Header />
      {loading ? (
        <Skeleton />
      ) : user? (
        <Main {...user} />
      ) : (
        notFound()
      )}
    </div>
  );
}
