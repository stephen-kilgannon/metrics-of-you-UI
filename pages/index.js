// import { server } from "../config";
import Head from "next/head";
import { Slideshow } from "../components/Slideshow";

export default function Home({ user }) {
  console.log(user)
  return (
    <div><h3>
      tangs
    </h3>
       <Slideshow></Slideshow>
    </div>
  );
}

// export const getStaticProps = async () => {
//   // const response = await fetch(`${server}/users`);
//   // const user = await response.json();
//   // console.log(user)
//   // return {
//   //   props: {
//   //     user,
//   //   },
//   // };
// };
