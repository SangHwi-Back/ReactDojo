export default function TBODY({list}) {
  return (
    <tbody>
    {list.map((item, index) => {
      return <tr key={index}>
        <td>{item.title}</td>
        <td>{item.contents}</td>
        <td>{item.writer}</td>
      </tr>
    })}
    </tbody>
  )
}