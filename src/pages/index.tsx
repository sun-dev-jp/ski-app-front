import { Head } from '@/components/Head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Profile from '@/components/Profile'
import { UserCard } from '@/components/organisms/user/UserCard'
import { HeaderOnly } from '@/components/templates/HeaderOnly'

const inter = Inter({ subsets: ['latin'] })

const User = {
  image: "https://lh3.google.com/u/0/ogw/AOLn63EXwTQ3TzRKiOS1htYhBwJRj-sQISWZB32b7Lyq=s32-c-mo",
  name: "名前",
  email: "example@mail.com",
  phone: "000-9999-8888",
  company: {
    name: "サンプル会社"
  },
  website: "example.com"
}

export default function Home() {
  return (
    <>
      <Head title='App Name' description='app description' />
      <HeaderOnly>
        <main className={`${inter.className}`}>
          <div>
            <UserCard user={User} />
            <Profile />
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              width={100}
              height={24}
              priority
            />
          </div>
        </main>
      </HeaderOnly>
    </>
  )
}
