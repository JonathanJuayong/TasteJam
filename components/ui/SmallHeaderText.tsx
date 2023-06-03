interface SmallHeaderTextProps {
  text: string
}

export default function SmallHeaderText({text}: SmallHeaderTextProps) {
  return (
    <h4 className="text-xs text-gray-400 font-bold">{text}</h4>
  )
}
