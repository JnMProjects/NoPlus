import { toast } from "sonner";
import { fbauth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function WelcomeUser() {
    const [user, loading, error] = useAuthState(fbauth);
    const helloToast = typeof toast
    if (!loading) {
        if (user) {
            toast.success("Welcome back" + user?.displayName, {
                id: helloToast
            })
        } else {
            toast.info("Hello there", { id: helloToast })
        }
    } else {
        toast.loading("Loading your Data", {
            id: helloToast
        })
    }
}