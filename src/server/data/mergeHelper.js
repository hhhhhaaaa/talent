const fs = require('fs');

const allLearners = [];

const buildLearners = () => {
  fs.readdir('./src/server/data/learners', 'utf8', (error, files) => {
    if (error) {
      throw error;
    }

    let count = 0;
    const increaseCount = 1;

    files.forEach((file) => {
      const data = require(`./learners/${file}`);

      data.id = count;
      count += increaseCount;
      data.projects.forEach((project) => {
        project.id = count;
        count += increaseCount;
      });
      data.skills.forEach((skill) => {
        skill.id = count;
        count += increaseCount;
      });
      data.experience.forEach((exp) => {
        exp.id = count;
        count += increaseCount;
      });
      allLearners.push(data);
    });

    return allLearners;
  });
};

buildLearners();

module.exports = allLearners;
