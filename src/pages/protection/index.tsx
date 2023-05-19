import React from "react";
import Loading from "@/components/Loading";

import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

export const ProfileComponent = () => {
  const { user } = useAuth0();

  return (
    <>
      <img src={user.picture} alt="Profile" />
      <h2>{user.name}</h2>
      <p className="lead text-muted">{user.email}</p>
    </>
  );
};

export default withAuthenticationRequired(ProfileComponent, {
  onRedirecting: () => <Loading />,
});