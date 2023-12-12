import { useNavigate } from 'react-router-dom'
import { removeToken } from '../../utils/helpers/common'
import { useEffect } from 'react'


export default function Signout () {
  const navigate = useNavigate()


  useEffect(() => {
    handleSignOut()
  }, [])
  
  const handleSignOut = async () => {
    removeToken()
    await new Promise(set => setTimeout(set, 2000))
    navigate('/')
  }


return (
  <div>You have been signed out, please login</div>
)
}