import { expect, test } from "bun:test";
import JiraAPI from "../api/main";

const jira = new JiraAPI({
  token: process.env.JIRA_TOKEN as string,
  url: process.env.JIRA_URL as string,
});

const projectId = parseInt(process.env.JIRA_TEST_PROJECT_ID as string);
if (!projectId) {
    throw new Error("JIRA_TEST_PROJECT_ID is not set");
}

test("should successfully fetch a Jira project by ID", async () => {
    const project = await jira.projects.list(projectId);
    expect(project?.error).toBeUndefined();
});
