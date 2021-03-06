import { useState } from 'react';
import { NavLink, Link, useHistory } from 'react-router-dom';
import Login from 'pages/Login';
import theme from 'assets/theme';
import { Modal } from './Modal';
import { Wrapper, Button } from './Header.styles';
import { PropsTypes, MenuTypes } from 'types/common/headerTypes';

const MenuItem = ({ to, item, children }: MenuTypes) => (
  <NavLink
    to={to}
    className={`header-${item}`}
    activeStyle={{ color: theme.colors.text.first }}
    isActive={(match) => {
      if (!match) {
        return false;
      }
      return match.isExact;
    }}
    // onClick={() => window.scrollTo(0, 0)}
  >
    {children}
  </NavLink>
);

function Header(props: PropsTypes) {
  // console.log(props);
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  const [showMenu, setShowMenu] = useState(false);

  let history = useHistory();

  function goHome() {
    history.push('/');
  }

  return (
    <Wrapper>
      <div>
        <MenuItem to={'/'} item={'logo'} onClick={() => window.scrollTo(0, 0)}>
          POST-IT
        </MenuItem>
        <MenuItem to={'/report'} item={'menus'}>
          IT 보고서
        </MenuItem>
        <MenuItem to={'/contents'} item={'menus'}>
          일일 컨텐츠
        </MenuItem>
        {props.authenticated ? (
          <MenuItem
            to={'/profile'}
            item={'menus'}
            // name={props.name}
            // email={props.email}
            // img={props.email}
          >
            프로필
          </MenuItem>
        ) : null}
        {/* <MenuItem to={'/myfolder'} item={'menus'}>
          내 스크랩
        </MenuItem> */}
      </div>
      {props.authenticated ? (
        <div className="header-menus">
          <Button
            onClick={() => {
              props.onLogout(), goHome();
            }}
          >
            <span>
              <svg
                height="24"
                viewBox="0 0 512.00533 512"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                fill="#e2e3e6"
              >
                <path d="m320 277.335938c-11.796875 0-21.332031 9.558593-21.332031 21.332031v85.335937c0 11.753906-9.558594 21.332032-21.335938 21.332032h-64v-320c0-18.21875-11.605469-34.496094-29.054687-40.554688l-6.316406-2.113281h99.371093c11.777344 0 21.335938 9.578125 21.335938 21.335937v64c0 11.773438 9.535156 21.332032 21.332031 21.332032s21.332031-9.558594 21.332031-21.332032v-64c0-35.285156-28.714843-63.99999975-64-63.99999975h-229.332031c-.8125 0-1.492188.36328175-2.28125.46874975-1.027344-.085937-2.007812-.46874975-3.050781-.46874975-23.53125 0-42.667969 19.13281275-42.667969 42.66406275v384c0 18.21875 11.605469 34.496093 29.054688 40.554687l128.386718 42.796875c4.351563 1.34375 8.679688 1.984375 13.226563 1.984375 23.53125 0 42.664062-19.136718 42.664062-42.667968v-21.332032h64c35.285157 0 64-28.714844 64-64v-85.335937c0-11.773438-9.535156-21.332031-21.332031-21.332031zm0 0" />
                <path d="m505.75 198.253906-85.335938-85.332031c-6.097656-6.101563-15.273437-7.9375-23.25-4.632813-7.957031 3.308594-13.164062 11.09375-13.164062 19.714844v64h-85.332031c-11.777344 0-21.335938 9.554688-21.335938 21.332032 0 11.777343 9.558594 21.332031 21.335938 21.332031h85.332031v64c0 8.621093 5.207031 16.40625 13.164062 19.714843 7.976563 3.304688 17.152344 1.46875 23.25-4.628906l85.335938-85.335937c8.339844-8.339844 8.339844-21.824219 0-30.164063zm0 0" />
              </svg>
            </span>
          </Button>
        </div>
      ) : (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* 로그인 버튼 */}
          <Button onClick={openModal} className="login-button header-menus">
            <svg
              height="24"
              viewBox="0 0 512 512"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              fill="#e2e3e6"
            >
              <path d="m465.535156.320312c-.53125-.042968-.980468-.320312-1.535156-.320312h-229.332031c-35.285157 0-64 28.714844-64 64v21.332031c0 11.777344 9.554687 21.335938 21.332031 21.335938s21.332031-9.558594 21.332031-21.335938v-21.332031c0-11.753906 9.578125-21.332031 21.335938-21.332031h99.390625l-6.507813 2.175781c-17.277343 5.972656-28.882812 22.25-28.882812 40.488281v320h-64c-11.757813 0-21.335938-9.578125-21.335938-21.332031v-42.667969c0-11.773437-9.554687-21.332031-21.332031-21.332031s-21.332031 9.558594-21.332031 21.332031v42.667969c0 35.285156 28.714843 64 64 64h64v21.332031c0 23.53125 19.132812 42.667969 42.664062 42.667969 4.566407 0 8.898438-.660156 13.589844-2.113281l128.171875-42.730469c17.300781-5.972656 28.90625-22.25 28.90625-40.488281v-384c0-24.875-21.441406-44.375-46.464844-42.347657zm0 0" />
              <path d="m228.414062 198.25-85.332031-85.332031c-6.101562-6.101563-15.273437-7.9375-23.253906-4.628907-7.957031 3.304688-13.160156 11.09375-13.160156 19.710938v64h-85.335938c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h85.335938v64c0 8.617187 5.203125 16.402343 13.160156 19.710937 7.980469 3.304688 17.152344 1.472656 23.253906-4.628906l85.332031-85.335938c8.34375-8.339843 8.34375-21.820312 0-30.164062zm0 0" />
            </svg>
          </Button>
        </div>
      )}

      {/* 메뉴 버튼(600px 이하) */}
      <Button
        className="menu-button"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        <svg
          id="bold"
          viewBox="0 0 24 24"
          height="20"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
          fill="#acabb4"
        >
          <path d="m21.25 0h-18.5c-1.517 0-2.75 1.233-2.75 2.75v18.5c0 1.517 1.233 2.75 2.75 2.75h18.5c1.517 0 2.75-1.233 2.75-2.75v-18.5c0-1.517-1.233-2.75-2.75-2.75zm-5.25 17h-8c-.553 0-1-.448-1-1s.447-1 1-1h8c.553 0 1 .448 1 1s-.447 1-1 1zm0-4h-8c-.553 0-1-.448-1-1s.447-1 1-1h8c.553 0 1 .448 1 1s-.447 1-1 1zm0-4h-8c-.553 0-1-.448-1-1s.447-1 1-1h8c.553 0 1 .448 1 1s-.447 1-1 1z" />
        </svg>
      </Button>

      {/* 숨김 메뉴 시작 */}
      <div className={`hidden-menu ${showMenu ? 'active' : ''}`}>
        <ul className="hidden-menu wrapper">
          {props.authenticated ? (
            <li>
              <Link to="/profile">내 프로필</Link>
            </li>
          ) : null}
          <li>
            <Link to="/report">IT 보고서</Link>
          </li>
          <li>
            <Link to="/contents">일일 컨텐츠</Link>
          </li>

          {/* 로그아웃 버튼 */}
          {props.authenticated ? (
            <div className="hidden-menu logout">
              <Button
                onClick={() => {
                  props.onLogout(), goHome();
                }}
              >
                <svg
                  height="24"
                  viewBox="0 0 512.00533 512"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#acabb4"
                  style={{ marginRight: '8px' }}
                >
                  <path d="m320 277.335938c-11.796875 0-21.332031 9.558593-21.332031 21.332031v85.335937c0 11.753906-9.558594 21.332032-21.335938 21.332032h-64v-320c0-18.21875-11.605469-34.496094-29.054687-40.554688l-6.316406-2.113281h99.371093c11.777344 0 21.335938 9.578125 21.335938 21.335937v64c0 11.773438 9.535156 21.332032 21.332031 21.332032s21.332031-9.558594 21.332031-21.332032v-64c0-35.285156-28.714843-63.99999975-64-63.99999975h-229.332031c-.8125 0-1.492188.36328175-2.28125.46874975-1.027344-.085937-2.007812-.46874975-3.050781-.46874975-23.53125 0-42.667969 19.13281275-42.667969 42.66406275v384c0 18.21875 11.605469 34.496093 29.054688 40.554687l128.386718 42.796875c4.351563 1.34375 8.679688 1.984375 13.226563 1.984375 23.53125 0 42.664062-19.136718 42.664062-42.667968v-21.332032h64c35.285157 0 64-28.714844 64-64v-85.335937c0-11.773438-9.535156-21.332031-21.332031-21.332031zm0 0" />
                  <path d="m505.75 198.253906-85.335938-85.332031c-6.097656-6.101563-15.273437-7.9375-23.25-4.632813-7.957031 3.308594-13.164062 11.09375-13.164062 19.714844v64h-85.332031c-11.777344 0-21.335938 9.554688-21.335938 21.332032 0 11.777343 9.558594 21.332031 21.335938 21.332031h85.332031v64c0 8.621093 5.207031 16.40625 13.164062 19.714843 7.976563 3.304688 17.152344 1.46875 23.25-4.628906l85.335938-85.335937c8.339844-8.339844 8.339844-21.824219 0-30.164063zm0 0" />
                </svg>
                <span>로그아웃</span>
              </Button>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {/* 로그인 버튼 */}
              <Button onClick={openModal} className="hidden-menu logout">
                <svg
                  height="24"
                  viewBox="0 0 512 512"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#acabb4"
                  style={{ marginRight: '8px' }}
                >
                  <path d="m465.535156.320312c-.53125-.042968-.980468-.320312-1.535156-.320312h-229.332031c-35.285157 0-64 28.714844-64 64v21.332031c0 11.777344 9.554687 21.335938 21.332031 21.335938s21.332031-9.558594 21.332031-21.335938v-21.332031c0-11.753906 9.578125-21.332031 21.335938-21.332031h99.390625l-6.507813 2.175781c-17.277343 5.972656-28.882812 22.25-28.882812 40.488281v320h-64c-11.757813 0-21.335938-9.578125-21.335938-21.332031v-42.667969c0-11.773437-9.554687-21.332031-21.332031-21.332031s-21.332031 9.558594-21.332031 21.332031v42.667969c0 35.285156 28.714843 64 64 64h64v21.332031c0 23.53125 19.132812 42.667969 42.664062 42.667969 4.566407 0 8.898438-.660156 13.589844-2.113281l128.171875-42.730469c17.300781-5.972656 28.90625-22.25 28.90625-40.488281v-384c0-24.875-21.441406-44.375-46.464844-42.347657zm0 0" />
                  <path d="m228.414062 198.25-85.332031-85.332031c-6.101562-6.101563-15.273437-7.9375-23.253906-4.628907-7.957031 3.304688-13.160156 11.09375-13.160156 19.710938v64h-85.335938c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h85.335938v64c0 8.617187 5.203125 16.402343 13.160156 19.710937 7.980469 3.304688 17.152344 1.472656 23.253906-4.628906l85.332031-85.335938c8.34375-8.339843 8.34375-21.820312 0-30.164062zm0 0" />
                </svg>
                <span>로그인</span>
              </Button>
            </div>
          )}
        </ul>
      </div>
      {/* 숨김 메뉴 끝 */}

      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        children={<Login />}
      ></Modal>
    </Wrapper>
  );
}

export default Header;
