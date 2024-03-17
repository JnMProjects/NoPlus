import { Octokit } from "octokit";
import { graphql } from "@octokit/graphql";

const graphqlWithAuth = graphql.defaults({
    headers: {
        authorization: `token ${process.env.GH_PFP_TOKEN}`,
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

export { parseGitAvatar };