import './index.css'

const AppItem = props => {
  const {details} = props
  const {appName, imageUrl} = details
  return (
    <li className="container">
      <img src={imageUrl} alt={appName} className="image" />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
