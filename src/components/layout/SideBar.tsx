import {Link, useNavigate} from 'react-router-dom';
import {SidebarItem} from '../SideBarItem';
import '../../styles/sidebar.css'
import {Transition} from 'react-transition-group';
import {Divider} from 'antd'
import {removeCookie} from '../../utils/cookie';
import {useAuthContext} from "../../context/AuthContext";

export function Sidebar(props: {
  isOpen: boolean,
  setIsOpen: Function
}) {
  const authContext = useAuthContext()
  const navigate = useNavigate()

  const generalMenus = [
    {name: "홈", path: "/home"},
    {name: "로그인", path: "/auth/login"},
    {name: "가입하기", path: "/auth/signup"},
    {name: "킹받즈제작단", path: "/about"},
  ];

  const loginMenus = [
    {name: "내 보관함", path: "/me/prizeList"},
    {name: "킹받즈제작단", path: "/about"},
  ]

  const getMenus = () => {
    return authContext.user?.id ? loginMenus : generalMenus
  }


  const closeMenu = () => {
    props.setIsOpen(false)

  }

  const toggleSide = () => {
    props.setIsOpen(true);
  };

  const logout = () => {
    removeCookie("accessJwtToken")
    closeMenu()
    navigate('/home')
    authContext.setUser(null)
  }

  if (!props.isOpen) {
    return <></>
  }
  return (
    <Transition
      in={props.isOpen}
      timeout={{enter: 0, exit: 200}}
      appear
      unmountOnExit>
      <div className="sidebar">
        <img
          src="/img/close.png"
          alt="close"
          width='24px'
          style={{
            marginLeft: 'auto',
            marginBottom: "16px"
          }}
          onClick={closeMenu}
          onKeyDown={toggleSide}
        />
        <div>
          {authContext.user?.id ?
            <div style={{color: "#F7931E"}}>
              {authContext.user?.name} 님 <br/>
              <span style={{fontWeight: 500, fontSize: "20px", color: "#F7931E"}}>
                {authContext.user?.email}
              </span>
            </div>
            :
            <div style={{color: "#F7931E"}}>
              TakingPrize
            </div>
          }
        </div>
        <Divider style={{margin: "2px", marginBottom: "16px", marginTop: "16px"}}></Divider>
        <div style={{
          marginRight: 'auto',
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          textAlign: 'start',
          flex: 1
        }}>
          {getMenus().map((menu, index) => {
            return (
              <Link
                to={menu.path} key={index}
                style={{textDecoration: "none"}}>
                <div onClick={closeMenu}>
                  <SidebarItem
                    menu={menu}
                  />
                </div>
              </Link>
            );
          })}
          {
            authContext.user?.id ?
              <div style={{padding: "8px"}}
                   onClick={logout}>
                로그아웃
              </div>
              : <div></div>
          }

        </div>

      </div>
    </Transition>
  );
}

