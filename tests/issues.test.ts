import { expect, test } from "bun:test";
import JiraAPI from "../api/main";

const jira = new JiraAPI({
  token: process.env.JIRA_TOKEN as string,
  url: process.env.JIRA_URL as string,
});

const issueId = process.env.JIRA_TEST_ISSUE as string;
  if (!issueId || issueId === "") {
    throw new Error("JIRA_TEST_ISSUE is not set");
}

const issue = await jira.issues.get(issueId);
test("should successfully fetch a Jira issue by ID", async () => {
    expect(issue?.error).toBeUndefined();
});

test("should successfully fetch the assignee of a Jira issue", async () => {
    expect(issue?.error).toBeUndefined();
    const assignee = await jira.issues.assignee(issueId) as IObject;
    expect(assignee?.error).toBeUndefined();
});

test("should successfully fetch the summary of a Jira issue", async () => {
    expect(issue?.error).toBeUndefined();
    const summary = await jira.issues.summary(issueId) as IObject;
    expect(summary?.error).toBeUndefined();
});

test("should successfully fetch the description of a Jira issue", async () => {
    expect(issue?.error).toBeUndefined();
    const description = await jira.issues.description(issueId) as IObject;
    expect(description?.error).toBeUndefined();
});

test("should successfully fetch the status of a Jira issue", async () => {
    expect(issue?.error).toBeUndefined();
    const status = await jira.issues.status(issueId) as IObject;
    expect(status?.error).toBeUndefined();
});

test("should successfully fetch the reporter of a Jira issue", async () => {
    expect(issue?.error).toBeUndefined();
    const reporter = await jira.issues.reporter(issueId) as IObject;
    expect(reporter?.error).toBeUndefined();
});

test("should successfully fetch the creator of a Jira issue", async () => {
    expect(issue?.error).toBeUndefined();
    const creator = await jira.issues.creator(issueId) as IObject;
    expect(creator?.error).toBeUndefined();
});

test("should successfully fetch the created date of a Jira issue", async () => {
    expect(issue?.error).toBeUndefined();
    const created = await jira.issues.created(issueId) as IObject;
    expect(created?.error).toBeUndefined();
});

test("should successfully fetch the updated date of a Jira issue", async () => {
    expect(issue?.error).toBeUndefined();
    const updated = await jira.issues.updated(issueId) as IObject;
    expect(updated?.error).toBeUndefined();
});

test("should successfully fetch the last viewed date of a Jira issue", async () => {
    expect(issue?.error).toBeUndefined();
    const lastViewed = await jira.issues.lastViewed(issueId) as IObject;
    expect(lastViewed?.error).toBeUndefined();
});

test("should successfully fetch the watchers of a Jira issue", async () => {
    expect(issue?.error).toBeUndefined();
    const watchers = await jira.issues.watchers(issueId) as IObject;
    expect(watchers?.error).toBeUndefined();
});

test("should successfully fetch the priority of a Jira issue", async () => {
    expect(issue?.error).toBeUndefined();
    const priority = await jira.issues.priority(issueId) as IObject;
    expect(priority?.error).toBeUndefined();
});

test("should successfully fetch the fix versions of a Jira issue", async () => {
    expect(issue?.error).toBeUndefined();
    const fixVersions = await jira.issues.fixVersions(issueId) as IObject;
    expect(fixVersions?.error).toBeUndefined();
});

test("should successfully fetch the votes of a Jira issue", async () => {
    expect(issue?.error).toBeUndefined();
    const votes = await jira.issues.votes(issueId) as IObject;
    expect(votes?.error).toBeUndefined();
});

test("should successfully fetch the labels of a Jira issue", async () => {
    expect(issue?.error).toBeUndefined();
    const labels = await jira.issues.labels(issueId) as IObject;
    expect(labels?.error).toBeUndefined();
});

test("should successfully fetch the tags of a Jira issue", async () => {
    expect(issue?.error).toBeUndefined();
    const tags = await jira.issues.tags(issueId) as IObject;
    expect(tags?.error).toBeUndefined();
});

test("should successfully fetch the comments of a Jira issue", async () => {
    expect(issue?.error).toBeUndefined();
    const comments = await jira.issues.comments(issueId) as IObject;
    expect(comments?.error).toBeUndefined();
});

test("should successfully fetch the project of a Jira issue", async () => {
    expect(issue?.error).toBeUndefined();
    const project = await jira.issues.project(issueId) as IObject;
    expect(project?.error).toBeUndefined();
});

test("should successfully create a new release, update the fixVersions field for a Jira issue, and delete the release", async () => {
  expect(issue?.error).toBeUndefined();
  const release = await jira.releases.create({
    name: "Unit Test Release",
    description: "Created by a unit test",
    startDate: new Date().toISOString(),
    projectId: parseInt(process.env.JIRA_TEST_PROJECT_ID as string),
    released: false,
    archived: false,
  });
  expect(release?.error).toBeUndefined();
  const updatedIssue = await jira.issues.setRelease(issueId, release.name) as IObject;
  expect(updatedIssue?.error).toBeUndefined();
  const deletedRelease = await jira.releases.delete(release.id);
  expect(deletedRelease?.error).toBeUndefined();
});