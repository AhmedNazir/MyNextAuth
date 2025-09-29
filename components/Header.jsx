import { auth, signIn, signOut } from "@/auth";
import Link from "next/link";
import SignInPage from "./SignInPage";
import { signOutAction } from "@/action";

async function Header() {
    const session = await auth();
    console.log(session);

    return (
        <>
            {session ? (
                <div>
                    <img src={session.user.image} alt={session.user.name} />
                    <p>{session.user.name}</p>
                    <form action={signOutAction}>
                        <button type="submit">Sign Out</button>
                    </form>
                </div>
            ) : (
                <SignInPage />
            )}
        </>
    );
}
export default Header;
