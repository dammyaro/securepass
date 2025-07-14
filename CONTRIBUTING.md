Contributing to SecurePass
Thank you for your interest in contributing to SecurePass! We welcome contributions of all kinds, including code, documentation, bug reports, and feature suggestions. This guide outlines how to get involved.
Getting Started

Fork the Repository: Click "Fork" on the SecurePass GitHub page.
Clone Your Fork:git clone https://github.com/<your-username>/securepass.git
cd securepass


Install Dependencies:npm install


Create a Branch:git checkout -b feat/your-feature-name



Making Changes

Code Contributions:
Place Astro components in src/components/.
Add pages in src/pages/ (.astro or .mdx files).
Update styles in src/styles/.
Add tests in src/tests/ (if applicable).


Documentation Contributions:
Add or edit files in src/content/docs/ using Markdown or MDX.
Follow the structure in astro.config.mjs for sidebar organization.


Commit Guidelines:
Write clear, concise commit messages (e.g., Add password strength indicator).
Keep changes focused; one feature or fix per pull request.


Testing:
Test locally with npm run dev.
Ensure no build errors with npm run build.
Verify changes in Chrome, Firefox, Safari, and Edge.



Submitting a Pull Request

Push your branch:git push origin feat/your-feature-name


Open a pull request on GitHub with a detailed description.
Address reviewer feedback promptly.
Ensure CI checks pass (GitHub Actions will run automatically).

Reporting Issues

Use GitHub Issues to report bugs or suggest features.
Check for existing issues before creating a new one.
Provide steps to reproduce bugs or clear feature descriptions.

Community Guidelines

Follow our CODE_OF_CONDUCT.md.
Be respectful and constructive in Discussions.
Respond to feedback within 48 hours when possible.

Documentation

Documentation lives in src/content/docs/.
Use Astro Starlight’s features for clear, navigable docs.
Preview docs locally at http://localhost:4321/docs.

Questions?
Join our Discussions or reach out to maintainers via GitHub Issues.
Thank you for helping make SecurePass better! 🌟