type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return <div className="container with-navbar">{children}</div>
}

export default Container
