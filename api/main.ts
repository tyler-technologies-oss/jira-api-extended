import HTTP from './http';
import Issues from './issues';
import Accounts from './accounts';
import Releases from './releases';
import Projects from './projects';
import Comments from './comments';

export default class JiraAPI {
    public httpclient: HTTP;

    public issues: Issues;
    public accounts: Accounts;
    public releases: Releases;
    public projects: Projects;
    public comments: Comments;

    constructor(private config: IJiraAPI) {
        this.httpclient = new HTTP(this.config);
        this.issues = new Issues(this.httpclient, this.config);
        this.accounts = new Accounts(this.httpclient, this.config);
        this.releases = new Releases(this.httpclient, this.config);
        this.projects = new Projects(this.httpclient, this.config);
        this.comments = new Comments(this.httpclient, this.config);
    }
}