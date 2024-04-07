import * as React from "react"
import { cn } from "../twm"
import Image from "next/image"
import { parseGitAvatar } from "../apiaccess"

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
        if (!placeholder) {
            parseGitAvatar(username).then((url) => {
                setAvatarUrl(url);
            });
        }
    })

    // Props here
    switch (placeholder) {
        case true:
            return (
                // Disabled only there because next img needs a src but a placeholder doesnt have one
                // eslint-disable-next-line @next/next/no-img-element
                <img width={size || 100} height={size || 100} className={cn(" rounded-full bg-l-bg/20 dark:bg-d-bg/20 softblur border-4 border-l-prim dark:border-d-prim", className)} alt="" />
            )
        case false:
            return (
                links ? 
                <a href={profileLink}>
                    <Image width={size || 100} height={size || 100} src={avatarUrl || "octocat"} alt={"Avatar of " + username} className={cn(" rounded-full border-4 border-l-prim dark:border-d-prim", className)} />
                </a>
                :
                <Image width={size || 100} height={size || 100} src={avatarUrl || "octocat"} alt={"Avatar of " + username} className={cn(" rounded-full border-4 border-l-prim dark:border-d-prim", className)} />
            )
    }        

}

interface AvatarGroupProps extends React.HTMLAttributes<HTMLImageElement> {
    size?: number;
    limit?: number;
    users: string[];
    holderstyle?: string;
}

const AvatarGroup: React.FC<AvatarGroupProps> = ({ users, limit = users.length, size = 100, className, holderstyle, ...props }) => {
    const visibleUsers = users.slice(0, limit);
    const hiddenUsers = users.length - limit
    return (
        <div className="">
            {visibleUsers.map((user, index) => (
                <div key={index} style={{ 
                    marginLeft: index > 0 ? size * index / 2 : 0, 
                    marginTop: index > 0 ? -size : 0,
                }}>
                    <Avatar username={user} size={size} />
                </div>
            ))}
            {hiddenUsers > 0 && (
                <div
                    className={cn("rounded-full border-2 border-l-prim dark:border-d-prim p-1", className)}
                    style={{ 
                        zIndex: 0,
                        marginLeft: size * (visibleUsers.length - 1),
                        transform: `translateY(-${size}px)`, // Fix for Problem 1
                        fontSize: size/3/2,
                        width: size/3,
                    }}
                >
                    +{hiddenUsers}
                </div>
            )}
        </div>
    )
}

export { Avatar, AvatarGroup }

function setProfileLink(html_url: any) {
    throw new Error("Function not implemented.");
}
