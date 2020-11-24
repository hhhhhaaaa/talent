import {
  FETCH_LEARNERS, SET_SKILLS, DONE_LOADING, SEARCH_BY_SKILL, SEARCH_BY_NAME,
} from './types.jsx';

/**
 * fetchLearners
 * Fetches the group of Learners from the DB.
 *
 * @param {any} allLearners - The collection of learners.
 * @returns {any} loading -  Returns the learners, the payload of learners, and the command type.
 */
function fetchLearners(allLearners) {
  return {
    loading: true,
    payload: allLearners,
    type: FETCH_LEARNERS,
  };
}

/**
 * Fetches the group of Skills from the DB.
 *
 * @param {any} allSkills - The collection of skills.
 * @returns {any} Returns the learners.
 */
function setSkills(allSkills) {
  return {
    skills: allSkills,
    type: SET_SKILLS,
  };
}

/**
 * Tells the system the skills and learners are done loading.
 *
 * @returns {any} Returns finished loading.
 */
function doneLoading() {
  return {
    loading: false,
    type: DONE_LOADING,
  };
}

/**
 * searchBySkill
 *
 * @returns {any} Returns the learners.
 */
function searchBySkill() {
  return {
    payload: true,
    type: SEARCH_BY_SKILL,
  };
}

/**
 * searchByName
 *
 * @returns {any} Returns the learners.
 */
function searchByName() {
  return {
    payload: true,
    type: SEARCH_BY_NAME,
  };
}

export {
  fetchLearners, setSkills, doneLoading, searchBySkill, searchByName,
};
