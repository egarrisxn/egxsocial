import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import AccountForm from "@/components/account-form";

export default async function AccountPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <div className="flex flex-col gap-8">
      <section className="mb-16">
        <AccountForm user={user} />
      </section>
    </div>
  );
}
