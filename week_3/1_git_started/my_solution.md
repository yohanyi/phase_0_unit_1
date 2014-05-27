## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  


#### add
You must add a file to commit, or use to begin tracking of a file you want to commit in the future. This step is done prior to committing the file!

#### branch
<!-- Your defnition here -->
Shows which branch you are currently in. You can also create a new branch to work off of by using the "git branch [name]".

#### checkout
<!-- Your defnition here -->
This is a navigational command that lets you move around repositories. You can hope around branches/repositories by typing "git checkout [name]" for example "git checkout master" will take you to the master branch. 

#### clone
<!-- Your defnition here -->
This creates a copy of your repository. (I will add more after research)

#### commit
<!-- Your defnition here -->
The commit command allows you to "save" your file as a snapshot, and not replacing the old file with the new one. This allows you to set checkpoints in your file rather than replacing them whole. 

#### fetch
<!-- Your defnition here -->
Fetches changes from a repository, but does not auto-merge like with pull. (Read more)

#### log
<!-- Your defnition here -->
Git log allows you to see all the commited changes ever made.

#### merge
<!-- Your defnition here -->
Git merge allows you to merge the changes from a fetched repository into your own local repo.

#### pull
<!-- Your defnition here -->
Pull will in essence fetch and merge automatically. (read more)

#### push
<!-- Your defnition here -->
Pushes changes you made with your "git commit" in your local repo into the remote repo. 

#### reset
<!-- Your defnition here -->
Removes the specified file from the indexing area or "stagin area". This command does not make any changes to the actual file, only where the file is in the commiting action.

#### rm
<!-- Your defnition here -->
Removes files from being tracked.

#### status

Lets you know the status of the files being tracked by git are. Shows which files have been modified.

## Release 4: Git Workflow

- Push files to a remote repository
	- If no remote repository set up: "git remote add [origin]" and make sure the repo is initialized locally "git init".
	- Add files to ready for commit by "git add [filename]"
	- Commit the changes using [git commit -m 'commit message']
	- Push files into remote repo using "git push"

- Fetch changes
	- If no remote repository set up: "git remote add [origin]" and make sure the repo is initialized locally "git init".
	- "git fetch [name]" will fetch changes into your local repository under chosen "name".
	- Make sure your on your master branch then merge the changes by "git merge "name"/master"
	- commit changes using "git commit -m 'commit message' " and push changes using "git push origin master"

- Commit locally
	- If git not initialized yet, go to any directory you want to track and "git init"
	- "git add [name]" will add the file to be ready to commit
	- git commit -m "commit message" 

## Release 5: Errors you encountered 
1. I didn't "add" the file before commiting.
2. You absolutely have to "git add [filename]", before you git commit.
3. All files must be added before you can commit them. Without adding the files, git status won't show the changes that you would like to commit.

## Release 6: Reflection
This was one of the easier challenges during my DBC phase 0. It wasn't easy because the material was easy or very simple, it was easy because I had been using git since my prep. phase which gave me a much better understanding of the material, compared to previous challenges. I was using git commands directly from the commandline for a couple weeks now. Before reading and studying this challenge, I was able to do most actions from the command line but could not explain what they do, and what is actually happening. I have a much better understanding of what is actually going on during the process. Although, I feel very confident in the learning competencies, I do plan on making a cheatsheet to reference just incase I get lost or forget. The tedious part of this challenge, was learning all the different mechanisms of git and Github. 

