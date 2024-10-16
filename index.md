---
layout: default
title: Developer Conventions
nav_order: 1
description: "Best practices and conventions for developers"
---

# Developer Conventions

Welcome to the developer conventions guide for **Medipeli**. This document provides guidelines for code style, commit message conventions, and best practices for developers working on our projects.

---

## Table of Contents
1. [Commit Message Conventions](#commit-message-conventions)
2. [Coding Style Guidelines](#coding-style-guidelines)
3. [Code Reviews and Pull Requests](#code-reviews-and-pull-requests)
4. [Branching Strategy](#branching-strategy)
5. [Versioning](#versioning)

---

## Commit Message Conventions

> Please check [How to Write a Git Commit Message](https://cbea.ms/git-commit/) by [cbeams](https://cbea.ms/author/cbeams/) first. But keep in mind we will build our approach on top it, do not use is as how it is.



Following a consistent commit message style is important for maintaining a **clean history**. Use the following template for all commit messages:

```bash
<type>(<scope>): <subject>

# Example:
feat(login): add OAuth 2.0 login flow
```

#### Commit Types:
- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation-only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, etc.)
- **refactor**: Code change that neither fixes a bug nor adds a feature
- **test**: Adding or modifying tests
- **chore**: Maintenance and other tasks

> Please check this website for better understanding:
> https://www.conventionalcommits.org/en/v1.0.0/

## Coding Style Guidelines
We follow a consistent coding style to ensure readability and maintainability. 


## Code Reviews and Pull Requests
Please read **How to Do Code Reviews Like a Human** [1](https://mtlynch.io/human-code-reviews-1/) and [2](https://mtlynch.io/human-code-reviews-2/) from [Michael Lynch](https://mtlynch.io/) before you start coding anything. It does not matter you are a **Reviewer** or **Author**. But if you are an **Author**, I highly recommend you to read [How to Make Your Code Reviewer Fall in Love with You](https://mtlynch.io/code-review-love/) first and then read **How to Do Code Reviews Like a Human** series.

### Best Practices for *Authors* in a [Detailed Way](https://mtlynch.io/code-review-love/)

#### 1. **Review Your Own Code First**
####  2. **Write a Clear and Detailed PR Description**

A strong PR description should explain:

-   **What** the change does.
-   **Why** it’s being made.

Even though you might have a specific reviewer in mind, others or future contributors may need to understand the context. Make sure the description provides enough background for any team member or reader in the future to understand your intentions.

#### 3. **Automate Simple Checks**

Before submitting a PR, ensure that automated checks like linters, formatters, and tests have been run. Use **continuous integration (CI)** or pre-commit hooks to catch these issues automatically.

#### 4. **Let the Code Answer Questions**

If your reviewer expresses confusion, use the feedback as an opportunity to improve the code, not just to explain it in the review. 

#### 5. **Narrowly Scope Changes**

Keep your PR focused on [one task](https://blog.codinghorror.com/curlys-law-do-one-thing/). Avoid scope creep, where you start addressing unrelated issues in the same PR.

#### 6. **Separate Functional and Non-Functional Changes**

If you’re making both functional (logic) and non-functional (formatting or refactoring) changes, separate them into different PRs. 

#### 7. **Break Up Large PRs**

Large PRs are harder to review and increase the risk of mistakes being missed. If your PR grows beyond **400 lines of production code**, look for ways to split it into smaller, more digestible PRs.

#### 8. **Respond Graciously to Feedback**

When you receive feedback, don’t take it personally. Treat it as a valuable learning opportunity and respond with gratitude. 

#### 9. **Be Patient When the Reviewer Is Wrong**

#### 10. **Communicate Clearly During the Review**

#### 11. **Solicit Missing Information Artfully**.

#### 12. **Award All Ties to Your Reviewer**

#### 13. **Minimize Lag Between Review Rounds**


## Branching Strategy
Our branching strategy follows the `GitFlow methodology`. The key branches are:

- **main**: Stable production-ready code.
- **develop**: Active development, which will eventually be merged into main.
- **Feature branches**: Created for each new feature, named feature/branch-name.

#### Branch Naming:
Use descriptive names for branches.

> Example: `feature/add-login-page` .

## Versioning
We use `Semantic Versioning` to track changes in our projects.

#### Versioning Format:
Naming: *MAJOR.MINOR.PATCH*
- **MAJOR**: Breaking changes.
- **MINOR**: New features that are backward-compatible.
- **PATCH**: Bug fixes.
