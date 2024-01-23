import React, { useEffect, useState } from "react";
import { Nav, NavItem } from "react-bootstrap";
import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import { BiNews, BiSolidCategory } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { FaNewspaper } from "react-icons/fa";
import { FaServicestack, FaWpforms } from "react-icons/fa6";
import { FiLifeBuoy, FiUsers } from "react-icons/fi";
import {
  MdAdminPanelSettings,
  MdEvent,
  MdInsertPageBreak,
  MdOutlinePermMedia,
  MdOutlinePowerInput,
  MdPostAdd,
  MdSpaceDashboard,
} from "react-icons/md";
import { PiFootprintsBold } from "react-icons/pi";
import { RiAdvertisementLine } from "react-icons/ri";
import { TbSeo } from "react-icons/tb";
import { TfiAnnouncement } from "react-icons/tfi";
import PerfectScrollbar from "react-perfect-scrollbar";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import useWindowSize from "../../hooks/UseWindowSize";
import { validateRoutesAccess } from "../../utils";
import Constants from "../../utils/constants";
const routes = [
  {
    key: Constants.ROLE_ATTRIBUTES.ABOUT,
    validateRole: false,
    route: "/about",
    name: "About",
    icon: <FiLifeBuoy size={20} />,
  },
  {
    key: Constants.ROLE_ATTRIBUTES.ADMIN,
    validateRole: false,
    route: "/admin",
    name: "Admin",
    icon: <MdAdminPanelSettings size={20} />,
  },
  {
    key: Constants.ROLE_ATTRIBUTES.ANNOUNCEMENT,
    validateRole: false,
    route: "/announcement",
    name: "Announcement",
    icon: <TfiAnnouncement size={20} />,
  },
  {
    key: Constants.ROLE_ATTRIBUTES.HEADERADD,
    validateRole: false,
    route: "/headerAdd",
    name: "Advertisement",
    icon: <RiAdvertisementLine size={20} />,
  },
  // {
  //   key: Constants.ROLE_ATTRIBUTES.BLOGS,
  //   validateRole: false,
  //   route: "/blogs",
  //   name: "Blogs",
  //   icon: <FaBloggerB />,
  // },
  {
    key: Constants.ROLE_ATTRIBUTES.CARRER,
    validateRole: false,
    route: "/carrer",
    name: "Career",
    icon: <BsPeopleFill size={20} />,
  },
  // {
  //   key: Constants.ROLE_ATTRIBUTES.CASESTUDIES,
  //   validateRole: false,
  //   route: "/casestudies",
  //   name: "Case Studies",
  //   icon: <AiOutlineFileSearch size={20} />,
  // },
  {
    key: Constants.ROLE_ATTRIBUTES.CATEGORY,
    validateRole: false,
    route: "/category",
    name: "Category",
    icon: <BiSolidCategory size={20} />,
  },
  // {
  //   key: Constants.ROLE_ATTRIBUTES.CONTACT,
  //   validateRole: false,
  //   route: "/contact",
  //   name: "Contact",
  //   icon: <AiFillContacts size={20} />,
  // },
  // {
  //   key: Constants.ROLE_ATTRIBUTES.COURSES,
  //   validateRole: false,
  //   route: "/courses",
  //   name: "Courses",
  //   icon: <TiTabsOutline size={20} />,
  // },
  {
    key: Constants.ROLE_ATTRIBUTES.DASHBOARD,
    validateRole: false,
    route: "/dashboard",
    name: "Dashboard",
    icon: <MdSpaceDashboard size={20} />,
  },
  {
    key: Constants.ROLE_ATTRIBUTES.DYNAMICFORM,
    validateRole: false,
    route: "/dynamicForm",
    name: "Dynamic Form",
    icon: <FaWpforms size={20} />,
  },
  {
    key: Constants.ROLE_ATTRIBUTES.EVENT,
    validateRole: false,
    route: "/event",
    name: "Events",
    icon: <MdEvent size={20} />,
  },
  {
    key: Constants.ROLE_ATTRIBUTES.FOOTER,
    validateRole: false,
    route: "/footer",
    name: "Footer",
    icon: <PiFootprintsBold size={20} />,
  },
  {
    key: Constants.ROLE_ATTRIBUTES.FORM,
    validateRole: false,
    route: "/form",
    name: "Forms",
    icon: <FaWpforms size={20} />,
  },
  {
    key: Constants.ROLE_ATTRIBUTES.HEADER,
    validateRole: false,
    route: "/header",
    name: "Header",
    icon: <BiNews size={20} />,
  },
  {
    key: Constants.ROLE_ATTRIBUTES.HOMEPAGE,
    validateRole: false,
    route: "/homepage",
    name: "Homepage",
    icon: <AiOutlineHome size={20} />,
  },
  {
    key: Constants.ROLE_ATTRIBUTES.INPUTCATEGORY,
    validateRole: false,
    route: "/inputCategory",
    name: "Input Category",
    icon: <MdOutlinePowerInput size={20} />,
  },
  {
    key: Constants.ROLE_ATTRIBUTES.MEDIA,
    validateRole: false,
    route: "/media",
    name: "Media",
    icon: <MdOutlinePermMedia size={20} />,
  },
  // {
  //   key: Constants.ROLE_ATTRIBUTES.NEWSLETTER,
  //   validateRole: false,
  //   route: "/newsletter",
  //   name: "Newsletter",
  //   icon: <BiNews size={20} />,
  // },
  // {
  //   key: Constants.ROLE_ATTRIBUTES.NEWSLETTERSUBSCRIPTION,
  //   validateRole: false,
  //   route: "/newsletter-subscription",
  //   name: "Newsletter Subscription",
  //   icon: <MdOutlineSubscriptions size={20} />,
  // },
  {
    key: Constants.ROLE_ATTRIBUTES.PRESSRELEASE,
    validateRole: false,
    route: "/pressRelease",
    name: "Press Release",
    icon: <FaNewspaper size={20} />,
  },
  {
    key: Constants.ROLE_ATTRIBUTES.POST,
    validateRole: false,
    route: "/post",
    name: "Post",
    icon: <MdPostAdd size={20} />,
  },
  {
    key: Constants.ROLE_ATTRIBUTES.PAGE,
    validateRole: false,
    route: "/page",
    name: "Page",
    icon: <MdInsertPageBreak size={20} />,
  },
  // {
  //   key: Constants.ROLE_ATTRIBUTES.REQUESTPROPOSAL,
  //   validateRole: false,
  //   route: "/requestProposal",
  //   name: "Request Proposal",
  //   icon: <GiArcheryTarget size={20} />,
  // },
  {
    key: Constants.ROLE_ATTRIBUTES.SEODATA,
    validateRole: false,
    route: "/seodata",
    name: "SEO Data",
    icon: <TbSeo size={20} />,
  },
  {
    key: Constants.ROLE_ATTRIBUTES.SERVICE,
    validateRole: false,
    route: "/service",
    name: "Service",
    icon: <FaServicestack size={20} />,
  },
  {
    key: Constants.ROLE_ATTRIBUTES.USER,
    validateRole: false,
    route: "/user",
    name: "Users",
    icon: <FiUsers size={20} />,
  },
  // {
  //   key: Constants.ROLE_ATTRIBUTES.WEBINARS,
  //   validateRole: false,
  //   route: "/webinars",
  //   name: "Webinars",
  //   icon: <SiPolywork />,
  // },
  // {
  //   key: Constants.ROLE_ATTRIBUTES.WHITEPAPERS,
  //   validateRole: false,
  //   route: "/whitepapers",
  //   name: "Whitepapers",
  //   icon: <FaRegNewspaper size={20} />,
  // },
  // {
  //   key: Constants.ROLE_ATTRIBUTES.WORKSHOPS,
  //   validateRole: false,
  //   route: "/workshops",
  //   name: "Workshops",
  //   icon: <GiTeacher size={20} />,
  // },
];

const Sidebar = ({ loggedInUser }) => {
  const [allowedRoutes, setAllowedRoutes] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isMobile = useWindowSize();
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  useEffect(() => {
    const { children } = validateRoutesAccess(
      { children: routes },
      loggedInUser ? loggedInUser.role : undefined
    );
    const allowedMenus = [];
    children.forEach(
      (childRoute) => childRoute.isValidRole && allowedMenus.push(childRoute)
    );
    setAllowedRoutes(allowedMenus);
  }, [loggedInUser]);

  return (
    <aside
      className={`pe-3`}
      style={{
        backgroundColor: `${isSidebarOpen ? "#eeeeee" : "transparent"}`,
        width: `${!isMobile ? "256px" : !isSidebarOpen ? "50px" : "256px"}`,
      }}
    >
      {isMobile && (
        <div className="menu-icon position-absolute" onClick={toggleSidebar}>
          <AiOutlineMenu size={20} />
        </div>
      )}
      <PerfectScrollbar
        component="div"
        className={`pt-4 pb-5 ${isSidebarOpen && "pt-5"}`}
      >
        <Nav
          className={`flex-column d-md-block  pe-4 ${
            isSidebarOpen ? "d-block" : "d-none"
          }`}
        >
          {allowedRoutes.map(({ route, icon, name }, index) => (
            <NavItem
              key={index}
              as={NavLink}
              to={route}
              className="ps-4 d-flex gap-2 align-items-center"
              onClick={closeSidebar}
            >
              {icon}
              {name}
            </NavItem>
          ))}
        </Nav>
      </PerfectScrollbar>
    </aside>
  );
};

const mapStateToProps = (state) => ({
  loggedInUser: state.auth.profileData,
});

export default connect(mapStateToProps, null)(Sidebar);
