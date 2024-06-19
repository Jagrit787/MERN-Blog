import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import PostCard from "../components/PostCard";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getposts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div className="">
      <div className="bg-[url('')] bg-no-repeat bg-cover gap-9">
        <div className="flex flex-col gap-6 p-28 px-3 max-w-full mx-auto ">
          <h1 className="animate-slidein [--slidein-delay:300ms] opacity-0 text-3xl font-bold lg:text-6xl font-mono self-center">
            Welcome to the blog
          </h1>
          <p className="animate-slidein [--slidein-delay:500ms] opacity-0 text-gray-500 text-xl font-sans font-semibold self-center">
            One STOP for all your moods!
          </p>
          <Link
            to="/search"
            className="text-xs sm:text-sm text-teal-500 font-bold hover:underline animate-slidein [--slidein-delay:500ms] opacity-0 self-center"
          >
            View all posts
          </Link>
        </div>
        <div className="animate-slidein [--slidein-delay:700ms] opacity-0 p-3 bg-[url('/images/callToAction.jpg')] bg-cover">
          <CallToAction />
        </div>
      </div>
    

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            <div className="flex flex-wrap gap-6 justify-center">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
