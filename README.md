# Unhandled Error in Express.js Route Handler

This repository demonstrates a common error in Express.js route handlers: missing error handling and insufficient response messages.

The `bug.js` file shows the erroneous code.  It attempts to fetch a user by ID but lacks proper error handling for invalid IDs and doesn't provide a helpful message in 404 responses.

The `bugSolution.js` file demonstrates the corrected code with robust error handling and clear response messages.