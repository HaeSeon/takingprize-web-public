import {Navigate, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {Login} from "./pages/Login";
import {SignUp} from "./pages/SignUp";
import {About} from "./pages/About";
import {PrizeFrame} from "./pages/PrizeFrame";
import {PrizeName} from "./pages/PrizeName";
import {PrizeContent} from "./pages/PrizeContent";
import {PrizeTrophy} from "./pages/PrizeTrophy";
import {PrizeMessagePage} from "./pages/PrizeMessage";
import {PrizeListPage} from "./pages/prize-list/PrizeListPage";
import {PrizeDetail} from "./pages/PrizeDetail";
import {FriendHome} from "./pages/FriendHome";
import {useAuthContext} from "./context/AuthContext";

export function Router() {
  const {user} = useAuthContext()

  return (
    <Routes>
      <Route
        path="/*"
        element={
          !!user
            ? <Navigate to={`/users/${user.id}/prizeList`}/>
            : <Navigate to="/home"/>
        }
      />
      <Route
        path="/home"
        element={
          user?.id
            ? <Navigate to={`/users/${user.id}/prizeList`}></Navigate>
            : <Home/>
        }
      />

      <Route path="/auth/login" element={<Login/>}/>
      <Route path="/auth/signup" element={<SignUp/>}/>

      <Route path='/about' element={<About/>}/>

      <Route path="/users/:id/prize/frame" element={<PrizeFrame/>}/>
      <Route path="/users/:id/prize/name" element={<PrizeName/>}/>
      <Route path="/users/:id/prize/content" element={<PrizeContent/>}/>
      <Route path="/users/:id/prize/trophy" element={<PrizeTrophy/>}/>
      <Route path="/users/:id/prize/message" element={<PrizeMessagePage/>}/>
      <Route
        path="/users/:id/prizeList"
        element={<PrizeListPage/>}
      />

      <Route
        path="/prize"
        element={<PrizeDetail/>}
      />


      <Route
        path="/users/:id/home"
        element={<FriendHome/>}
      />
    </Routes>
  )
}