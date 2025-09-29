import { signInWithGithubAction, signInWithGoogleAction } from "@/action";

export default function SignInPage() {
    return (
        <div className="space-y-4">
            <form action={signInWithGoogleAction}>
                <button 
                    type="submit" 
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                    Sign in with Google
                </button>
            </form>

            <form action={signInWithGithubAction}>
                <button 
                    type="submit" 
                    className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
                >
                    Sign in with GitHub
                </button>
            </form>
        </div>
    );
}
