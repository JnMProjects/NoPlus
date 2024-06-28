import { graphql } from "@octokit/graphql";

const graphqlWithAuth = graphql.defaults({
    headers: {
        authorization: `token ${process.env.NEXT_PUBLIC_GH_PFP_TOKEN}`,
    },
});

async function parseGitAvatar(username: string) {
    const query = `
        query ($username: String!) {
            user(login: $username) {
                avatarUrl
            }
        }
    `;

    const response = await graphqlWithAuth(query, { username }) as any;

    return response.user.avatarUrl;
}

export async function GET(req:Request) {
    const headers = await req.headers
    const username = headers.get('username');    
    console.log("GET GIT PROFILE")


    if (!username) {
        return new Response(JSON.stringify({
            status: 300,
            message: "No Input Given"
        }))
    } else {
        try {
            const res = await parseGitAvatar(username)
            return new Response(JSON.stringify({
                status: 200,
                message: "Success",
                data: res
            }))
        } catch (error) {
            console.error(error)
            return new Response(JSON.stringify({
                status: 500,
                message: "Internal Server Error",
                error: error
            }))

        }
    }
}