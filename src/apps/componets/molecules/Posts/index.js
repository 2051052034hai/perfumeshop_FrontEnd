import { Link } from "react-router-dom";

const Post = ({data}) => {
  return (
    <>
      <Link to="/post" style={{ textDecoration: "none", color: "inherit" }}>
        <div className="p-1 styleShadow">
          <div className="p-1">
            <img src={data?.thumnail}></img>
          </div>

          <h3 className="font-bold mx-3 line-clamp-2 h8 hover:text-pink-300">
            {data?.title}
          </h3>

          <p className="text-sm mt-1 mx-3 line-clamp-2 h8 ">
           {data.content}
          </p>
        </div>
      </Link>
    </>
  );
};

export default Post;
