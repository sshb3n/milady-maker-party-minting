import { useState } from "react"

export function ConnectButton({
  onClick,
  disabled = false,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
}) {
  const [hover, setHover] = useState(false)

  return (
    <button onClick={onClick} disabled={disabled}>
      <img
        src={
          hover
            ? "https://miladymakerparty.s3.us-east-2.amazonaws.com/connectselected.webp"
            : "https://miladymakerparty.s3.us-east-2.amazonaws.com/connect.webp"
        }
        width="611"
        height="394"
        alt="connect wallet"
        style={{ transition: "filter 0.5s ease-in-out" }}
        className={`w-full cursor-pointer transition-all duration-500 $${
          hover ? "filter brightness-75" : ""
        }`}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      />
    </button>
  )
}
