import HTTP from "./http";

export default class Comments {
    constructor(private httpservice: HTTP, public config: IJiraAPI) {}

    public add(issueId: string, comment: string): Promise<IObject> {
        const url = new URL(`${this.config.url}/rest/api/latest/issue/${issueId}/comment`);
        return this.httpservice.post(url, { body: comment });
    }

    public remove(issueId: string, commentId: number): Promise<IObject> {
        const url = new URL(`${this.config.url}/rest/api/latest/issue/${issueId}/comment/${commentId}`);
        return this.httpservice.delete(url);
    }

    public list(issueId: string): Promise<IObject> {
        const url = new URL(`${this.config.url}/rest/api/latest/issue/${issueId}/comment`);
        return this.httpservice.get(url);
    }

    public get(issueId: string, commentId: number): Promise<IObject> {
        const url = new URL(`${this.config.url}/rest/api/latest/issue/${issueId}/comment/${commentId}`);
        return this.httpservice.get(url);
    }

    public update(issueId: string, commentId: number, comment: string): Promise<IObject> {
        const url = new URL(`${this.config.url}/rest/api/latest/issue/${issueId}/comment/${commentId}`);
        return this.httpservice.put(url, { body: comment });
    }
}