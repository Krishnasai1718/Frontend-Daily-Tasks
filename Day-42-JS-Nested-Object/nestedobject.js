let institute = {

    instituteInfo: {
        instituteName: "Innomatics Research Labs",
        address: {
            cityName: "Hyderabad",
            stateName: "Telangana"
        },
        program: {
            programName: "Full Stack Experts Academy",
            programDuration: "6 Months",
            techStack: {
                ui: {
                    technology1: "HTML",
                    technology2: "CSS",
                    technology3: "JavaScript"
                },
                server: {
                    programmingLanguage: "Python",
                    webFramework: "Django"
                },
                data: {
                    relationalDB: "MySQL",
                    nonRelationalDB: "MongoDB"
                }
            }
        }
    },

    mentor: {
        trainerName: "Vineeth Sir",
        designation: "Full Stack Trainer",
        teaching: {
            frontendTopics: {
                subject1: "HTML",
                subject2: "CSS",
                subject3: "JavaScript"
            },
            backendTopics: {
                subject1: "Python",
                subject2: "Django"
            }
        }
    },

    learner: {
        studentName: "Krishna",
        enrolledCourse: "Full Stack Development",
        technicalSkills: {
            frontendSkills: {
                skillOne: "HTML",
                skillTwo: "CSS",
                skillThree: "JavaScript"
            },
            backendSkills: {
                skillOne: "Python",
                skillTwo: "Django"
            }
        },
        projects: {
            projectOne: {
                projectName: "Image classification using snowflake",
                projectType: "Ml pipeline"
            },
            projectTwo: {
                projectName: "Movie cataloge",
                projectType: "web and Fast API"
            }
        }
    }

};

// Add a new project
institute.learner.projects.projectThree = {
    projectName: "Portfolio",
    projectType: "Web Development"
};
console.log(institute.learner.projects);

// Add a new frontend skill
institute.learner.technicalSkills.frontendSkills.skillFour = "Bootstrap";
console.log(institute.learner.technicalSkills.frontendSkills);
// Add a new backend topic
institute.mentor.teaching.backendTopics.subject3 = "REST API";
console.log(institute.mentor.teaching.backendTopics);

// Read institute name
console.log(
    institute.instituteInfo.instituteName
);

// Read student name
console.log(
    institute.learner.studentName
);


// Read trainer name
console.log(
    institute.mentor.trainerName
);

// Read project name
console.log(
    institute.learner.projects.projectOne.projectName
);

// Read frontend skill
console.log(
    institute.learner.technicalSkills.frontendSkills.skillOne
);

// Read database
console.log(
    institute.instituteInfo.program.techStack.data.relationalDB
);

// Update student course
institute.learner.enrolledCourse = "Python Full Stack Development";
console.log(
    institute.learner.enrolledCourse
);

// Update project name
institute.learner.projects.projectOne.projectName = "GreenCart Online";
console.log(
    institute.learner.projects.projectOne.projectName
);

// Update trainer designation
institute.mentor.designation = "Senior Full Stack Trainer";
console.log(
    institute.mentor.designation
);

// Update course duration
institute.instituteInfo.program.programDuration = "8 Months";
console.log(
    institute.instituteInfo.program.programDuration
);


// Delete a project
delete institute.learner.projects.projectThree;
console.log(institute.learner.projects);

// Delete a skill
delete institute.learner.technicalSkills.frontendSkills.skillFour;
console.log(institute.learner.technicalSkills.frontendSkills);

// Delete a backend topic
delete institute.mentor.teaching.backendTopics.subject3;
console.log(institute.mentor.teaching.backendTopics);