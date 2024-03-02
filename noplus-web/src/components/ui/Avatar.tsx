import * as React from "react"
import { cn } from "../twm"
import axios from "axios"

interface AvatarProps extends React.HTMLAttributes<HTMLImageElement> {
    size?: number;
    username: string;
    placeholder?: boolean;
    links?: boolean;
}


const Avatar: React.FC<AvatarProps> = ({ username, placeholder = false, size, className, links, ...props }) => {
    const [avatarUrl, setAvatarUrl] = React.useState<string | undefined>(undefined);
    const [profileLink, setProfileLink] = React.useState<string | undefined>(undefined);
    React.useEffect(() => {
        const fetchGHa = async () => {
            try {
                const response = await axios.get(`https://api.github.com/users/${username}?Authentication=${process.env.GH_PFP_TOKEN})`);
                setAvatarUrl(response.data.avatar_url);
                setProfileLink(response.data.html_url);
            } catch (error) {
                console.error('Error fetching ' + username + ' from Github // ' + error);
            }
        };
        if (!placeholder) {
            fetchGHa();
        }
    })

    // Props here
    switch (placeholder) {
        case true:
            return (
                <img width={size || 100} height={size || 100} className={cn(" rounded-full bg-l-bg dark:bg-d-bg border-4 border-l-prim dark:border-d-prim", className)} alt="" />
            )
        case false:
            return (
                links ? 
                <a href={profileLink}>
                    <img width={size || 100} height={size || 100} src={avatarUrl || "octocat"} alt={"Avatar of " + username} className={cn(" rounded-full border-4 border-l-prim dark:border-d-prim", className)} />
                </a>
                :
                <img width={size || 100} height={size || 100} src={avatarUrl || "octocat"} alt={"Avatar of " + username} className={cn(" rounded-full border-4 border-l-prim dark:border-d-prim", className)} />
            )
    }        

}

interface AvatarGroupProps extends React.HTMLAttributes<HTMLImageElement> {
    size?: number;
    limit?: number;
    users: string[];
}

const AvatarGroup: React.FC<AvatarGroupProps> = ({ users, limit = users.length, size = 100, className, ...props }) => {
    const visibleUsers = users.slice(0, limit);
    const hiddenUsers = users.length - limit
    return (
        <div>
            {visibleUsers.map((user, index) => (
                <div key={user} style={{ marginLeft: index > 0 ? -size / 2 : 0,  }}>
                    <Avatar username={user} size={size} />
                </div>
            ))}
            {hiddenUsers > 0 && (
            <span 
                className={cn("rounded-full border-2 border-l-prim dark:border-d-prim", className)}
              >
                +{hiddenUsers}
              </span>
            )}
        </div>
    )
}

export { Avatar, AvatarGroup }

function setProfileLink(html_url: any) {
    throw new Error("Function not implemented.");
}
