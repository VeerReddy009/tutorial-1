const TabItem = props => {
  const {detail, onClick} = props
  const {displayText, tabId} = detail

  const touch = () => {
    onClick(tabId)
  }

  return (
    <li>
      <button className="items" onClick={touch} type="button">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
