# Cypress 101 Assignemnt

### Prerequisites
Shared this private Repository to "LambdaTest-Certifications"

### Run your Test
1. Open up the Gitpod environment from Github Repository (Added the .gitpod.yml file to the Repo.)

   This will install all the npm dependencies to run the test. It will also configure the environment to run on the Lambda test cloud.

2. Set Lamabdatest Credentials from the Gitpod VScode terminal. You can get these from lambdatest automation dashboard.

    Add the username and access key in the lambdatest-config file. 

3. Run tests
### Run Tests in parallel on different browsers.
Use the command below from the root of the project to run the tests. Since, the lambdatest is configured, running the below command will run the tests on the lambdatest cloud on different OS and different browsers.
```
lambdatest-cypress run
```

### Assignment Tasks
1. Test Scenario 1 - Completed
    - Was able to move the slider to the right position but the range value seems to be not updating and will fail the test.
2. Test Scenario 2 - Completed
    - Accessibility verification (Test Scenario 2 - Accessibility) is added as a separate test.


1. Test Scenario 1 (Windows 11 - Firefox) - Test Id - AXYDK-MGVYK-XCBFS-PMKCI
2. Test Scenario 1 (Windows 10 - Chrome) - Test Id - 7V83D-VAA61-KMOCQ-WKNFF
3. Test Scenario 2 (Windows 11 - Firefox) - Test Id - 9LVCE-ABWFF-SSI78-JIZI8
4. Test Scenario 2 (Windows 10 - Chrome) - Test Id - LDNJM-FDNXX-I3PGQ-K4OYX