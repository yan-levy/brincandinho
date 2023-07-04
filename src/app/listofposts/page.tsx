import Button from "../components/button";
import Image from "next/image";

const getPostsData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const getUsersData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

const getDogData = async () => {
  // if I store here, I'll always get the same image... boring!
  // That's why I needed to use no-store in cache option *
  const res = await fetch("https://dog.ceo/api/breeds/image/random", {
    // cache: "no-store",
    next: {
      revalidate: 3, // can generate a new image after 3 sec
    },
  });
  return res.json();
};

async function ListOfPosts() {
  const [posts, users, dog] = await Promise.all([
    getPostsData(),
    getUsersData(),
    getDogData(),
  ]);

  return (
    <div>
      <Button />
      <Image src={dog.message} alt="dog" width={300} height={300} />
      {posts.map((post: any) => {
        return <p key={post.id}>title: {post.title}</p>;
      })}

      <div>
        {users.map((user: any) => {
          return <p key={users.id}>user: {user.name}</p>;
        })}
      </div>
    </div>
  );
}

export default ListOfPosts;
