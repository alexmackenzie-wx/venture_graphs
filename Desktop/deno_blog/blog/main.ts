import blog, { ga, redirects } from "https://deno.land/x/blog@0.4.0/blog.tsx";

blog({
  title: "Alex Mackenzie",
  description: "Hello. I'm Alex, a developer & partner at Tapestry VC",
  avatar: "blog/alex copy.jpg",
  avatarClass: "rounded-full",
  author: "Alex Mackenzie",
  background: "#f9f9f9",

  // middlewares: [

    // If you want to set up Google Analytics, paste your GA key here.
    // ga("UA-XXXXXXXX-X"),

    // If you want to provide some redirections, you can specify them here,
    // pathname specified in a key will redirect to pathname in the value.
    // redirects({
    //  "/hello_world.html": "/hello_world",
    // }),

  // ]
});
