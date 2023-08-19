import { useRouter } from "next/router";
import API from "../../helper/request";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const BlogDisplay = () => {
  const router = useRouter();
  const { id } = router.query;
  const profile = useSelector((state) => state.profile);
  const token = profile.token;
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await API.get(`blog/${id}`, profile.token);
        setBlogData(response.data.blog);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlogData();
  }, [id]);

  if (!blogData) {
    return <div>Loading...</div>;
  }
  if (!token) {
    router.push("/login");
  }

  const goBackToBlog = () => {
    router.push("/blog");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center bg-main">
      <div className="container mx-auto p-4">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <img
            src={"https://website.bikefixup.com/" + blogData.image}
            alt={blogData.title}
            className="mb-4 max-w-full h-1/2 rounded-lg"
          />
          <h2 className="text-3xl font-semibold mb-4">{blogData.title}</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {blogData.description}
          </p>
          <button
            onClick={goBackToBlog}
            className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDisplay;
