// import { createClient } from "@/utils/supabase/server";
// import AuthButtonServer from "./auth-button-server";
// import { redirect } from "next/navigation";
// import NewTweet from "@/components/new-tweet";
// import Likes from "@/components/likes";
// import Tweets from "@/components/tweets";

export default function SocialPage() {
  // export default async function SocialPage() {
  //   const supabase = await createClient();

  //   const {
  //     data: { user },
  //   } = await supabase.auth.getUser();

  //   if (!user) {
  //     redirect("/login");
  //   }

  //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   const { error } = await supabase
  //     .from("tweets")
  //     .select("*, author: profiles(*), likes(user_id)")
  //     .order("created_at", { ascending: false });

  //   const tweets =
  //     data?.map((tweet) => ({
  //       ...tweet,
  //       author: Array.isArray(tweet.author) ? tweet.author[0] : tweet.author,
  //       user_has_liked_tweet: !!tweet.likes.find(
  //         (like) => like.user_id === user.user.id
  //       ),
  //       likes: tweet.likes.length,
  //     })) ?? [];

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="flex justify-between px-4 py-6 border border-gray-800 border-t-0">
        <h1 className="text-xl font-bold">Home</h1>
        {/* <AuthButtonServer /> */}XXX
      </div>
      {/* <NewTweet user={user.user} />
      <Tweets tweets={tweets} /> */}
    </div>
  );
}
