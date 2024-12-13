# Function to check for remote changes
has_remote_changes() {
  GIT_SSH_COMMAND="ssh -i ~/.ssh/git" git fetch origin &> /dev/null
  local remote_commit=$(git rev-parse origin/$(git branch --show-current))
  local local_commit=$(git rev-parse HEAD)
  if [[ "$remote_commit" != "$local_commit" ]]; then
    return 0  # Has remote changes (exit code 0)
  else
    return 1  # No remote changes (exit code 1)
  fi
}

# Check if there are any changes
if has_remote_changes; then
  echo "Changes detected, updating..."

  # Fetch updates from the remote repository
  GIT_SSH_COMMAND="ssh -i ~/.ssh/git" git fetch --all
  GIT_SSH_COMMAND="ssh -i ~/.ssh/git" git reset --hard FETCH_HEAD

  yarn install
  yarn build
  cp -rf dist/* ~/w/Genesis/packages/photosgenie/backend/static
else
  echo "No changes detected."
fi

exit 0