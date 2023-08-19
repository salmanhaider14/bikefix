import React, { useEffect, useState } from "react";
import Image from "next/image";
import MainLayout from "../layouts/MainLayout";
import Link from "next/link";
import API from "../helper/request";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Blog = () => {
  const [blogs, setBlogs] = useState();
  const router = useRouter();
  const profile = useSelector((state) => state.profile);
  const fetchBlogs = () => {
    API.get("blogs", profile.token).then((res) => {
      setBlogs(res.data.blogs);
    });
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  console.log(blogs);
  const token = profile.token;
  return (
    <MainLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
        <div className="flex flex-col justify-center">
          <h1 className="lg:text-6xl text-3xl font-semibold text-beta-900">
            BikeFixup - Blog
          </h1>
          <p className="lg:pr-36 pr-0 mt-3 text-black">
            consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem
            ipsum dolor sit amet
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Image
            className="w-full max-w-md"
            src={`/image/blog-hero.webp`}
            height={283}
            width={398}
            priority
            alt="Bikefixup - Blog"
          />
        </div>
      </div>

      {/* Blog card */}
      <div className="mt-6">
        <h3 className="font-semibold text-3xl text-black">Latest Posts</h3>
        <div className="grid gap-10 lg:grid-cols-2 grid-cols-1 my-10 text-black">
          {blogs?.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-gradient-to-b from-white/20 to-white/0 bg-white/20 rounded-3xl shadow-md border overflow-hidden"
              >
                <Image
                  className="w-full h-2/3"
                  src={`https://website.bikefixup.com/${item.image}`}
                  height={350}
                  width={391}
                  alt={`${item.title} - BikefixUp`}
                />
                <div className="px-10 py-5">
                  <div className="mb-5 mt-4 text-2xl font-semibold ">
                    {item.title}
                  </div>
                  <p className="text-justify line-clamp-6">
                    {item.description}
                  </p>
                  <div className="mt-4">
                    <Link
                      href={token ? `/blog/${item.id}` : "/login"} // Assuming this is the URL structure for viewing a single blog post
                      className="text-blue-500 hover:underline"
                    >
                      View Blog
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
};

export default Blog;
