import { auth } from "@/auth";
import SignIn from "@/components/sign-in";
import { SignOut } from "@/components/sign-out";

export default async function Home() {
  const session = await auth();

  return <main className="">{session ? <SignOut /> : <SignIn />}</main>;
}
