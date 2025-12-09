import HTTP from "./http";

export default class Issues {
    constructor(private httpservice: HTTP, public config: IJiraAPI) {}

    public get(issue: string): Promise<IObject> {
        const url = new URL(`${this.config.url}/rest/api/latest/issue/${issue}`);
        return this.httpservice.get(url);
    }

    public async list(releaseId: number): Promise<IObject> {
        // Get all issues for a specific release
        const url = new URL(`${this.config.url}/rest/api/latest/search`);
        url.searchParams.append('jql', `fixVersion=${releaseId}`);
        // return only the issue keys as an array of strings
        url.searchParams.append('fields', 'key');
        url.searchParams.append('maxResults', '1000'); // Adjust as needed
        const result = this.httpservice.get(url);
        return result.then((data: IObject) => {
            if (data?.issues && Array.isArray(data.issues)) {
                return data.issues.map((issue: IObject) => issue.key);
            }
            return [];
        });
    }

    public async field(issue: string, field: string): Promise<IObject | boolean> {
        const url = new URL(`${this.config.url}/rest/api/latest/issue/${issue}`);

        url.searchParams.append('fields', field);

        /* eslint-disable  @typescript-eslint/no-explicit-any */
        const data = await this.httpservice.get(url) as any;
        if (!data?.fields) return false;
        if (!Object.prototype.hasOwnProperty.call(data.fields, field)) return false;
        return data?.fields[field] || false;
    }

    public reviewers(issue: string): Promise<IObject | boolean> {
        return this.field(issue, 'customfield_18716');
    }

    public updateField(issue: string, field: string, value: IObject): Promise<IObject | boolean> {
        const url = new URL(`${this.config.url}/rest/api/latest/issue/${issue}`);
        return this.httpservice.put(url, {
            fields: {
                [field]: value
            }
        });
    }

    public setRelease(issue: string, version: string | null): Promise<IObject | boolean> {
        const url = new URL(`${this.config.url}/rest/api/latest/issue/${issue}`);
        return this.httpservice.put(url, {
            update: {
                fixVersions: [
                    {
                        set: [
                            {
                                name: version
                            }
                        ]
                    }
                ]
            }
        });
    }

    // Set multiple versions
    public setReleases(issue: string, versions: string[]): Promise<IObject | boolean> {
        const url = new URL(`${this.config.url}/rest/api/latest/issue/${issue}`);
        return this.httpservice.put(url, {
            update: {
                fixVersions: [
                    {
                        set: versions.map((version) => {
                            return {
                                name: version
                            };
                        })
                    }
                ]
            }
        });
    }

    public assignee(issue: string): Promise<IObject | boolean> {
        return this.field(issue, 'assignee');
    }

    public summary(issue: string): Promise<string | boolean> {
        return this.field(issue, 'summary') as Promise<string | boolean>;
    }

    public description(issue: string): Promise<string | boolean> {
        return this.field(issue, 'description') as Promise<string | boolean>;
    }

    public status(issue: string): Promise<IObject | boolean> {
        return this.field(issue, 'status');
    }

    public reporter(issue: string): Promise<IObject | boolean> {
        return this.field(issue, 'reporter');
    }

    public creator(issue: string): Promise<IObject | boolean> {
        return this.field(issue, 'creator');
    }

    public created(issue: string): Promise<string | boolean> {
        return this.field(issue, 'created') as Promise<string | boolean>;
    }

    public updated(issue: string): Promise<string | boolean> {
        return this.field(issue, 'updated') as Promise<string | boolean>;
    }

    public lastViewed(issue: string): Promise<string | boolean> {
        return this.field(issue, 'lastViewed') as Promise<string | boolean>;
    }

    public watchers(issue: string): Promise<IObject | boolean> {
        return this.field(issue, 'watches');
    }

    public priority(issue: string): Promise<IObject | boolean> {
        return this.field(issue, 'priority');
    }

    public fixVersions(issue: string): Promise<IObject | boolean> {
        return this.field(issue, 'fixVersions');
    }

    public votes(issue: string): Promise<IObject | boolean> {
        return this.field(issue, 'votes');
    }

    public labels(issue: string): Promise<IObject | boolean> {
        return this.field(issue, 'labels');
    }

    public tags(issue: string): Promise<IObject | boolean> {
        return this.field(issue, 'tags');
    }

    public comments(issue: string): Promise<IObject | boolean> {
        return this.field(issue, 'comment');
    }

    public project(issue: string): Promise<IObject | boolean> {
        return this.field(issue, 'project');
    }

    public getRelease(releaseId: number): Promise<IObject | boolean> {
        const url = new URL(`${this.config.url}/rest/api/latest/version/${releaseId}`);
        return this.httpservice.get(url);
    }
}