/* eslint-disable @typescript-eslint/no-require-imports */
const { execSync } = require('child_process');

const commitMessage = process.argv[2];

if (!commitMessage) {
	console.error('Commit message is required.');
	process.exit(1);
}

try {
	execSync('git add .', { stdio: 'inherit' });
	execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });
	execSync('git push', { stdio: 'inherit' });
} catch (error) {
	console.error('Error executing git commands', error);
	process.exit(1);
}
