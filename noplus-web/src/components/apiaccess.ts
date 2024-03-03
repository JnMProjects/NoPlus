import { Octokit } from "octokit";

const GHAPI = new Octokit({
    auth: process.env.GH_PFP_TOKEN,
    userAgent: "noplus-web",
});

async function parseGitAvatar(username: string) {
    const response = await GHAPI.request('GET /users/{username}', {
        username: username
    });
    return response.data.avatar_url;
};

export { parseGitAvatar };