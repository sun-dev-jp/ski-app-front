import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UsersPage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if(!isAuthenticated) {
    return <></>;
  }

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <img src={user.picture} alt="Profile" />
      <h2>{user.name}</h2>
      <p className="lead text-muted">{user.email}</p>
    </>
  );
};

export default UsersPage;