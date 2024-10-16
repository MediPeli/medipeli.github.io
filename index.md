
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
Please read **How to Do Code Reviews Like a Human** [1](https://mtlynch.io/human-code-reviews-1/) and [2](https://mtlynch.io/human-code-reviews-2/) from [Michael Lynch](https://mtlynch.io/) before you start coding anything. It does not matter you are a **Reviewer** or **Author**.

####  Code Review Process:
- Create a pull request with a **clear description of changes**.
- Ensure that **all unit tests pass**.
- At least one other developer must review and **approve the pull request** before merging.

#### Best Practices for Pull Requests:
- Keep pull requests **small** and focused.
- **Provide context** for changes in the PR description.
- Reference **related issues** by using #issue-number.

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
