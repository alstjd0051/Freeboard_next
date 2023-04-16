import React from "react";

type Props = {
  promise: Promise<Post[]>;
};

const UserPosts = async ({ promise }: Props) => {
  const posts = await promise;
  const content = posts.map((post) => {
    return (
      <>
        <br />
        <article className="flex flex-col gap-3" key={post.id}>
          <h2 className="font-bold">{post.title}</h2>
          <p>{post.body}</p>
          <br />
        </article>
      </>
    );
  });
  return <>{content}</>;
};

export default UserPosts;
