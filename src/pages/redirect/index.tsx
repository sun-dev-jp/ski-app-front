import React from "react";
import { useRouter } from 'next/router';
import { useAuth0 } from "@auth0/auth0-react";

export const RedirectPage = () => {
  const router = useRouter();
  const { query } = router;
  const { getAccessTokenSilently } = useAuth0();

  (async () => {
    // Todo: 例外処理
    // ・未認証
    // ・pageクエリ無し
    // ・Cookie登録に失敗

    try {
      const token = await getAccessTokenSilently();

      if (query.page !== undefined && !Array.isArray(query.page)) {

        fetch("/api/auth/subscribe", {
          headers: { Authorization: `Bearer ${token}` } 
        })

        router.push({
          pathname: query.page ? `${query.page}` : '/'
        });

      }
    } catch (e: any) {
      console.log(e.message);
    }
  })();

  return <></>;
};

export default RedirectPage;