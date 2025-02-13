import {
Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import { Activity, ChevronDown, Flashlight, Lock, Scale, Server } from "lucide-react";

import "./Nav.css"

export const TagUser = ({fill = "currentColor", size, height, width, ...props}) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 18.86h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87H6c-1.66 0-3-1.33-3-2.97V4.98c0-1.64 1.34-2.97 3-2.97h12c1.66 0 3 1.33 3 2.97v10.91c0 1.63-1.34 2.97-3 2.97Z"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
      <path
        d="M12 10a2.33 2.33 0 1 0 0-4.66A2.33 2.33 0 0 0 12 10ZM16 15.66c0-1.8-1.79-3.26-4-3.26s-4 1.46-4 3.26"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};

export default function Nav() {
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
    flash: <Flashlight className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };

  return (
    <Navbar className="navbar-custom" isBordered  isBlurred={false}>
      {/* Logo at the Start */}
      <NavbarContent >
        <NavbarBrand>
          <a href="/">
          <p className="font-bold text-xl text-inherit md:ml-2">RegiSphere</p>
          </a>
        </NavbarBrand>
      </NavbarContent>

      {/* Dropdown Content at the Center */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem>
          <Link href="/" color="foreground">
            Home
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                // radius="sm"
                variant="light"
              >
               <span className="text-base"> Services</span>
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              href="/studentList"
              key="autoscaling"
              description="Admin can view and modify available students"
              startContent={icons.scale}
            >
              <Link  color="foreground">
                Student List
              </Link>
            </DropdownItem>

            <DropdownItem
              href="/courseType"
              key="usage_metrics"
              description="the creation, updating, and deletion of course types "
              startContent={icons.activity}
            >
              <Link href="/courseType" color="foreground">
                Course Type
              </Link>
            </DropdownItem>            
            <DropdownItem
              href="/courses"
              key="usage_metrics"
              description="Suggests a streamlined process for academic course"
              startContent={icons.activity}
            >
              <Link color="foreground">
                Courses List
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <NavbarItem>
          <Link href="/h1" color="foreground">
            About
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Login and Sign Up at the End */}
      <NavbarContent justify="end" className="mr-4">
        <div className="block sm:hidden mr-0">
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                  endContent={icons.chevron}
                  variant="light"
                >
                  <span className="text-base"> Services</span>
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="ACME features"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                href="/studentList"
                key="autoscaling"
                description="Admin can view and modify available students"
                startContent={icons.scale}
              >
                <Link color="foreground">Student List</Link>
              </DropdownItem>

              <DropdownItem
                href="/courseType"
                key="usage_metrics"
                description="the creation, updating, and deletion of course types"
                startContent={icons.activity}
              >
                <Link color="foreground">Course Type</Link>
              </DropdownItem>
              
              <DropdownItem
                href="/courses"
                key="usage_metrics"
                description="Suggests a streamlined process for academic course"
                startContent={icons.activity}
              >
                <Link color="foreground">Courses List</Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <NavbarItem>
          <Link href="/adminLogin" color="foreground">
            <Button color="primary" variant="flat">
                Login 
            </Button>
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden sm:block md:hidden lg:block">
          <Link href="#" color="foreground">
            <Button color="danger" variant="flat">
                Logout
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
