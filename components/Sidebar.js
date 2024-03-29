import React from "react";
import {
  HomeIcon,
  HashtagIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  BellIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { singOutUser } from "@/redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import LoginModal from "./modals/LoginModal";
import { closeLoginModal, closeSignupModal } from "@/redux/modalSlice";

export const Sidebar = () => {
  const dispatch = useDispatch();

  const user = useSelector(state => state.user)

  async function handleSignout() {
    await signOut(auth);

    dispatch(singOutUser());

    dispatch(closeSignupModal())
    dispatch(closeLoginModal())
  }
  return (
    <div className="h-full hidden sm:flex flex-col fixed xl:ml-24">
      <nav className="h-full relative xl:space-y-0">
        <div className="py-3 xl:p-3 flex justify-center items-center xl:justify-start">
          <Image src={"/assets/twitter-logo.png"} width={34} height={34} />
        </div>
        <SidebarLink Icon={HomeIcon} text="Home" />
        <SidebarLink Icon={HashtagIcon} text="Explore" />
        <SidebarLink Icon={BellIcon} text="Notification" />
        <SidebarLink Icon={InboxIcon} text="Messages" />
        <SidebarLink Icon={BookmarkIcon} text="Bookmarks" />
        <SidebarLink Icon={ClipboardListIcon} text="Twitter Blue" />
        <SidebarLink Icon={UserIcon} text="Profile" />
        <SidebarLink Icon={DotsCircleHorizontalIcon} text="More" />
        <button className="hidden xl:inline bg-[#1d9bf0] h-[46px] w-[200px] rounded-full text-lg font-bold mt-2">
          Tweet
        </button>

        <div
          className="hover:bg-white hover:bg-opacity-10 rounded-full cursor-pointer
        absolute flex justify-center items-center p-3 space-x-3 bottom-0"
        onClick={handleSignout}
        >
          <img
            className="w-10 h-10 rounded-full object-cover"
            src={user.photoUrl || "/assets/pfp.png"}
            alt=""
          />
          <div className="hidden xl:inline">
            <h1 className="font-bold whitespace-nowrap">{user.name}</h1>
            <h1 className="text-gray-500">@{user.username}</h1>
          </div>
          <div>
            <DotsHorizontalIcon className="h-5 text-gray-400 hidden xl:inline" />
          </div>
        </div>
      </nav>
    </div>
  );
};

function SidebarLink({ text, Icon }) {
  return (
    <li className="hoverAnimation flex mb-3 xl:justify-start justify-center items-center text-xl space-x-3">
      <Icon className="h-7" />
      <span className="hidden xl:inline">{text}</span>
    </li>
  );
}
