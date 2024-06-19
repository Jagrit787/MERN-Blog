import {
  Avatar,
  Button,
  Dropdown,
  DropdownDivider,
  Navbar,
  NavbarToggle,
  TextInput,
} from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";
import { signoutSuccess } from "../redux/user/userSlice";
import { useEffect, useState } from "react";
export default function Header() {
  const path = useLocation().pathname;
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const [searchTerm, setSearchTerm] = useState("");

  //TODO: Search functionality
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  //TODO: SIGNOUT FUNCTION
  const handleSignout = async () => {
    try {
      const res = await fetch(`/api/user/signout`, {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-purple-400 via-purple-500 to-pink-500 rounded-lg text-white">
          {" "}
          J@gs Blog
        </span>
      </Link>
      <form onSubmit={handleSubmit} className="border-2 rounded-md border-green-900 ">
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <Button className="w-12 h-18 lg:hidden" color="grey" pill>
        <AiOutlineSearch />
      </Button>

      <div className="flex gap-2 md:order-2">
        <Button
          className="w-12 h-10- hidden sm:inline"
          color="gray"
          pill
          onClick={() => {
            dispatch(toggleTheme());
          }}
        >
          {theme === "light" ? <FaSun /> : <FaMoon />}
        </Button>

        {/*we check if the currentUser state exists then display user data,
        if not then only show sign-in! */}
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="user" img={currentUser.profilePicture} rounded />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">@{currentUser.username}</span>
              <span className="block text-sm font-medium truncate">
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Link to={"/dashboard?tab=profile"}>
              <Dropdown.Item>Profile </Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignout}>Sign-out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/sign-in">
            <Button gradientDuoTone="purpleToBlue" outline>
              Sign In
            </Button>
          </Link>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/search?searchTerm=&sort=null&category=technology"} as={"div"}>
          <Link to="/search?searchTerm=&sort=null&category=technology">Technology</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/search?searchTerm=&sort=null&category=entertainment"} as={"div"}>
          <Link to="/search?searchTerm=&sort=null&category=entertainment">Entertainment</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/search?searchTerm=&sort=null&category=entertainment"} as={"div"}>
          <Link to="/search?searchTerm=&sort=null&category=sports">Sports</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/search?searchTerm=&sort=null&category=entertainment"} as={"div"}>
          <Link to="/search?searchTerm=&sort=null&category=music">Music</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
