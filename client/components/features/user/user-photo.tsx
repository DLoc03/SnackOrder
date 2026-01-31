import React from "react";
import userPhoto from "@/public/user.webp";
import Image from "next/image";

function UserPhoto() {
  return (
    <Image
      src={userPhoto}
      alt="user"
      className={"h-10 w-10 object-cover rounded-full border"}
    />
  );
}

export default UserPhoto;
