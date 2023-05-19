import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import { useAuth0 } from "@auth0/auth0-react";

type Props = {
  data: string | null
};

const MyPage: NextPage<Props> = ({ data }) => {
  const { loginWithRedirect } = useAuth0();

  if(!data) {
    console.log("ログインしていません")

    loginWithRedirect({
      appState: {
        returnTo: "/ssr"
      }
    })

    return <></>;
  }

  return (
    <div>
      <h1>SSRページ</h1>
    </div>
  );
};

export default MyPage;

export const getServerSideProps: GetServerSideProps<Props> = async (context: GetServerSidePropsContext) => {
  // todo: cookieの有効期限

  // todo: トークンが無い場合、早期リターン
  let data: string | null;
  if(context.req.cookies.accessToken) {
    data = "hoge"
  } else {
    data = null
  }

  const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlhvNW4xQ3VETnQ4NFdCc0x6Qkp2YiJ9.eyJpc3MiOiJodHRwczovL2Rldi0yNG1kc2RwampoZGVrbHppLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJVd0tLeWRMRjdmcHFYdUVEMmMyOVRabjRhZTRCbE5STUBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly95b3VyLWFwaS1nYXRld2F5IiwiaWF0IjoxNjgzNDc4NTA2LCJleHAiOjE2ODM1NjQ5MDYsImF6cCI6IlV3S0t5ZExGN2ZwcVh1RUQyYzI5VFpuNGFlNEJsTlJNIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.eVg4Ale3e7xvBZHO-6BN3-P5KiOxAr2UhjbrAEYNFWfCWrncv13ZajzZE7CaDleqFwbW3MinSKC8zlW8CXX-W-4iXyAqBk8h-jePq1SL0ObCPyi26nVkJEFN7ne9JW0vgYo9LJ8yIyLejezi4V1phja-3wvsLqVM8yOBsg-pgfnj3Cti8LpBPBd-oJSkpgNz9XJcO01hjhuZsZdXfd1iNwMw-A99SWOnb85tAqXKe_lJvX3nNgDdjvmn9Mx78zSefgU-F-sDVL2L4z1yBCK19t1AzjV6azlWZcOCHOZPndQ_ylq4JOyuAV1LV67-5S9J21d1XmOXT1Th0h1WG8sFqA"

  // todo: API呼び出しの結果を返す
  const endpoint = "url"
  fetch("https://fb5pxeilb3.execute-api.ap-northeast-1.amazonaws.com/prod/users", {
    headers: {
      Authorization: `${token}`,
    },
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });

  return {
    props: {
      data
    },
  };
};

// curl --request GET \
//   --url https://fb5pxeilb3.execute-api.ap-northeast-1.amazonaws.com/prod/users \
//   --header 'authorization: '