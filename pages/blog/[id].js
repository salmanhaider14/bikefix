import { useRouter } from "next/router";
import API from "../../helper/request";
import { useSelector } from "react-redux";
import { getCookie } from "cookies-next";

const BlogDisplay = ({ blogData }) => {
  const router = useRouter();
  const token = useSelector((state) => state.profile.token);

  if (!blogData) {
    return <div>Loading...</div>;
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

export async function getServerSideProps(context) {
  const { id } = context.query;
  const token = context.req.cookies.token;

  try {
    const response = await API.get(`blog/${id}`, token);
    const blogData = response.data.blog;
    return {
      props: { blogData },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
}

export default BlogDisplay;
