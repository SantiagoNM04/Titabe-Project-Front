import './Gallery.css'
import { Nav } from "../nav/Nav";


export const Gallery = ({isAuthenticated, onLogOut, userAuth, adminLog}) => {
  return (
    <>
        <Nav isAuthenticated={isAuthenticated} onLogOut={onLogOut} userAuth={userAuth} adminLog={adminLog}/>
    </>
  )
}
