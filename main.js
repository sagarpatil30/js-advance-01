const developer = {
  role: "ui-developer",
  companyName: "development-test",
  techStack: ["html", "css", "js", "react", "node"],
  workingYears: ["2020", "2021", "2023"],
  projects: ["ai-Project", "cms", "lms", "renewalPortal"],

  hireDeveloper: function(projectexp,workexp){
    return [this.projects[projectexp],this.workingYears[workexp]]
  }
};



// ------------------Array------------------
// let [a,c]=developer.techStack
// console.log(a,c)
// // after destructing the original array doesnt get change 
// console.log(developer.techStack);
// [a,c]=[c,a]
// console.log(a,c);

// console.log(developer.hireDeveloper(2,0));


