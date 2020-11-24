const fs = require('fs');
const Ajv = require('ajv');
const schema = require('./schema.json');

const ajv = new Ajv();
const validate = ajv.compile(schema);

const checkLearners = () => {
  fs.readdir('./learners', 'utf8', (error, files) => {
    if (error) {
      throw error;
    }

    files.forEach(file => {
      const data = require(`./learners/${file}`);
      const valid = validate(data);

      if (!valid) {
        console.log(validate.errors);
      } else {
        console.log('Format is correct');
      }
    });
  });
};

checkLearners();
