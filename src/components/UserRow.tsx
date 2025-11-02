import type { User } from "../interfaces/request_response.response"

interface Props {
  user: User;
}

export const UserRow = ({ user }: Props) => {
  return (
    <tr className="p-2">
      <td>
        <img src={user.reference_image_id ? `https://cdn2.thedogapi.com/images/${user.reference_image_id}.jpg` : 'https://via.placeholder.com/150'}
          alt="User Avatar"
          className="rounded-full w-14 h-14 p-2" />
      </td>
      <td>
        {user.name}
      </td>
      <td>
        {`${user.name}@thedogapi.com`}
      </td>
    </tr>
  )
}
