# https://medium.com/@divyanshugarg36/private-submodules-with-vercel-e0f29d3db282
# thx a lot!

# Define variables for new URL components
username=$GIT_USERNAME
token=$GIT_ACCESS_TOKEN

# Construct the new URL with authentication
new_url="https://${username}:${token}@github.com/phanerka/link-stash.git"

# Temporarily change the internal field separator (IFS) to handle spaces in paths
IFS=$'\n'

# Read the .gitmodules file line by line
while IFS= read -r line; do
    if [[ $line =~ ^[[:space:]]*url[[:space:]]*= ]]; then
        # Replace the URL line with the new URL
        echo " url = ${new_url}"
    else
        echo "$line"
    fi
done < .gitmodules > .gitmodules.tmp  # Write output to a temporary file

# Replace the original .gitmodules file with the updated one
mv .gitmodules.tmp .gitmodules

# Sync is important since this will let git know to follow the new updated url
git submodule sync
git submodule update --init --recursive
