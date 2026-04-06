import React from "react";
import { cx } from "../utils/cx.js";

export interface PostProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export interface PostHrProps extends React.HTMLAttributes<HTMLHRElement> {}

export function PostHr({ className = "", ...props }: PostHrProps) {
  return <hr className={cx("rpl-post-hr", className)} {...props} />;
}

export interface PostNamespace {
  Hr: typeof PostHr;
}

export function Post({ className = "", children, ...props }: PostProps) {
  return (
    <article className={cx("rpl-post", className)} {...props}>
      {children}
    </article>
  );
}

const PostWithNamespace = Object.assign(Post, {
  Hr: PostHr,
}) as typeof Post & PostNamespace;

export default PostWithNamespace;
