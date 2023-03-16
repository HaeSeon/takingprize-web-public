export function HamburgerIcon(props: {
  onClick?: () => void
}) {
  return (
    <img
      src="/img/hamburger.png"
      alt=""
      width={"24px"}
      onClick={props.onClick}
    />
  )
}