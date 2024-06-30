#!/usr/bin/env node

// scripts/github.js

const fs = require('fs');
const path = require('path');

const GITHUB_API_URL = 'https://api.github.com';
const GITHUB_USERNAME = 'brhn-me';

async function fetchRepositories() {
  const response = await fetch(`${GITHUB_API_URL}/users/${GITHUB_USERNAME}/repos`);
  if (!response.ok) {
    throw new Error('Failed to fetch repositories');
  }
  const data = await response.json();
  return data.map(repo => repo.name);
}

async function fetchAndSaveRepoInfo(repo) {
  try {
    const response = await fetch(`${GITHUB_API_URL}/repos/${GITHUB_USERNAME}/${repo}/contents/project.mdx`, {
      headers: { Accept: 'application/vnd.github.v3.raw' },
    });
    if (!response.ok) {
      if (response.status === 404) {
        console.log(`project.mdx not found in repository: ${repo}`);
        return;
      } else {
        throw new Error(`Failed to fetch project.mdx for repository: ${repo}`);
      }
    }
    const data = await response.text();

    const dataDir = path.resolve(process.cwd(), 'app/projects/data');
    fs.mkdirSync(dataDir, { recursive: true });

    const filePath = path.join(dataDir, `${repo}.mdx`);
    fs.writeFileSync(filePath, data, 'utf-8');
    console.log(`project.mdx saved for repository: ${repo}`);
  } catch (error) {
    console.error(`Error fetching project.mdx for repository: ${repo}`, error);
  }
}

async function main() {
  try {
    const repositories = await fetchRepositories();
    for (const repo of repositories) {
      await fetchAndSaveRepoInfo(repo);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
