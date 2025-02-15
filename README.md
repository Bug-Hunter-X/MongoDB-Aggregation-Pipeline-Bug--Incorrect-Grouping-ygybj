# MongoDB Aggregation Pipeline Bug: Incorrect Grouping

This repository demonstrates a common error in MongoDB aggregation pipelines: incorrect use of the `$group` stage, leading to inaccurate results.  The original code attempts to group documents and sum a field, but due to an error in the grouping criteria, it produces unexpected results. The solution provides the correct pipeline stage to achieve accurate aggregation.

## Bug
The bug lies in the `$group` stage.  The provided code does not accurately group data leading to a wrong sum calculation.  The solution will show how to fix it.