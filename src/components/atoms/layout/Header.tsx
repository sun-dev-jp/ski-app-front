import { SearchInput } from "@/components/molecules/SearchInput"
import LoginButton from "@/components/LoginButton"
import LogoutButton from "@/components/LogoutButton"
import { SignupButton } from "@/components/SignupButton"

export const Header = () => {
  return (
    <header>
      <div>
        <a href="/protection">protection</a><br />
        <a href="/ssr">ssr</a><br />
        <a href="/users">users</a><br />
      </div>
      <SearchInput />
      <div>
        <LoginButton /><br />
        <LogoutButton /><br />
        <SignupButton /><br />
      </div>
    </header>
  )
}