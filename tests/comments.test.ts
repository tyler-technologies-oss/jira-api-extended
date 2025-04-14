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

let commentId: number;

test("should successfully fetch the comments for a Jira issue", async () => {
    expect(issue?.error).toBeUndefined();
    const comments = await jira.comments.list(issueId);
    expect(comments?.error).toBeUndefined();
});

test("should successfully add a comment to a Jira issue", async () => {
    expect(issue?.error).toBeUndefined();
    const comment = await jira.comments.add(issueId, "This is a test comment");
    expect(comment.error).toBeUndefined();
    commentId = comment.id;
});

test("should successfully update a comment for a Jira issue", async () => {
    expect(issue?.error).toBeUndefined();
    const updatedComment = await jira.comments.update(issueId, commentId, "This is an updated comment");
    expect(updatedComment.error).toBeUndefined();
});

test("should successfully delete a comment for a Jira issue", async () => {
    expect(issue?.error).toBeUndefined();
    const deletedComment = await jira.comments.remove(issueId, commentId);
    expect(deletedComment?.error).toBeUndefined();
});