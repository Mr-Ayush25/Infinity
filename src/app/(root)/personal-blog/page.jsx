import UserBlog from "@/components/blogs/UserBlogs";
import React, { Suspense } from "react";

const PersonalBlog = () => {
  return (
    <section className="min-h-screen w-full text-center">
      <h2 className="pt-14 text-xl md:text-3xl font-semibold">
        Your Blog, Your Rules
      </h2>
      <Suspense fallback={<p>Loading feed...</p>}>
        <UserBlog />
      </Suspense>
    </section>
  );
};

export default PersonalBlog;
