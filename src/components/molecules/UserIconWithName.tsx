export const UserIconWithName = ({ image, name }) => {
  return (
    <div>
      <img
        height={160}
        width={160}
        src={image}
        alt={name}
      />
      <p>名前</p>
    </div>
  )
}