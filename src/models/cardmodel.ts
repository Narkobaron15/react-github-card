export default interface IGitHubUser {
    get login(): string;
    get id(): number;
    get node_id(): string;
    get avatar_url(): string;
    get gravatar_id(): string;
    get url(): string;
    get html_url(): string;
    get followers_url(): string;
    get following_url(): string;
    get gists_url(): string;
    get starred_url(): string;
    get subscriptions_url(): string;
    get organizations_url(): string;
    get repos_url(): string;
    get events_url(): string;
    get received_events_url(): string;
    get type(): string;
    get site_admin(): boolean;
    get name(): string | null;
    get company(): string | null;
    get blog(): string;
    get location(): string | null;
    get email(): string | null;
    get hireable(): boolean | null;
    get bio(): string | null;
    get twitter_username(): string | null;
    get public_repos(): number;
    get public_gists(): number;
    get followers(): number;
    get following(): number;
    get created_at(): Date;
    get updated_at(): Date;
}

export const emptyUser: IGitHubUser = {
    login: '',
    id: 0,
    node_id: '',
    avatar_url: '',
    gravatar_id: '',
    url: '',
    html_url: '',
    followers_url: '',
    following_url: '',
    gists_url: '',
    starred_url: '',
    subscriptions_url: '',
    organizations_url: '',
    repos_url: '',
    events_url: '',
    received_events_url: '',
    type: '',
    site_admin: false,
    name: null,
    company: null,
    blog: '',
    location: null,
    email: null,
    hireable: null,
    bio: null,
    twitter_username: null,
    public_repos: 0,
    public_gists: 0,
    followers: 0,
    following: 0,
    created_at: new Date(),
    updated_at: new Date()
};
