import React from 'react'
import { auth } from '../../../firebase'
import { withRouter } from 'react-router-dom'

const Admin = (props) => {

  const [user, setUser] = React.useState(null)

  React.useEffect(() => {
    if(auth.currentUser){
      console.log('existe un usuario')
      setUser(auth.currentUser)
    } else{
      console.log('no exite usuaio')
      props.history.push('/login')
    }
  }, [props.history])
  return (
    <div style={{ paddingTop: 100, paddingLeft: 30 }}>
      <h3>Admin</h3>
      {
        user && (
          <h3>{ user.email } </h3>
        )
      }

    </div>
  )
}

export default withRouter(Admin)
