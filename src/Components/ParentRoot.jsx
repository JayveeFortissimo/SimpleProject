
const ParentRoot = ({Parent="main",children,...props}) => {
  return (
    <Parent {...props}>
   {children}
    </Parent>
  )
}

export default ParentRoot