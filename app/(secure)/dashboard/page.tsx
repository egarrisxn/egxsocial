import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <div className="flex flex-col mx-auto">
      <section className="mb-16">
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </section>
    </div>
  );
}
