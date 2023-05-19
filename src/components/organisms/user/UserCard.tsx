import React from "react"
import { Card } from "@/components/atoms/card/Card"
import { UserIconWithName } from "@/components/molecules/UserIconWithName"

type Props = {
  user: {
    image: string
    name: string
    email: string
    phone: string
    company: {
      name: string
    }
    website: string
  }
}

export const UserCard: React.FC<Props> = ({ user }) => {

  return (
    <Card>
      <UserIconWithName image={user.image} name={user.name} />
      <dl>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>TEL</dt>
        <dd>{user.phone}</dd>
        <dt>会社名</dt>
        <dd>{user.company.name}</dd>
        <dt>WEB</dt>
        <dd>{user.website}</dd>
      </dl>
    </Card>
  )
}
