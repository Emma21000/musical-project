import { AiOutlineClose } from "react-icons/ai";
import { MdAccountCircle, MdOutlineMenuOpen } from "react-icons/md";

export const navbar = {
    logo: "C. Moore",
    list: [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "Events",
            path: "#events"
        },
        {
            icon: MdAccountCircle(),
            path: "/"
        },
        {
            title: "Log In",
            path: "/"
        }
    ],
    icon: MdOutlineMenuOpen(),
    close: AiOutlineClose()

}