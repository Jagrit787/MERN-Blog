import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want to create your own posts?</h2>
        <p className="text-gray-500 my-2">
          Enjoy all admin features of the blog by emailing me!
        </p>
          <Button
          as={Link}
          to="/about"
            gradientDuoTone="purpleToPink"
            className="rounded-tl-xl rounded-bl-none"
          >
            Email me
          </Button>
      </div>
      <div className="p-7 flex-1 bg-[url('/images/callToAction.jpg')]">
        <img src="/images/admin_view.png" />
      </div>
    </div>
  );
}
